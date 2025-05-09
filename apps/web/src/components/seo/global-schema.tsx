"use client";

import React from 'react';

export default function GlobalSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://webcraft.pro/#website",
        "url": "https://webcraft.pro",
        "name": "WebCraft Pro",
        "description": "Premium Website Design & Development Services",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://webcraft.pro/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://webcraft.pro/#organization",
        "name": "WebCraft Pro",
        "url": "https://webcraft.pro",
        "logo": {
          "@type": "ImageObject",
          "url": "https://webcraft.pro/svg/logo.svg",
          "width": 180,
          "height": 60
        },
        "sameAs": [
          "https://facebook.com/webcraftpro",
          "https://twitter.com/webcraftpro",
          "https://instagram.com/webcraftpro",
          "https://linkedin.com/company/webcraftpro"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "customer service",
          "email": "hello@webcraft.pro",
          "areaServed": "US",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Web Design Street",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "postalCode": "94103",
          "addressCountry": "US"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://webcraft.pro/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://webcraft.pro/",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://webcraft.pro/features",
              "name": "Features"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": "https://webcraft.pro/pricing",
              "name": "Pricing"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@id": "https://webcraft.pro/contact",
              "name": "Contact"
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
