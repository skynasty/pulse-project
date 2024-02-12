<script setup>

</script>

<template>
    
    <section class="review-block">
        <div class="container">
            <h1>Что говорят наши пользователи?</h1>
            <div class="reviews">
                <div class="review">
                    <div class="review1">
                        <div class="review-text">
                            <p>Невероятное обслуживание! "Пульс" сделали процесс аренды настолько простым и удобным.
                                Разнообразие вариантов жилья позволило мне быстро найти идеальное место для проживания.</p>
                        </div>
                    </div>
                    <div class="review2">
                        <div class="review-author">
                            <div class="blocks">
                                <div class="left-block">
                                    <img src="./icons/review1.jpg" alt="" width="60px">
                                </div>
                                <div class="right-block">
                                    <h4>Дмитрий Голубев</h4>
                                    <p>Пользователь Пульс</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="review">
                    <div class="review1">
                        <div class="review-text">
                            <p>Отличная компания! "Пульс" не только предоставили мне красивое жилье, но и поддержали на
                                каждом
                                этапе. Они внимательно выслушали мои потребности и предложили отличные варианты.</p>
                        </div>
                    </div>
                    <div class="review2">
                        <div class="review-author">
                            <div class="blocks">
                                <div class="left-block">
                                    <img src="./icons/review2.jpg" alt="" width="60px">
                                </div>
                                <div class="right-block">
                                    <h4>Евгений Петров</h4>
                                    <p>Пользователь Пульс</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="review">
                    <div class="review1">
                        <div class="review-text">
                            <p>Превосходное обслуживание клиентов! "Пульс" действительно следят за своими клиентами. Процесс
                                аренды был быстрым и беззаботным благодаря профессионализму команды. Рекомендую всем!</p>
                        </div>
                    </div>
                    <div class="review2">
                        <div class="review-author">
                            <div class="blocks">
                                <div class="left-block">
                                    <img src="./icons/review3.jpg" alt="" width="60px">
                                </div>
                                <div class="right-block">
                                    <h4>Юлия Воробьева</h4>
                                    <p>Пользователь Пульс</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-stats">
            <div class="stats">
                <div class="stats-block">
                    <h2>Довольных клиентов</h2>
                    <h1>20,000+</h1>
                    <p>за все время</p>
                </div>
                <div class="stats-block">
                    <h2>Компаний-партнеров</h2>
                    <h1>500+</h1>
                    <p>сотрудничают с нами</p>
                </div>
                <div class="stats-block">
                    <h2>Успешных сделок</h2>
                    <h1>10,000+</h1>
                    <p>за все время</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <p class="footer-name">PULSE</p>
        <p class="footer-text">© Vladislav Solovev. 2024 PULSE. Все права защищены.</p>
        <a href="https://github.com/skynasty"><img src="../components/icons/github.svg" alt=""></a>

    </footer>
</template>

<style scoped>
/* review */

* {
    margin: 0;
    padding: 0;
    font-family: "Gilroy-Regular";
}
.container {
    width: 100%;
    height: 450px;
}

.review-block h1 {
    padding-top: 40px;
    text-align: center;
    font-size: 60px;
    color: #fff;
}

.reviews {
    margin-top: 80px;
    margin-left: 200px;
    display: flex;
}

.review {
    height: 500px;
}

.review1 {
    border-radius: 5px;
    margin-left: 100px;
    background-color: #9184d1;
    width: 400px;
    height: 200px;
    box-shadow: 0 0 40px #666;
}

.review2 {
    border-radius: 5px;
    height: 80px;
    margin-left: 100px;
    background-color: #8d80c7;
    box-shadow: 0 0 40px #666;
}

.review-text {
    padding: 10px 10px 10px 10px;
    color: #f0f0f0;
    font-style: italic;
    font-size: 20px;
    font-weight: bold;
}

.review2 img {
    margin-top: 15%;
    margin-left: 15%;
    border-radius: 100px;
}

.review-author {
    font-size: 25px;
    font-weight: bold;
    color: #6b6b6b;
}

.blocks {
    display: flex;
    height: 80px;
}

.left-block {
    width: 20%;
    margin-right: 5%;
}

h4 {
    padding-top: 8%;
    color: #fff;
    margin: 0px;
}

.review2 p {
    margin: 0px;
    color: #fff;
    font-size: 15px;
}

.stats {
    margin-top: 2%;
    display: flex;
    margin-left: 300px;
}

.stats-block {
    margin-right: 265px;
}

.stats h1 {
    color:#f59771;
    padding: 0;
    margin: 0;
    text-align: left;
    margin-bottom: 5px;
}

.stats h2 {
    padding-top: 30px;
    margin: 0px;
    color:#ffffff;
    margin-bottom: 10px;
}

.stats p {
    margin: 0px;
    font-size: 20px;
    color:#dddddd;
    font-weight: bold;
}

.container-stats {
    padding-bottom: 80px;
}

/* footer */

.footer {
    padding-top: 70px;
    height: 140px;
    background: linear-gradient(#af9fff, #6346f5);
    
}

.footer-name {
    text-align: center;
    color:#fff;
    font-size: 30px;
    font-weight: bold;
    margin: 0;
}

.footer-text {
    margin-top: 20px;
    color: #e0e0e0;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}

.review-block {
    background: linear-gradient( #af9fff , #af9fff );

}

.footer img {
    margin-top: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border-radius: 50px;
}


</style>