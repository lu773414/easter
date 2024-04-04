<template>
  <div class="soldierWrap">
    <div class="soldier soldierPage1">
      
      <p v-if="page === 0">
        在耶路撒冷的街頭，<br>人們以歡呼和振奮的心情<br>迎接耶穌，<br>視他為拯救者。<br>
        然而，這片歡樂的氛圍<br>很快就被黑暗所取代。</p> 
      <p v-if="page === 0" class="hint">點擊前往下一頁</p>
      <p v-if="page === 1">
        過了不久，<br>擁擠人潮歡呼聲變為辱罵聲，<br>羅馬士兵們嘲笑著耶穌，<br>
        戲謔地戴上了荊棘冠冕，<br>將他推擠到受難之路上。</p> 
      <p v-if="page === 1" class="hint">點擊前往下一頁</p>
      <p v-if="page === 2">耶穌背負著沉重的十字架，<br>他的身體已經疲憊不堪。<br>
        羅馬士兵們不斷嘲笑他，<br>他們用鞭子抽打他的背脊，<br>使他的血流淌在路上。</p> 
      <p v-if="page === 2" class="hint">點擊前往下一頁</p>
      <p v-if="page === 3">但耶穌默默地承受著這一切，<br>他卻沒有停下腳步，也沒有怨言。</p> 
      <p v-if="page === 3" class="hint">點擊前往下一頁</p>
      <p v-if="page === 4">在他走向各各他的路上，<br>馬利亞和其他婦女們跟隨著他。<br>
        他們的眼中充滿了<br>深深的悲傷和無奈，<br>但他們仍然堅定地支持著耶穌，<br>不離不棄。</p> 
      <p v-if="page === 4" class="hint">點擊前往下一頁</p>
      <p v-if="page === 5">當耶穌被釘在十字架上時，<br>門徒們感到極度的痛苦和絕望。<br>
        他們看著自己跟隨三年耶穌，<br>被釘在木頭上，<br>心中充滿了無法言喻的痛苦。</p> 
      <p v-if="page === 5" class="hint">點擊前往下一頁</p>
      <p v-if="page === 6">門徒中的彼得，<br>心中更是充滿了罪疚感，<br>
        因為他曾三次否認過耶穌。<br>所有的門徒則悲傷地凝視著耶穌，<br>無法理解這一切是如何發生的。</p> 
      <p v-if="page === 6" class="hint">點擊前往下一頁</p>
      <p v-if="page === 7">然而，三天後，<br>耶穌的墳墓被發現空了。<br>
        馬利亞和其他婦女們被天使告知，<br>耶穌已經復活了。<br>他們充滿喜悅地<br>傳達這個好消息給門徒們。</p> 
      <p v-if="page === 7" class="hint">點擊前往下一頁</p>
      <p v-if="page === 8">他們起初並不相信。<br>直到耶穌親自出現在他們面前，<br>他們才確信耶穌已經復活。</p> 
      <p v-if="page === 8" class="hint">點擊前往下一頁</p>
      <p v-if="page === 9">而耶穌的復活，<br>帶來我們全新且得勝的開始！</p> 
      <p v-if="page === 9" class="hint">點擊前往下一頁</p>
    </div>
  </div>
  
</template>

<script setup>
import router from "../router/index";
import { onMounted, ref } from 'vue';

const page = ref(0);


onMounted(() => {
  document.querySelector('.soldier.soldierPage1').addEventListener('click', function(e) {
    const element = document.querySelector('.soldier.soldierPage1');
    if(element.style.backgroundPosition === '90% center') {
      router.push({ name: 'question' });
      return;
    } else {
      page.value += 1;
      element.style.backgroundPosition = `${page.value}0%`;
    }
  });

});

</script>

<style>

.soldierWrap {
  width: 100%;
  height: 100%;
  transition: all 1s ease;
}

.soldier {
  position: relative;
  transition: all 1s ease;
  text-align:center;
  aspect-ratio: 9 / 16;
  width: 100%;
  height: 100vh;
  /* background:  left ; */
  background-image: url("../public/苦路.jpg");
  background-position: left;
  background-size: cover;
  padding: 20% 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 25px;
}

p {
  text-shadow: black 0.1em 0.1em 0.2em
}

p.hint {
  opacity: 0.5;
}

a {
  color: white;
}

a:hover {
  background-color: transparent;
  color: white;
}

.question {
  margin-bottom: 20px;
}

.result0 {
  background-image: url("../public/result0.jpg");
}

@media (max-width: 575px) {
  .soldier {
    font-size: 22px;
    line-height: 32px;
  }
}

@media (max-width: 400px) {
  .soldier {
    font-size: 20px;
    line-height: 32px;
  }
}
</style>
