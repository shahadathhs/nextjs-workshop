import { ContactDetails } from '@/components/contacts/ContactDetails';
import { ContactDetailSkeleton } from '@/components/contacts/ContactDetailSkeleton';
import { ContactEditAction } from '@/components/contacts/ContactEditAction';
import { OpenModal } from '@/components/OpenModal';
import { Suspense } from 'react';

type ModalParams = {
	params: Promise<{ id: string }>;
};

export default function Modal({ params }: ModalParams) {
	return (
		<OpenModal title='Reading Contact'>
			<Suspense fallback={<ContactDetailSkeleton />}>
				<ContactDetails params={params} />
			</Suspense>
			<div className='mt-4'>
				<Suspense fallback={<div>Loading...</div>}>
					<ContactEditAction params={params} />
				</Suspense>
			</div>
		</OpenModal>
	);
}
