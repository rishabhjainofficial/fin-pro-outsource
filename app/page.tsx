import Banner from "@/components/client/home/Banner";
import BrandScroll from "@/components/client/home/BrandScroll";
import ScheduleConsultation from "@/components/client/home/ScheduleConsultation";
import OutSourcingTeam from "@/components/client/home/OutSourcingTeam";
import ResultDriven from "@/components/client/home/ResultDriven";
import OurServices from "@/components/client/home/OurServices";
import WhyChooseUs from "@/components/client/home/WhyChooseUs";
import StepsToHire from "@/components/client/home/StepsToHire";
import IndustriesServe from "@/components/client/home/IndustriesServe";
import JoinTeam from "@/components/client/home/JoinTeam";
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Banner />
      <BrandScroll />
      <OutSourcingTeam />
      <ScheduleConsultation />
      <ResultDriven />
      <OurServices />
      <WhyChooseUs />
      <StepsToHire />
      <IndustriesServe />
      <JoinTeam />
    </div>
  );
}
