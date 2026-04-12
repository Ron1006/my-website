import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
    // 👇 告诉 Tailwind 去哪里找你的代码
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [require("tailwindcss-animate"),],
};
export default config;