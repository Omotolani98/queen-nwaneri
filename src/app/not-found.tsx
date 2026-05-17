import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-6xl font-semibold tracking-wide">
        404
      </h1>
      <p className="mt-4 text-muted-foreground">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm underline underline-offset-4 transition-colors hover:text-muted-foreground"
      >
        Return to Gallery
      </Link>
    </div>
  );
}
