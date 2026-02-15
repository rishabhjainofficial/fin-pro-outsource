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
import ToolsUsed from "@/components/client/home/ToolsUsed";
import Testimonials from "@/components/client/home/Testimonials";
import BlogSection from "@/components/client/home/BlogSection";
import CaseStudiesSection from "@/components/client/home/CaseStudiesSection";
import LetConnect from "@/components/client/home/LetConnect";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gapbridge Outsourcing',
    description: 'Gapbridge Outsourcing is a leading outsourcing company that provides a range of services to help businesses grow and succeed.',
    keywords: ['Gapbridge Outsourcing', 'Outsourcing', 'Gapbridge'],
    openGraph: {
        title: 'Gapbridge Outsourcing',
        description: 'Gapbridge Outsourcing is a leading outsourcing company that provides a range of services to help businesses grow and succeed.',
    },
    twitter: {
        title: 'Gapbridge Outsourcing',
      description: 'Gapbridge Outsourcing is a leading outsourcing company that provides a range of services to help businesses grow and succeed.',
    },
    icons: {
        icon: '/favicon.ico',
    },
};

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
      <ToolsUsed />
      <Testimonials />
      <BlogSection />
      <CaseStudiesSection />
      <LetConnect />
    </div>
  );
}
