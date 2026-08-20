import type { ReactNode } from "react";
import type { RichTextNode } from "../../lib/contentful";

interface RichTextProps {
  document: RichTextNode;
}

function renderText(node: RichTextNode, key: string) {
  let content: ReactNode = node.value || "";

  for (const mark of node.marks || []) {
    if (mark.type === "bold") content = <strong>{content}</strong>;
    if (mark.type === "italic") content = <em>{content}</em>;
    if (mark.type === "code") {
      content = (
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.95em] text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
          {content}
        </code>
      );
    }
  }

  return <span key={key}>{content}</span>;
}

function renderChildren(node: RichTextNode, key: string) {
  return (node.content || []).map((child, index) =>
    renderNode(child, `${key}-${index}`),
  );
}

function renderNode(node: RichTextNode, key: string): ReactNode {
  if (node.nodeType === "text") return renderText(node, key);

  const children = renderChildren(node, key);

  switch (node.nodeType) {
    case "document":
      return children;
    case "paragraph":
      return (
        <p key={key} className="my-5 leading-8 text-neutral-700 dark:text-neutral-300">
          {children}
        </p>
      );
    case "heading-2":
      return (
        <h2 key={key} className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-3xl">
          {children}
        </h2>
      );
    case "heading-3":
      return (
        <h3 key={key} className="mt-9 mb-3 text-xl font-semibold text-neutral-950 dark:text-white sm:text-2xl">
          {children}
        </h3>
      );
    case "heading-4":
      return (
        <h4 key={key} className="mt-7 mb-3 text-lg font-semibold text-neutral-950 dark:text-white">
          {children}
        </h4>
      );
    case "unordered-list":
      return (
        <ul key={key} className="my-5 list-disc space-y-2 pl-6 text-neutral-700 marker:text-cyan-500 dark:text-neutral-300 dark:marker:text-cyan-300">
          {children}
        </ul>
      );
    case "ordered-list":
      return (
        <ol key={key} className="my-5 list-decimal space-y-2 pl-6 text-neutral-700 marker:text-cyan-500 dark:text-neutral-300 dark:marker:text-cyan-300">
          {children}
        </ol>
      );
    case "list-item":
      return <li key={key} className="pl-1">{children}</li>;
    case "blockquote":
      return (
        <blockquote key={key} className="my-7 border-l-2 border-cyan-400 pl-5 text-lg text-neutral-600 dark:text-neutral-300">
          {children}
        </blockquote>
      );
    case "hr":
      return <hr key={key} className="my-10 border-neutral-200 dark:border-white/10" />;
    case "hyperlink":
      return (
        <a
          key={key}
          href={node.data?.uri || "#"}
          className="font-medium text-cyan-700 underline decoration-cyan-300 underline-offset-4 transition-colors hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    default:
      return <span key={key}>{children}</span>;
  }
}

export default function RichText({ document }: RichTextProps) {
  return <div>{renderNode(document, "root")}</div>;
}
