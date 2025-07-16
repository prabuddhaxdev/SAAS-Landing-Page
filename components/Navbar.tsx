"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, HelpCircle, FileText, Gift, BarChart3, ShoppingCart, Globe, Users, Zap, CreditCard, Settings, Mail, Monitor, Trophy, Target, Megaphone, Share2, Search, MousePointer, TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";

interface NavbarProps {
  scrollY: number;
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Handle scroll transition animation
  const isScrolled = scrollY > 10;
  
  React.useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [isScrolled]);

  const platformDropdown = (
    <div className="absolute top-full left-0 mt-2 w-max max-w-4xl bg-[#1a1827]/95 backdrop-blur-md border border-[#302e3c] rounded-2xl shadow-2xl p-6 z-[60]">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">FEATURES</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
              <Globe className="h-5 w-5 text-white/70 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold">Landing Pages</h4>
                <p className="text-white/70 text-sm">Easily build beautiful landing pages that convert</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
              <Zap className="h-5 w-5 text-white/70 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold">Conversion Tools</h4>
                <p className="text-white/70 text-sm">Boost conversions with pop-ups, alert bars, and the Lead Meter</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
              <CreditCard className="h-5 w-5 text-white/70 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold">Payments</h4>
                <p className="text-white/70 text-sm">Add online checkouts to your pages for seamless transactions</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">INTEGRATIONS</h3>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-[#ff5722] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">MC</span>
              </div>
              <div className="w-10 h-10 bg-[#ff6900] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">HS</span>
              </div>
              <div className="w-10 h-10 bg-[#6772e5] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <div className="w-10 h-10 bg-[#ff6900] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">Z</span>
              </div>
              <div className="w-10 h-10 bg-[#00d4aa] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">K</span>
              </div>
            </div>
            <div className="mt-3">
              <a href="#" className="text-white/70 text-sm hover:text-white">See 90+ Integrations</a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Platform Overview</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
              <Monitor className="h-5 w-5 text-white/70 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold">Websites</h4>
                <p className="text-white/70 text-sm">Create a code-free site for your business, products, or events</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
              <Users className="h-5 w-5 text-white/70 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold">Lead Management</h4>
                <p className="text-white/70 text-sm">Sort, edit, and manage your leads all in one place</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
              <Settings className="h-5 w-5 text-white/70 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold">All features</h4>
                <p className="text-white/70 text-sm">See all our product offerings in one place</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">WHAT'S NEW</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                <Target className="h-5 w-5 text-white/70 mt-0.5" />
                <div className="flex items-center space-x-2">
                  <h4 className="text-white font-semibold">Lead Enrichment</h4>
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">FEATURED</span>
                </div>
                <p className="text-white/70 text-sm">Enrich your leads with powerful data</p>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                <Users className="h-5 w-5 text-white/70 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">Invite your Team</h4>
                  <p className="text-white/70 text-sm">Get your whole team on the same page</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const solutionsDropdown = (
    <div className="absolute top-full left-0 mt-2 w-[500px] bg-[#1a1827]/95 backdrop-blur-md border border-[#302e3c] rounded-2xl shadow-2xl p-6 z-[60]">
      <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">USE CASES</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
            <TrendingUp className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold">PPC Ads</h4>
              <p className="text-white/70 text-sm">Increase your RoAS and boost your conversions</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
            <Share2 className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold">Social Ads</h4>
              <p className="text-white/70 text-sm">Get more leads and sales from your social campaigns</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
            <Megaphone className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold">Social Media</h4>
              <p className="text-white/70 text-sm">Turn followers into subscribers with engaging landing pages</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
            <Search className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold">Search Engine Marketing</h4>
              <p className="text-white/70 text-sm">Grow your organic traffic with optimized web pages</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
            <Mail className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold">Email Marketing</h4>
              <p className="text-white/70 text-sm">Grow your email list and promote special offers to your subscribers</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
            <Monitor className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold">Small Business Websites</h4>
              <p className="text-white/70 text-sm">Establish your online presence without expensive developers</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
            <Trophy className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold">Lead Generation</h4>
              <p className="text-white/70 text-sm">Get all the tools you need to find, nurture, and manage your leads</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
            <MousePointer className="h-5 w-5 text-white/70 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold">Demand Capture</h4>
              <p className="text-white/70 text-sm">Fill your sales funnel with ideal prospects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const templatesDropdown = (
    <div className="absolute top-full left-0 mt-2 w-[700px] bg-[#1a1827]/95 backdrop-blur-md border border-[#302e3c] rounded-2xl shadow-2xl p-6 z-[60]">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <img src="/image.png" alt="Template Preview" className="w-48 h-64 rounded-lg object-cover" />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">LANDING PAGE TEMPLATES</h3>
            <a href="#" className="text-white/70 text-sm hover:text-white">All Landing Page Templates</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                <h4 className="text-white font-semibold">Lead Capture</h4>
                <p className="text-white/70 text-sm">Grow your leads with free offers and incentives</p>
              </div>
              <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                <h4 className="text-white font-semibold">Sales</h4>
                <p className="text-white/70 text-sm">Monetize with sales pages, upsell funnels and checkouts</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                <h4 className="text-white font-semibold">Offers & Promotions</h4>
                <p className="text-white/70 text-sm">Promote your latest offers and discounts</p>
              </div>
              <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                <h4 className="text-white font-semibold">Social Bio Link</h4>
                <p className="text-white/70 text-sm">Turn your social followers into leads and customers</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide">WEBSITE TEMPLATES</h3>
              <a href="#" className="text-white/70 text-sm hover:text-white">All Site Templates</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                  <h4 className="text-white font-semibold">Mini Sites</h4>
                  <p className="text-white/70 text-sm">Create websites for products, services, and promotions</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                  <h4 className="text-white font-semibold">Programs & Internal</h4>
                  <p className="text-white/70 text-sm">Keep team members informed about internal initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const resourcesDropdown = (
    <div className="absolute top-full left-0 mt-2 w-[600px] bg-[#1a1827] border border-[#302e3c] rounded-2xl shadow-2xl p-6 z-[60]">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">LEARN</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
              <FileText className="h-5 w-5 text-white/70 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold">Blog</h4>
                <p className="text-white/70 text-sm">Get the latest marketing tips and updates</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
              <Gift className="h-5 w-5 text-white/70 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold">Freebies</h4>
                <p className="text-white/70 text-sm">Receive exclusive content to help grow your business</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">GUIDES</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white hover:text-lime-400 text-sm">Ultimate Guide to Landing Pages</a>
              <a href="#" className="block text-white hover:text-lime-400 text-sm">Conversion Rate Optimization Guide</a>
              <a href="#" className="block text-white hover:text-lime-400 text-sm">Guide to Lead Generation</a>
            </div>
            <div className="mt-4">
              <a href="#" className="text-white/70 text-sm hover:text-white">All Guides</a>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Marketing Resources</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                <HelpCircle className="h-5 w-5 text-white/70 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">Help Center</h4>
                  <p className="text-white/70 text-sm">Get answers and learn how to use Leadpages features</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                <BarChart3 className="h-5 w-5 text-white/70 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">Case Studies</h4>
                  <p className="text-white/70 text-sm">Discover how Leadpages users built multi-million dollar businesses</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">PODCASTS</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/image.png" alt="On the Record" className="w-12 h-12 rounded-lg" />
                <div>
                  <h4 className="text-white font-semibold">On the Record</h4>
                  <p className="text-white/70 text-sm">Lively convos about marketing & music</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img src="/image.png" alt="The Glitch Report" className="w-12 h-12 rounded-lg" />
                <div>
                  <h4 className="text-white font-semibold">The Glitch Report</h4>
                  <p className="text-white/70 text-sm">Daily AI-Delivered Marketing News</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">AFFILIATE PROGRAM</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                <ArrowRight className="h-5 w-5 text-white/70 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">Affiliate Portal</h4>
                  <p className="text-white/70 text-sm">Log in to your affiliate account</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                <Users className="h-5 w-5 text-white/70 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">Become an Affiliate</h4>
                  <p className="text-white/70 text-sm">Earn recurring revenue when you refer your audience to Leadpages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Mobile Menu Component
  const mobileMenu = (
    <div className={`fixed inset-0 bg-[#181625]/95 backdrop-blur-md z-[70] transform transition-all duration-300 ${
      isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="flex flex-col h-full">
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#302e3c]">
          <div className="flex items-center space-x-2">
            <img src="/leadpages.png" alt="Leadpages" className="h-8 w-auto" />
            <span className="text-xl font-extrabold text-white tracking-tight font-heading">Leadpages</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-lime-400 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Menu Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Platform Section */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Platform</h3>
              <div className="space-y-3 pl-4">
                <a href="#" className="flex items-center space-x-3 text-white/80 hover:text-white">
                  <Globe className="h-4 w-4" />
                  <span>Landing Pages</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-white/80 hover:text-white">
                  <Zap className="h-4 w-4" />
                  <span>Conversion Tools</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-white/80 hover:text-white">
                  <CreditCard className="h-4 w-4" />
                  <span>Payments</span>
                </a>
              </div>
            </div>
            
            {/* Solutions Section */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Solutions</h3>
              <div className="space-y-3 pl-4">
                <a href="#" className="flex items-center space-x-3 text-white/80 hover:text-white">
                  <TrendingUp className="h-4 w-4" />
                  <span>PPC Ads</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-white/80 hover:text-white">
                  <Mail className="h-4 w-4" />
                  <span>Email Marketing</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-white/80 hover:text-white">
                  <Trophy className="h-4 w-4" />
                  <span>Lead Generation</span>
                </a>
              </div>
            </div>
            
            {/* Templates Section */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Templates</h3>
              <div className="space-y-3 pl-4">
                <a href="#" className="text-white/80 hover:text-white">Lead Capture</a>
                <a href="#" className="text-white/80 hover:text-white">Sales Pages</a>
                <a href="#" className="text-white/80 hover:text-white">Mini Sites</a>
              </div>
            </div>
            
            {/* Resources Section */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Resources</h3>
              <div className="space-y-3 pl-4">
                <a href="#" className="flex items-center space-x-3 text-white/80 hover:text-white">
                  <FileText className="h-4 w-4" />
                  <span>Blog</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-white/80 hover:text-white">
                  <HelpCircle className="h-4 w-4" />
                  <span>Help Center</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-white/80 hover:text-white">
                  <BarChart3 className="h-4 w-4" />
                  <span>Case Studies</span>
                </a>
              </div>
            </div>
            
            <div className="pt-4 border-t border-[#302e3c]">
              <a href="#" className="text-white font-semibold text-lg">Pricing</a>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-[#302e3c] space-y-4">
          <Button variant="ghost" className="w-full text-white hover:text-white hover:bg-white/10 font-semibold">
            Log In
          </Button>
          <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-3 rounded-xl">
            Sign Up Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
  
  return (
    <>
      <nav className={`fixed transition-all duration-500 ease-in-out max-w-7xl z-50 ${
        isScrolled
          ? 'bg-[#181625]/95 backdrop-blur-md left-1/2 transform -translate-x-1/2 top-2 rounded-2xl px-6 py-3 w-[95%] shadow-2xl border border-[#302e3c]'
          : 'bg-transparent w-full justify-between px-6 py-4 mx-auto top-0 left-0 right-0'
      } ${isTransitioning ? 'animate-pulse' : ''}`}>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/leadpages.png" alt="Leadpages" className={isScrolled ? "h-7 w-auto" : "h-8 w-auto"} />
            <span className={`font-extrabold text-white tracking-tight font-heading ${isScrolled ? "text-lg" : "text-xl"}`}>Leadpages</span>
          </div>
          
          {/* Desktop Navigation */}
          {!isScrolled && (
            <div className="hidden md:flex items-center space-x-8">
              <div 
                className="relative flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer"
                onMouseEnter={() => setActiveDropdown('platform')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="font-semibold">Platform</span>
                <ChevronDown className="h-4 w-4" />
                {activeDropdown === 'platform' && platformDropdown}
              </div>
              <div 
                className="relative flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="font-semibold">Solutions</span>
                <ChevronDown className="h-4 w-4" />
                {activeDropdown === 'solutions' && solutionsDropdown}
              </div>
              <div 
                className="relative flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer"
                onMouseEnter={() => setActiveDropdown('templates')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="font-semibold">Templates</span>
                <ChevronDown className="h-4 w-4" />
                {activeDropdown === 'templates' && templatesDropdown}
              </div>
              <div 
                className="relative flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="font-semibold">Resources</span>
                <ChevronDown className="h-4 w-4" />
                {activeDropdown === 'resources' && resourcesDropdown}
              </div>
              <a href="#" className="text-white/90 hover:text-white font-semibold">Pricing</a>
            </div>
          )}

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Desktop buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 font-semibold">
                Log In
              </Button>
              {isScrolled ? (
                <Button className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-4 py-3 rounded-xl border border-lime-300">
                  Sign Up Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <a 
                  href="#" 
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors duration-200 group bg-[#5c7039] hover:bg-lime-500 shadow-lg"
                >
                  <span className="font-semibold">Sign Up Free</span>
                  <span className="relative flex items-center justify-center">
                    <svg className="stroke-current w-3 h-3" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.002 12h-16M15 17s5-3.682 5-5-5-5-5-5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.646"></path>
                    </svg>
                  </span>
                </a>
              )}
            </div>
            
            {/* Mobile hamburger menu */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white hover:text-lime-400 transition-colors p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenu}
    </>
  );
}
