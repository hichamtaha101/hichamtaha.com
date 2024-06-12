<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	setup() {
		return {
			currentYear: new Date().getFullYear(),
		};
	},
});
</script>
<template>
	<footer class="py-8 text-white bg-[#16232d]">
		<div class="ht-wrapper">
			<nav class="flex flex-wrap justify-center items-center gap-4 font-light">
				<div class="hover:opacity-80 transition-opacity cursor-pointer">
					<a href="/">HICHAM TAHA</a>
				</div>
				<div>{{ currentYear }}</div>
				<div>•</div>
				<div class="hover:opacity-80 transition-opacity cursor-pointer">
					<a href="/#projects">PROJECTS</a>
				</div>
				<div>•</div>
				<div class="hover:opacity-80 transition-opacity cursor-pointer">
					<a href="/#skills">SKILLS</a>
				</div>
				<div>•</div>
				<div class="hover:opacity-80 transition-opacity cursor-pointer">
					<a href="/#about">ABOUT</a>
				</div>
			</nav>
		</div>
	</footer>
</template>
