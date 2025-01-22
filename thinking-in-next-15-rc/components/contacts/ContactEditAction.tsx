import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

type ContactEditActionProps = {
	params: Promise<{ id: string }>;
};

export const ContactEditAction = ({ params }: ContactEditActionProps) => {
	const { id } = use(params);
	return (
		<div className='flex justify-end'>
			<Link href={`/contacts/${id}/edit`}>
				<Button>
					<Pencil className='mr-2 h-4 w-4' />
					Edit
				</Button>
			</Link>
		</div>
	);
};
