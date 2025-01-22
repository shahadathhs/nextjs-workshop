import { Post } from '@/type/post';
import { User } from '@/type/user';
import Link from 'next/link';
import { Suspense, use } from 'react';
export const dynamic = 'force-dynamic';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchUsers = async () => {
	await sleep(3000);
	return fetch('https://jsonplaceholder.typicode.com/users').then(
		(res) => res.json() as Promise<User[]>
	);
};

const fetchAuthor = async (userId: number) => {
	await sleep(3000);
	return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
		(res) => res.json() as Promise<User>
	);
};

const fetchPosts = async () => {
	await sleep(4000);
	return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then(
		(res) => res.json() as Promise<Post[]>
	);
};

export default async function DynamicPostsPage() {
	return (
		<div className='space-y-6'>
			<nav className='flex justify-between items-center p-4 bg-zinc-900/80 text-white'>
				<h1 className='text-2xl font-bold'>Brand Name</h1>
				<ul className='flex gap-4'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/dynamic-posts'>Dynamic Posts</Link>
					</li>
				</ul>
			</nav>

			<Suspense fallback={<div>Loading Users...</div>}>
				<UserList fetchUsers={fetchUsers} />
			</Suspense>

			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum
				cum nesciunt quibusdam voluptatibus ipsam aut voluptas corrupti,
				quisquam reiciendis commodi dolores animi at dolorum consequatur omnis
				id voluptate et?
			</div>

			<Suspense fallback={<div>Loading Posts...</div>}>
				<PostList fetchPosts={fetchPosts} />
			</Suspense>
		</div>
	);
}

type PostListProps = {
	fetchPosts: () => Promise<Post[]>;
};
const PostList = ({ fetchPosts }: PostListProps) => {
	const posts = use(fetchPosts());
	return (
		<div>
			<h1 className='text-2xl font-bold'>Posts</h1>
			{posts.map((post) => (
				<div key={post.id}>
					<h1 className='text-xl font-bold'>{post.title}</h1>
					<Suspense
						fallback={
							<div className='flex items-center gap-2'>
								<div className='w-4 h-4 rounded-full animate-pulse border bg-zinc-400'></div>
								<div>Loading Author...</div>
							</div>
						}
					>
						<PostAuthor fetchAuthor={() => fetchAuthor(post.userId)} />
					</Suspense>
				</div>
			))}
		</div>
	);
};

type UserListProps = {
	fetchUsers: () => Promise<User[]>;
};
const UserList = ({ fetchUsers }: UserListProps) => {
	const users = use(fetchUsers());
	return (
		<div>
			<h1 className='text-2xl font-bold'>Users</h1>
			<div>
				{users.map((user) => (
					<div key={user.id} className='mb-2'>
						{user.name}
					</div>
				))}
			</div>
		</div>
	);
};

type PostAuthorProps = {
	fetchAuthor: () => Promise<User>;
};
const PostAuthor = ({ fetchAuthor }: PostAuthorProps) => {
	const author = use(fetchAuthor());
	return (
		<div className='flex items-center gap-2'>
			<div className='w-4 h-4 rounded-full border bg-zinc-400'></div>
			<div>{author?.name}</div>
		</div>
	);
};
