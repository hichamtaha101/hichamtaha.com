<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	props: {
		className: String,
		navClassName: String,
		currentSection: {
			type: String,
			required: false,
			default: 'balls',
		},
	},
	setup() {
		return {
			currentYear: new Date().getFullYear(),
		};
	},
});
</script>

<template>
	<header :class="`py-4 lg:py-8 z-10 w-full ${className}`">
		<nav
			:class="`flex justify-between font-light gap-4 flex-wrap ${navClassName}`"
		>
			<span class="uppercase">{{ currentSection }}</span>
			<a class="hover:opacity-80 transition-opacity hidden lg:block" href="/">
				{{ currentYear }}, HICHAM TAHA
			</a>
			<a class="hover:opacity-80 transition-opacity" href="/contact">CONTACT</a>
		</nav>
	</header>
</template>
