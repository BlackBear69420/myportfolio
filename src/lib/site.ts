export const siteConfig = {
  name: "M Sumit Nayak",
  shortName: "M Sumit",
  title: "M Sumit Nayak | Software Engineer",
  description:
    "M Sumit Nayak is a Software Engineer with 3+ years of experience building production mobile and web apps — fintech trading platforms, Flutter, React Native, Next.js, Python, and FastAPI.",
  email: "sumitmnayak@gmail.com",
  location: "Belgaum, Karnataka, India",
  links: {
    github: "https://github.com/BlackBear69420",
    linkedin: "https://www.linkedin.com/in/m-sumit-nayak-057146229/",
  },
  keywords: [
    "M Sumit Nayak",
    "Sumit Nayak",
    "M Sumit Nayak Software Engineer",
    "who is M Sumit Nayak",
    "Flutter developer",
    "React Native developer",
    "Full Stack Developer Belgaum",
    "Python FastAPI developer",
  ],
};

export function getSiteUrl() {
  // Server-only — used in metadata, sitemap, robots, and JSON-LD (not client bundles)
  if (process.env.SITE_URL) {
    return process.env.SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  // Production portfolio
  return "https://myportfolio-azure-three.vercel.app";
}
