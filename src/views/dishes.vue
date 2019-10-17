<template>
    <div>
        name: <input v-model="dishName" type="text">
        price<input v-model="price" type="text">
        description<input v-model="dishDescription" type="text">
        img<input v-model="dishImg" type="text">
        type<input v-model="dishType" type="text">
        <button v-on:click="createDish()">Save</button>
    </div>
</template>

<script>
    export default {
        name: "dishes",
        data(){
            return {

            }
        },
        methods: {
            createDish(){
                let data= {
                    dishName: this.dishName,
                    dishDescription: this.dishDescription,
                    dishPrice: this.price,
                    dishImgSrc: this.dishImg,
                    dishType: this.dishType
                }

                this.$store.dispatch('dishes/createDish',data);
            }
        }
    }
</script>

<style scoped>

</style>