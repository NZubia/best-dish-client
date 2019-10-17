<template>
    <div>
        <h1>{{getCurrentDish.name}} - ${{getCurrentDish.price}}</h1>
        <img :src="getCurrentDish.imgDir" width="200">
        <p>{{getCurrentDish.description}}</p>

        <button v-on:click="addToOrder(getCurrentDish)">Add to Order</button>
        <button v-on:click="changeView">Return</button>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Detail",
        methods: {
            addToOrder(dish){
                this.$store.dispatch("addToOrder", dish);
                this.changeView();
            },
            changeView() {
                this.$router.push({path:"/"});
            }
        },
        computed: {
            ...mapGetters([
                'getCurrentDish'
            ])
        }
    }
</script>

<style scoped>

</style>