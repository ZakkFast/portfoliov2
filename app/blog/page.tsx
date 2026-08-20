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
        <header className="mb-14">
          <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
            Blog
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
            Things I&apos;ve built, learned, broken, and fixed.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Notes on software engineering, learning, debugging, and whatever else I&apos;m figuring out at the time.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="rounded-xl border border-cyan-300/70 bg-neutral-50 p-8 dark:border-neutral-700 dark:bg-white/[0.03]">
            <p className="text-neutral-600 dark:text-neutral-300">Nothing published yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-cyan-300/70 p-7 transition-colors hover:border-cyan-500 hover:bg-cyan-50/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 dark:border-neutral-700 dark:hover:border-neutral-500 dark:hover:bg-white/[0.03] sm:p-8"
              >
                <article>
                  <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                    <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{getReadingTime(post.body)} min read</span>
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-cyan-700 transition-colors group-hover:text-cyan-600 dark:text-cyan-300 dark:group-hover:text-cyan-200 sm:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-4xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
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
              </Link>
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
