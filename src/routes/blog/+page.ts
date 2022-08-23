export async function load({ fetch }: LoadInput) {
  try {
    const blog = await fetch(`/blog.json`);
    const posts = await blog.json();

    return { posts };
  } catch (error) {
    console.error(error);
  }
}
