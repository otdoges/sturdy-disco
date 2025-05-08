"use client";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import StructuredData from "@/components/seo/structured-data";

// SEO metadata for this page
export const metadata = {
  title: "Contact Us | WebCraft Pro",
  description: "Get in touch with our web design and development team. We're here to answer your questions and help bring your website vision to life.",
  keywords: "contact web designer, web development contact, website inquiry, get website quote, contact form",
};

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Add animation when component mounts
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    // For demo purposes, we'll just show a success message
    setFormSubmitted(true);
  };

  return (
    <main className="flex-1 overflow-y-auto py-16">
      {/* Structured Data for SEO */}
      <StructuredData 
        type="Organization"
        data={{
          name: "WebCraft Pro",
          url: "https://webcraft.pro",
          logo: "https://webcraft.pro/svg/logo.svg",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-123-4567",
            contactType: "customer service",
            email: "hello@webcraft.pro",
            areaServed: "US",
            availableLanguage: "English"
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Web Design Street",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            postalCode: "94103",
            addressCountry: "US"
          },
          sameAs: [
            "https://facebook.com/webcraftpro",
            "https://twitter.com/webcraftpro",
            "https://instagram.com/webcraftpro",
            "https://linkedin.com/company/webcraftpro"
          ]
        }}
      />
      <StructuredData 
        type="FAQPage"
        data={{
          mainEntity: [
            {
              "@type": "Question",
              "name": "How long does it take to build a website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typically 2-6 weeks depending on the complexity and scope of the project."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer website maintenance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer ongoing maintenance packages to keep your site secure and up-to-date."
              }
            },
            {
              "@type": "Question",
              "name": "What's your payment process?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We typically require a 50% deposit to begin work, with the remaining balance due upon completion."
              }
            }
          ]
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question or ready to start your project? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="bg-background rounded-2xl border p-8 shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    className="mt-6" 
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and privacy policy
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-primary/5 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground mt-1">hello@webdesignagency.com</p>
                      <p className="text-muted-foreground">support@webdesignagency.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">Mon-Fri from 9am to 6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">Office</h4>
                      <p className="text-muted-foreground mt-1">
                        123 Web Design Street<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-2xl border p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">How long does it take to build a website?</h4>
                    <p className="text-muted-foreground mt-1 text-sm">
                      Typically 2-6 weeks depending on the complexity and scope of the project.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Do you offer website maintenance?</h4>
                    <p className="text-muted-foreground mt-1 text-sm">
                      Yes, we offer ongoing maintenance packages to keep your site secure and up-to-date.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">What's your payment process?</h4>
                    <p className="text-muted-foreground mt-1 text-sm">
                      We typically require a 50% deposit to begin work, with the remaining balance due upon completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
