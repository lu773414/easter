<template>
  <div class="soldierWrap">
    <div class="soldier soldierPage1">
      <p>在來到空墳墓的前一刻<br>你正在…</p> 
      <p class="hint">點擊前往下一頁</p>
    </div>
    <div id="soldierPage2" class="soldier soldierPage2">
      <p>你聽到抹大拉的馬利亞對你說：「有人把主的身體從墳墓裡帶走了！」你和門徒們慌張地趕到墳墓，仔細地進到墓穴查看…</p>
      <p class="hint">點擊前往下一頁</p>
    </div>
    <div id="soldierPage3" class="soldier soldierPage3">
      <p>你第一眼看到了什麼?</p>
      <div>
        <button><a @click="toPage4">細麻布</a></button>
        <button><a @click="toPage4">裏頭巾</a></button>
        <button><a @click="toPage4">地上的碎石子</a></button><br>
      </div>
      
    </div>
    <div id="soldierPage4" class="soldier soldierPage4">
      <p>十字架的苦路中，你看著昔日老師受罪，哪一幕令你最痛苦?</p>
      <div>
        <button @click="toEgg">耶穌被鞭打</button><br>
        <button @click="toEgg">耶穌被身邊人的嘲笑、吐唾沫</button><br>
        <button @click="toEgg">耶穌的肋旁被人拿長刀刺穿</button><br>
        <button @click="toEgg">耶穌被戴上荊棘冠冕，被嘲諷封為「猶大的王」</button><br>
        <button @click="toEgg">耶穌的手和腳被釘在十字架上</button>
      </div>
      
    </div>
  </div>
  
</template>

<script setup>
import router from "../router/index";
import { onMounted } from 'vue';

onMounted(() => {
  document.querySelector('.soldier.soldierPage1').addEventListener('click', function() {
      document.querySelector('.soldierWrap').classList.add('move1');
  });

  document.querySelector('.soldier.soldierPage2').addEventListener('click', function() {
      document.querySelector('.soldierWrap').classList.add('move2');
  });

});

const toPage4 = () => {
  document.querySelector('.soldierWrap').classList.add('move3');
}

const toEgg = () => {
  router.push({ name: 'egg' });
}
</script>

<style>

.soldierWrap {
  transition: all 1s ease;
}
.soldier {
  position: relative;
  transition: all 1s ease;
  text-align:center;
  aspect-ratio: 9 / 16;
  width: 100%;
  height: 100vh;
  background: no-repeat center  url("../public/空墳墓_暗.png");
  background-size: auto;
  padding: 20% 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.soldier.soldierPage3 {
  justify-content: space-evenly;
}

.soldier.soldierPage4 {
  justify-content: space-evenly;
}

.move1 {
  transform: translateY(-100vh);
}

.move2 {
  transform: translateY(-200vh);
}

.move3 {
  transform: translateY(-300vh);
}

button {
  border-radius: 20%;
  font-size: 24px;
  line-height: 40px;
  background-color: rgb(192,192,192,0.5);
  color: white;
  margin-bottom: 1rem;
  margin: 10px;
  padding: 0 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 30px;
  cursor: pointer;
}
 
.hint {
  color: rgb(255,255,255,0.5);
}

a {
  color: white;
}

a:hover {
  background-color: transparent;
  color: white;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
