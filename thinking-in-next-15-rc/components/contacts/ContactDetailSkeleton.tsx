import { Skeleton } from '@/components/ui/skeleton';
import { Mail, MapPin, Phone } from 'lucide-react';

export const ContactDetailSkeleton = () => {
	return (
		<div className='space-y-6'>
			<div className='flex items-center gap-4 pb-4'>
				<Skeleton className='w-16 h-16 rounded-full' />
				<div>
					<Skeleton className='h-7 w-48' />
					<Skeleton className='h-4 w-32 mt-2' />
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='bg-gray-50 p-4 rounded-lg'>
					<div className='flex items-center gap-3 text-gray-700'>
						<Mail className='w-5 h-5 text-gray-400' />
						<div className='flex-1'>
							<p className='text-sm font-medium text-gray-500'>Email</p>
							<Skeleton className='h-5 mt-1' />
						</div>
					</div>
				</div>

				<div className='bg-gray-50 p-4 rounded-lg'>
					<div className='flex items-center gap-3 text-gray-700'>
						<Phone className='w-5 h-5 text-gray-400' />
						<div className='flex-1'>
							<p className='text-sm font-medium text-gray-500'>Phone</p>
							<Skeleton className='h-5 mt-1' />
						</div>
					</div>
				</div>

				<div className='bg-gray-50 p-4 rounded-lg md:col-span-2'>
					<div className='flex items-center gap-3 text-gray-700'>
						<MapPin className='w-5 h-5 text-gray-400' />
						<div className='flex-1'>
							<p className='text-sm font-medium text-gray-500'>Address</p>
							<Skeleton className='h-5 mt-1' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
