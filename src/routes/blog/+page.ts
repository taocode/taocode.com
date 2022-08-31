export async function load({ fetch }) {
  try {
    const blog = await fetch(`/blog.json`);
    const posts = await blog.json();

    return { posts };
  } catch (error) {
    console.error(error);
  }
}
