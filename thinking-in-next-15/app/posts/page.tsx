import { Post } from '@/type/post';
import Link from 'next/link';

export const revalidate = 30;

export default async function PostsPage() {
	const posts: Post[] = await fetch(
		'https://jsonplaceholder.typicode.com/posts'
	).then((res) => res.json());

	return (
		<div>
			<h1 className='text-2xl font-bold'>Total {posts.length} posts</h1>
			<p className='text-sm text-gray-500'>
				Current Time: {new Date().toLocaleString()}
			</p>
			<ul className='mt-6'>
				{posts.map((post) => (
					<li key={post.id}>
						<Link prefetch={false} href={`/posts/${post.id}`}>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
