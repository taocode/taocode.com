export async function load({ fetch }) {
  const res = await fetch(`/blog.json`);
  return {
  posts: await res.json(),
};
}
