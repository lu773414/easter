<template>
  <div class="page1">

    <p v-if="isStart" class="aniText">你來到空墳墓面前<br/>你覺得你是…？</p>

    <h2 v-else>welcome</h2>


    <button v-if="isStart" class="aniText" @click="chooseRole('soldier')">看守墳墓的羅馬士兵</button><br/>
    <button v-if="isStart" class="aniText" @click="chooseRole('maria')">抹大拉的馬利亞</button><br/>
    <button v-if="isStart" class="aniText" @click="chooseRole('disciple')">西門彼得與門徒們</button><br/>
    <button v-if="isStart" class="aniText" @click="chooseRole('angle')">天使</button>

    <button v-else @click="getStart">開始體驗</button>
  </div>
</template>


<script setup>
import router from "../router/index";
import { ref } from 'vue';

const isStart = ref(false);

const getStart = () => {
  document.querySelector('.page1').classList.add('page2');
  isStart.value = true;
}

const chooseRole = (role) => {
  router.push({ name: role });
}


</script>
<style scoped>
.page1 {
  /* transition: all 1s ease; */
  text-align:center;
  aspect-ratio: 9 / 16;
  width: 100%;
  height: 100vh;
  background: no-repeat center  url("../public/空墳墓_暗.png");
  background-size: cover;
  padding: 60% 0;
  color:white;
}

.page2 {
  background-size: auto;
}

.aniText {
  font-size: 25px;
  line-height: 50px;
  opacity: 0;
  color: white;
  animation: opacity 2s ease ;
  animation-fill-mode: both;
}

@keyframes opacity {
  100% {
    opacity: 1;
  }
}

button {
  border-radius: 20%;
  font-size: 45px;
  /* line-height: 40px; */
  background-color: rgb(192,192,192,0.5);
  color: white;
  margin-bottom: 1rem;
  margin: 10px;
  padding: 0 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 30px;
  border: 2px solid #fff;
  cursor: pointer;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

