import { defineCollection, z } from "astro:content";

const authors = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      fullName: z.string(),
      email: z.string().email(),
      bio: z.string(),
      image: z.string(),
      accounts: z.object({
        website: z.string(),
        twitter: z.string(),
        linkedin: z.string(),
      }),
    }),
  ),
});

const portfolio = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.array(
      z.object({
        id: z.number(),
        projectName: z.string(),
        projectDescription: z.string(),
        projectTag: z.string().email(),
        projectLink: z.string(),
        projectImage: z.object({
          src: image(),
          alt: z.string(),
        }),
      }),
    ),
});

export const collection = {
  authors: authors,
  portfolio: portfolio,
};
