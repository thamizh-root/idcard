import Link from "next/link";
import type { Metadata } from "next";
import { blogs } from "./blog-data";

export const metadata: Metadata = {
  title: "Blogs",
  description: "thamizh's blog",
};

export default function Blogs() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Blogs</h1>
      <div>
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={blog.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{blog.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {blog.publishedAt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
