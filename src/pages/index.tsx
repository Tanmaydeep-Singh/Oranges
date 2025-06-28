'use client';

import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";
import Head from "next/head";
import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/AboutUs";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import IntroSection from "@/components/Home/Inrto";
import { Feather } from "lucide-react";
import Features from "@/components/Home/Features";
import FomoBanner from "@/components/Home/CTA";

export default function Home() {

  return (

    <div className=" min-h-screen relative space-y-4 flex flex-col justify-center items-center" >
      <Hero />

      <div className="w-4/5">
        <IntroSection />
        <Features/>
        <FomoBanner/>
        <AboutUs />
        <WhatWeOffer />
      </div>
    </div>


  );
}
