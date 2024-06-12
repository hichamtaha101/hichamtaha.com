<template>
	<div class="ht-page contact-page min-h-screen flex flex-col">
		<!-- Banner -->
		<div class="ht-banner z-20 relative text-white ht-bg-blue">
			<div class="ht-wrapper flex flex-col">
				<AppHeader
					currentSection="404 Not Found"
					class="border-b-2 border-white py-8"
				/>
				<Banner
					description="The page you have requested could not be found."
					title="Oops!"
				/>
			</div>
		</div>

		<!-- Return Home -->
		<div class="ht-bg-green flex items-center flex-grow p-4 sm:p-6">
			<div class="ht-wrapper">
				<div class="gap-4 flex-col flex text-center">
					<h2 class="text-3xl sm:text-5xl font-light">
						Oops, something went wrong!
					</h2>
					<p class="text-base sm:text-3xl font-light">Page Not Found</p>
					<a href="/" rel="canonical"
						><button class="ht-button w-fit m-auto">
							Return Home <i class="fa fa-home"></i></button
					></a>
				</div>
			</div>
		</div>
		<AppFooter />
	</div>
</template>
