import {
	fetchCategoryDistribution,
	fetchCustomerAcquisition,
	fetchMonthlyRevenue,
} from '@/api/dashboard';
import { DisplayError } from '@/components/DisplayError';
import {
	CategoryDistribution,
	CategoryDistributionSkeleton,
	CustomerAcquisition,
	CustomerAcquisitionSkeleton,
	MonthlyRevenue,
	MonthlyRevenueSkeleton,
	Stats,
	StatsSkeleton,
} from '@/feature/dashboard';
import { RefreshButton } from '@/feature/dashboard/RefreshButton';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function DashboardOnePage() {
	return (
		<div className='p-6 space-y-6'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl font-bold'>Dashboard Overview</h1>
				<RefreshButton />
			</div>

			<ErrorBoundary
				fallback={
					<DisplayError title='Stats Error' error='Something went wrong' />
				}
			>
				<Suspense fallback={<StatsSkeleton />}>
					<Stats />
				</Suspense>
			</ErrorBoundary>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<ErrorBoundary
					fallback={
						<DisplayError
							title='Monthly Revenue Error'
							error='Something went wrong'
						/>
					}
				>
					<Suspense fallback={<MonthlyRevenueSkeleton />}>
						<MonthlyRevenueWrapper />
					</Suspense>
				</ErrorBoundary>

				<ErrorBoundary
					fallback={
						<DisplayError
							title='Category Distribution Error'
							error='Something went wrong'
						/>
					}
				>
					<Suspense fallback={<CategoryDistributionSkeleton />}>
						<CategoryDistributionWrapper />
					</Suspense>
				</ErrorBoundary>

				<ErrorBoundary
					fallback={
						<DisplayError
							title='Customer Acquisition Error'
							error='Something went wrong'
						/>
					}
				>
					<Suspense fallback={<CustomerAcquisitionSkeleton />}>
						<CustomerAcquisitionWrapper />
					</Suspense>
				</ErrorBoundary>
			</div>
		</div>
	);
}

const MonthlyRevenueWrapper = async () => {
	const data = await fetchMonthlyRevenue();
	return <MonthlyRevenue monthlyRevenue={data} />;
};

const CategoryDistributionWrapper = async () => {
	const data = await fetchCategoryDistribution();
	return <CategoryDistribution data={data} />;
};

const CustomerAcquisitionWrapper = async () => {
	const data = await fetchCustomerAcquisition();
	return <CustomerAcquisition data={data} />;
};
