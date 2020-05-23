<template>
    <div>
        <button v-on:click="setLayout('admin')" class="button w-24 rounded-full mr-1 mb-2 bg-theme-14 text-theme-10">Admin</button>
        <button v-on:click="setLayout('merchant')" class="button w-24 rounded-full mr-1 mb-2 bg-theme-14 text-theme-10">Merchant</button>
    </div>
</template>


<script>
export default {
    methods: {
        setLayout(layout) {
            this.$store.commit('SET_LAYOUT', layout)
            // console.log(this.$store.state.count)
        },
    }
}
</script>

