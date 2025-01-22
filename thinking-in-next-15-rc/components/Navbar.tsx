import { Suspense, use } from 'react';

import { headers } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
	return (
		<nav className='w-full h-16 bg-zinc-900 text-white flex items-center justify-between px-4'>
			<div className='container mx-auto flex items-center gap-6 justify-between px-4'>
				<div className='flex items-center gap-6'>
					<h1 className='text-2xl font-bold'>
						<Link href='/' className='hover:text-gray-400'>
							Brand Logo
						</Link>
					</h1>
					<div>
						<ul className='flex items-center gap-2'>
							<li>
								<Link href='/contacts' className='hover:text-gray-400'>
									Contacts
								</Link>
							</li>
							<li>
								<Link href='/posts' className='hover:text-gray-400'>
									Posts
								</Link>
							</li>
							<li>
								<Link href='/dashboards/one' className='hover:text-gray-400'>
									Dashboard 1
								</Link>
							</li>
							<li>
								<Link href='/dashboards/two' className='hover:text-gray-400'>
									Dashboard 2
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<Suspense fallback={<div>Loading...</div>}>
					<UserProfile />
				</Suspense>
			</div>
		</nav>
	);
};

const UserProfile = () => {
	const headerList = use(headers());
	const isAuthenticated = headerList.get('x-authenticated');

	if (isAuthenticated === 'false') {
		return (
			<div>
				<Link href='/login' className='hover:text-gray-400'>
					Login
				</Link>
			</div>
		);
	}

	const profile = use(
		fetch('http://localhost:3001/profile').then((res) => res.json())
	);

	return (
		<Suspense>
			<div className='flex items-center gap-2'>
				<Image
					src={profile.profileImage}
					alt={`${profile.name}'s avatar`}
					width={32}
					height={32}
					className='rounded-full'
				/>
				<span>{profile.name}</span>
			</div>
		</Suspense>
	);
};
