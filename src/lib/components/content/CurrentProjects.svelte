<script>
  import Icon from '@iconify/svelte';

  const projects = [
    {
      name: 'MedTimeLog',
      description: 'Medication time log with end-to-end encryption.',
      techStack:
        'SvelteKit, Svelte, Tailwind CSS v4, Skeleton UI, Supabase, Drizzle, Firebase',
      websiteLink: 'https://medtimelog.com',
      githubLink: 'https://github.com/taocode/medtimelog',
    },
    {
      name: '@taocode/audio-player',
      description: 'Playlist audio player as a drop-in web component.',
      techStack: 'Svelte, Vite, custom elements',
      websiteLink: 'https://www.npmjs.com/package/@taocode/audio-player',
      githubLink: 'https://github.com/taocode/audio-player',
    },
    {
      name: 'TAOCode',
      description: 'Personal website and blog with SvelteKit and TailwindCSS.',
      techStack:
        'SvelteKit, Svelte, Tailwind CSS v4, Skeleton UI, Markdown, GitHub, Firebase',
      websiteLink: 'https://www.taocode.com',
      githubLink: 'https://github.com/taocode/taocode.com',
    },
  ];
</script>

<section class="container mj-container">
  <h2 class="border-b-4 border-green-700">Current Projects</h2>
  {#each projects as project (project.name)}
    <div
      class="flex flex-wrap items-center justify-between pb-3 my-6 border-b border-gray-300">
      <div class="inline-flex items-baseline gap-2 w-full lg:w-1/4">
        <h3 class="my-0 font-bold break-all">{project.name}</h3>
        {#if project.websiteLink}
          <a
            href={project.websiteLink}
            class="inline-flex"
            target="site"
            aria-label="Link to Website for {project.name}">
            <Icon icon="feather:external-link" />
          </a>
        {/if}
        <a
          href={project.githubLink}
          class="inline-flex"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to GitHub for {project.name}">
          <Icon icon="fa6-brands:github" />
        </a>
      </div>
      <div class="w-full my-3 lg:w-3/4">
        <p>{project.description}</p>
        <p class="my-0 text-sm">Built with {project.techStack}</p>
      </div>
    </div>
  {/each}
</section>
