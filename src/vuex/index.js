import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

//import * as crypto from "@harmony-js/crypto"

import hmy from "../js/hmy.js"

const queryString = require("query-string");

Vue.use(Vuex);

const API_URL = "https://hmny-t.co";
const networkId = "mainnet";

function remapValidator (
  validator,
  convertAddress = false
) {
  convertAddress;
  return {
    ...validator,
    userName: validator.name,

    operator_address: validator["address"],

    rate: validator.rate,
    max_rate: validator["max-rate"],
    max_change_rate: validator["max-change-rate"],
    max_total_delegation: validator["max-total-delegation"],
    min_self_delegation: String(validator["min-self-delegation"]),
    website: validator.website,
    // consensus_pubkey: validator.slot_pub_keys[0],
    details: validator.details,
    moniker: validator.name,

    average_stake: validator.average_stake,
    reminder: validator.reminder,

    creation_height: validator["creation-height"],

    uptime_percentage: validator.uptime_percentage,
    voting_power: validator.voting_power,
    total_effective_stake: "0",

    active: validator.active,
    self_stake: validator.self_stake,
    total_stake: validator.total_stake,
    address: validator.address,
    epoch: validator["last-epoch-in-committee"],

    status: 2,
    jailed: false,
    tombstoned: false,
    tokens: "5706991464569",
    id: "16a9a8ae-1568-42a5-b4a6-59735c655dca",
    delegator_shares: "5706991464569.000000000000000000"
  }
}

function fetchValidatorByAddress(address) {
  return axios
    .get(`${API_URL}/networks/${networkId}/validators/${address}`)
    .then(rez => remapValidator(rez.data, false))
}

function fetchDelegationsByAddress(address) {
  return axios
    .get(`${API_URL}/networks/${networkId}/delegations/${address}`)
    .then(rez => {
      rez.data.map((v) => {
        v.validator_info = remapValidator(v.validator_info, false);
      })
      return rez.data;
    })
}

function fetchValidators(){
  return axios
   .get(`${API_URL}/networks/${networkId}/validators?`)
   .then(rez => {
     const validators = rez.data.validators.map((v) =>
       remapValidator(v, false)
     )
     return { ...rez.data, validators }
   })
}

function fetchValidatorsWithParams(page = 0, size = 50, sortProperty="apr", active=true, search="") {
  const params = {
    active,
    page,
    search,
    size,
    sortOrder: "desc",
    sortProperty,
    //sortProperty: "total_stake",
  };
  return axios
    .get(
      `${API_URL}/networks/${networkId}/validators_with_page?${queryString.stringify(
        params
      )}`
    )
    .then(rez => {
      const validators = rez.data.validators.map((v) =>
        remapValidator(v, false)
      )

      return { ...rez.data, validators }
    })
}
fetchValidatorsWithParams;

async function updateBalance(account) {
  if (account.address != undefined) {
    let balance = await hmy.hmy.blockchain.getBalance(account);
    account.balance = new hmy.hmy.utils.Unit(balance.result).asWei();
  }
  return account;
}

function filter(validators, cfg) {
  if(cfg.active)
    validators = validators.filter(v=>v.active)
  if(cfg.search)
    validators = validators.filter(v=>{
      const combination = v.address + v.name + v.identity;
      return combination.search(cfg.search)
    })
  if(cfg.sortProperty == 'apr')
    validators.sort((a,b)=>b.apr*(1-b.rate) - a.apr*(1-a.rate))
  else
    validators.sort((a,b)=>b.total_stake - a.total_stake)
  return validators;
}

let needUpdate = true;
const pageSize = 32;
export default new Vuex.Store({
  state: {
    account: {},
    delegations: [],
    totalRewards: 0,
    total: 0,
    totalActive: 0,
    totalFound: 0,
    validators: [],
    validatorsDetial:{},
    loading: false,
    loaded: false,
    txRecord: [],
    reqConfig: {
      active: true,
      search: "",
      sortProperty: "apr"
    },
    pages: 1,
  },
  mutations: {
    setPage(state, _page){
      state.pages = _page;
    },
    setAccount(state, account) {
      state.account = account;
    },
    clearValidators(state) {
      state.validators = [];
    },
    setValidatorDetail(state, validator) {
      state.validatorsDetial[validator.address] = validator;
    },
    appendValidators(state, validators) {
      state.validators = state.validators.concat(validators);
    },
    setTotal(state, total) {
      state.total = total;
    },
    setTotalActive(state, total) {
      state.totalActive = total;
    },
    setTotalFound(state, total) {
      state.totalFound = total;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setLoaded(state, loaded) {
      state.loading = false;
      state.loaded = loaded;
    },
    setDelegations(state, delegations) {
      let sum = 0;
      delegations.map(x=>sum += x.reward);
      state.totalRewards = sum;
      state.delegations = delegations;
    },
    appendTx(state, tx) {
      state.txRecord.push(tx);
    },
    changeConfig(state, {active, search, sortProperty}) {
      let oldCfg = state.reqConfig;
      let cfg = {
        active: active == undefined ? oldCfg.active : active,
        search: search == undefined ? oldCfg.search : search,
        sortProperty: sortProperty == undefined ? oldCfg.sortProperty : sortProperty
      }
      state.reqConfig = cfg;

      state.pages = 1;
    }
  },
  actions: {
    async getValidator(context, address){
      if(context.state.validatorsDetial[address]) return context.state.validatorsDetial[address];
      const validator = await fetchValidatorByAddress(address);
      context.commit("setValidatorDetail", validator);
      return validator;
    },
    async getValidators(context) {
      if (context.state.validators.length){
        const pages = context.state.pages;
        let remain = context.state.validators.length - pages * pageSize;
        if(remain > 0) context.commit("setPage", pages+1);
        if(remain < 0) remain = 0;
        return remain >= pageSize ? pageSize : remain;
      }
      let commit = context.commit;
      //let cfg =  context.state.reqConfig;
      //let data = await fetchValidatorsWithParams(page, 20, cfg.sortProperty, cfg.active, cfg.search);
      const data =  await fetchValidators();
      commit("setLoaded", true);
      if (data.validators.length) {
        commit("appendValidators", data.validators);
        commit("setTotal", data.total);
        commit("setTotalActive", data.total_active);
        commit("setTotalFound", data.totalFound);
      }
      return data.validators.length;
    },
    async updateDelegations(context) {
      if(!needUpdate) return
      needUpdate = false;
      const data = await fetchDelegationsByAddress(context.state.account.address);
      context.commit("setDelegations", data);
      data.forEach(validator => context.commit("setValidatorDetail", validator.validator_info));
    },
    async updateWithAccount(context, account){
      await updateBalance(account);
      context.commit("setAccount", account);
      needUpdate = true;
      context.dispatch("updateDelegations");
    },
    async login(context, fakeaddr) {
      if (fakeaddr != undefined){ // debug logic
        await context.dispatch("updateWithAccount", {address:fakeaddr});
        return
      }
      if (context.state.account.address == undefined) {
        let account = await hmy.login();
        await context.dispatch("updateWithAccount", account);
      }
    },
    async logout(context) {
      if (context.state.account.address != undefined) {
        await hmy.logout();
        context.commit("setAccount", {});
      }
    },
    async txCommit(context, { tx, fun }) {
      await hmy.txSignSend(tx);
      context.commit("appendTx", tx);
      tx.confirm(tx.id, 5).then(
        () => {
          fun();
          context.dispatch("updateWithAccount", context.state.account);
        }
      ).catch(fun)
    }
  },
  getters: {
    validators: state => {
      return filter(state.validators, state.reqConfig).slice(0, state.pages*pageSize)
    }
  }
})

