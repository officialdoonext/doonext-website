import HomeHero from "@/components/home/HomeHero";
import HomeProducts from "@/components/home/HomeProducts";
import HomeFeatures from "@/components/home/HomeFeatures";
import HomeStats from "@/components/home/HomeStats";
import HomeTrustCTA from "@/components/home/HomeTrustCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProducts />
      <HomeFeatures />
      <HomeStats />
      <HomeTrustCTA />
    </>
  );
}