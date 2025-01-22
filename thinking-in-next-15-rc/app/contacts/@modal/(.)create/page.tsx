import { createContact } from '@/actions/contact';
import { ContactForm } from '@/components/contacts/ContactForm';
import { OpenModal } from '@/components/OpenModal';

export default function ContactCreateModalPage() {
	return (
		<OpenModal title='Create A New Contact`'>
			<ContactForm action={createContact} />
		</OpenModal>
	);
}
