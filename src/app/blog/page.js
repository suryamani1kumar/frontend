import BlogList from "@/components/Blog/BlogList";
import { getBlog } from "@/service/apicalling";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: "Travel Blog & Guides | Tourmingle",
  description:
    "Read Tourmingle travel blog for vacation ideas to inspire your next trip.",
  keywords:
    "travel blog, travel guides, travel ideas, Tourmingle blog",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  },
  openGraph: {
    title:
      "Travel Blogs & Guides | Tourmingle",
    description:
      "Read Tourmingle travel blog for vacation ideas to inspire your next trip.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  },
};

export default async function BlogPage() {
  const blog = await getBlog();
  return (
    <div className="container">
      <BlogList blog={blog.blog} />
    </div>
  );
}
