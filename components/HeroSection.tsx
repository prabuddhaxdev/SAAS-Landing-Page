import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="px-6 pt-40 max-w-4xl mx-auto text-center">
      <div className="space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
            Powerful Landing Pages
            <br />
            That Convert
          </h1>

          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
            Launch high-converting landing pages faster, generate qualified leads, and optimize your marketing efforts—all with one simple solution.
          </p>
        </div>

        {/* Email Signup Form */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Work email"
            className="flex-1 px-4 py-3 h-12 rounded-lg bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium"
          />
          <Button className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-6 py-3 h-12 rounded-lg whitespace-nowrap border border-lime-300">
            Start my trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
