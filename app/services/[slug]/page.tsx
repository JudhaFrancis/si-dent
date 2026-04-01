import React from "react";
import { notFound } from "next/navigation";
import { services } from "@/constants/services";
import GlobalHero from "@/components/GlobalHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} in Nagercoil`,
    description: service.content[0].substring(0, 160) + "...",
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  const fullHeroPath = `/assets/img/services${service.heroImage}`;

  return (
    <main>
      <GlobalHero 
        span="Advanced Dental Care"
        title={service.title} 
        subtitle={service.subtitle}
        bgImage={fullHeroPath}
        breadcrumb={[
          { label: "Services", href: "/#services" },
          { label: service.title, href: `/services/${slug}` }
        ]}
      />
      <ServiceDetail service={service} />
    </main>
  );
}

export async function generateStaticParams() {
  const params = Object.keys(services).map((slug) => ({
    slug,
  }));
  return params;
}
