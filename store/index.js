export const state = () => ({
    tasks: []
});

export const mutations = {
    setTasks(state, tasks){
        state.tasks = [...tasks];
    },
    setAddTask(state, task){
        state.tasks = [task, ...state.tasks];
    },
    setUpdateTask(state, task){
        state.tasks = [task, ...state.tasks.filter(element => element.id != task.id)];
    }
}

export const actions = {
    async fetchTasks({commit}){
        const response = await this.$axios.$get("http://localhost:8080/tasks");
        commit("setTasks", response)
      },
      async addTask({commit}, task){
        const response = await this.$axios.$post("http://localhost:8080/tasks", task);
        commit("setAddTask", response)
      },
      async updateTaskStatus({commit}, task){
        const response = await this.$axios.$put(`http://localhost:8080/tasks/${task.id}`, task);
        commit("setUpdateTask", response)
      }
}