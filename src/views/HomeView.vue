<template>
  <div class="page1">

    <p class="aniText">你還記得那個故事嗎？<br>
    就是那個已經釘死在十字架上的君王，<br>
    卻從死裡復活的傳奇故事.......</p>
    <div>
      <button class="aniText" @click="chooseRole('story')">Start</button>
    </div>
    

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
  padding: 50% 1.5rem;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 25px;
}

.page2 {
  background-size: auto;
}

.aniText {
  text-align:left;
  font-size: 24px;
  line-height: 40px;
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
  transition: all 0.1s ease;
  border-radius: 20%;
  background-color: rgb(192,192,192,0.5);
  color: white;
  margin: 10px auto;
  padding: 0 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 30px;
  border: 2px solid #fff;
  cursor: pointer;
  /* box-shadow: 0 5px rgb(105,105,105,0.6); */
}

button:hover {
  background-color: rgb(192,192,192,0.8);
  /* color: black; */
}

button:active {

  box-shadow: 0 5px #666666bc;
  transform: translateY(4px);
}

@media (min-width: 1024px) {
 
}

@media (max-width: 575px) {
  .aniText {
    font-size: 22px;
    line-height: 30px;
  }
}

@media (max-width: 400px) {
  .aniText {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>

