import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { type Contact, ContactSchema } from '@/types/user';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { Suspense, use } from 'react';
import { z } from 'zod';

const fetchContacts = async () => {
	const res = await fetch('http://localhost:3001/contacts');
	const data: unknown = await res.json();
	const contacts = z.array(ContactSchema).parse(data);
	return contacts;
};

export default function ContactsPage() {
	return (
		<div className='max-w-lg mx-auto space-y-4'>
			<div className='flex justify-between items-center'>
				<h1 className='text-lg font-medium tracking-tight leading-5'>
					List of Contacts
				</h1>
				<Link href='/contacts/create'>
					<Button variant='outline' size='sm'>
						New Contact
					</Button>
				</Link>
			</div>
			<Suspense fallback={<ContactListSkeleton />}>
				<ContactList fetchContacts={fetchContacts()} />
			</Suspense>
		</div>
	);
}

type ContactListProps = {
	fetchContacts: Promise<Contact[]>;
};

const ContactList = ({ fetchContacts }: ContactListProps) => {
	const contacts = use(fetchContacts);
	return (
		<div className='card space-y-2'>
			{contacts.map((contact) => (
				<div
					key={contact.id}
					className='border border-dashed p-4 rounded hover:border-emerald-500/50 hover:bg-emerald-50/50 transition-colors group'
				>
					<div className='flex items-center gap-4'>
						<Avatar>
							<AvatarFallback className='bg-emerald-100'>
								{contact.name.charAt(0).toUpperCase()}
							</AvatarFallback>
						</Avatar>
						<div className='flex-grow'>
							<div className='text-sm font-medium'>{contact.name}</div>
							<div className='text-sm text-muted-foreground'>
								{contact.email}
							</div>
						</div>
						<Link href={`/contacts/${contact.id}`}>
							<Button
								variant='ghost'
								size='icon'
								className='opacity-0 rounded-full group-hover:opacity-100 transition-opacity'
							>
								<Eye className='h-4 w-4' />
							</Button>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

const ContactListSkeleton = () => {
	return (
		<div className='card space-y-2'>
			{Array.from({ length: 5 }).map((_, index) => (
				<Skeleton key={index} className='h-10' />
			))}
		</div>
	);
};
