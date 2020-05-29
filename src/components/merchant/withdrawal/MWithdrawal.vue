<template>
    <div class="grid grid-cols-12 gap-6 mt-5">
        
        <div class="intro-y col-span-12 lg:col-span-6">
        <h5>Wallet Id:{{wallet.token}}</h5>
        <h5>Balance:{{wallet.balance}}</h5>
        <div><label>Amount</label> 
            <input type="number" class="input w-full border mt-2" placeholder="20000"> 
        </div>
        <div><label>Wallet Id</label> 
            <input type="text" class="input w-full border mt-2" placeholder="878949669"> 
        </div>
        <div><label>Wallet PIN</label> 
            <input type="text" class="input w-full border mt-2" placeholder="Enter wallet pin"> 
        </div>
        <button type="button" class="button bg-theme-1 text-white mt-5">Withdraw</button>
        </div>
     </div>
</template>

<script>
export default {
    name: "MWithdrawal",
    props:{
        wallet: Object
    }
}
</script>

<style>

</style>
