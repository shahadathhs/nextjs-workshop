import { Suspense } from 'react';

type Props = {
	searchParams: Promise<{
		[key: string]: string | string[] | undefined;
	}>;
};

export default async function PprPage({ searchParams }: Props) {
	return (
		<div>
			<h1>PPR</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<SearchParamsDetails searchParams={searchParams} />
			</Suspense>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quam,
				asperiores iste dolore voluptas natus officia! Et assumenda qui, cum
				autem tempora, omnis sunt illo quis voluptatum, excepturi quo sapiente.
			</p>
		</div>
	);
}

const SearchParamsDetails = async ({ searchParams }: Props) => {
	const { page = '1', query = '' } = await searchParams;

	return (
		<div>
			<p>Page: {page}</p>
			<p>Query: {query}</p>
		</div>
	);
};
