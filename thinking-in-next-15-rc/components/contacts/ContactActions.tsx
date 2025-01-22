import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

type ContactActionsProps = {
	params: Promise<{ id: string }>;
};

export const ContactActions = ({ params }: ContactActionsProps) => {
	const { id } = use(params);

	return (
		<div className='flex items-center gap-2'>
			<Link href={`/contacts/${id}/edit`}>
				<Button variant='outline' size='icon'>
					<Pencil className='w-4 h-4' />
				</Button>
			</Link>
			<Button variant='destructive' size='icon'>
				<Trash2 className='w-4 h-4' />
			</Button>
		</div>
	);
};
