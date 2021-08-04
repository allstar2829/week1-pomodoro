<template>
  <div class="list-block">
    <div class="add-task">
      <div class="outline">
        <i class="fas fa-plus"></i>
      </div>
      <span>Add Task</span>
    </div>
    <!-- <div class="add-task">
      <div class="outline">
        <i class="fas fa-check"></i>
      </div>
      <input type="text" placeholder="ADD TASK..." />
    </div> -->
    <div class="todo-task">
      <h1 class="list-title">TO DO LIST</h1>
      <ul>
        <li><i class="fas fa-play"></i>1.The First task to do today!</li>
        <li><i class="fas fa-play"></i>2.The Second task to do today!</li>
        <li><i class="fas fa-play"></i>3.The Third task to do today!</li>
        <li><i class="fas fa-play"></i>4.The Fourth task to do today!</li>
        <li><i class="fas fa-play"></i>5.The Fifth task to do today!</li>
      </ul>
    </div>
    <div class="done-task">
      <h1 class="list-title">DONE LIST</h1>
      <ul>
        <li><i class="fas fa-check"></i>1.The First task done!</li>
        <li><i class="fas fa-check"></i>2.The Second task done!</li>
        <li><i class="fas fa-check"></i>3.The Third task done!</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
};
</script>

<style lang="scss" scoped>
.list-block {
  width: 43vw;
  background-color: #32404e;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5rem;
  box-sizing: border-box;
  .add-task {
    input {
      background-color: #f4d03f;
      outline: none;
      border: none;
      box-sizing: border-box;
      width: 90%;
      //   font-size: 1.5rem;
      &::-webkit-input-placeholder {
        font-weight: 700;
        font-style: italic;
        color: #0d151d;
      }
    }
    display: flex;
    align-items: center;
    width: 180px;
    // width: 100%;
    height: 50px;
    border-radius: 30px;
    background-color: #f4d03f;
    color: #0d151d;
    justify-content: space-evenly;
    .outline {
      width: 30px;
      height: 30px;
      border: 3px solid #0d151d;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .fas {
        font-size: 1rem;
      }
    }
    span {
      padding: 10px;
      line-height: 50px;
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  .todo-task,
  .done-task {
    width: 100%;
    ul {
      max-height: 300px;
      overflow: auto;
      li {
        margin-bottom: 10px;
        padding: 15px;
        border-radius: 10px;
        background-color: #1b2a3b;
      }
    }
    .fa-play,
    .fa-check {
      color: #f4d03f;
      margin-right: 1vw;
    }
  }
  .todo-task {
    margin: 3vh auto;
  }
  .done-task li {
    text-decoration: line-through;
    opacity: 0.7;
  }
  .list-title {
    font-size: 2rem;
    color: #f4d03f;
    font-weight: bold;
    margin-bottom: 1.5vh;
  }
}
</style>