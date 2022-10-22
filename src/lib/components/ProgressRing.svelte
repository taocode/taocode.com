<script>
  export let title
  export let progress = 100
  export let from100 = false
  const dashArray = 280
  const dashOffsetStart = from100 ? 0 : dashArray
  $: style = `--progress: ${progress}; --dasharray: ${dashArray}; --dashoffsetstart: ${dashOffsetStart}`
</script>

<div class="percent" {title} {style}>
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45"></circle>
  <text x="50%" y="50%" text-anchor="middle" dy="16px" fill="currentColor" style="font-size:40px;">{progress}</text>
  </svg>
</div>

<style lang="postcss">
svg {
  @apply w-full h-full;
}

circle {  
  fill: none;
  stroke-width: 5;
  transform-origin: center;
  transform: rotate(-90deg);
  stroke-dasharray: var(--dasharray);
  stroke-linecap: round;
  stroke-dashoffset: calc(var(--dasharray) - (var(--dasharray) * var(--progress)) / 100);
  stroke: currentColor;
  animation: percent 1.5s ease-out;
  animation-delay: 1s;
}

@keyframes percent {
  0% {
    stroke-dashoffset: var(--dashoffsetstart);
    stroke-width: 0;
  }
}

</style>
