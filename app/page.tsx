import Banner from "@/components/client/Banner";
import BrandScroll from "@/components/client/BrandScroll";
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Banner />
      <BrandScroll />
    </div>
  );
}
