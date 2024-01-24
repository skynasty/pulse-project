<script>
import { ref } from 'vue'
import { RouterLink, RouterView } from "vue-router";


export default {
  data() {
    return {
      isOpenAuth: false,
      isOpenReg: false,
    };
  },
  methods: {
    openAuthModal() {
      this.isOpenAuth = true;
    },
    openRegModal() {
      this.isOpenReg = true;
    },
    closeAuthModal(event) {
      // Проверяем, был ли клик на пустом месте (не внутри окна авторизации)
      if (event.target === event.currentTarget) {
        this.isOpenAuth = false;
        this.isOpenReg = false;
      }
    },
  },
};
</script>

<template>
 
    <!-- шапка -->
    <div class="root" style="position: sticky; top: 0;">
    <header class="header" >

      <nav class="nav">
        <router-link to="/"><a href=""><img class="logo" src="../components/icons/pngtree-vector-pulse-rate-icon-png-image_857114.jpg" alt="logo"
            height="70px"></a></router-link>
        <ul class="katalog">
          <router-link to="/"><li><a href="" class="katalog">Главная</a></li></router-link>
          <li><a href="#about" class="katalog">О нас</a></li>
          <router-link to="/contacts"><li><a href="" class="katalog">Контакты</a></li></router-link>
          <li><a href="" class="katalog">|</a></li>
          <li><a class="katalog" @click="isOpenAuth = true">Авторизация</a></li>
          <li><a class="katalog" @click="isOpenReg = true">Регистрация</a></li>
        </ul>
      </nav>
    </header>
    <!-- <div class="overlay"></div> -->

    <!-- auth -->
    <teleport to='body'>
      <div class="modal" v-if="isOpenAuth"  @wheel.prevent @touchmove.prevent @scroll.prevent @click="closeAuthModal">
        <div class="modal-content">
          <h2>Авторизация</h2>
          <label>Имя пользователя</label>
          <input type="text">
          <label>Пароль</label>
          <input type="text">
          <button class="exit-button">Войти</button>
          <p>Нет аккаунта? <a @click="isOpenReg = true; isOpenAuth = dalse">Зарегистрируйтесь</a></p>
        </div>
      </div>
    </teleport>

    <!-- register -->

    <teleport to='body'>
      <div class="modal2" v-if="isOpenReg"  @wheel.prevent @touchmove.prevent @scroll.prevent @click="closeAuthModal">
        <div class="modal-content">
          <h2>Регистрация</h2>
          <label>Электронная почта</label>
          <input type="text">
          <label>Имя пользователя</label>
          <input type="text">
          <label>Пароль</label>
          <input type="text">
          <button class="exit-button">Зарегистрироваться</button>
          <p>Есть аккаунт? <a @click="isOpenAuth = true; isOpenReg = false">Авторизуйтесь</a></p>
        </div>
      </div>
    </teleport>
  </div>

</template>

<style scoped>
@font-face {
  font-family: "Gilroy-Regular";
  src: url(../assets/fonts/Gilroy-Regular.ttf);
}

body {
  
  font-family: "Gilroy-Regular";

}

* {
  padding: 0;
  margin: 0;
  font-family: "Gilroy-Regular";
}


.nav {
  align-items: center;
  display: flex;
  justify-content: space-between;
  /* position: fixed; */
  background-color: #000;
  width: 100%;
  left: 0;
  
}

ul li {

  text-decoration: none;
  color: #fff;
  font-size: 20px;
  display: inline-block;
  justify-content: space-between;
  margin-right: 30px;
}


a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;

}

.button1 {
  padding: 10px 15px 10px 15px;
  border-radius: 15px;
  background-color: #fff;
  color: #000;
}

.button1:hover {
  background-color: #af9fff;
  color: #fff;
  transform: scale(1.1);
  transition: 0.5s;
}

a:hover {
  color: #af9fff;
  transition: 0.3s;
}

.auth-dude  {
  color: #af9fff;
  transition: 0.3s;
}

.logo {
  padding-left: 60px;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #000;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  font-size: 17px;
}

.dropdown-content a {
  color:#fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #6d6d6d;

}

.katalog1:hover .dropdown-content {
  display: block;
  color: #af9fff;
  transition: 0.3s;
}

.feather feather-user-check {
  align-items: center;
}

.katalog {
  align-items: center;
  text-align: center;
}

/* modal */

.modal {
  background-color: #000000c4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.modal > div {
  background-color: #fff;
  padding: 60px 60px 30px 60px;
  border-radius: 10px;
  
}

.modal-content input {
  margin-top: 5px;
  display: flex;
  margin-bottom: 15px;
  width: 340px;
  height: 50px;
  border-radius: 7px;
  border: none;
  background-color: #ebebeb;
  font-size: 25px;
  padding-left: 15px;
}

.modal-content h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 40px;
}

.modal-content .exit-button{
  width: 355px;
  height: 50px;
  color:#fff;
  font-weight: bold;
  background-color: #202020;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  
}

label {
  font-weight: bold;
}

.modal-content .exit-button:hover {
  background-color: #414141;
  color: #ffffff;
  transition: 0.5s;
}

p {
  margin-top: 40px;
  text-align: center;
}

.modal-content a {
  text-decoration: none;
  color:#000;
  text-decoration: underline;
}

.modal2 {
  background-color: #000000c4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.modal2 > div {
  background-color: #fff;
  padding: 60px 60px 30px 60px;
  border-radius: 10px;
  
}
</style>