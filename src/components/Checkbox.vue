<script>
export default {
	props: {
		field: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: true
		}
	},
}
</script>

<template>
<label class="cursor-pointer py-2 flex items-center">
	<input
		type="checkbox"
		@click="$emit('udpateField', field)"
		class="hidden peer"
	>

	<div
		class="min-w-[1rem] min-h-[1rem] bg-white rounded border border-primary flex justify-center items-center	peer-checked:bg-primary peer-checked:text-white text-checkbox"
	>
		<i class="fa-solid fa-check hidden"></i>
	</div>

	<div class="pl-2">{{label}}</div>
</label>
</template>
