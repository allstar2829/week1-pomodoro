<template>
  <div class="timer-block">
    <div class="date">
      <div class="day-time">
        <span class="subtitle">{{ showDate() }}</span>
        <span>{{ showTime(currentTime) }}</span>
      </div>
      <div class="task-num">
        <span class="subtitle">DONE/TODO</span>
        <span>5/10</span>
      </div>
    </div>
    <div class="timer-container">
      <div class="circle-outline">
        <div class="circle">
          <div class="statu-title">
            <span>- Start Work -</span>
          </div>
          <div class="counter">
            <span>25:00</span>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-menu">
      <ul>
        <li><i class="fas fa-times"></i></li>
        <li><i class="fas fa-play"></i></li>
        <li><i class="fas fa-redo"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "timer",
  data() {
    return {
      currentTime:new Date(),
    };
  },
  methods: {
    showDate() {
      let today = new Date();
      return today.toLocaleDateString();
    },
    showTime() {
      let Now = new Date();
      var hours = this.padDate(Now.getHours());
      var minutes = this.padDate(Now.getMinutes());
      var seconds = this.padDate(Now.getSeconds()); //for test only

      return hours + ":" + minutes+ ":" + seconds;
    },
    padDate(input) {
      return input.toString().padStart(2, "0");
    },
  },
  mounted() {
    var _this = this; //宣告一個變數指向Vue例項this，保證作用域一致
    this.updateCurrentTime = setInterval(function () {
      _this.currentTime = new Date(); //修改資料date
    }, 1000);
  },
  onBeforeUnmount() {
    if (this.updateCurrentTime) {
      clearInterval(this.updateCurrentTime); //在Vue例項銷燬前，清除我們的定時器
    }
  },
};
</script>

<style lang="scss" scoped>
.timer-block {
  width: 45vw;
  background-color: #283645;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.5rem;
  .date {
    display: flex;
    width: 30vw;
    justify-content: space-between;
    font-size: 3.5rem;
    color: white;
    letter-spacing: 3px;
    .subtitle {
      font-size: 1.5rem;
      color: #828589;
    }
    .day-time,
    .task-num {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .circle-outline {
    display: flex;
    width: 530px;
    height: 530px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #1b2a3b;
    .circle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background-color: #212f3f;
      color: #f4d03f;
      font-size: 10rem;
      .statu-title {
        font-size: 3rem;
        margin-bottom: 1.5rem;
      }
    }
  }
  .btn-menu ul {
    display: flex;
    text-align: center;
    line-height: 3rem;
    width: 18vw;
    justify-content: space-between;
    li {
      transition: all 0.2s;
    }
    li:hover {
      transform: scale(1.1);
    }
    .fa-times,
    .fa-redo {
      border: 5px solid white;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      line-height: 60px;
      font-size: 2rem;
      margin-top: -15px;
    }
    .fa-times {
      font-size: 2.5rem;
    }
    .fa-play {
      width: 85px;
      height: 85px;
      font-size: 3rem;
      border: 5px solid white;
      border-radius: 50%;
      line-height: 75px;
      padding-left: 5px;
      box-sizing: border-box;
    }
  }
}
</style>