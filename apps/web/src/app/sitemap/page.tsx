import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Sitemap | WebCraft Pro",
  description: "Navigate through our website structure to find the information you need about our web design and development services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function SitemapPage() {
  const sitePages = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/", description: "Our main landing page with an overview of our services" },
        { name: "Features", url: "/features", description: "Detailed information about our web design and development services" },
        { name: "Pricing", url: "/pricing", description: "Transparent pricing plans for our web design packages" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team for inquiries and quotes" },
      ],
    },
    {
      title: "Legal Information",
      links: [
        { name: "Privacy Policy", url: "/privacy", description: "Our privacy practices and data handling policies" },
        { name: "Terms of Service", url: "/terms", description: "Terms and conditions for using our services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Sitemap", url: "/sitemap", description: "Overview of our website structure" },
        { name: "Sitemap XML", url: "/sitemap.xml", description: "XML sitemap for search engines" },
      ],
    },
  ];

  return (
    <main className="flex-1 overflow-y-auto py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Use this sitemap to navigate through our website and find the information you need.
          </p>

          <div className="space-y-12">
            {sitePages.map((section) => (
              <div key={section.title} className="border-b pb-8">
                <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {section.links.map((link) => (
                    <Link 
                      href={link.url} 
                      key={link.url}
                      className="group p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-lg">{link.name}</h3>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-muted-foreground text-sm">{link.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
