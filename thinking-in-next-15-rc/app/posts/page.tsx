import { Post } from '@/types/post';
import Link from 'next/link';
import { Suspense, use } from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchPosts = async () => {
	await sleep(1000);
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();
	return data as Post[];
};

export default async function PostsPage() {
	return (
		<div className='max-w-2xl space-y-4 mx-auto'>
			<div className='flex flex-col gap-2'>
				<h1 className='text-2xl font-bold'>List of Posts</h1>
				<p className='text-sm text-gray-500'>
					By clicking on the post you can read it immediately
				</p>
			</div>

			<Suspense fallback={<PostListSkeleton />}>
				<PostList fetchPost={fetchPosts()} />
			</Suspense>
		</div>
	);
}

type Props = {
	fetchPost: Promise<Post[]>;
};

const PostList = ({ fetchPost }: Props) => {
	const posts = use(fetchPost);

	return (
		<div className='flex flex-col gap-2'>
			{posts.map((post) => (
				<div
					key={post.id}
					className='bg-card border border-border rounded-md p-4'
				>
					<h2 className='text-lg font-medium'>
						<Link href={`/posts/${post.id}`}>
							{post.id} - {post.title}
						</Link>
					</h2>
				</div>
			))}
		</div>
	);
};

const PostListSkeleton = () => {
	return (
		<div className='flex flex-col gap-2'>
			{Array.from({ length: 10 }).map((_, index) => (
				<div
					key={index}
					className='bg-card border animate-pulse border-border rounded-md p-4'
				></div>
			))}
		</div>
	);
};
