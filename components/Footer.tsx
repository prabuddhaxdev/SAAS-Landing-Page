import { Facebook, Linkedin, Instagram, Youtube, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Leadpages</span>
            </div>
            <address className="text-sm text-gray-600 not-italic leading-relaxed">
              212 3rd Ave N, Ste 475<br />
              Minneapolis MN, 55401-1479
            </address>
          </div>

          {/* Platform Section */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Platform Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Landing Page Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Comparisons
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Marketing Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Landing Pages Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Lead Generation Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Optimization Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Support Section */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Community & Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Copyright & Legal */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-500">
              <span>© 2025 Leadpages (US), Inc. All Rights Reserved.</span>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
                <span className="text-gray-300">|</span>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Legal
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Pinterest"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.446.713-1.188.891-1.892l.652-2.507s.162.317.641.317c.841 0 1.411-.865 1.411-2.021 0-1.744-1.478-2.778-3.016-2.778-2.264 0-3.409 1.618-3.409 2.968 0 .817.308 1.376.967 1.376.26 0 .49-.107.628-.27.127-.149.19-.353.19-.577 0-.408-.206-.732-.61-.732-.18 0-.36.063-.495.178-.18-.953.564-1.68 1.653-1.68.88 0 1.393.573 1.393 1.347 0 1.018-.578 1.854-1.184 1.854-.386 0-.6-.317-.518-.707.098-.465.287-1.011.287-1.362 0-.314-.168-.576-.516-.576-.409 0-.739.423-.739.99 0 .361.122.606.122.606l-.49 2.078c-.15.636-.109 1.549-.039 2.048C6.16 21.37 2 17.175 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Redrick Family Brands */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Leadpages is part of the Redbrick family of brands.
            </p>
            
            {/* Brand Logos */}
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="font-bold text-lg">Animoto</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="font-bold text-lg">Delivra</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="font-bold text-lg">Duplex</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg">Leadpages</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="font-bold text-lg">Shift</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
