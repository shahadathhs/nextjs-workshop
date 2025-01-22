import { fetchCustomerAcquisition } from '@/api/dashboard';
import { CustomerAcquisition } from '@/feature/dashboard/components/CustomerAcquisition';

export default async function Customer() {
	const data = await fetchCustomerAcquisition();
	return <CustomerAcquisition data={data} />;
}
