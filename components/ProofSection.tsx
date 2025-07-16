import LogoMarquee, { Logo } from "./LogoMarquee";
import StatisticsSection, { Statistic } from "./StatisticsSection";

interface Feature {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface TailoredSolution {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  gradientFrom: string;
  gradientTo: string;
  textColor: string;
}

interface ProofSectionProps {
  logos: Logo[];
  statistics: Statistic[];
}

const features: Feature[] = [
  {
    id: 1,
    title: "Intuitive builder for conversion-optimized landing pages",
    description: "Create high-converting landing pages without writing a single line of code. Build multiple variations, A/B test different page elements, and continually optimize your results based on real conversion data.",
    buttonText: "Create optimized pages",
    imageSrc: "/feat1.webp",
    imageAlt: "Landing page builder interface"
  },
  {
    id: 2,
    title: "Lead enrichment for more effective nurturing",
    description: "Unlock the full potential of your leads by automatically adding key details like industry, company size, location, and more. Know your leads better to more effectively convert them to customers.",
    buttonText: "Enrich my leads",
    imageSrc: "/feat2.webp",
    imageAlt: "Lead enrichment interface"
  },
  {
    id: 3,
    title: "Smart team features for streamlined collaboration",
    description: "Collaborate with your team to build more effective landing pages. Assign individual logins to every team member and leave feedback right in the builder to streamline your page creation.",
    buttonText: "Build better together",
    imageSrc: "/feat3.webp",
    imageAlt: "Team collaboration interface"
  },
  {
    id: 4,
    title: "A/B Testing for optimization",
    description: "Create multiple landing page variations to better understand what drives action with your audience. Experiment with different headlines, images, CTAs, and more to continuously optimize your page.",
    buttonText: "Optimize performance",
    imageSrc: "/feat4.webp",
    imageAlt: "A/B testing interface"
  }
];

export default function ProofSection({ logos, statistics }: ProofSectionProps) {
  return (
    <section className="relative w-full -top-32 ">
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

            {/* Data-driven lead capture solutions section */}
            <div className="mt-20 pt-16 ">
              <div className="text-center mb-16">
                <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight font-heading mb-6 wrap-balance max-w-2xl m-auto w-[80%] md:w-auto">
                  Data-driven lead capture solutions
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto w-[95%] md:w-auto">
                  Everything you need to launch landing pages, optimize your strategy, and make the most of 
                  your leads.
                </p>
              </div>

              <div className="space-y-20">
                {features.map((feature) => (
                  <div key={feature.id} className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
                    <div className="relative m-auto w-[90%] lg:w-96">
                      <div className="relative overflow-hidden rounded-3xl shadow-lg">
                        <img 
                          src={feature.imageSrc} 
                          alt={feature.imageAlt} 
                          className={`w-full  h-64 object-cover`}
                        />                        
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 wrap-balance w-[90%] lg:w-auto mx-auto">
                      <h4 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                        {feature.title}
                      </h4>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>

                      <div className="pt-4">
                        <a className="link-text link-normal link-w-icon inline-flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-lime-400 transition-colors duration-200 group" href="#">
                          <span className="link-label text-gray-900 font-semibold">{feature.buttonText}</span>
                          <span className="link-icon relative flex items-center justify-center">
                            <span className="link-icon-background bg-lime-400 group-hover:bg-lime-400 rounded-xl w-10 h-10 flex items-center justify-center transition-colors duration-200"></span>
                            <svg className="stroke-current w-3 h-3 absolute" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path className="" d="M20.002 12h-16M15 17s5-3.682 5-5-5-5-5-5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.646"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailored solutions section */}
      <div className="bg-gray-900 py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight font-heading mb-6 wrap-balance max-w-2xl m-auto w-[95%] md:w-auto">
              Tailored solutions for your unique business
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Whether you're an agency seeking improved results, a business owner scaling your marketing, or an enterprise wanting to expand your reach, Leadpages empowers you to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Marketing Teams Card */}
            <div className="bg-gradient-to-br from-purple-900 to-pink-800 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(/card-1.png)' }}
                ></div>
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Marketing Teams</h4>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  Create high-converting landing pages, pop-ups, and alert bars without the need for developers or engineers. Use an intuitive drag-and-drop solution to go from capture to execution in a matter of minutes.
                </p>
                <div className="h-40"></div>
              </div>
            </div>

            {/* Agencies Card */}
            <div className="bg-gradient-to-br from-blue-900 to-purple-800 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(/card-2.png)' }}
                ></div>
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Agencies</h4>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Scale your agency and maximize your performance with a results-focused solution. Launch pages faster than ever with collaborative tools and gather critical audience insights to share with your clients.
                </p>
                <div className="h-40"></div>
              </div>
            </div>

            {/* Businesses Card */}
            <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(/card-3.png)' }}
                ></div>
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Businesses</h4>
                <p className="text-gray-100 mb-6 leading-relaxed">
                  Optimize your lead-collection strategy with powerful conversion tools, including AI assistants and custom forms. Build and launch pages quickly, then analyze the results and perform A/B tests to continually improve performance.
                </p>
                <div className="h-40"></div>
              </div>
            </div>

            {/* Enterprise Card */}
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(/card-4.png)' }}
                ></div>
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Enterprise</h4>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  Streamline your lead-capture launches and maximize your results with a robust lead optimization solution. Integrate your landing page and lead collection with email marketing platforms, CRMs, analytics tools, and more to enhance your entire tech stack.
                </p>
                <div className="h-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
