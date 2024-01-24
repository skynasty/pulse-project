<script setup>

</script>

<template>
    <section  class="about">
        <div class="container1">
            <h1>О нашей компании</h1>
            <h3>Агенство недвижимости №1 в России</h3>
            <div class="blocks">
                <div class="left-block">
                    <p>
                        Добро пожаловать в "Пульс" – вашему надёжному партнёру в сфере аренды жилых помещений.
                        Мы являемся опытными специалистами, предоставляющими высококачественные услуги аренды недвижимости,
                        которые удовлетворяют потребности наших клиентов<br><br>
                        <b>Наша миссия:</b><br>
                        Наша главная цель – сделать процесс поиска и аренды жилья легким и удобным для всех.
                        Мы стремимся предоставлять нашим клиентам доступ к разнообразным и качественным жилым помещениям,
                        обеспечивая при этом прозрачные и честные условия аренды.
                    </p>
                    <p id="review"></p>
                </div>
                <div class="right-block">
                    <img src="./icons/1633478167_24-idei-club-p-semya-v-tesnoi-kvartire-interer-krasivo-fo-25.jpg" alt=""
                        width="600px" height="450px">
                </div>
            </div>
        </div>
    </section>
   
</template>

<style scoped>
/* about */

@font-face {
    font-family: "Gilroy-Regular";
    src: url(../assets/fonts/Gilroy-Regular.ttf);
}

body {
    font-family: "Gilroy-Regular";
    background-color: #af9fff;
}

* {
    padding: 0;
    margin: 0;
    font-family: "Gilroy-Regular";
}

.container1 {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    background-color: rgb(32, 32, 32);
    height: 700px;
}

.about h1 {
    padding-top: 40px;
    text-align: center;
    font-size: 60px;
    color: #fff;
}

.about h3 {
    font-size: 25px;
    margin-top: 10px;
    text-align: center;
    color: #c0c0c0;
}

.about p {
    margin-top: 10px;
    margin-left: auto;
    margin-right: 40px;
    width: 80%;
    color: #fff;
    font-size: 30px;
}

.blocks {
    margin-top: 50px;
    display: flex;
}

.right-block {
    width: 40%;
    margin-right: 10%;
}

.blocks img {
    border-radius: 30%;
}


</style>