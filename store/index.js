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
        const response = await this.$axios.$get(`${process.env.baseUrl}/tasks`);
        commit("setTasks", response)
      },
      async addTask({commit}, task){
        const response = await this.$axios.$post(`${process.env.baseUrl}/tasks`, task);
        commit("setAddTask", response)
      },
      async updateTaskStatus({commit}, task){
        const response = await this.$axios.$put(`${process.env.baseUrl}/tasks/${task.id}`, task);
        commit("setUpdateTask", response)
      }
}