import { fetchCategoryDistribution } from '@/api/dashboard';
import { CategoryDistribution } from '@/feature/dashboard/components/CategoryDistribution';

export default async function Category() {
	const data = await fetchCategoryDistribution();
	return <CategoryDistribution data={data} />;
}
