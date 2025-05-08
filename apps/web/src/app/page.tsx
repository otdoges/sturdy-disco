"use client";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import StructuredData from "@/components/seo/structured-data";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add animation classes when component mounts
    if (heroRef.current) {
      heroRef.current.classList.add("animate-fade-in");
    }
    
    // Add staggered animations to features
    if (featuresRef.current) {
      const features = featuresRef.current.querySelectorAll('.feature-card');
      features.forEach((feature, index) => {
        setTimeout(() => {
          feature.classList.add('animate-slide-up');
        }, 200 * index);
      });
    }
  }, []);

  return (
    <main className="flex-1 overflow-y-auto">
      {/* Structured Data for SEO */}
      <StructuredData 
        type="WebSite"
        data={{
          name: "WebCraft Pro",
          url: "https://webcraft.pro",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://webcraft.pro/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <StructuredData 
        type="Service"
        data={{
          name: "Website Design and Development",
          provider: {
            "@type": "Organization",
            name: "WebCraft Pro",
            url: "https://webcraft.pro"
          },
          description: "Professional website design and development with stunning animations, responsive layouts, and SEO optimization.",
          offers: {
            "@type": "Offer",
            price: "49",
            priceCurrency: "USD"
          }
        }}
      />
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-b from-primary/10 to-background pt-20 pb-32 opacity-0 transition-opacity duration-1000">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Stunning Websites That Convert
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                We craft beautiful, high-performance websites that help your business stand out and drive results.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
                <Button size="lg" asChild>
                  <Link href="/pricing">View Pricing <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
              
              {/* SEO-friendly microdata */}
              <div itemScope itemType="https://schema.org/WebSite" className="hidden">
                <meta itemProp="name" content="WebCraft Pro" />
                <meta itemProp="url" content="https://webcraft.pro" />
                <meta itemProp="description" content="Professional website design and development with stunning animations, responsive layouts, and SEO optimization." />
              </div>
            </div>
            
            <div className="hidden md:flex justify-center items-center relative">
              <div className="relative w-full max-w-md">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-muted/30 rounded-lg p-4 flex items-center justify-center hover-lift">
                      <img src="/svg/design-icon.svg" alt="Design" width="64" height="64" />
                    </div>
                    <div className="aspect-square bg-muted/30 rounded-lg p-4 flex items-center justify-center hover-lift">
                      <img src="/svg/speed-icon.svg" alt="Speed" width="64" height="64" />
                    </div>
                    <div className="aspect-square bg-muted/30 rounded-lg p-4 flex items-center justify-center hover-lift">
                      <img src="/svg/responsive-icon.svg" alt="Responsive" width="64" height="64" />
                    </div>
                    <div className="aspect-square bg-muted/30 rounded-lg p-4 flex items-center justify-center hover-lift">
                      <img src="/svg/seo-icon.svg" alt="SEO" width="64" height="64" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave pattern at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="/svg/wave-pattern.svg" alt="" aria-hidden="true" className="w-full" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powerful Features for Your Online Success</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to establish a strong online presence and grow your business.
            </p>
          </div>
          
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<img src="/svg/speed-icon.svg" alt="Speed Icon" width="64" height="64" className="h-12 w-12" />}
              title="Lightning Fast"
              description="Optimized for speed to provide the best user experience and improve your search rankings."
            />
            <FeatureCard 
              icon={<img src="/svg/design-icon.svg" alt="Design Icon" width="64" height="64" className="h-12 w-12" />}
              title="Beautiful Design"
              description="Eye-catching, modern designs that reflect your brand and impress your visitors."
            />
            <FeatureCard 
              icon={<img src="/svg/responsive-icon.svg" alt="Responsive Icon" width="64" height="64" className="h-12 w-12" />}
              title="Responsive Layout"
              description="Perfectly adapts to any screen size, ensuring a flawless experience on all devices."
            />
            <FeatureCard 
              icon={<img src="/svg/code-icon.svg" alt="Code Icon" width="64" height="64" className="h-12 w-12" />}
              title="Clean Code"
              description="Built with best practices for maintainability, security, and future expansion."
            />
            <FeatureCard 
              icon={<img src="/svg/seo-icon.svg" alt="SEO Icon" width="64" height="64" className="h-12 w-12" />}
              title="SEO Optimized"
              description="Structured to help search engines find and rank your site higher in search results."
            />
            <FeatureCard 
              icon={<img src="/svg/speed-icon.svg" alt="Conversion Icon" width="64" height="64" className="h-12 w-12" />}
              title="Conversion Focused"
              description="Strategically designed to turn visitors into customers with effective call-to-actions."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-purple-500/10 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Online Presence?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Join hundreds of satisfied clients who have elevated their business with our web solutions.
                </p>
                <div className="mt-10">
                  <Button size="lg" asChild className="animate-pulse hover:animate-none">
                    <Link href="/pricing">Explore Our Plans <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="mt-12 bg-muted/30 rounded-xl p-6 relative">
                <div className="absolute -top-4 -left-4 text-4xl text-primary opacity-50">❝</div>
                <div className="absolute -bottom-4 -right-4 text-4xl text-primary opacity-50">❞</div>
                <blockquote>
                  <p className="text-lg italic">"WebCraft Pro transformed our online presence completely. Our new website not only looks stunning but has significantly increased our conversion rates and search engine rankings."</p>
                  <footer className="mt-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold">JD</div>
                    <div className="ml-4">
                      <p className="font-medium">Jane Doe</p>
                      <p className="text-sm text-muted-foreground">CEO, Example Company</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="feature-card bg-background rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 opacity-0">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
