import { fetchMonthlyRevenue } from '@/api/dashboard';
import { MonthlyRevenue } from '@/feature/dashboard/components/MonthlyRevenue';

export default async function Revenue() {
	const data = await fetchMonthlyRevenue();
	return <MonthlyRevenue monthlyRevenue={data} />;
}
