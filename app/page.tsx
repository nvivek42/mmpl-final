import React, { Suspense, lazy } from 'react';

const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const Industries = lazy(() => import('../components/Industries'));
const Features = lazy(() => import('../components/Features'));
const Infra = lazy(() => import('../components/Infra'));
const CTA = lazy(() => import('../components/CTA'));
const Metrics = lazy(() => import('../components/Metrics'));
const AboutUs = lazy(() => import('@/components/AboutUs'));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div id="AboutUs">
          <AboutUs />    
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div id="services">
          <Services />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Industries />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Infra />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Metrics />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Features />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div id="contact">
          <CTA />
        </div>
      </Suspense>
    </main>
  );
}