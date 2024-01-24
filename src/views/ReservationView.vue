<script setup>
import CartComponent from '@/components/CartComponent.vue';

</script>


<template>
    <div class="main">
        <div class="container">
            <h1>Найти помещение просто!</h1>
            <div class="filters">
                <select name="" id="">
                    <option value="">По названию</option>
                    <option value="">По цене (дешевые)</option>
                    <option value="">По цене (дорогие)</option>
                </select>
                <div class="search">
                    <!-- <img  class="icon-search" src="../components/icons/search.svg" alt=""> -->
                    <input type="text" placeholder="Поиск...">
                </div>
            </div>

            <div class="carts">
                <CartComponent/>
                <CartComponent/>
                <CartComponent/>
                <CartComponent/>
                <CartComponent/>
                <CartComponent/>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0px;

}

.main {
    background: linear-gradient(#af9fff, #6346f5);
}

.container {
    margin-left: 15%;
    margin-right: 15%;
    font-family: "Gilroy-Regular";

}

h1 {
    color: #fff;
    padding-top: 40px;
    padding-bottom: 30px;
    font-size: 40px;
}

.filters {
    display: flex;

}

select {
    padding-left: 10px;
    width: 250px;
    height: 40px;
    font-size: 20px;
    border-radius: 5px;
    border: solid 0.5px #00000049;
    background: rgb(250, 250, 250);
}

input {
    background-size: 20px;
    background-position: 8px;
    background-image: url(../components/icons/search.svg);
    background-repeat: no-repeat;
    margin-left: 20px;
    padding-left: 35px;
    width: 250px;
    height: 36px;
    border-radius: 5px;
    border: solid 0.5px #00000049;
    font-size: 20px;
}

.icon-search {
    margin-left: 30px;
    margin-top: 10px;
    position: absolute;
    width: 18px;

}



/* Карточки */

</style>
