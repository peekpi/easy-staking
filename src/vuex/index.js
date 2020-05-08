import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios"

import * as crypto from "@harmony-js/crypto"

const queryString = require("query-string");

Vue.use(Vuex);


//const API_URL="https://staking-explorer2-268108.appspot.com";
const API_URL="http://staking.hmny.io";
const networkId="harmony-open-staking";

function remapValidator  (
    validator,
    convertAddress = false
  ) {
    return {
      ...validator,
      userName: validator.name,
  
      operator_address: convertAddress
        ? crypto.getAddress(validator["address"]).bech32
        : validator["address"],
  
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
  

function fetchValidatorsWithParams(page=0,size=50) {
    const params={
        active:true,
        page,
        search:"",
        size,
        sortOrder:"desc",
        sortProperty:"total_stake",
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
      .catch(() => {
        return { validators: [], totalActive: 0, total: 0 }
      })
  }

let page = 0;
export default new Vuex.Store({
    state: {
        total:0,
        totalActive:0,
        totalFound:0,
        validators: [],
        loading:false,
        loaded:false
    },
    mutations: {
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
        }
    },
    actions:{
        async getValidators(context){
            let commit = context.commit;
            let data = await fetchValidatorsWithParams(page, 20);
            commit("setLoaded", true);
            if(data.validators.length){
                page++;
                commit("appendValidators", data.validators);
                commit("setTotal", data.total);
                commit("setTotalActive", data.total_active);
                commit("setTotalFound", data.totalFound);
            }
        }
    }
})
