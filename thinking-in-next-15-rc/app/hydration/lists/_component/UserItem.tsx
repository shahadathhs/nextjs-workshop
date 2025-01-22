'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

type User = {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
};

export const UserItem = ({ user }: { user: User }) => {
	const [isActive, setIsActive] = useState(user.isActive);

	return (
		<div className='flex items-center justify-between p-4'>
			<div className='flex items-center gap-4'>
				<Avatar>
					<AvatarFallback>
						{user.name.substring(0, 1).toUpperCase()}
					</AvatarFallback>
				</Avatar>
				<div>
					<p className='font-medium'>{user.name}</p>
					<p className='text-sm text-gray-500'>{user.email}</p>
				</div>
			</div>
			<Switch
				checked={isActive}
				onCheckedChange={setIsActive}
				aria-label='Toggle user active status'
			/>
		</div>
	);
};
