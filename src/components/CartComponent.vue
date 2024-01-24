<script setup>

</script>

<template>
    <div class="cart-container">
        <div class="blocks">
            <div class="first-block">
                <img src="@/components/icons/kv1-1.jpg" alt="">
            </div>
            <div class="second-block">
                <h3>2-комн. квартира, 85 м²</h3>
                <h5>Москва, Хлебный переулок, 9</h5>
                <p>Уютная квартира с изысканным ремонтом от дизайнера.
                    Мебель и техника подобраны с любовью для комфортного проживания 1 го или 2х человек.
                    Квартира деально, подойдет творческим людям, любящим водоворот большого города во время
                    рабочей недели, что позволяет расположение квартиры, в доме, в самом сердце Москвы.</p>
                <div class="bottom-function">
                    <a href="tel: 89155394351"><button class="tel">7 (915) 539-43-51</button></a>
                    <button class="reservation-button">Забронировать</button>
                </div>
            </div>

            <div class="third-block">
                <h3>100 000 ₽/мес</h3>
                <button>В избранное</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart-container {
    margin-top: 30px;
    width: 100%;
    background-color: #fff;
    height: 390px;
    border-radius: 15px;
}

.cart-container:hover {
    cursor: pointer;
    box-shadow: 0 0 25px #0000008a;
    transition: 0.7s;
}

.blocks {
    display: flex;
}

.first-block img {
    margin-top: 20px;
    margin-left: 20px;
    border-radius: 10px;
    width: 40%;
    width: 350px;
}

.second-block {
    margin-left: 25px;
    margin-top: 20px;
    width: 42%;
}

.second-block h3 {
    margin: 0;
    font-size: 30px;
    margin-bottom: 20px;

}

.second-block h5 {
    margin: 0;
    font-size: 20px;
    margin-bottom: 20px;
}

.second-block p {
    font-size: 19px;
    margin-bottom: 20px;
    color: #807f7f;
}

.bottom-function {
    margin-top: 40px;
}

.tel {
    border-radius: 5px;
    border: none;
    font-size: 17px;
    width: 200px;
    height: 45px;
    background-color: #55b349;
    color: #fff;
    font-weight: 600;
}

.tel:hover {
    cursor: pointer;
    background-color: #448b3a;
    transition: 0.7s;
}

.reservation-button {
    border-radius: 5px;
    border: solid 1px #00000049;
    font-size: 17px;
    margin-left: 10px;
    width: 250px;
    height: 45px;
    font-weight: 600;
}

.reservation-button:hover {
    cursor: pointer;
    background-color: #cecece;
    transition: 0.7s;
}

.third-block {
    margin-left: 30px;
    margin-top: 20px;
    width: 23%;
}

.third-block h3 {
    margin: 0;
    font-size: 35px;
    
}

.third-block button {
    align-items: center;
    background-size: 20px;
    background-position: 35px;
    background-repeat: no-repeat;
    background-image: url(../components/icons/like.svg);
    background-color: #af9fff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    width: 250px;
    height: 40px;
    font-weight: 600;
    margin-top: 10px;

}

.third-block button:hover {
    cursor: pointer;
    background-color: #9985fa;
    transition: 0.6s;

}
</style>