import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let verificarToken = request.cookies.get('login')
  let url = request.url


  if(!verificarToken && url.includes('/dashboard')){
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if(request.nextUrl.pathname === "/"){
    return NextResponse.redirect(new URL("/login", request.url));
  }


}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
