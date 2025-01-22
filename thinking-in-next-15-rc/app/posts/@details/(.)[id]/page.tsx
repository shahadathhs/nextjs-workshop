import { PostDetail } from '@/components/post-detail';
import { PostDetailDialog } from '@/components/post-detail-dialog';
import { Suspense } from 'react';

type PostDetailsPageProps = {
	params: Promise<{ id: string }>;
};

export default function PostDetailsPage({ params }: PostDetailsPageProps) {
	return (
		<PostDetailDialog>
			<Suspense fallback={<p>Loading...</p>}>
				<PostDetail params={params} />
			</Suspense>
		</PostDetailDialog>
	);
}
