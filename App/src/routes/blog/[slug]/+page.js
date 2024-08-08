export async function load({ params }) {
	const post = await import(`$docs/posts/${params.slug}.md`);
	const { title, date, author, categories, cover } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		author,
		categories,
		cover
	};
}
