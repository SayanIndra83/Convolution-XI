import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // 1. Kick logged-in users away from auth pages
  if (token && (pathname.startsWith('/login') || pathname.startsWith('/register'))) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  // 2. Unauthorized Check (Not Logged In)
  if (!token && !pathname.startsWith('/login') && !pathname.startsWith('/register')) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 3. Verification Check (Logged in, but not verified)
  if (token && !token.isVerified && !pathname.startsWith('/login') && !pathname.startsWith('/register')) {
    return NextResponse.redirect(new URL('/verify-email', request.url));
  }

  // 4. Check if the user is trying to visit the Lead Dashboard
  if (pathname.startsWith('/lead-dashboard')) {
    if (token?.role !== 'LEAD') {
      return NextResponse.redirect(new URL('/lead-access', request.url));
    }
  }

  return NextResponse.next();
}

// The matcher remains the same and will save your Vercel limits!
export const config = {
  matcher: [
    '/profile/:path*',
    '/lead-dashboard/:path*',
    '/login',
    '/register'
  ],
};