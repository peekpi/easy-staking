
const { Harmony } = require('@harmony-js/core');
const { ChainID, ChainType } = require('@harmony-js/utils');
const stakingAPIs = require("./stakingAPIs.json");

const shardID = 0;
//const main = "https://api.s0.dry.hmny.io" // ostn
const main = "https://api.s0.t.hmny.io" // main
const hmy = new Harmony(
  // rpc url
  main,
  {
    // chainType set to Harmony
    chainType: ChainType.Harmony,
    // chainType set to HmyLocal
    chainId: ChainID.HmyMainnet,
    shardID,
  }
);

const GAS_PRICE = (new hmy.utils.Unit(1)).asGwei().toHex(); // 1Gwei

stakingAPIs.map(mod=>{
  let modname = mod.name.split(" ")[0];
  let methodsObj = {};
  mod.methods.map(method=>{
    methodsObj[method.slice(4)] = function(){
      return hmy.messenger.send(
        method,
        Array.from(arguments)
      ).then(result=>result.getRaw);
    }
  });
  hmy.blockchain[modname] = methodsObj;
});

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function walletInit() {
  let retry = 0;
  while(!window.harmony && retry++ < 2) await sleep(1000);
  if(!window.harmony) throw({message:"请安装麦子钱包"});
}

async function login() {
  await walletInit();
  return window.harmony.getAccount();
  //return {address:"one16xh2u9r4677egx4x3s0u966ave90l37hh7wq72"}
}

async function logout() {
  await walletInit();
  return window.harmony.forgetIdentity();
}

function delegate(from, to, amount) {
  let tx = hmy.stakings.delegate({
    delegatorAddress: from,
    validatorAddress: to,
    amount: new hmy.utils.Unit(amount).asWei().toHex()
  }).setTxParams({
    gasPrice: GAS_PRICE,
    gasLimit: "0x0927c0",
    chainId: hmy.chainId
  }).build();
  tx.setFromAddress(from);
  window.dtx = tx;
  return tx;
}

function withdrawReward(from) {
  let tx = hmy.stakings.collectRewards({
    delegatorAddress: from
  }).setTxParams({
    gasPrice: GAS_PRICE,
    gasLimit: "0x0927c0",
    chainId: hmy.chainId
  }).build();
  tx.setFromAddress(from);
  window.rtx = tx;
  return tx;
}

function undelegate(from, to, amount) {
  let tx = hmy.stakings.undelegate({
    delegatorAddress: from,
    validatorAddress: to,
    amount: new hmy.utils.Unit(amount).asWei().toHex()
  }).setTxParams({
    gasPrice: GAS_PRICE,
    gasLimit: "0x0927c0",
    chainId: hmy.chainId
  }).build();
  tx.setFromAddress(from);
  window.udtx = tx;
  return tx;
}

function transfer(from, to, amount) { 
  let tx = hmy.transactions.newTx({
    from,
    //  token send to
    to,
    // amount to send
    value: new hmy.utils.Unit(amount).asWei().toHex(),
    // gas limit, you can use string
    gasLimit: '210000',
    // send token from shardID
    shardID: 0,
    // send token to toShardID
    toShardID: 0,
    // gas Price, you can use Unit class, and use Gwei, then remember to use toWei(), which will be transformed to BN
    gasPrice: GAS_PRICE,
  });
  window.tx = tx;
  return tx;
}

async function txSignSend(tx) {
  await window.harmony.signTransaction(tx);
  let ret = await tx.sendTransaction();
  if(ret[1] != tx.id) throw {message:ret[1]};
  return tx;
}

export default {
  hmy,
  login,
  logout,
  transfer,
  delegate,
  undelegate,
  withdrawReward,
  txSignSend
}

