import { ContactActions } from '@/components/contacts/ContactActions';
import { ContactDetails } from '@/components/contacts/ContactDetails';
import { ContactDetailSkeleton } from '@/components/contacts/ContactDetailSkeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

type ContactPageProps = {
	params: Promise<{ id: string }>;
};

export default function ContactPage({ params }: ContactPageProps) {
	return (
		<div className='max-w-3xl mx-auto py-8 px-4'>
			<div className='flex items-center justify-between mb-8'>
				<div className='flex items-center gap-4'>
					<Link href='/contacts'>
						<Button variant='ghost' size='icon'>
							<ArrowLeft className='w-5 h-5' />
						</Button>
					</Link>
					<h1 className='text-2xl font-semibold'>Contact Details</h1>
				</div>
				<Suspense fallback={<div>Loading...</div>}>
					<ContactActions params={params} />
				</Suspense>
			</div>

			<div className='bg-white rounded-lg shadow-md p-6'>
				<Suspense fallback={<ContactDetailSkeleton />}>
					<ContactDetails params={params} />
				</Suspense>
			</div>
		</div>
	);
}
