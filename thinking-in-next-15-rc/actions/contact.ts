'use server';

import { ContactCreateSchema } from '@/types/user';
import { revalidatePath } from 'next/cache';
import { setTimeout } from 'timers/promises';
import { z } from 'zod';

export async function createContact(formData: FormData) {
	try {
		// Parse and validate form data
		const validatedFields = ContactCreateSchema.parse({
			name: formData.get('name'),
			email: formData.get('email'),
			phone: formData.get('phone'),
			address: formData.get('address'),
		});

		await setTimeout(1000);

		// Create contact
		const response = await fetch('http://localhost:3001/contacts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(validatedFields),
		});

		if (!response.ok) {
			throw new Error('Failed to create contact');
		}

		// Revalidate the contacts page
		revalidatePath('/contacts', 'layout');

		return {
			success: true as const,
			message: 'Contact created successfully',
		};
	} catch (error) {
		if (error instanceof z.ZodError) {
			return {
				success: false as const,
				error: 'Invalid form data. Please check your input.',
			};
		}

		return {
			success: false as const,
			error: 'Failed to create contact. Please try again.',
		};
	}
}

export async function updateContact(formData: FormData) {
	try {
		// Parse and validate form data
		const validatedFields = ContactCreateSchema.parse({
			name: formData.get('name'),
			email: formData.get('email'),
			phone: formData.get('phone'),
			address: formData.get('address'),
		});

		// Get contact ID from form data
		const id = formData.get('id');
		if (!id) {
			throw new Error('Contact ID is required');
		}

		// Update contact
		const response = await fetch(`http://localhost:3001/contacts/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(validatedFields),
		});

		if (!response.ok) {
			throw new Error('Failed to update contact');
		}

		// Revalidate the contacts page and contact detail page
		revalidatePath('/contacts', 'layout');
		revalidatePath(`/contacts/${id}`, 'layout');

		return {
			success: true as const,
			message: 'Contact updated successfully',
		};
	} catch (error) {
		if (error instanceof z.ZodError) {
			return {
				success: false as const,
				error: 'Invalid form data. Please check your input.',
			};
		}

		return {
			success: false as const,
			error: 'Failed to update contact. Please try again.',
		};
	}
}
