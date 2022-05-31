import { NextResponse } from "next/server";

export default function middleware(req) {
  const url = req.url;
  if (url.includes(`dashboard`)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
