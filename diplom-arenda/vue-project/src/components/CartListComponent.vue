<script setup>
import CartComponent from './CartComponent.vue';
</script>

<template>
    <div class="carts">
        <CartComponent 
            title="2-комн. квартира, 85 м²"
            adress="Москва, Хлебный переулок, 9"
            info="Уютная квартира с изысканным ремонтом от дизайнера.
                    Мебель и техника подобраны с любовью для комфортного проживания 1 го или 2х человек.
                    Квартира деально, подойдет творческим людям, любящим водоворот большого города во время
                    рабочей недели, что позволяет расположение квартиры, в доме, в самом сердце Москвы."
            imageUrl="/src/components/icons/kv1-1.jpg" 
            :price="100000"
            tel="7 (915) 539-43-51"
        />
        <CartComponent />
        <CartComponent />
        <CartComponent />
        <CartComponent />
        <CartComponent />
    </div>
</template>