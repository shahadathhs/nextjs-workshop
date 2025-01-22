import { RefreshButton } from '@/feature/dashboard/RefreshButton';

export default function DashboardTwoLayout({
	children,
	stats,
	revenue,
	category,
	customer,
}: {
	children: React.ReactNode;
	stats: React.ReactNode;
	revenue: React.ReactNode;
	category: React.ReactNode;
	customer: React.ReactNode;
}) {
	return (
		<div className='p-6 space-y-6'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl font-bold'>Dashboard Overview</h1>
				<RefreshButton />
			</div>
			{stats}

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{revenue}
				{category}
				{customer}
			</div>
			{children}
		</div>
	);
}
