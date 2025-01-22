export default function PostsLayout({
	children,
	details,
}: {
	children: React.ReactNode;
	details: React.ReactNode;
}) {
	return (
		<div>
			{children}
			{details}
		</div>
	);
}
