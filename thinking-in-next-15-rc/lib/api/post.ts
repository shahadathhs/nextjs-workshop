import { Post } from '@/types/post';

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
