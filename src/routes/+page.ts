export async function load({ fetch }: LoadInput) {
  const blog = await fetch(`/blog.json`);
  const posts = await blog.json();

  return {
  posts,
};
}
