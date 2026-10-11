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
      name: 'Audio Player',
      description: 'Playlist audio player as a drop-in web component.',
      techStack: 'Svelte, Vite, custom elements',
      websiteLink: 'https://www.npmjs.com/package/@taocode/audio-player',
      githubLink: 'https://github.com/taocode/audio-player',
    },
    {
      name: 'Amber Ferenz',
      description: 'Static site with search and tags, now built with Zola.',
      techStack: 'Zola, Tailwind CSS, Pagefind, Firebase',
      websiteLink: 'https://amberferenz.com',
      githubLink: 'https://github.com/taocode/amberferenz.com',
    },
  ];
</script>

<section class="mj-container container">
  <h2 class="border-b-4 border-green-700">Current Projects</h2>
  {#each projects as project (project.name)}
    <div
      class="my-6 grid items-start gap-x-3 border-b border-gray-300 pb-3 md:grid-cols-[12rem_auto_minmax(0,1fr)]">
      <div class="flex items-center gap-3 md:contents">
        <h3 class="project-name my-0 font-bold">{project.name}</h3>
        <div class="flex items-center gap-2">
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
      </div>
      <div class="mt-3 md:mt-0">
        <p class="mb-1">{project.description}</p>
        <p class="my-0 text-sm">Built with {project.techStack}</p>
      </div>
    </div>
  {/each}
</section>

<style>
  .project-name {
    margin: 0;
  }
</style>
