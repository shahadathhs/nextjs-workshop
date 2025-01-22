'use client';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	Contact,
	ContactCreate,
	ContactCreateSchema,
	ContactUpdate,
	ContactUpdateSchema,
} from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

type ContactFormProps = {
	contact?: Contact;
	action: (data: FormData) => Promise<{
		success: boolean;
		message?: string;
		error?: string;
	}>;
};

type ActionState = {
	success?: boolean;
	error?: string;
	message?: string;
};

export function ContactForm({ contact, action }: ContactFormProps) {
	const [isPending, startTransition] = useTransition();
	const [actionState, setActionState] = useState<ActionState>({});

	const form = useForm({
		resolver: zodResolver(contact ? ContactUpdateSchema : ContactCreateSchema),
		defaultValues: {
			name: contact?.name ?? '',
			email: contact?.email ?? '',
			phone: contact?.phone ?? '',
			address: contact?.address ?? '',
		},
	});

	async function onSubmit(data: ContactCreate | ContactUpdate) {
		const formData = new FormData();
		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value ?? ''); // Ensure empty string for null/undefined
		});

		if (contact) {
			formData.append('id', contact.id);
		}

		startTransition(async () => {
			try {
				await action(formData);

				if (!contact) {
					form.reset();
				}

				setActionState({
					success: true,
					message: 'Contact created successfully',
				});
			} catch (error) {
				console.error(error);
				setActionState({
					success: false,
					error: 'An unexpected error occurred',
				});
			}
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder='John Doe' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type='email' placeholder='john@example.com' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone (Optional)</FormLabel>
							<FormControl>
								<Input placeholder='+1 234 567 8900' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='address'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Address (Optional)</FormLabel>
							<FormControl>
								<Input placeholder='123 Street, City, Country' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{actionState.success && (
					<p className='text-green-600'>
						Contact {contact ? 'updated' : 'created'} successfully!
					</p>
				)}
				{actionState.error && (
					<p className='text-red-600'>{actionState.error}</p>
				)}

				<Button type='submit' disabled={isPending}>
					{contact ? 'Update' : 'Create'} Contact
				</Button>
			</form>
		</Form>
	);
}
