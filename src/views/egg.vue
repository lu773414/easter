<template>
  <div v-show="choose === 0" class="egg">
    <p>選擇你最喜歡的一顆復活節彩蛋？</p>
    <div class="flexWrap">
      <img @click="chooseEgg" src="../../public/egg01.png">
      <img @click="chooseEgg" src="../../public/egg02.png">
      <img @click="chooseEgg" src="../../public/egg03.png">
      <img @click="chooseEgg" src="../../public/egg04.png">
      <img @click="chooseEgg" src="../../public/egg05.png">
      <img @click="chooseEgg" src="../../public/egg06.png">
    </div>
  </div>
  <div v-show="choose === 1"  class="egg result">

  </div>
</template>
<script setup>
import { ref } from 'vue';

const choose = ref(0);

const chooseEgg = () => {
  const result = getRandomInt(5);
  document.querySelector('.result.egg').style.background = `no-repeat center  url("../public/result${result}.jpg")`;
  document.querySelector('.result.egg').style.backgroundSize = 'cover';
  choose.value = 1;
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

</script>

<style>

.eggWrap {
  transition: all 1s ease;
}

.egg p {
  margin-bottom: 12px;
  color: black;
}

.egg {
  position: relative;
  transition: all 1s ease;
  text-align:center;
  aspect-ratio: 9 / 16;
  width: 100%;
  height: 100vh;
  background: no-repeat center  url("../public/底.png");
  background-size: auto;
  padding: 20% 2rem;
  color: white;
}

.flexWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

img {
  width: 170px;
  cursor: pointer;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
