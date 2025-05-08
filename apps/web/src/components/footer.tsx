"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">WebCraft Pro</h3>
            <p className="text-sm text-muted-foreground">
              We craft beautiful, high-performance websites that help your business stand out and drive results.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/features" label="Features" />
              <FooterLink href="/pricing" label="Pricing" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/sitemap.xml" label="Sitemap" />
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/features" label="Web Design" />
              <FooterLink href="/features" label="Web Development" />
              <FooterLink href="/features" label="E-commerce Solutions" />
              <FooterLink href="/features" label="SEO Optimization" />
              <FooterLink href="/features" label="Content Creation" />
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">hello@webcraft.pro</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Web Design Street<br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} WebCraft Pro. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Professional website design and development services with SEO optimization.
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WebCraft Pro",
              "url": "https://webcraft.pro",
              "logo": "https://webcraft.pro/svg/logo.svg",
              "description": "Professional website design and development with stunning animations, responsive layouts, and SEO optimization.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Web Design Street",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94103",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "hello@webcraft.pro"
              },
              "sameAs": [
                "https://facebook.com/webcraftpro",
                "https://twitter.com/webcraftpro",
                "https://instagram.com/webcraftpro",
                "https://linkedin.com/company/webcraftpro"
              ]
            })
          }}
        />
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {label}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      aria-label={label}
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      {icon}
    </Link>
  );
}
