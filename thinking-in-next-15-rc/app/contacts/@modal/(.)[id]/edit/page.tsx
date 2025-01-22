import { updateContact } from '@/actions/contact';
import { ContactForm } from '@/components/contacts/ContactForm';
import { OpenModal } from '@/components/OpenModal';
import { ContactSchema } from '@/types/user';

type Props = {
	params: Promise<{ id: string }>;
};

export default function ContactEditModalPage({ params }: Props) {
	return (
		<OpenModal title='Editing Contact'>
			<ContactWrapper params={params} />
		</OpenModal>
	);
}

const ContactWrapper = async ({ params }: Props) => {
	const { id } = await params;
	const data = await fetch(`http://localhost:3001/contacts/${id}`).then((res) =>
		res.json()
	);
	const contact = ContactSchema.parse(data);

	return <ContactForm contact={contact} action={updateContact} />;
};
