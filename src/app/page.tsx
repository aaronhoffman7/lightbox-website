// Server Component (no "use client" here)
import HomeView from "./components/HomeView";

export const metadata = {
  title: "Lightbox",
  description: "Site description",
};

export default function Page() {
  return <HomeView />;
}
