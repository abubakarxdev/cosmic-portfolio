import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = 'Abu Bakar | Software Engineer & AI Expert';
  const defaultDescription = 'Portfolio of Abu Bakar, a Software Engineer specializing in Python, FastAPI, and AI solutions. Explore my projects and skills.';
  const defaultKeywords = 'Software Engineer, Python Developer, AI Expert, Portfolio, React, FastAPI, Machine Learning';
  const defaultImage = '/neurosentinel.png'; // Using one of your project images as default for now
  const siteUrl = 'https://abubakarxdev.vercel.app/';

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Abu Bakar" />
      <meta name="google-site-verification" content="0d1ec52dbfa5dcc0" />
      <link rel="canonical" href={url || siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || siteUrl} />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Person",
          "name": "Abu Bakar",
          "url": siteUrl,
          "sameAs": [
            "https://github.com/abubakarxdev",
            "https://www.linkedin.com/in/abubakarxdev/"
          ],
          "jobTitle": "Software Engineer",
          "description": defaultDescription,
          "image": `${siteUrl}${defaultImage}`
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
