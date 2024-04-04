<template>
  <div class="questionWrap">
    <div v-show="page === 0" class="question questionPage1">
      <div>
        <p>現在，邀請您一起回想這段經歷，<br>哪一個畫面對您來說最印象深刻呢？</p>
        <button @click="toResult(0)" class="choose"><span class="letter">A</span> <span class="content">耶穌被鞭打</span></button>
        <button @click="toResult(1)" class="choose"><span class="letter">B</span> <span class="content">耶穌被嘲笑、吐唾沫</span></button>
        <button @click="toResult(2)" class="choose"><span class="letter">C</span> <span class="content">耶穌的肋旁被長刀刺穿</span></button>
        <button @click="toResult(3)" class="choose"><span class="letter">D</span> <span class="content">耶穌被嘲諷為「猶太人的王」(並戴上荊棘冠冕)</span></button>
        <button @click="toResult(4)" class="choose"><span class="letter">E</span> <span class="content">耶穌的手和腳被釘在十字架上</span></button>
      </div>
    </div>
    <div v-show="page === 1">
      <div class="result">
        <div class="wrap">
          <div class="wrapBox"> 
            <div>
              <p class="title">{{ prayer.bible }}</p>
              <p class="aniText">{{ prayer.content1 }}</p>
              <p class="aniText">{{ prayer.content2 }}</p>
            </div>
          
            <!-- <p class="aniText down">{{ prayer.bible }}</p> -->
            <button @click="again" class="again">再測一次</button>
          </div> 
        </div>
      </div>
    </div>
</div>
  
</template>

<script setup>
import { onMounted, ref } from 'vue';

const page = ref(0);
const prayer = ref({
  title: '',
  content1: '',
  content2: '',
  bible: ''
});

const prayers = [
  {
    title: '耶穌被鞭打',
    content1: '神完全能體會你曾經被人冤枉、被誤會的感受，特別是來自關係很親近的人對你的誤會，他們當時的表情和舉動讓你非常受傷，甚至心裡開始憎恨、無法饒恕他們。',
    content2: '親愛的孩子，現在神要醫治你的心，祂完全理解你的處境，祂要用祂的愛來充滿你，使你因著祂給你的安全感，心中得到完全的釋放。',
    bible: '「哪知他為我們的過犯受害，為我們的罪孽壓傷。因他受的刑罰，我們得平安；因他受的鞭傷，我們得醫治。」以賽亞書 53:5'
  },
  {
    title: '耶穌被嘲笑、吐唾沫',
    content1: '神完全能體會你曾經被人惡意對待的心情，特別是那些同儕或同事的嘲諷、霸凌，讓你時常覺得無地自容，恨不得趕快轉換環境，離開這個讓你難受的地方。',
    content2: '親愛的孩子，現在神是你最好的朋友，祂是你最好的夥伴和盟友，你不會是一個人面對這樣的處境，並且祂要安慰你，使你不被別人的負面言語影響，擁有智慧知道如何與這群人應對。',
    bible: '「我在急難中求告耶和華，他就應允我，把我安置在寬闊之地。有耶和華幫助我，我必不懼怕，人能把我怎麼樣呢？」詩篇 118:5-6'
  },
  {
    title: '耶穌的肋旁被長刀刺穿',
    content1: '神完全能體會你曾經在低潮時，卻被人落井下石的痛苦和心情，你的內心有很深的「被人背叛」的感覺，尤其是那些你很信任的人，他們卻在你最低潮的時候，狠狠打擊你。',
    content2: '親愛的孩子，現在把你受傷的感覺交給祂，祂有完全的慈愛和接納，不論你處於高山或低谷，祂都能夠接住你的情緒，祂會永遠陪伴你，永遠不會撇棄你。',
    bible: '「他醫好傷心的人，裹好他們的傷處。」詩篇147:3'
  },
  {
    title: '耶穌被嘲諷為「猶太人的王」(並戴上荊棘冠冕)',
    content1: '神完全能體會你曾被貼標籤、被霸凌的感受，可能這些經歷是在許久之前發生的，當時的你不懂得如何應對這樣的狀況。以至於你聽信了旁人的負面言語，開始用這些言語定義自己，認為自己就是這樣一無是處的人。',
    content2: '親愛的孩子，現在神要挽回你的自我形象，祂所創造的你是美好的、是珍貴的，並且祂要賜給你更寬廣的眼光，使你看見你的價值不在於人口中的一切話，而在於神的心意。',
    bible: '「我要稱謝你，因我受造，奇妙可畏；你的作為奇妙，這是我心深知道的。」詩篇139:14'
  },
  {
    title: '耶穌的手和腳被釘在十字架上',
    content1: '神完全能體會你曾因身體的病痛所帶來的痛苦，也許這個病痛可能是成年舊傷，熬過辛苦的治療過程後，只留下了一個傷疤在你的身上；也許你現在正在經歷病痛的過程，每天都被身上的痛覺折磨。',
    content2: '親愛的孩子，神定意要來醫治你。不論你身上的病痛是舊傷或新傷，祂都要來醫治你，祂要為你留下得勝的記號，你的傷痕會成為神蹟的見證。',
    bible: '「耶和華說：我必使你痊癒，醫好你的傷痕。」耶利米數30:17'
  }

]

onMounted(() => {
});

const toResult = (nu) => {
  console.log(`result${nu}`);
  page.value = 1;
  prayer.value = prayers[nu];
  document.querySelector('.result').classList = `result result${nu}`;
}

const again = () => {
  page.value = 0;
}
</script>

<style>

.questionWrap {
  width: 100%;
  height: 100%;
}

.question {
  position: relative;
  transition: all 1s ease;
  text-align:center;
  aspect-ratio: 9 / 16;
  width: 100%;
  height: 100vh;
  background-image: url("../public/苦路.jpg");
  background-position: left;
  background-size: cover;
  padding: 15% 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 25px;
}

.questionPage1 p {
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;
  margin-bottom: 5%;
}

button.choose {
  transition: all 0.1s ease;
  width: 90%;
  border-radius: 20%;
  font-size: 22px;
  line-height: 40px;
  background-color: rgb(192,192,192,0.5);
  color: white;
  padding: 0 20px;
  text-decoration: none;
  border-radius: 20px;
  border: 2px solid #fff;
  cursor: pointer;
  display: flex;
  margin: 4% auto;
}

button .letter {
  width: 10%;
  margin-right: 4px;
}

button .content {
  width: 85%;
  text-align: left;
}

.result {
  position: relative;
  transition: all 1s ease;
  text-align:center;
  aspect-ratio: 9 / 16;
  width: 100%;
  height: 100vh;
  /* background: no-repeat center url("../public/result0.jpg"); */
  background-size: cover;
  padding: 15% 1.5rem;
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.result0 {
  background: no-repeat center url("../public/result0.jpg");
  background-size: cover;
}

.result1 {
  background: no-repeat center url("../public/result1.jpg");
  background-size: cover;
}

.result2 {
  background: no-repeat center url("../public/result2.jpg");
  background-size: cover;
}

.result3 {
  background: no-repeat center url("../public/result3.jpg");
  background-size: cover;
}

.result4 {
  background: no-repeat center url("../public/result4.jpg");
  background-size: cover;
}

.wrap {
  width: 100%;
  height: 50%;
  background-color: rgb(50,50,50,0.6);
  border-radius: 10px;
  padding: 5% 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: openMail 1s ease-in-out ;
  animation-fill-mode: both;
}

.wrapBox {
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

p {
  text-shadow: black 0.1em 0.1em 0.2em;
}

.title {
  text-align:center;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 10%;
  opacity: 0;
  color: white;
  animation: opacity 3s ease ;
  animation-fill-mode: both;
}

.aniText {
  text-align:left;
  font-size: 24px;
  line-height: 40px;
  opacity: 0;
  color: white;
  animation: opacity 3s ease ;
  animation-fill-mode: both;
}

.down {
  font-size: 22px;
}

button.again {
  transition: all 0.1s ease;
  width: 80%;
  font-size: 24px;
  border-radius: 20%;
  background-color: rgb(192,192,192,0.5);
  color: white;
  margin-bottom: 1rem;
  margin: 10px auto;
  padding: 0 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 30px;
  border: 2px solid #fff;
  cursor: pointer;
}

button:hover {
  background-color: rgb(192,192,192,0.8);
  /* color: black; */
}

button:active {

  box-shadow: 0 5px #666666bc;
  transform: translateY(4px);
}


@keyframes openMail {
  100% {
    height: 100%;
  }
}

@keyframes opacity {
  100% {
    opacity: 1;
  }
}

@media (max-width: 575px) {
  .question {
    font-size: 22px;
    line-height: 30px;
  }

  button.choose {
    font-size: 20px;
    line-height: 30px;
  }

  button.again {
    font-size: 20px;
    line-height: 30px;
  }

  .title {
    font-size: 20px;
    line-height: 30px;
  }

  .aniText {
    font-size: 20px;
    line-height: 32px;
  }

  .down {
    font-size: 18px;
  }
}

@media (max-width: 400px) {
  .question {
    font-size: 20px;
    line-height: 30px;
  }

  button.choose {
    font-size: 20px;
    line-height: 30px;
  }

  button.again {
    font-size: 20px;
    line-height: 30px;
  }

  .title {
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 5%;
  }

  .aniText {
    font-size: 18px;
    line-height: 28px;
  }

  .down {
    font-size: 15px;
  }
}
</style>
