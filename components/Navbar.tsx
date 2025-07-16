"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, HelpCircle, FileText, Gift, BarChart3, ShoppingCart, Globe, Users, Zap, CreditCard, Settings, Mail, Monitor, Trophy, Target, Megaphone, Share2, Search, MousePointer, TrendingUp } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  scrollY: number;
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
  return (
    <nav className={`flex items-center fixed transition-all duration-300 max-w-7xl z-50 ${
      scrollY > 10
        ? 'bg-[#181625]/95 backdrop-blur-md left-1/2 transform -translate-x-1/2 top-2 rounded-2xl px-6 py-3 w-[95%] shadow-2xl border border-[#302e3c]  '
        : 'bg-transparent w-full justify-between px-6 py-4  mx-auto top-0 left-0 right-0'
    }`}>
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <img src="/leadpages.png" alt="Leadpages" className="h-8 w-auto" />
          <span className="text-xl font-extrabold text-white tracking-tight font-heading">Leadpages</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div 
            className="relative flex  items-center space-x-1 text-white/90 hover:text-white cursor-pointer"
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
      </div>

      <div className="flex items-center space-x-4 ml-auto">
        <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 font-semibold hidden md:inline-flex">
          Log In
        </Button>
        {scrollY > 10 ? (
          <Button className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-4 py-3 rounded-xl border border-lime-300">
            Sign Up Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button className="bg-[#5c7039] hover:bg-lime-500 text-white font-bold px-4 py-3 rounded-xl border border-lime-300">
            Sign Up Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </nav>
  );
}
