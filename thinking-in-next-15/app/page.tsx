import Link from 'next/link';

export default function HomePage() {
	return (
		<div>
			<h1 className='text-2xl font-bold'>
				Home Page: {new Date().toLocaleString()}{' '}
			</h1>
			<Link href='/dynamic-posts'>Dynamic Posts</Link>
		</div>
	);
}
