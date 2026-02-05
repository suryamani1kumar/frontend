import { axiosInstance } from "@/service/axiosInstance";

export const revalidate = 3600;
let blogUrl;

export default async function sitemap() {
  try {
    const response = await axiosInstance.get(`/sitemap`);
    blogUrl = response?.data?.blogUrl || [];
  } catch (error) {
    console.error("Failed to fetch dynamic sitemap data:", error);
  }

  blogUrl = blogUrl.map((url) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${url.pageUrl}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  return [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-and-condition`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrl,
  ];
}
