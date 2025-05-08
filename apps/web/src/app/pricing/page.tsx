"use client";
import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StructuredData from "@/components/seo/structured-data";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation when component mounts
    setIsVisible(true);
  }, []);

  return (
    <main className="flex-1 overflow-y-auto py-16">
      {/* Structured Data for SEO */}
      <StructuredData 
        type="FAQPage"
        data={{
          mainEntity: [
            {
              "@type": "Question",
              "name": "What's included in the Starter plan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Starter plan includes a responsive 5-page website, basic SEO optimization, contact form, mobile-friendly design, and 1 revision round."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer custom solutions beyond these packages?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we can create a tailored package specifically for your business requirements. Contact us to discuss your needs."
              }
            },
            {
              "@type": "Question",
              "name": "What's the difference between monthly and yearly billing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yearly billing offers a 20% discount compared to monthly billing, providing significant savings for long-term commitments."
              }
            }
          ]
        }}
      />
      <StructuredData 
        type="Service"
        data={{
          name: "Website Design and Development Services",
          offers: [
            {
              "@type": "Offer",
              "name": "Starter Plan",
              "price": "49",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-12-31",
              "description": "Perfect for small businesses just getting started online."
            },
            {
              "@type": "Offer",
              "name": "Professional Plan",
              "price": "99",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-12-31",
              "description": "Ideal for growing businesses that need more features."
            },
            {
              "@type": "Offer",
              "name": "Enterprise Plan",
              "price": "249",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-12-31",
              "description": "For established businesses requiring a comprehensive solution."
            }
          ]
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your business needs
          </p>

          {/* Billing toggle */}
          <div className="mt-10 flex justify-center">
            <div className="relative flex rounded-full bg-muted p-1">
              <button
                type="button"
                className={`relative rounded-full py-2 px-6 text-sm font-medium ${
                  !isYearly ? 'bg-background shadow-sm' : 'text-muted-foreground'
                }`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`relative ml-0.5 rounded-full py-2 px-6 text-sm font-medium ${
                  isYearly ? 'bg-background shadow-sm' : 'text-muted-foreground'
                }`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
                <span className="absolute -right-2 -top-2 flex h-5 w-16 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <PricingCard
            isVisible={isVisible}
            delay={0}
            title="Starter"
            description="Perfect for small businesses just getting started online."
            price={isYearly ? 399 : 49}
            billing={isYearly ? "/year" : "/month"}
            features={[
              "Responsive 5-page website",
              "Basic SEO optimization",
              "Contact form",
              "Mobile-friendly design",
              "1 revision round"
            ]}
            notIncluded={[
              "Custom animations",
              "E-commerce functionality",
              "Advanced integrations",
              "Content creation"
            ]}
            ctaText="Get Started"
            popular={false}
          />

          <PricingCard
            isVisible={isVisible}
            delay={200}
            title="Professional"
            description="Ideal for growing businesses that need more features."
            price={isYearly ? 999 : 99}
            billing={isYearly ? "/year" : "/month"}
            features={[
              "Responsive 10-page website",
              "Advanced SEO optimization",
              "Contact form & newsletter signup",
              "Mobile-friendly design",
              "Custom animations",
              "Social media integration",
              "3 revision rounds",
              "Basic analytics setup"
            ]}
            notIncluded={[
              "E-commerce functionality",
              "Content creation"
            ]}
            ctaText="Choose Professional"
            popular={true}
          />

          <PricingCard
            isVisible={isVisible}
            delay={400}
            title="Enterprise"
            description="For established businesses requiring a comprehensive solution."
            price={isYearly ? 2399 : 249}
            billing={isYearly ? "/year" : "/month"}
            features={[
              "Responsive 20-page website",
              "Advanced SEO optimization",
              "Full contact system with CRM",
              "Mobile-friendly design",
              "Custom animations",
              "Social media integration",
              "E-commerce functionality",
              "Advanced integrations",
              "Unlimited revision rounds",
              "Content creation assistance",
              "Advanced analytics & reporting"
            ]}
            notIncluded={[]}
            ctaText="Contact Sales"
            popular={false}
          />
        </div>

        {/* Custom solution CTA */}
        <div className={`mt-20 max-w-3xl mx-auto rounded-2xl bg-primary/5 p-8 text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold">Need a Custom Solution?</h2>
          <p className="mt-2 text-muted-foreground">
            We can create a tailored package specifically for your business requirements.
          </p>
          <Button className="mt-6" size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

function PricingCard({ 
  isVisible,
  delay,
  title, 
  description, 
  price, 
  billing, 
  features, 
  notIncluded,
  ctaText, 
  popular 
}: { 
  isVisible: boolean;
  delay: number;
  title: string; 
  description: string; 
  price: number; 
  billing: string; 
  features: string[]; 
  notIncluded: string[];
  ctaText: string; 
  popular: boolean;
}) {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div 
      className={`relative rounded-2xl border ${popular ? 'border-primary shadow-lg' : 'border-border'} bg-background p-8 transition-all duration-700 transform ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-primary py-1 text-center text-xs font-semibold text-primary-foreground">
          MOST POPULAR
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-6">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-muted-foreground">{billing}</span>
        </div>
      </div>
      
      <ul className="mt-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
        
        {notIncluded.map((feature, index) => (
          <li key={index} className="flex items-start text-muted-foreground">
            <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-8">
        <Button className="w-full" size="lg" variant={popular ? "default" : "outline"} asChild>
          <Link href="/contact">{ctaText}</Link>
        </Button>
      </div>
    </div>
  );
}
