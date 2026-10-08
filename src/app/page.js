import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import HowToPlay from "@/components/HowToPlay";
import DownloadCTA from "@/components/DownloadCTA";
import DownloadRedirect from "@/components/DownloadRedirect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <DownloadRedirect />
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <HowToPlay />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
