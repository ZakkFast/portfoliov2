import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/layout/Container";
import { getBlogPosts, getReadingTime } from "../lib/contentful";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software engineering, building things, debugging, and learning along the way.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Zakk Fast",
    description: "Notes on software engineering, building things, debugging, and learning along the way.",
    url: "https://zakkfast.io/blog",
    type: "website",
  },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen pt-36 pb-20 sm:pt-40">
      <Container>
        <div className="mx-auto max-w-3xl">
          <header className="mb-14">
            <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
              Blog
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
              Things I&apos;ve built, learned, broken, and fixed.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              Notes on software engineering, learning, debugging, and whatever else I&apos;m figuring out at the time.
            </p>
          </header>

          {posts.length === 0 ? (
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-neutral-600 dark:text-neutral-300">Nothing published yet.</p>
            </div>
          ) : (
            <div className="divide-y divide-neutral-200 dark:divide-white/10">
              {posts.map((post) => (
                <article key={post.id} className="py-9 first:pt-0">
                  <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                    <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{getReadingTime(post.body)} min read</span>
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-3xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 dark:hover:text-cyan-300"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-300">
                    {post.excerpt}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-white/10 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
