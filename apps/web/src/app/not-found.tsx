import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found | WebCraft Pro",
  description: "Sorry, the page you're looking for doesn't exist. Return to our homepage to explore our web design and development services.",
};

export default function NotFound() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 mb-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-5xl">404</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        
        <p className="text-xl text-muted-foreground max-w-md mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button size="lg" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" /> Return to Homepage
          </Link>
        </Button>
        
        <div className="mt-16 grid gap-8 text-left max-w-2xl">
          <div>
            <h2 className="text-xl font-medium mb-2">Looking for our services?</h2>
            <p className="text-muted-foreground mb-4">
              Check out our comprehensive web design and development offerings.
            </p>
            <Button variant="outline" asChild>
              <Link href="/features">Explore Features</Link>
            </Button>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-2">Need help with something?</h2>
            <p className="text-muted-foreground mb-4">
              Our team is ready to assist you with any questions.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
