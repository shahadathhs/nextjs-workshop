import { Post } from '@/type/post';

export const revalidate = 30;

type Props = {
	params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Props) {
	const { id } = await params;
	const post: Post = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	).then((res) => res.json());

	return (
		<div>
			<p>ID: {post.id}</p>
			<p className='text-sm text-gray-500'>
				Current Time: {new Date().toLocaleString()}
			</p>
			<h1 className='text-2xl font-bold'>{post.title}</h1>
			<p className='mt-2 text-gray-500'>{post.body}</p>
		</div>
	);
}

export async function generateStaticParams() {
	const posts: Post[] = await fetch(
		'https://jsonplaceholder.typicode.com/posts'
	).then((res) => res.json());

	return posts.slice(0, 10).map((post) => ({ id: post.id.toString() }));
}
