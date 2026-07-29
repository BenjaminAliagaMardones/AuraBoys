import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Roster } from "@/components/Roster";
import { About } from "@/components/About";
import { Matches } from "@/components/Matches";
import { Sponsors } from "@/components/Sponsors";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <Roster />
        <About />
        <Matches />
        <Sponsors />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
