<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		subTitle: String,
	},
});
</script>
<template>
	<div
		class="flex justify-between items-center text-lg min-h-60 lg:min-h-[28.125rem]"
	>
		<div>
			<a href="/">
				<div
					class="font-light cursor-pointer hover:opacity-80 transition-opacity pt-4 xs:pt-0"
				>
					<i class="fa fa-arrow-left mr-4" />Back To Home
				</div>
			</a>
			<h1 class="text-7xl mt-2">{{ title }}</h1>
			<div class="font-light" v-if="subTitle">{{ subTitle }}</div>
			<p class="my-12 max-w-4xl w-full">{{ description }}</p>
		</div>

		<div class="pr-12 hidden xs:block">
			<img
				src="~/assets/images/hero-content-right-align.png"
				height="303px"
				width="303px"
				alt="Hero Content Right Align"
			/>
		</div>
	</div>
</template>
