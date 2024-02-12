import Hero from "@/components/hero/Hero";
import Partners from "@/components/partners/Partners";
import Banner from '@/components/Banner/Banner';
import HackathonTracks from '@/components/Tracks/HackathonTracks';
import Prize from '@/components/Prize/Prize';
import Teams from '@/components/Teams/Teams';
import FAQ from '@/components/FAQ/FAQ';
import Footer from '@/components/Footer/Footer';
import AboutUs from '@/components/AboutUs/AboutUs';
import Schedule from '@/components/schedule/Schedule';
import Ikpartners from '@/components/partners/Ikpartners';
import CommunityPartners from '@/components/partners/CommunityPartners';
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <Partners />
      <Ikpartners />
      <CommunityPartners />
      <HackathonTracks />
      <Prize />
      {/* <Schedule /> */}
      <Teams />
      <FAQ />
      <AboutUs />
      <Footer />
    </main>
  );
}
