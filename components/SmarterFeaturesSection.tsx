import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function SmarterFeaturesSection() {
  return (
    <div className="mt-36">
      <div className="relative bg-[#1c1c24] rounded-3xl p-8 md:p-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
        <div className="grid md:grid-cols-2 gap-8 items-center relative">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Smarter Features,
              <br />
              Bigger Impact
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
              Supercharge your marketing with intelligent optimization tools and AI-powered tech.
            </p>
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-lime-300/80 hover:bg-lime-300 transition-colors duration-200 group"
              >
                <span className="text-gray-900 font-semibold">Explore the platform</span>
                <span className="bg-lime-300 rounded-lg w-8 h-8 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-gray-900" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/image.png"
              alt="Smarter Features Preview"
              width={500}
              height={350}
              className="rounded-lg transform -rotate-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
