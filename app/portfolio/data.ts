// app/portfolio/data.ts

export interface Project {
  id: string;
  title: string;
  category: string;
  link: string;
  description: string;
  location: string;
  year: number;
  services: string;
  images: string[];
  coverImage: string; 
}

export const projects: Project[] = [
  {
    id: "del-tutto",
    title: "Del Tutto",
    category: "UI/UX Design and Development",
    link: "https://www.deltutto.co.nz/",
    description: "Although Del Tutto is a new name to the pool building industry in the Bay of Plenty/Waikato region, Isaac and his team have more than 20 years experience designing and building concrete swimming pools. A family business with strong ties to the region, the company lives by its name – 'altogether' (Italian o.).",
    location: "New Zealand",
    year: 2026,
    services: "UI/UX Design, Full-stack Development, Branding",
    coverImage: "/hero/hero1-mobile.png", // 列表页封面
    images: [
      "/hero/hero1.png", // 这里放你的长图
      "/hero/hero2.png", 
      "/hero/hero3.png"
    ]
  },
  {
    id: "quantum-leap",
    title: "Quantum Leap",
    category: "Web Application",
    link: "https://quantum-leap.com",
    description: "A cutting edge web application designed for high-performance data tracking and visualization in real-time environments.",
    location: "New Zealand",
    year: 2026,
    services: "UI/UX Design, Full-stack Development, Branding",
    coverImage: "/hero/hero2-mobile.png", // 列表页封面
    images: [
      "/hero/hero2.png",
      "/hero/hero4.png"
    ]
  }
];