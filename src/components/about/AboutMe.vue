<script lang="ts" setup >
import AboutCounter from './AboutCounter.vue';
import AboutCerts from './AboutCerts.vue';

</script>

<template>
	<div class="flex flex-col gap-8 sm:flex-row sm:gap-10 mt-10 sm:mt-20">
		<!-- About Sidebar-->
		<div class="sidebar flex flex-col gap-6 md:flex-initial flex-auto border-regal-blue
				 border-b-2 lg:border-b-0 lg:border-r-2 rounded-xl pb-10">			
			<img
				src="/images/memoji-laptop.png"
				class="max-w-xs mx-auto sm:mx-0 sm:max-w-none w-3/4 sm:w-full"
				alt="about-me-image"
			/>
			<h2 class="text-4xl font-bold text-center mb-5 md:hidden">Who am I?</h2>

		<!-- About counter -->
		<AboutCounter display="column"/>
		</div>
		

		<!-- About Right side -->
		<div class="w-full text-left flex flex-col gap-8">
			<div class="textBox">
				<h2 class="hidden md:block text-4xl font-bold mb-5">Who am I?</h2>
				<!-- <p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p> -->
			<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				I am passionate about cybersecurity and web development. I enjoy contributing to solutions that can positively impact an organization and the people it serves.
			</p>
			<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				Currently a Bachelor's Degree student in Multimedia and Internet Professions at <a class="underline text-regal-blue font-bold" href="https://www.iut.u-bordeaux-montaigne.fr/">IUT Bordeaux Monntaigne</a> and in an apprenticeship contract as Full-Stack Developer at 
				<a class="underline text-regal-blue font-bold" href="https://snarkfactory.fr/">Snark Factory.</a>	
			</p>
			<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				With almost 4 years of experience in programming and web development, my career takes me to get more involved in the cybersecurity industry, where my main focus has turned and will not rest until finding my place in the industry.
			</p>
			</div>

			<!-- About Certs-->
			<AboutCerts />

		</div>
	</div>
</template>
