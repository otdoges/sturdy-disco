"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Code, Database, Globe, Layout, Layers, Palette, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StructuredData from "@/components/seo/structured-data";

// SEO metadata for this page
export const metadata = {
  title: "Features & Services | WebCraft Pro",
  description: "Explore our comprehensive web design and development features including responsive design, SEO optimization, and stunning animations for your business website.",
  keywords: "web design features, website services, responsive design, SEO optimization, website animations, custom web development",
};

export default function FeaturesPage() {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <main className="flex-1 overflow-y-auto">
      {/* Structured Data for SEO */}
      <StructuredData 
        type="Service"
        data={{
          name: "Web Design and Development Services",
          serviceType: "Website Creation",
          provider: {
            "@type": "Organization",
            name: "WebCraft Pro",
            url: "https://webcraft.pro"
          },
          description: "Professional website design and development with stunning animations, responsive layouts, and SEO optimization.",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Web Design Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Stunning Visual Design",
                  description: "Custom design tailored to your brand with eye-catching animations and transitions."
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Lightning-Fast Performance",
                  description: "Optimized for speed to provide the best user experience and improve your search rankings."
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Responsive Design",
                  description: "Perfectly adapts to any screen size, ensuring a flawless experience on all devices."
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "SEO Optimization",
                  description: "Structured to help search engines find and rank your site higher in search results."
                }
              }
            ]
          }
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Powerful Features for Your Website
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Discover all the tools and services we offer to make your online presence exceptional
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {/* Feature 1: Design */}
            <div 
              ref={(el) => { featureRefs.current[0] = el; return undefined; }} 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0"
            >
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Stunning Visual Design</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our design process focuses on creating visually appealing websites that reflect your brand identity and captivate your audience.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Custom design tailored to your brand</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Eye-catching animations and transitions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Cohesive color schemes and typography</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>User-friendly interface design</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 p-2">
                  <div className="h-full w-full rounded-xl bg-muted/80 flex items-center justify-center">
                    <div className="w-3/4 aspect-video bg-background rounded-lg shadow-lg flex items-center justify-center p-4">
                      <Palette className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              </div>
            </div>
            
            {/* Feature 2: Performance */}
            <div 
              ref={(el) => { featureRefs.current[1] = el; return undefined; }} 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-primary/20 p-2">
                  <div className="h-full w-full rounded-xl bg-muted/80 flex items-center justify-center">
                    <div className="w-3/4 aspect-video bg-background rounded-lg shadow-lg flex items-center justify-center p-4">
                      <Zap className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
              </div>
              <div>
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Lightning-Fast Performance</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We optimize every aspect of your website to ensure it loads quickly and performs flawlessly on all devices.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Optimized code for faster loading</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Image compression and lazy loading</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Content delivery network integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Performance monitoring and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Feature 3: Responsive */}
            <div 
              ref={(el) => { featureRefs.current[2] = el; return undefined; }} 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0"
            >
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Fully Responsive Design</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Your website will look and function perfectly on all devices, from desktop computers to smartphones and tablets.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Mobile-first development approach</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Adaptive layouts for all screen sizes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Touch-friendly navigation and controls</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Cross-browser compatibility testing</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-primary/20 p-2">
                  <div className="h-full w-full rounded-xl bg-muted/80 flex items-center justify-center">
                    <div className="w-3/4 aspect-video bg-background rounded-lg shadow-lg flex items-center justify-center p-4">
                      <div className="flex space-x-4">
                        <Smartphone className="h-10 w-10 text-primary" />
                        <Layout className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
              </div>
            </div>
            
            {/* Feature 4: SEO */}
            <div 
              ref={(el) => { featureRefs.current[3] = el; return undefined; }} 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 p-2">
                  <div className="h-full w-full rounded-xl bg-muted/80 flex items-center justify-center">
                    <div className="w-3/4 aspect-video bg-background rounded-lg shadow-lg flex items-center justify-center p-4">
                      <Globe className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              </div>
              <div>
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">SEO Optimization</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We implement proven SEO strategies to help your website rank higher in search results and attract more organic traffic.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Keyword research and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Meta tags and schema markup</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>SEO-friendly URL structure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Performance optimization for better rankings</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Feature 5: Technical */}
            <div 
              ref={(el) => { featureRefs.current[4] = el; return undefined; }} 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0"
            >
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Technical Excellence</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our websites are built with clean, efficient code following best practices for security, accessibility, and maintainability.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Modern frameworks and technologies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Security best practices implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>WCAG accessibility compliance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3">
                      <span className="text-primary text-sm font-medium">✓</span>
                    </div>
                    <span>Well-documented code for easy maintenance</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2">
                  <div className="h-full w-full rounded-xl bg-muted/80 flex items-center justify-center">
                    <div className="w-3/4 aspect-video bg-background rounded-lg shadow-lg flex items-center justify-center p-4">
                      <Code className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Features Grid */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Additional Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need for a complete online presence
            </p>
          </div>
          
          <div 
            ref={(el) => { featureRefs.current[5] = el; return undefined; }} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
          >
            <FeatureCard 
              icon={<Database className="h-6 w-6 text-primary" />}
              title="Content Management System"
              description="Easy-to-use CMS that allows you to update your website content without technical knowledge."
            />
            <FeatureCard 
              icon={<Layers className="h-6 w-6 text-primary" />}
              title="Custom Integrations"
              description="Seamless integration with third-party services like payment gateways, CRMs, and marketing tools."
            />
            <FeatureCard 
              icon={<Smartphone className="h-6 w-6 text-primary" />}
              title="Progressive Web App"
              description="Transform your website into a mobile app-like experience with offline capabilities."
            />
            <FeatureCard 
              icon={<Globe className="h-6 w-6 text-primary" />}
              title="Multilingual Support"
              description="Reach a global audience with websites that support multiple languages and regions."
            />
            <FeatureCard 
              icon={<Zap className="h-6 w-6 text-primary" />}
              title="Analytics & Reporting"
              description="Detailed insights into your website's performance and visitor behavior."
            />
            <FeatureCard 
              icon={<Palette className="h-6 w-6 text-primary" />}
              title="Custom Illustrations"
              description="Unique visual elements that enhance your brand identity and user experience."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's create a website that perfectly represents your brand and drives results.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/pricing">View Pricing <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
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
    <div className="bg-background rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
