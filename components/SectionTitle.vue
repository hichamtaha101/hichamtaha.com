<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	props: {
		title: {
			required: true,
			type: String,
		},
		className: String,
		titleClass: String,
		descriptions: {
			type: Array,
			required: false,
			default: [],
		},
	},
});
</script>
<template>
	<div :class="`flex flex-wrap justify-between gap-6 ${className}`">
		<h1 :class="titleClass || 'text-5xl lg:text-7xl'">{{ title }}</h1>
		<div class="max-w-5xl flex flex-col gap-6">
			<template v-if="descriptions.length">
				<p v-for="(d, di) in descriptions" :key="di">{{ d }}</p>
			</template>
			<slot></slot>
		</div>
	</div>
</template>
