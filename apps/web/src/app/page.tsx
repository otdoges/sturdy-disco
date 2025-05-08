"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Code, Globe, Layers, Palette, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-b from-primary/10 to-background pt-20 pb-32 opacity-0 transition-opacity duration-1000">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Stunning Websites That Convert
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              We craft beautiful, high-performance websites that help your business stand out and drive results.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/pricing">View Pricing <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
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
              icon={<Zap className="h-6 w-6 text-primary" />}
              title="Lightning Fast"
              description="Optimized for speed to provide the best user experience and improve your search rankings."
            />
            <FeatureCard 
              icon={<Palette className="h-6 w-6 text-primary" />}
              title="Beautiful Design"
              description="Eye-catching, modern designs that reflect your brand and impress your visitors."
            />
            <FeatureCard 
              icon={<Layers className="h-6 w-6 text-primary" />}
              title="Responsive Layout"
              description="Perfectly adapts to any screen size, ensuring a flawless experience on all devices."
            />
            <FeatureCard 
              icon={<Code className="h-6 w-6 text-primary" />}
              title="Clean Code"
              description="Built with best practices for maintainability, security, and future expansion."
            />
            <FeatureCard 
              icon={<Globe className="h-6 w-6 text-primary" />}
              title="SEO Optimized"
              description="Structured to help search engines find and rank your site higher in search results."
            />
            <FeatureCard 
              icon={<Zap className="h-6 w-6 text-primary" />}
              title="Conversion Focused"
              description="Strategically designed to turn visitors into customers with effective call-to-actions."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Online Presence?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join hundreds of satisfied clients who have elevated their business with our web solutions.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="/pricing">Explore Our Plans <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
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
