<template>
    <div class="flex mb-4 items-center">
        <p :class="{'line-through': task.status}" class="w-full text-green">{{ task.title }}</p>
        <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey"
            @click="update">{{ task.status ? 'Undo' : 'Done' }}</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
	props: ['task'],
	methods: {
        ...mapActions(['updateTaskStatus']),
		update() {
			this.updateTaskStatus(this.task);
		}
	}
}
</script>