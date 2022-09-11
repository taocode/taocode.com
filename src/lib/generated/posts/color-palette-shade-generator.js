import meta from '$lib/assets/blog/color-palette-shade-generator/color-palette-shade-generator-thumbnail.png?width=672&metadata';
import srcsetwebp from '$lib/assets/blog/color-palette-shade-generator/color-palette-shade-generator-thumbnail.png?w=1280;672&webp&srcset';
import srcsetauto from '$lib/assets/blog/color-palette-shade-generator/color-palette-shade-generator-thumbnail.png?w=1280;672&png&srcset';
import ogImage from '$lib/assets/blog/color-palette-shade-generator/folding-camera-open-graph.jpg';
import ogSquareImage from '$lib/assets/blog/color-palette-shade-generator/folding-camera-open-graph-square.jpg';
import twitterImage from '$lib/assets/blog/color-palette-shade-generator/folding-camera-twitter.jpg';

const { height, src, width } = meta;

const data = {
  slug: 'color-palette-shade-generator',
  alt: 'Color Palette Shade Generator thumbnail',
  width,
  height,
  src,
  sources: [
    { srcset: srcsetwebp, type: 'image/webp' },
    { srcset: srcsetauto, type: 'image/png' },
  ],
  dominantColour: '#9838a8',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQMG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQT/2gAMAwEAAhADEAAAADL7syo//8QAIRAAAQIEBwAAAAAAAAAAAAAAAQADAhITMhEhIkFSYbH/2gAIAQEAAT8AE+Mqojl4mm4JG9Ish26ToFSPIXFf/8QAGREAAgMBAAAAAAAAAAAAAAAAAgMAARIx/9oACAECAQE/AKc3RDrk/8QAGhEAAQUBAAAAAAAAAAAAAAAABAABAgMRIf/aAAgBAwEBPwAku8eWN1f/2Q==',
  ogImage,
  ogSquareImage,
  twitterImage,
};

export { data as default };
