'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useRouter } from 'next/navigation';

export const PostDetailDialog = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [open, setOpen] = useState(true);
	const router = useRouter();

	const handleClose = () => {
		setOpen(false);
		router.back();
	};

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Read The Post</DialogTitle>
				</DialogHeader>
				<div>{children}</div>
			</DialogContent>
		</Dialog>
	);
};
