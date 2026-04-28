import {
  ContactSection,
  IntroSection,
  ProcessSection,
  ServicesSection,
  TestimonialsSection,
  WorkSection,
} from "@/components/sections";
import { FramerCtaButton } from "@/components/framer-blocks";
import { MergedHero } from "@/components/merged-hero";
import { RevealFromRight } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <>
      <main>
        <MergedHero />
        <RevealFromRight>
          <IntroSection />
        </RevealFromRight>
        <RevealFromRight>
          <ServicesSection />
        </RevealFromRight>
        <RevealFromRight>
          <WorkSection />
        </RevealFromRight>
<RevealFromRight>
          <ProcessSection />
        </RevealFromRight>
        <RevealFromRight>
          <TestimonialsSection />
        </RevealFromRight>
        <RevealFromRight>
          <ContactSection />
        </RevealFromRight>
        <RevealFromRight className="w-full">
          <div className="flex items-center justify-center py-10">
            <FramerCtaButton />
          </div>
        </RevealFromRight>
      </main>
      <footer className="border-t border-mts-line bg-mts-deep py-10 text-center text-sm text-mts-muted">
        <p>© {new Date().getFullYear()} Murphy Tech Studio. All rights reserved.</p>
      </footer>
    </>
  );
}
