import { PostDetail } from '@/components/post-detail';
import Link from 'next/link';
import { Suspense } from 'react';

type PostPageProps = {
	params: Promise<{ id: string }>;
};

export default function PostPage({ params }: PostPageProps) {
	return (
		<div>
			<div className='flex gap-2 items-center'>
				<Link href='/posts'>Back to Posts</Link>
				<h1>Post Detail Page</h1>
			</div>
			<Suspense fallback={<p>Loading...</p>}>
				<PostDetail params={params} />
			</Suspense>
		</div>
	);
}
