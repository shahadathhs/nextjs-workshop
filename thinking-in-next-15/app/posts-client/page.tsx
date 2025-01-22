'use client';

import { useEffect, useState } from 'react';
import type { Post } from '@/type/post';

export default function PostsClientPage() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchPosts = async () => {
		const controller = new AbortController();
		setIsLoading(true);

		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts',
				{ signal: controller.signal }
			);
			const data = (await response.json()) as Post[];
			setPosts(data);
		} catch (error) {
			if (error instanceof Error && error.name === 'AbortError') {
				console.log('Fetch aborted');
			} else {
				console.error('Error fetching posts:', error);
			}
		} finally {
			setIsLoading(false);
		}

		return controller;
	};

	useEffect(() => {
		const controller = fetchPosts();

		return () => {
			controller.then((ctrl) => ctrl.abort());
		};
	}, []);

	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<h1>Total {posts.length} posts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}
