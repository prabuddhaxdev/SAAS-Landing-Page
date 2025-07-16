import Image from "next/image";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-white rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info & Logo */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
            <img src="/leadpages.png" alt="Leadpages" className={ "h-8 w-auto filter grayscale"} />
            <span className={`font-extrabold text-gray-500 filter grayscale tracking-tight font-heading text-xl`}>Leadpages</span>
          </div>
            <address className="text-sm text-gray-500 not-italic leading-relaxed">
              212 3rd Ave N, Ste 475
              <br />
              Minneapolis MN, 55401-1478
            </address>
          </div>

          {/* Links Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Platform
                </h3>
                <ul className="mt-4 space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Platform Overview</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Landing Page Templates</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Plans</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Comparisons</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Resources
                </h3>
                <ul className="mt-4 space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Marketing Resources</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Landing Pages Guide</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Lead Generation Guide</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Optimization Guide</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Community & Support
                </h3>
                <ul className="mt-4 space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help Center</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Customer Stories</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Affiliate Program</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">System Status</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Press</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs text-gray-500">
            <span>© 2025 Leadpages (US), Inc. All Rights Reserved.</span>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-gray-900">Legal</a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {[Facebook, Linkedin, Instagram, Youtube].map((Icon, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-2">
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a href="#" className="text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.245-1.021 1.584-6.702 1.584-6.702s-.398-.797-.398-1.974c0-1.845 1.08-3.228 2.434-3.228 1.148 0 1.702.861 1.702 1.891 0 1.148-.729 2.856-1.11 4.425-.322 1.33.664 2.405 1.96 2.405 2.347 0 4.145-2.487 4.145-6.127 0-3.22-2.29-5.495-5.247-5.495-3.566 0-5.644 2.668-5.644 5.224 0 1.011.381 1.686.826 1.686.373 0 .686-.46.596-.978-.139-.749-.42-1.556-.42-2.117 0-.868.51-1.686 1.561-1.686 1.248 0 2.234 1.264 2.234 2.931 0 1.743-1.138 3.14-2.713 3.14-.978 0-1.705-.782-1.482-1.835.242-1.12 1.021-2.53 1.021-3.441 0-1.614-1.1-2.886-2.934-2.886-2.295 0-3.893 2.223-3.893 4.546 0 1.48.522 2.535.522 2.535l-1.184 4.991c-.49 2.081.278 4.522.322 4.748C8.473 21.82 10.16 22 12 22c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>


        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500 mb-6">
            Leadpages is part of the Redbrick family of brands.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <span className="font-bold text-xl text-gray-500 filter grayscale">Animoto</span>
            <span className="font-bold text-xl text-gray-500 filter grayscale">Delivra</span>
            <span className="font-bold text-xl text-gray-500 filter grayscale">Duplex</span>
            <img src="/leadpages.png" alt="Leadpages" className={ "h-8 w-auto"} />
          </div>
        </div>
      </div>
    </footer>
  );
}
