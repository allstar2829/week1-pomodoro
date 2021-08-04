<template>
  <div class="sidebar-block">
    <div class="list">
      <ul>
        <li><i class="fas fa-home"></i></li>
        <li><i class="fas fa-coffee"></i></li>
        <li><i class="fas fa-list"></i></li>
        <li><i class="far fa-chart-bar"></i></li>
        <li><i class="fas fa-cog"></i></li>
      </ul>
    </div>

    <div class="name">POMODORO</div>
  </div>
</template>


<script>
export default {
  name: "side-bar",
};
</script>

<style lang="scss" scoped>
.sidebar-block {
  background-color: #0d151d;
  width: 12vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.list {
  color: #f4d03f;
  ul {
    text-align: center;
    .fas,
    .far {
      font-size: 2rem;
      margin-bottom: 1.5em;
      &:hover {
        color: lighten($color: #f4d03f, $amount: 20);
        transition: all .6s;
      }
    }
  }
}

.name {
  color: white;
  font-size: 1.5rem;
  letter-spacing: 5px;
  transform: rotate(90deg);
}
</style>