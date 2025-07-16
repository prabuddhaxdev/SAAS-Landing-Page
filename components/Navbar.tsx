"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";

interface NavbarProps {
  scrollY: number;
}

export default function Navbar({ scrollY }: NavbarProps) {
  return (
    <nav className={`flex items-center fixed transition-all duration-300 max-w-7xl ${
      scrollY > 10
        ? 'bg-[#181625]/95 backdrop-blur-md left-1/2 transform -translate-x-1/2 top-2 rounded-2xl px-6 py-3 w-[95%] shadow-2xl border border-[#302e3c] z-50 '
        : 'bg-transparent w-full justify-between px-6 py-4  mx-auto top-0 left-0 right-0'
    }`}>
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <img src="/leadpages.png" alt="Leadpages" className="h-8 w-auto" />
          <span className="text-xl font-extrabold text-white tracking-tight font-heading">Leadpages</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer">
            <span className="font-semibold">Platform</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer">
            <span className="font-semibold">Solutions</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer">
            <span className="font-semibold">Templates</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer">
            <span className="font-semibold">Resources</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <a href="#" className="text-white/90 hover:text-white font-semibold">Pricing</a>
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-auto">
        <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 font-semibold hidden md:inline-flex">
          Log In
        </Button>
        <Button className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-6 py-2 rounded-full border border-lime-300">
          Sign Up Free
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
}
