import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });


  if (token && (pathname.startsWith('/login') || pathname.startsWith('/register'))) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }


  if (!token && !pathname.startsWith('/login') && !pathname.startsWith('/register')) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (token && !token.isVerified && !pathname.startsWith('/login') && !pathname.startsWith('/register')) {
    return NextResponse.redirect(new URL('/verify-email', request.url));
  }

  if (pathname.startsWith('/lead-dashboard')) {
    if (token?.role !== 'LEAD') {
      return NextResponse.redirect(new URL('/lead-access', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/profile/:path*',
    '/lead-dashboard/:path*',
    '/login',
    '/register'
  ],
};