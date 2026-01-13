import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Highlights } from "@/components/sections/highlights";
import { TimelinePreview } from "@/components/sections/timeline-preview";

// --- 8. Optimized: Explicitly Static ---
export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Highlights />
      <TimelinePreview />
    </div>
  );
}
