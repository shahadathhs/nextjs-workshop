import { Post } from '@/types/post';
import { Suspense, use } from 'react';

export const fetchPost = async (id: string) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		cache: 'force-cache',
		next: {
			revalidate: 300,
		},
	});
	const data = await res.json();
	return data as Post;
};

type PostDetailProps = {
	params: Promise<{ id: string }>;
};

export const PostDetail = ({ params }: PostDetailProps) => {
	const { id } = use(params);
	const post = use(fetchPost(id));

	return (
		<div className='w-full'>
			<h1 className='text-xl font-semibold tracking-tight leading-5 mb-1'>
				{post.title}
			</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<Author id={post.userId} />
			</Suspense>
			<p className='text-sm text-gray-500 mt-6'>{post.body}</p>
		</div>
	);
};

const Author = async ({ id }: { id: number }) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
		cache: 'force-cache',
		next: {
			revalidate: 300,
		},
	});
	const data = await res.json();

	return <p className='text-sm text-gray-500'>Authored by {data.name}</p>;
};
