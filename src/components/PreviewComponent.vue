<script setup>
import ReservationView from '@/views/ReservationView.vue';
</script>

<template>


  <!-- превью -->
  <section class="preview">
    <h1>Аренда для жизни PULSE</h1>
    <p>Просто снять - комфортно жить</p>
    <router-link to="/reserv" ><button class="see-button">Смотреть</button></router-link><br><br><br><br><br><br><br>
    <h4 id="about">-</h4>
  </section>


</template>

<style scoped>
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


/* preview */

.preview {
  position: inherit;
  width: 100%;
  height: 950px;
  background-image: url(../components/icons/background1.jpg);
}

.preview h1 {
  padding-top: 250px;
  margin-left: 10%;
  width: 1500px;
  color:#fff;
  font-size: 110px;

}

.preview p {
  margin-top: 30px;
  font-weight: 700;
  font-size: 40px;
  margin-left: 10%;
  color:#fff;
  margin-bottom: 40px;
}


.see-button {
  font-size: 25px !important;
  height: 60px;
  width: 200px;
  margin-left: 10%;
  text-decoration: none;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  background-color: #fff;
  color:#000;
  transition: transform .7s;
  border: none;
  box-shadow: 0 0 10px #0000008a;
  cursor: pointer;
  
}

.see-button:hover {
  transform: scale(1.06);
  
}

h4 {
  margin-top: 170px;
  color: #af9fff;
}

h1
{
    white-space:nowrap;
    overflow:hidden;
    -webkit-animation: type 2s steps(50, end);
    animation: type 2s steps(50, end);
}
@keyframes type{
    from { width: 0; }
}
@-webkit-keyframes type{
    from { width: 0; }
}

</style>