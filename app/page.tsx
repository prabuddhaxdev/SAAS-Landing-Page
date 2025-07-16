"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";

function Navbar() {
  return (<nav className={`flex items-center fixed transition-all duration-300 z-50 ${
          scrollY > 10 
            ? 'bg-[rgb(17,16,24)]/95 backdrop-blur-md left-1/2 transform -translate-x-1/2 top-2 rounded-2xl px-6 py-3 w-[95%] shadow-2xl' 
            : 'bg-transparent w-full justify-between px-6 py-4 max-w-7xl mx-auto top-0 left-0 right-0'
        }`}>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight ">Leadpages</span>
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
        </nav>)
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // Company logos data
  const companyLogos = [
    { name: "Apple", url: "https://cdn.brandfetch.io/apple.com/w/512/h/207/theme/dark/logo?c=1idUHx8H6bLgIdA4LYE" },
    { name: "Google", url: "https://cdn.brandfetch.io/google.com/w/512/h/207/theme/dark/logo?c=1idUHx8H6bLgIdA4LYE" },
    { name: "Airbnb", url: "https://cdn.brandfetch.io/airbnb.com/w/512/h/207/theme/dark/logo?c=1idUHx8H6bLgIdA4LYE" },
    { name: "Spotify", url: "https://cdn.brandfetch.io/spotify.com/w/512/h/207/theme/dark/logo?c=1idUHx8H6bLgIdA4LYE" },
    { name: "Uber", url: "https://cdn.brandfetch.io/uber.com/w/512/h/207/theme/dark/logo?c=1idUHx8H6bLgIdA4LYE" },
    { name: "Netflix", url: "https://cdn.brandfetch.io/netflix.com/w/512/h/207/theme/dark/logo?c=1idUHx8H6bLgIdA4LYE" },
    { name: "Tesla", url: "https://cdn.brandfetch.io/tesla.com/w/512/h/207/theme/dark/logo?c=1idUHx8H6bLgIdA4LYE" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate rotation based on scroll position
  const rotation = Math.max(45 - scrollY / 10, 0); // Starts at 45 degrees, straightens to 0
  const scale = Math.max(1 - scrollY / 2000, 0.8); // Slight scale down

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('https://www.leadpages.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbackground-gradient-image.051f7f86.png&w=828&q=75')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay to match the exact colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-800/90 to-purple-900/85"></div>
      
      <div className="relative z-10">
        <Navbar/>
        

        <section className="px-6 py-12 pt-32 max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Powerful Landing Pages
                <br />
                That Convert
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-medium">
                Launch high-converting landing pages faster, generate qualified leads, and optimize your marketing efforts—all with one simple solution.
              </p>
            </div>

            {/* Email Signup Form */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Work email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium"
              />
              <Button className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-6 py-3 rounded-lg whitespace-nowrap border border-lime-300">
                Start my trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Landing Page Preview */}
        <section className="px-6 pb-20 max-w-5xl mx-auto perspective-1000">
          <div 
            className="relative transition-transform duration-300 ease-out"
            style={{
              transform: `rotateX(${rotation}deg) scale(${scale})`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Browser Window Frame */}
            <div className="bg-white rounded-t-2xl shadow-2xl overflow-hidden mx-auto max-w-4xl transform-gpu">
              {/* Browser Bar */}
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-500 ml-4">
                  1.00
                </div>
              </div>

              <div className="relative transform-gpu">
                <img 
                  src="https://www.leadpages.com/_next/image?url=https%3A%2F%2Fcustomer-4yowinxxlegi56v8.cloudflarestream.com%2F7b6ee0fce0d1988bb99cf21d125a3b15%2Fthumbnails%2Fthumbnail.jpg&w=1600&q=75"
                  alt="Fintastech Landing Page Preview"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative -top-28 z-20 ">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Company Logos Marquee */}
              <div className="py-8 border-gray-100">
                <div className="relative overflow-hidden">
                  <div className="flex animate-marquee space-x-16 whitespace-nowrap">
                    {/* First set of logos */}
                    <div className="flex items-center space-x-16 min-w-full">
                      {companyLogos.map((logo, index) => (
                        <img 
                          key={`first-${index}`}
                          src={logo.url}
                          alt={logo.name}
                          className="h-8 w-auto grayscale brightness-0 opacity-100 transition-all duration-300"
                        />
                      ))}
                      {companyLogos.map((logo, index) => (
                        <img 
                          key={`second-${index}`}
                          src={logo.url}
                          alt={logo.name}
                          className="h-8 w-auto grayscale brightness-0 opacity-100 transition-all duration-300"
                        />
                      ))}
                    </div>
                    
                   
                   
                  </div>
                </div>
              </div>

              {/* Proof Section Content */}
              <div className="px-8 md:px-16 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                      Proof is in the
                      <br />
                      <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        performance
                      </span>
                    </h2>
                    
                    <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                      Leadpages empowers you to drive more leads, backed by actionable 
                      conversion data and proven results. With millions of clicks per day, we 
                      let our results do the talking.
                    </p>
                  </div>
                  {/* Right Stats */}
                    <div className="space-y-8 ">
                      <div className="text-left lg:text-right">
                        <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                          466k+
                        </div>
                        <p className="text-gray-600 mt-2 text-base lg:text-lg">
                          businesses served worldwide
                        </p>
                      </div>
                      
                      <div className="text-left lg:text-right">
                        <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                          9.1m+
                        </div>
                        <p className="text-gray-600 mt-2 text-base lg:text-lg">
                          leads collected per month
                        </p>
                      </div>
                      
                      <div className="text-left lg:text-right">
                        <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                          5x
                        </div>
                        <p className="text-gray-600 mt-2 text-base lg:text-lg">
                          more conversions than the industry average
                        </p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}