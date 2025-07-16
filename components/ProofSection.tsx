import LogoMarquee, { Logo } from "./LogoMarquee";
import StatisticsSection, { Statistic } from "./StatisticsSection";

interface ProofSectionProps {
  logos: Logo[];
  statistics: Statistic[];
}

export default function ProofSection({ logos, statistics }: ProofSectionProps) {
  return (
    <section className="relative w-full -top-32 z-10">
      <div>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Company Logos Marquee */}
          <LogoMarquee logos={logos} />

          {/* Proof Section Content */}
          <div className="px-8 md:px-16 py-16 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight font-heading">
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
              <StatisticsSection statistics={statistics} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
