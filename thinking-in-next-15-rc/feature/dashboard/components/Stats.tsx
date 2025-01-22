import { fetchStats } from '@/api/dashboard';
import { StatCard } from './StatCard';

export const Stats = async () => {
	const stats = await fetchStats();
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
			{stats.map((stat, index) => (
				<StatCard key={index} {...stat} />
			))}
		</div>
	);
};
