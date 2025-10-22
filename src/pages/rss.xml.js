import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "REFLEJO - Visuals That Reflect Your Vision",
    description: "REFLEJO - Createive Co-op",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // ...post.data,
      link: `/blog/${post.slug}/`,
      stylesheet: "/rss/pretty-feed-v3.xsl",
    })),
  });
}
