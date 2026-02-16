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
import { getPageMetaData } from '@/lib/api/pageMetaData';
import { serviceIconMap, serviceCategoryIconMap } from '@/lib/data/icons';
import { getAllServices } from '@/lib/api/services';

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await getPageMetaData('/');
  return metaData;
}

export default async function Home() {
  const rawServices = await getAllServices(6);
  const services = rawServices?.map(service => ({
    title: service.title,
    slug: service.slug,
    icon: serviceIconMap[service.icon] || null,
    description: service.description,
  })) || [];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Banner />
      <BrandScroll />
      <OutSourcingTeam />
      <ScheduleConsultation />
      <ResultDriven />
      <OurServices services={services} />
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
