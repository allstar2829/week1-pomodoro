<template>
  <div class="list-block" @click="closeAddInput($event)">
    <div
      class="add-task"
      :class="{ containerFluid: isAdd }"
      @click="addTask($event)"
    >
      <div
        class="outline"
        @click="addToTaskList($event)"
      >
        <i v-if="isAdd" class="fas fa-check"></i>
        <i v-else class="fas fa-plus"></i>
      </div>
      <input
        v-if="isAdd"
        v-model="addTaskItem"
        @keyup.enter="addToTaskList($event)"
        type="text"
        placeholder="ADD TASK..."
      />
      <span v-else>Add Task</span>
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
        <li v-for="(task, index) in toDoTasks" :key="index">
          <i class="fas fa-play"></i>{{ task }}
        </li>
        <!-- <li><i class="fas fa-play"></i>1.The First task to do today!</li>
        <li><i class="fas fa-play"></i>2.The Second task to do today!</li>
        <li><i class="fas fa-play"></i>3.The Third task to do today!</li>
        <li><i class="fas fa-play"></i>4.The Fourth task to do today!</li>
        <li><i class="fas fa-play"></i>5.The Fifth task to do today!</li> -->
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
  data() {
    return {
      isAdd: false,
      addTaskItem: "",
      toDoTasks: [],
    };
  },
  methods: {
    addTask(event) {
      event.stopPropagation();
      this.isAdd = true;
      console.log("test");
    },
    closeAddInput(event) {
      // console.log(event.target)
      if (event.target.tagName !== "INPUT") {
        this.isAdd = false;
      }
    },
    addToTaskList(event) {
      // console.log("新增任務");
      // console.log(this.$store.state.dataKey);
      if (this.addTaskItem == "") {
        return;
      } else {
        event.stopPropagation();
        this.toDoTasks.push(this.addTaskItem);
        this.addTaskItem = "";
        console.log(this.isAdd);
        this.isAdd = false;
      }
      console.log(this.addTaskItem);
      console.log(this.toDoTasks);
      console.log(this.isAdd);
    },
  },
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
      width: 85%;
      font-size: 1.2rem;
      font-weight: bold;
      padding-right: 10px;
      background: border-box;
      &::-webkit-input-placeholder {
        font-weight: 700;
        font-style: italic;
        color: #0d151d;
      }
    }
    display: flex;
    align-items: center;
    width: 180px;
    height: 50px;
    border-radius: 30px;
    background-color: #f4d03f;
    color: #0d151d;
    justify-content: space-between;
    .outline {
      width: 30px;
      height: 30px;
      border: 3px solid #0d151d;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;
      .fas {
        font-size: 1rem;
      }
    }
    span {
      padding: 10px;
      // line-height: 50px;
      text-align: left;
      font-size: 1.3rem;
      font-weight: bold;
      margin-right: 10px;
    }
  }
  .containerFluid {
    width: 100%;
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