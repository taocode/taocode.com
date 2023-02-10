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
				: 'opacity-100'} ease-in p-[2.5px] duration-200 absolute h-full w-full flex items-center justify-center transition-opacity duration-75"
			aria-hidden="true"
		>
				<div class="i-carbon-sun"></div>
		</div>
		<div 
			class="{enabled
				? 'opacity-100 ease-in duration-200'
				: 'opacity-0 ease-out duration-100'} absolute p-[1.75px] inset-0 h-full w-full flex items-center justify-center transition-opacity duration-75"
			aria-hidden="true"
		>
				<div class="i-carbon-moon"></div>
		</div>
	</div>
</button>
