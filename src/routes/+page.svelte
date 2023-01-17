<script lang="ts">
	import GithubProject from '$lib/components/GithubProject.svelte';

	const openSourceContributions = [
		{
			name: 'Universal Keys & Values',
			description:
				'Universal DBMS for Docs • Graphs • Blobs • Vectors × in Local • Remote × RocksDB • LevelDB • UMem • UDisk × from C • C++ • Python • Java • GoLang',
			language: 'C++',
			forks: 4,
			stars: 64
		},
		{
			name: 'Unexceptionally Consistent Set',
			description:
				'If only std::set was a DBMS: collection of templated ACID in-memory exception-free thread-safe and concurrent containers in a header-only library',
			language: 'C++',
			forks: 4,
			stars: 64
		},
		{
			name: 'Uncluttered Navigable Small Worlds',
			description:
				'Tiny Approximate Nearest Neighbors Search library for large point clouds in not necceserily metric spaces, with online updates, and hardware acceleration with x86 AVX2, AVX-512, and Arm Neon',
			language: 'c++',
			forks: 4,
			stars: 64
		},
		{
			name: 'Uninterrupted JSON Remote Procedure Calls',
			description:
				'Remember FastAPI? This is 100x Fast-ER-API, implementing JSON-RPC, and based on interrupt-less IO technologies, like io_uring, and wrapped into a familiar Python interface',
			language: 'c++',
			forks: 4,
			stars: 64
		}
	];
</script>

<section class="mx-auto max-w-[1120px] p-4 md:p-0">
	<h2 class="font-medium text-2xl mb-3">Open source contributions</h2>
	<h5 class="text-brand-dark-grey text-sm mb-10">
		Our team created and is Maintaining the following Repositories.
	</h5>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
		{#each openSourceContributions as { name, description, forks, language, stars }}
			<GithubProject {name} {description} {forks} {language} {stars} />
		{/each}
	</div>
</section>
