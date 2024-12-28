<script setup lang="ts">
import projects from '~/assets/js/projects';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';

definePageMeta({
	validate: async (route) => {
		// Check if the id is made up of digits
		return projects.findIndex((p) => p.id === route.params.id) !== -1;
	},
});

const route = useRoute();
const findIndex = projects.findIndex((p) => p.id === route.params.id);

const index = ref(findIndex);
const project = ref(projects[findIndex]);
const prevProject = ref(
	projects[findIndex - 1]
		? {
				title: projects[findIndex - 1].title,
				link: projects[findIndex - 1].link,
			}
		: false
);
const nextProject = ref(
	projects[findIndex + 1]
		? {
				title: projects[findIndex + 1].title,
				link: projects[findIndex + 1].link,
			}
		: false
);

const splideSettings = ref({
	type: 'loop',
	drag: true,
	trimSpace: false,
	focus: 'left',
	perPage: 2,
	width: '100vw',
	padding: 0,
	gap: 32,
	arrows: false,
	pagination: false,
	pauseOnHover: false,
	pauseOnFocus: false,
	autoplay: true,
	breakpoints: {
		992: {
			perPage: 1,
		},
		640: {
			gap: 16,
		},
	},
});

// onMounted(() => {
// 	new Splide('#ht_project_slider_0', );
// });
</script>
<template>
	<Head>
		<Title>{{ project.title }}</Title>
		<Meta name="description" :content="project.description" />
	</Head>
	<div class="ht-page project-page">
		<!-- Banner -->
		<div class="ht-banner z-20 relative text-white ht-bg-blue">
			<div class="ht-wrapper flex flex-col">
				<AppHeader
					:currentSection="project.title"
					class="border-b-2 border-white py-8"
				/>
				<Banner
					:description="project.description"
					:title="project.title"
					:subTitle="project.timeline"
				/>
			</div>
		</div>

		<!-- Project Details -->
		<div class="ht-bg-green pt-20">
			<div class="ht-wrapper flex flex-col gap-32">
				<div v-for="(s, si) in project.sections" :key="si">
					<SectionTitle
						className="flex-col"
						:title="s.title"
						titleSize="text-5xl"
						:descriptions="s.titleDescriptions"
					>
						<div
							class="flex gap-6 items-center"
							v-if="s.slides.length || s.link"
						>
							<p class="ht-button" v-if="s.slides.length">
								Learn More <i class="fa fa-arrow-down ml-1" />
							</p>
							<a
								class="ht-button"
								v-if="s.link"
								:href="s.link"
								target="_blank"
								rel="noreferrer"
								><span> Visit Website</span><i class="fa fa-link ml-1"
							/></a>
						</div>
					</SectionTitle>
					<Splide :options="splideSettings" class="my-12">
						<SplideSlide v-for="(slide, sii) in s.slides" :key="sii">
							<div class="aspect-[18/11] overflow-y-auto ht-scrollbar">
								<img :src="slide.src" :alt="slide.title" />
							</div>
							<p
								class="font-light text-lg border-t border-black inline-block mt-2 pt-3"
							>
								{{ sii + 1 }}. {{ slide.title }}
							</p>
						</SplideSlide>
					</Splide>
				</div>
			</div>
			<!-- Project Navigation -->
			<div class="ht-wrapper pb-16 flex flex-col sm:flex-row gap-4">
				<a
					v-if="prevProject"
					rel="canonical"
					:href="prevProject.link"
					class="ht-button"
					><span
						><i class="fa fa-arrow-left mr-2" />{{ index }}.
						{{ prevProject.title }}</span
					></a
				>
				<div class="ht-button flex-grow text-left sm:text-center">
					{{ index + 1 }}. {{ project.title }}
				</div>
				<a
					v-if="nextProject"
					rel="canonical"
					:href="nextProject.link"
					class="ht-button"
					><span>
						{{ index + 2 }}. {{ nextProject.title
						}}<i class="ml-2 fa fa-arrow-right" /></span
				></a>
			</div>
		</div>
	</div>
</template>
<style lang="postcss">
.ht-scrollbar {
	&::-webkit-scrollbar {
		width: 8px;
		background-color: #f5f5f5;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #fff;
		background-image: -webkit-gradient(
			linear,
			40% 0%,
			75% 84%,
			from(#4d9c41),
			to(#19911d),
			color-stop(0.6, #54de5d)
		);
	}
}
</style>
