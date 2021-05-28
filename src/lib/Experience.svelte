<script>
    import ExperienceChart from './ExperienceChart.svelte';
</script>
<div class="bg-gray-900 text-gray-200 py-16">
    <article class="container mh-container -mt-16 leading-10" >
      <h2>Experience</h2>
        <div class="lg:flex">
            <div class="lg:w-1/2">
                <p>I've been around since Web 1.0, roughly <em>2 <abbr data-tooltip="Before Google Era" title="Before Google Era">BGE</abbr></em>, and have experience across a broad range of website technologies, from <abbr data-tooltip="Content Management System" title="Content Management System">CMS</abbr> to <abbr data-tooltip="Cascading Style Sheets" title="Cascading Style Sheets">CSS</abbr> including JavaScript, Node.js, NoSQL &amp; SQL, PHP, Python, and other languages as needed.</p>
            </div>
            <div class="lg:w-1/2">
                <ExperienceChart />
            </div>
        </div>
    
    
    </article>
</div>