import { cn } from "@/shared/lib";
import type { ComponentPropsWithoutRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div className={cn("markdown-content space-y-5 sm:space-y-6", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ className: headingClassName, ...props }) => (
            <h1
              className={cn(
                "process-display text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-4xl",
                headingClassName
              )}
              {...props}
            />
          ),
          h2: ({ className: headingClassName, ...props }) => (
            <h2
              className={cn(
                "process-display text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-4xl",
                headingClassName
              )}
              {...props}
            />
          ),
          h3: ({ className: headingClassName, ...props }) => (
            <h3
              className={cn(
                "process-display text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground",
                headingClassName
              )}
              {...props}
            />
          ),
          p: ({ className: paragraphClassName, ...props }) => (
            <p
              className={cn(
                "text-sm leading-8 text-muted-foreground dark:text-foreground/78 sm:text-base",
                paragraphClassName
              )}
              {...props}
            />
          ),
          ul: ({ className: listClassName, ...props }) => (
            <ul
              className={cn(
                "list-disc space-y-3 pl-5 text-sm leading-7 text-muted-foreground marker:text-[#4f82bf] dark:text-foreground/78 dark:marker:text-[#78a7dd] sm:text-base",
                listClassName
              )}
              {...props}
            />
          ),
          ol: ({ className: listClassName, ...props }) => (
            <ol
              className={cn(
                "list-decimal space-y-3 pl-5 text-sm leading-7 text-muted-foreground marker:text-[#4f82bf] dark:text-foreground/78 dark:marker:text-[#78a7dd] sm:text-base",
                listClassName
              )}
              {...props}
            />
          ),
          li: ({ className: listItemClassName, ...props }) => (
            <li className={cn("pl-1", listItemClassName)} {...props} />
          ),
          strong: ({ className: strongClassName, ...props }) => (
            <strong className={cn("font-semibold text-foreground", strongClassName)} {...props} />
          ),
          a: ({ className: linkClassName, ...props }) => (
            <a
              className={cn(
                "font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground/30",
                linkClassName
              )}
              {...props}
            />
          ),
          blockquote: ({ className: quoteClassName, ...props }) => (
            <blockquote
              className={cn(
                "border-l-2 border-border/80 pl-4 text-sm italic text-muted-foreground dark:text-foreground/74 sm:text-base",
                quoteClassName
              )}
              {...props}
            />
          ),
          table: ({ className: tableClassName, ...props }) => (
            <div className="my-6 w-full overflow-x-auto">
              <table
                className={cn(
                  "w-full min-w-[36rem] border-collapse overflow-hidden rounded-2xl border border-border text-left text-sm",
                  tableClassName
                )}
                {...props}
              />
            </div>
          ),
          thead: ({ className: headClassName, ...props }) => (
            <thead className={cn("bg-muted/80 text-foreground", headClassName)} {...props} />
          ),
          tbody: ({ className: bodyClassName, ...props }) => (
            <tbody className={cn("[&_tr:last-child]:border-0", bodyClassName)} {...props} />
          ),
          tr: ({ className: rowClassName, ...props }) => (
            <tr className={cn("border-b border-border", rowClassName)} {...props} />
          ),
          th: ({ className: cellClassName, ...props }) => (
            <th className={cn("px-4 py-3 font-semibold text-foreground", cellClassName)} {...props} />
          ),
          td: ({ className: cellClassName, ...props }) => (
            <td
              className={cn(
                "px-4 py-3 align-top text-muted-foreground dark:text-foreground/78",
                cellClassName
              )}
              {...props}
            />
          ),
          hr: ({ className: hrClassName, ...props }) => (
            <hr className={cn("border-border/80", hrClassName)} {...props} />
          ),
          code: ({
            className: codeClassName,
            children,
            ...props
          }: ComponentPropsWithoutRef<"code">) => (
            <code
              className={cn(
                "rounded-md bg-muted px-1.5 py-0.5 text-[0.95em] font-medium text-foreground",
                codeClassName
              )}
              {...props}
            >
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
