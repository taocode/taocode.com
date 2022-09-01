<script>
  import Icon from 'svelte-awesome';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

  const projects = [
    {
      name: 'TAOCode',
      description:
        'Personal website and blog with SvelteKit and TailwindCSS.',
      techStack:
        'SvelteKit, Svelte, TailwindCSS, NodeJS, Rollup, Markdown, GitHub, Netlify',
      websiteLink: 'https://www.taocode.com',
      githubLink: 'https://github.com/taocode/taocode.com',
    },
    {
      name: 'TRAINcycle',
      description: 'Get training in the arts and arts production.',
      techStack: 'Hugo, TailwindCSS, Markdown, GitHub, Firebase',
      websiteLink: 'https://TRAINcycle.org',
      githubLink: 'https://github.com/taocode/traincycle-hugo-site',
    },
    {
      name: 'Mark Jones Voice',
      description: 'Hire me to bring life to your script.',
      techStack: 'Svelte, WindiCSS, Markdown, GitHub, Firebase',
      websiteLink: 'https://markjonesvoice.com',
      githubLink: 'https://github.com/taocode/markjonesvoice',
    },
  ];
</script>

<section class="container mj-container">
  <h2 class="border-b-4 border-green-700">Current Projects</h2>
  {#each projects as project}
    <div
      class="flex flex-wrap items-center justify-between pb-3 my-6 border-b border-gray-300"
    >
      <div class="inline-flex items-baseline w-full lg:w-1/4">
        <h3 class="my-0 font-bold break-all">{project.name}</h3>
        {#if project.websiteLink}
          <a
            href="{project.websiteLink}"
            class="inline-flex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Website for {project.name}"
          >
            <Icon data="{faExternalLinkAlt}" class="ml-3" />
          </a>
        {/if}
        <a
          href="{project.githubLink}"
          class="inline-flex"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to GitHub for {project.name}"
        >
          <Icon data="{faGithub}" class="ml-3" />
        </a>
      </div>
      <div class="w-full my-3 lg:w-3/4">
        <p>{project.description}</p>
        <p class="my-0 text-sm">Built with {project.techStack}</p>
      </div>
    </div>
  {/each}
</section>
