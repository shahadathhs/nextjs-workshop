import { Contact } from '@/types/user';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { Mail, MapPin, Phone } from 'lucide-react';
import { use } from 'react';
import { setTimeout } from 'timers/promises';

const fetchContactById = async (id: string) => {
	await setTimeout(3000);
	const res = await fetch(`http://localhost:3001/contacts/${id}`, {
		cache: 'force-cache',
		next: {
			tags: ['contact', id],
			revalidate: 600,
		},
	});
	const data = await res.json();
	return data as Contact;
};

type ContactDetailsProps = {
	params: Promise<{ id: string }>;
};

export const ContactDetails = ({ params }: ContactDetailsProps) => {
	const { id } = use(params);
	const contact = use(fetchContactById(id));

	return (
		<div className='space-y-6'>
			<div className='flex items-center gap-4 pb-4'>
				<Avatar className='w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200'>
					<AvatarFallback className='text-xl font-semibold w-full h-full text-emerald-600 flex items-center justify-center'>
						{contact.name
							.split(' ')
							.map((n) => n[0])
							.join('')}
					</AvatarFallback>
				</Avatar>
				<div>
					<h1 className='text-2xl font-bold text-gray-900'>{contact.name}</h1>
					<p className='text-sm text-gray-500'>Contact ID: {id}</p>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='bg-gray-50 p-4 rounded-lg'>
					<div className='flex items-center gap-3 text-gray-700'>
						<Mail className='w-5 h-5 text-emerald-600' />
						<div>
							<p className='text-sm font-medium text-gray-500'>Email</p>
							<p>{contact.email}</p>
						</div>
					</div>
				</div>

				<div className='bg-gray-50 p-4 rounded-lg'>
					<div className='flex items-center gap-3 text-gray-700'>
						<Phone className='w-5 h-5 text-emerald-600' />
						<div>
							<p className='text-sm font-medium text-gray-500'>Phone</p>
							<p>{contact.phone || 'No phone number available'}</p>
						</div>
					</div>
				</div>

				<div className='bg-gray-50 p-4 rounded-lg md:col-span-2'>
					<div className='flex items-center gap-3 text-gray-700'>
						<MapPin className='w-5 h-5 text-emerald-600' />
						<div>
							<p className='text-sm font-medium text-gray-500'>Address</p>
							<p>{contact.address || 'No address available'}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
