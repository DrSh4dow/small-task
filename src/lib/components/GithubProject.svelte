<script lang="ts">
	import { star, bookmark, members } from '$lib/svgPaths';

	export let name: string;
	export let description: string;
	export let language: string;
	export let stars: number;
	export let forks: number;
</script>

<article class="bg-brand-dirty-grey p-5 rounded-[4px] max-w-xl flex gap-3 flex-wrap">
	<div class="w-full">
		<img src="/images/github-icon.png" alt="github icon" />
	</div>
	<div class="flex items-center justify-start">
		<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d={bookmark} fill="#B3B3B3" />
		</svg>
		<h2 class="font-medium text-lg text-brand-black">{name}</h2>
	</div>
	<h5 class="text-brand-dark-grey text-sm font-medium">{description}</h5>
	<div class="flex gap-5">
		<figure>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="4" y="4" width="16" height="16" rx="8" fill="#D9D9D9" />
			</svg>
			<figcaption>{language}</figcaption>
		</figure>
		<figure>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path fill-rule="evenodd" clip-rule="evenodd" d={star} fill="#B3B3B3" />
			</svg>
			<figcaption>{stars}</figcaption>
		</figure>
		<figure>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path fill-rule="evenodd" clip-rule="evenodd" d={members} fill="#B3B3B3" />
			</svg>
			<figcaption>{forks}</figcaption>
		</figure>
	</div>
</article>

<style lang="postcss">
	figure {
		@apply text-brand-light-grey font-medium flex gap-1 justify-center items-center;
	}
</style>
