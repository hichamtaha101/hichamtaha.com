<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { backendSkills, frontendSkills } from '~/assets/js/skills';
import projects from '~/assets/js/projects';
export default defineComponent({
	setup() {
		const activeAboutSection = ref('education-and-work');
		const activeSection = ref('Skills');
		const mappedActiveSections = {
			skills: 'Skills',
			projects: 'Projects',
			about: 'About',
		} as any;

		onMounted(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							activeSection.value = mappedActiveSections[entry.target.id];
						}
					});
				},
				{
					rootMargin: '0px',
					threshold: 0.1,
				}
			);
			observer.observe(document.querySelector('#skills') as HTMLElement);
			observer.observe(document.querySelector('#projects') as HTMLElement);
			observer.observe(document.querySelector('#about') as HTMLElement);

			return () => {
				observer.disconnect();
			};
		});

		return {
			activeAboutSection,
			activeSection,
			mappedActiveSections,
			backendSkills,
			frontendSkills,
			projects,
		};
	},
});
</script>
<template>
	<div class="ht-page homepage">
		<AppHeader
			className="z-10 fixed top-0 left-0 w-full text-white ht-bg-blue"
			navClassName="ht-wrapper"
			:currentSection="activeSection"
		/>
		<div class="ht-banner z-20 relative ht-bg-blue text-white">
			<!-- Banner -->
			<div class="ht-wrapper flex flex-col">
				<AppHeader
					className="border-b-2 border-white py-8"
					currentSection="Introduction"
				/>
				<div
					class="flex justify-between flex-wrap lg:flex-nowrap flex-grow items-center py-6 lg:py-12"
				>
					<!-- Banner Left Side Content -->
					<div class="w-full max-w-4xl order-2 lg:order-1 pb-24 pt-6 lg:pt-0">
						<div>
							<h1 class="text-3xl">Full Stack</h1>
							<h2 class="text-6xl lg:text-7xl">Developer</h2>
							<p class="font-light mt-6 lg:mt-12">
								I am a developer with over 8 years of experience in content
								management, inventory management, digital marketing, and
								cryptocurrency services. Proficient in modern web frameworks, I
								am currently focusing on Next, Nuxt, Sanity, MongoDB, Node, and
								AWS development. I work full-time at Evans Hunt.
							</p>
							<p class="font-light mt-6">
								I hold a Bachelor’s degree in Information Technology from
								Kwantlen Polytechnic University, specializing in Web and Mobile
								Application Development. Driven by a passion for technological
								innovation, I continually explore and adopt new tools and
								practices to expand my skill set.
							</p>
						</div>
						<span class="text-lg font-light absolute bottom-8 lg:bottom-8">
							<i class="fa fa-arrow-down mr-4" /><span
								>Scroll To Learn More</span
							>
						</span>
					</div>

					<!-- Banner Right Side Diamond -->
					<div
						class="w-full order-1 lg:order-2 p-0 lg:p-28 lg:max-w-[44.375rem]"
					>
						<div
							class="p-0 lg:p-12 rotate-0 lg:rotate-45 border-0 lg:border-2 border-white m-auto flex justify-center"
						>
							<img
								src="~/assets/images/profile.jpg"
								height="1000px"
								width="1001px"
								alt="Hicham Taha Profile Picture"
								class="rotate-0 lg:-rotate-45 max-w-[24.125rem] max-h-[24.125rem] rounded-full w-full aspect-square"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Skills Section -->
		<div class="ht-bg-pink" id="skills">
			<div class="ht-wrapper py-16 lg:py-32">
				<SectionTitle
					title="Skills"
					:descriptions="[
						`With over 8 years of experience in web and software development, I have worked with a wide range of tools and technologies. The grid below ranks my technical competencies from most to least comfortable, with each listed skill having played a key role in at least one of my projects.`,
					]"
				>
					<span class="ht-button w-max">
						Check out my skill below <i class="fa fa-arrow-down ml-1" />
					</span>
				</SectionTitle>

				<div class="border-t border-black pt-8 mt-8 lg:pb-16 lg:mt-16" />
				<div
					class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 justify-between"
				>
					<div>
						<p class="text-lg font-light">Front End</p>
						<div
							v-for="(skill, i) in frontendSkills"
							:key="i"
							class="flex items-end mt-12"
						>
							<div class="w-40 text-6xl"><i :class="skill.icon" /></div>
							<div class="flex-grow">
								<p class="font-light mb-1">{{ skill.name }}</p>
								<div class="border border-black h-6">
									<div
										class="bg-black h-full"
										:style="`width: ${skill.percentage}%`"
									/>
								</div>
							</div>
						</div>
					</div>
					<div>
						<p class="text-lg font-light">Back End</p>
						<div
							v-for="(skill, i) in backendSkills"
							class="flex items-end mt-12"
							:key="i"
						>
							<div class="w-40 text-6xl"><i :class="skill.icon" /></div>
							<div class="flex-grow">
								<p class="font-light mb-1">{{ skill.name }}</p>
								<div class="border border-black h-6">
									<div
										class="bg-black h-full"
										:style="`width: ${skill.percentage}%`"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Projects Section -->
		<div class="ht-projects ht-bg-green" id="projects">
			<div class="ht-wrapper py-16 lg:py-32">
				<SectionTitle
					title="Projects"
					:descriptions="[
						'Below is a timeline of projects i\'ve developed throughout my professional career sorted by completion date. In general, i\'ve created API services, web platforms, automation scripts, websites, and e-commerce solutions. You may view the individual projects in detail by clicking on their “Learn More” button.',
					]"
				>
					<span class="ht-button w-max">
						View my projects below <i class="fa fa-arrow-down ml-1" />
					</span>
				</SectionTitle>
				<div class="border-t border-black pb-12 mt-12 lg:pb-24 lg:mt-24" />
				<div class="ht-projects-grid">
					<div
						v-for="(project, i) in projects"
						class="relative flex flex-col"
						:key="i"
					>
						<h3 class="text-4xl font-normal">
							0{{ i + 1 }} {{ project.title }}
						</h3>
						<h4 class="font-normal mt-1">{{ project.timeline }}</h4>
						<p class="mt-8 mb-6 font-light" :title="project.description">
							{{
								project.description.length > 200
									? project.description.substring(
											0,
											project.description.lastIndexOf(' ', 200)
										) + '...'
									: project.description
							}}
						</p>
						<a
							:href="project.link"
							rel="canonical"
							class="ht-button w-full lg:w-max mt-auto inline-flex gap-1 justify-between lg:justify-start"
						>
							<span>Learn More</span><i class="fa fa-plus" />
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- About Me Section -->
		<div class="ht-about-me ht-bg-pink" id="about">
			<div class="ht-wrapper">
				<div class="pb-6 pt-20 lg:pt-40 lg:pb-12">
					<SectionTitle titleClass="text-5xl lg:text-7xl" title="About Me" />
				</div>

				<!-- Below About Me Section -->
				<div class="flex flex-col md:flex-row">
					<div class="max-w-xl w-full flex md:flex-col">
						<button
							:class="`ht-about-me__link ${activeAboutSection === 'education-and-work' ? 'active' : 'md:border-b md:border-black'}`"
							@click="activeAboutSection = 'education-and-work'"
						>
							Education & Work
						</button>
						<button
							:class="`ht-about-me__link ${activeAboutSection === 'personal-hobbies' ? 'active' : 'md:border-b md:border-black'}`"
							@click="activeAboutSection = 'personal-hobbies'"
						>
							Personal Hobbies
						</button>
					</div>
					<div
						class="p-6 md:py-10 md:pl-14 md:flex-grow bg-white ht-about-me__content min-h-[31.25rem]"
					>
						<div class="max-w-5xl ml-auto">
							<template v-if="activeAboutSection === 'education-and-work'">
								<p>
									I am a post-graduate from Kwantlen Polytechnic University with
									a Bachelors in Information and Technology. The program I
									attended covered general computer hardware and software
									concepts, business statistics, and technology in web
									development and networking. I specialized in web and mobile
									application development with a GPA of 3.8.
								</p>
								<p class="mt-6">
									I currently work at Evans Hunt Group, focusing on back-end and
									full-stack projects. My preferred development stack includes
									MongoDB, Express, Node.js, Vue/Nuxt, and Amazon Web Services
									for infrastructure and deployment support.
								</p>
							</template>
							<template v-if="activeAboutSection === 'personal-hobbies'">
								<p>
									Outside of work hours, i'm still a developer. A fair amount of
									my spare time is invested in learning new development tools
									and techniques. I'm subscribed to various learning platforms
									such as Udemy, Code Academy and Team Tree House.
								</p>
								<p class="mt-6">
									Outside of development, watching television, playing video
									games, or hitting the gym is where i'll be. I enjoy fitness
									and try to be physically active at least three days of the
									week. Regarding television, I generally watch anything from
									popular television series to silly cartoons and animes.
									Lastly, I enjoy classic games on my switch, or playing Counter
									Strike and Stardew Valley on my gaming desktop.
								</p>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
