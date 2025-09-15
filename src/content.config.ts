import { defineCollection, z } from "astro:content";

/*define a collection for our agency services, work process, Tools, authors and portfolio. */

const services = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        srcName: z.string(),
        alt: z.string(),
        width: z.number(),
        height: z.number(),
      }),
    })
  ),
});

const process = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        srcName: z.string(),
        alt: z.string(),
        width: z.number(),
        height: z.number(),
      }),
    })
  ),
});

const tools = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      category: z.string(),
      tools: z.array(
        z.object({
          name: z.string(),
          image: z.object({
            srcName: z.string(),
            alt: z.string(),
            width: z.number(),
            height: z.number(),
          }),
        })
      ),
    })
  ),
});

const authors = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      fullName: z.string(),
      email: z.string(),
      bio: z.string(),
      imageUrl: z.string(),
      profile: z
        .object({
          twitter: z.string().optional(),
          linkedin: z.string().optional(),
          website: z.string().optional(),
        })
        .optional(),
    })
  ),
});

const portfolio = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      id: z.union([z.string(), z.number()]),
      name: z.string(),
      description: z.string(),
      tag: z.string(),
      link: z.string().url().optional(),
      category: z.string().optional(),
      image: z.object({
        srcName: z.string(),
        alt: z.string(),
      }),
    })
  ),
});

export const collections = {
  services,
  process,
  tools,
  authors,
  portfolio,
};
