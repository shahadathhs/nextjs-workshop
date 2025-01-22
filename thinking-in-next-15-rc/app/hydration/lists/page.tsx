import { Suspense } from 'react';
import { UserItem } from './_component/UserItem';

type User = {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
};

const fetchUsers = async (): Promise<User[]> => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	return data.map((user: User) => ({
		id: user.id,
		name: user.name,
		email: user.email,
		isActive: Math.random() > 0.5,
	}));
};

export default async function ListsPage() {
	return (
		<div className='max-w-2xl mx-auto'>
			<h1 className='text-2xl font-bold'>List of Users</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<UserList />
			</Suspense>
		</div>
	);
}

const UserList = async () => {
	const users = await fetchUsers();
	return (
		<ul className='flex flex-col gap-4'>
			{users.map((user) => (
				<li key={user.id} className='border-b border-gray-200 rounded-md'>
					<UserItem user={user} />
				</li>
			))}
		</ul>
	);
};
