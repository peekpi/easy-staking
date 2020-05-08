<template>
    <div>
        <strong>Default Size: {{ success }}</strong>
        <br><br>
        <List border>
            <ListItem v-for="(node,index) in NodeList" v-bind:key="node.validator.address">{{ index }} : {{ node.validator.name }} 票数: {{ node['total-delegation'] }}</ListItem>
        </List>
    </div>
</template>
<script>
    let nodes = []
    let success = false;
    const D = console.log;
    export default {
        name: "ValidatorList",
        data: function(){
            const hmy = this.$root.hmy.hmy;
            hmy.blockchain.Staking.getAllValidatorAddresses().then(
                validators=>validators.result.map(
                    address=>{
                        D("req:", address);
                        hmy.blockchain.Staking.getValidatorInformation(address).then(
                            info=>{
                                nodes.push(info.result)
                                D(info);
                            }
                        )
                        
                    }
                )
            )
            /*
            hmy.blockchain.Staking.getAllValidatorInformation(1).then(
                (res)=>{
                    this.NodeList=res.result;
                    this.success = true;
                }
            ).catch(
                (err)=>{
                    this.success = "error:"+err;
                }
            )
            */
            return {
                NodeList:nodes,
                success,
            };
        }
    }
</script>
