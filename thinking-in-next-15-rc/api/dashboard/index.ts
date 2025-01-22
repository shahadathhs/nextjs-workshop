import { setTimeout } from 'timers/promises';
import {
	unstable_cacheTag as cacheTag,
	unstable_cacheLife as cacheLife,
} from 'next/cache';
import { CacheTags } from '@/config/cache-config';

/**
 * @description Fetch monthly revenue data
 * @returns {Promise<{ month: string; revenue: number }[]>}
 */
export const fetchMonthlyRevenue = async () => {
	'use cache';

	await setTimeout(3000);
	if (Math.random() < 0.8) {
		throw new Error('Something went wrong');
	}

	const res = await fetch('http://localhost:3001/monthlyRevenue');
	const data = (await res.json()) as { month: string; revenue: number }[];

	cacheTag(CacheTags.dashboard.monthlyRevenue);
	cacheLife('hours');

	return data;
};

/**
 * @description Fetch category distribution data
 * @returns {Promise<{ name: string; value: number }[]>}
 */
export const fetchCategoryDistribution = async () => {
	'use cache';

	await setTimeout(4000);
	if (Math.random() < 0.8) {
		throw new Error('Something went wrong');
	}
	const res = await fetch('http://localhost:3001/categoryDistribution');
	const data = (await res.json()) as { name: string; value: number }[];

	cacheTag(CacheTags.dashboard.categoryDistribution);
	cacheLife('hours');

	return data;
};

/**
 * @description Fetch customer acquisition data
 * @returns {Promise<{ month: string; customers: number }[]>}
 */
export const fetchCustomerAcquisition = async () => {
	'use cache';

	await setTimeout(5000);
	if (Math.random() < 0.8) {
		throw new Error('Something went wrong');
	}
	const res = await fetch('http://localhost:3001/customerAcquisition');
	const data = (await res.json()) as { month: string; customers: number }[];

	cacheTag(CacheTags.dashboard.customerAcquisition);
	cacheLife('hours');

	return data;
};

/**
 * @description Fetch stats data
 * @returns {Promise<{ title: string; value: string; change: string }[]>}
 */
export const fetchStats = async () => {
	'use cache';

	await setTimeout(3000);
	const response = await fetch('http://localhost:3001/stats');
	const data = await response.json();

	const stats = data as {
		title: string;
		value: string;
		change: string;
	}[];

	cacheTag(CacheTags.dashboard.stats);
	cacheLife('hours');

	return stats;
};
