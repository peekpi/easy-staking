
const { Harmony } = require('@harmony-js/core');
const { ChainID, ChainType } = require('@harmony-js/utils');
const stakingAPIs = require("./stakingAPIs.json");

const shardID = 0;
const ostn = "https://api.s0.os.hmny.io"
//const ostn = "https://api.s0.t.hmny.io" // main
const hmy = new Harmony(
  // rpc url
  ostn,
  {
    // chainType set to Harmony
    chainType: ChainType.Harmony,
    // chainType set to HmyLocal
    chainId: ChainID.HmyPangaea,
    shardID,
  }
);

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

window.hmy = hmy;

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function walletInit() {
  let retry = 0;
  while(!window.harmony && retry++ < 2) await sleep(1000);
  if(!window.harmony) alert("no wallet detected!");
}

walletInit();

function login() {
  return window.harmony.getAccount();
}

function logout() {
  return window.harmony.forgetIdentity();
}

function delegate(from, to, amount) {
  let tx = hmy.stakings.delegate({
    delegatorAddress: from,
    validatorAddress: to,
    amount: new hmy.utils.Unit(amount).asWei().toHex()
  }).setTxParams({
    gasPrice: "0x100000000000",
    gasLimit: "0x0927c0"
  }).build();
  tx.setFromAddress(from);
  return tx;
}

function undelegate(from, to, amount) {
  let tx = hmy.stakings.undelegate({
    delegatorAddress: from,
    validatorAddress: to,
    amount: new hmy.utils.Unit(amount).asWei().toHex()
  }).setTxParams({
    gasPrice: "0x100000000000",
    gasLimit: "0x0927c0"
  }).build();
  tx.setFromAddress(from);
  return tx;
}

function transfer(from, to, amount) {
  return hmy.transactions.newTx({
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
    gasPrice: "100000000000",
  });
}

export default {
  hmy,
  login,
  logout,
  transfer,
  delegate,
  undelegate
}

