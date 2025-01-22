import { z } from 'zod';

export const ContactSchema = z.object({
	id: z.string(),
	name: z.string().min(1),
	email: z.string().email(),
	phone: z.string().optional(),
	address: z.string().optional(),
});

export type Contact = z.infer<typeof ContactSchema>;

export const ContactCreateSchema = ContactSchema.omit({ id: true });
export type ContactCreate = z.infer<typeof ContactCreateSchema>;

export const ContactUpdateSchema = ContactSchema.partial();
export type ContactUpdate = z.infer<typeof ContactUpdateSchema>;
