import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	// Log the path being accessed
	console.log(`Accessing path: ${request.nextUrl.pathname}`);
	const headers = new Headers(request.headers);
	headers.set('x-path', request.nextUrl.pathname);
	headers.set('x-authenticated', getRandomBoolean(0.8).toString());

	// Continue to the next middleware or route handler
	return NextResponse.next({
		headers,
	});
}

// Configure which paths the middleware runs on
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

function getRandomBoolean(probability = 0.8): boolean {
	return Math.random() < probability;
}
