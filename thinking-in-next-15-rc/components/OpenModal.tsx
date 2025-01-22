'use client';

import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

type OpenModalProps = {
	children: React.ReactNode;
	title: string;
};

export const OpenModal = ({ children, title }: OpenModalProps) => {
	const router = useRouter();

	const handleClose = () => {
		router.back();
	};

	return (
		<Dialog open={true} defaultOpen={true} onOpenChange={handleClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='text-base text-muted-foreground font-medium'>
						{title}
					</DialogTitle>
				</DialogHeader>
				<div>{children}</div>
			</DialogContent>
		</Dialog>
	);
};
