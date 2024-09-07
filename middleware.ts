import { NextResponse } from "next/server";

import getOrCreateDB from "./models/server/dbSetup";
import getOrCreateStorage from "./models/server/storageSetup";

export async function middleware() {
  await Promise.all([getOrCreateDB(), getOrCreateStorage()]);

  return NextResponse.next();
}

export const config = {
  /* match all request path except for the ones that start with:
    - api (API routes)
    - _next/static (static files)
    - _next/image (image optimization files)
    - favicon.ico (favicon file)
  */

  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
