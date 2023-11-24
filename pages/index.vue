<template>
  <main>
    <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
          <h1 class="text-grey-darkest">My Tasks</h1>
          <div class="flex mt-4">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" v-model="newTask"
              placeholder="Add a new task" @keypress.enter="add" />
            <button class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
              @click="add">Add</button>
          </div>
        </div>
        <div>
          <Task v-for="task in tasks" :key="task.id" :task="task" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions} from 'vuex';
export default {
  data() {
    return {
      newTask: "", 
    }
  },
  computed: mapState(['tasks']),
  methods: {
    ...mapActions(['addTask','fetchTasks']),
    add() {
      if (this.newTask) {
        // hit backend and add to store
        this.addTask({title: this.newTask, status:false});
        this.newTask = "";
      }
    }

  }, 
  created(){
    this.fetchTasks();
  }
}
</script>
