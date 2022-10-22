<script>

	export let enabled = false;
	const toggle = () => (enabled = !enabled);
</script>

<button
	type="button"
	title="Toggle Dark Mode"
	class:bg-gray-800={enabled}
	class="bg-gray-500 dark:(bg-gray-700 text-white) relative inline-flex flex-shrink-0 h-8 w-5 
	border-2 border-transparent rounded cursor-pointer transition-colors ease-in-out duration-200 
	
	focus:outline-none focus:ring focus:ring-offset focus:ring-green-500"
	aria-pressed="false"
	on:click={toggle}
>
	<span class="sr-only">Use setting</span>
	<div
		class="{enabled
			? 'translate-y-3 rounded-b'
			: 'translate-y-0 rounded-t'} pointer-events-none relative inline-block h-4 w-4 bg-white dark:(bg-black text-white)  transform ring-0 transition ease-in-out duration-200"
	>
		<div
			class="{enabled
				? 'opacity-0'
				: 'opacity-100'} ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
			aria-hidden="true"
		>
			<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				/>
			</svg>
		</div>
		<div
			class="{enabled
				? 'opacity-100 ease-in duration-200'
				: 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
			aria-hidden="true"
		>
			<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				/>
			</svg>
		</div>
	</div>
</button>
