<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am passionate about cybersecurity and web development and enjoy contributing to solutions that can positively impact an organization and the people it serves.',
				},
				{
					id: 2,
					bio:
						"Currently a Bachelor's Degree student in Multimedia and Internet Professions at Bordeaux University and in an apprenticeship contract as a Full-Stack Developer at Le Vieux Monastère.",
				},
				{
					id: 3,
					bio:
						'With almost 3 years of experience of programming and web development, my career takes me to get more involved in the cybersecurity industry, where my main focus has turned and will not rest until finding my place in the industry.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/memoji-laptop.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
