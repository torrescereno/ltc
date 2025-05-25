# LTC Notes

LTC Notes is a personal note-taking application. It's built using Astro, Tailwind CSS, and Preact, and is deployed on Vercel.

## Running the Project

1.  **Install dependencies:**
    ```bash
    pnpm install
    ```
2.  **Available Scripts:**
    *   `pnpm dev`: Runs the development server.
    *   `pnpm start`: Also runs the development server.
    *   `pnpm build`: Builds the project for production (includes type checking).
    *   `pnpm preview`: Serves the built project locally for preview.
    *   `pnpm astro`: Provides access to the Astro CLI.

## Project Structure

*   `src/content/note`: Contains the Markdown/MDX files for the notes.
*   `src/components`: Contains reusable Astro and Preact components.
*   `src/layouts`: Defines the basic layout structure for pages.
*   `src/pages`: Contains the Astro pages and routing logic.

## Technologies Used

*   [Astro](https://astro.build/): The web framework used for building the site.
*   [MDX](https://mdxjs.com/): Allows writing JSX in Markdown documents.
*   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
*   [Preact](https://preactjs.com/): Fast 3kB alternative to React with the same modern API.
*   [Vercel](https://vercel.com/): Platform for deployment.

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com/). The `astro.config.mjs` file includes the Vercel adapter for seamless deployment.
