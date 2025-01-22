export default function BasicHydrationLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex flex-col min-h-screen'>
			<header className='bg-emerald-100 p-4'>
				<h1 className='text-2xl font-bold'>Basic Hydration</h1>
			</header>
			<main className='flex-grow p-4'>{children}</main>
			<footer className='bg-emerald-100 p-4'>
				<p className='text-sm text-gray-500'>Footer</p>
			</footer>
		</div>
	);
}
