export const CacheTags = {
	dashboard: {
		monthlyRevenue: 'dashboard-monthly-revenue',
		customerAcquisition: 'dashboard-customer-acquisition',
		categoryDistribution: 'dashboard-category-distribution',
		stats: 'dashboard-stats',
	},
	contact: {
		list: 'contacts',
		item: (id: string) => ['contacts', id],
	},
} as const;
