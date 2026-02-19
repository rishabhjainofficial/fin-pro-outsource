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
import { getBlogForHome } from "@/lib/api/blogs";
import { getHomeData } from "@/lib/api/home";

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await getPageMetaData('/');
  return metaData;
}

export default async function Home() {
  const homeData = await getHomeData();
  const services = homeData?.services || [];
  const blogs = homeData?.blogs || [];
  const brands = homeData?.brands || [];
  const teams = homeData?.teams || [];
  const stats = homeData?.stats || [];
  const features = homeData?.features || [];
  const steps = homeData?.steps || [];
  const industries = homeData?.industries || [];
  const officeImages = homeData?.officeImages || [];
  const tools = homeData?.tools || [];
  const testimonials = homeData?.testimonials || [];
  const caseStudies = homeData?.caseStudies || [];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Banner />
      <BrandScroll brands={brands} />
      <OutSourcingTeam teams={teams} />
      <ScheduleConsultation />
      <ResultDriven stats={stats} />
      <OurServices services={services} />
      <WhyChooseUs features={features} />
      <StepsToHire steps={steps}/>
      <IndustriesServe industries={industries}/>
      <JoinTeam officeImages={officeImages} />
      <ToolsUsed tools={tools}/>
      <Testimonials testimonials={testimonials} />
      <BlogSection blogs={blogs} />
      <CaseStudiesSection caseStudies={caseStudies}/>
      <LetConnect />
    </div>
  );
}
