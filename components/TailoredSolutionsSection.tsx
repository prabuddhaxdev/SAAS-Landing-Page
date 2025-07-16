interface TailoredSolution {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  gradientFrom: string;
  gradientTo: string;
  textColor: string;
}

const tailoredSolutions: TailoredSolution[] = [
  {
    id: 1,
    title: "Marketing Teams",
    description: "Create high-converting landing pages, pop-ups, and alert bars without the need for developers or engineers. Use an intuitive drag-and-drop solution to go from concept to execution in a matter of minutes.",
    imageSrc: "/card-1.png",
    gradientFrom: "from-black/20",
    gradientTo: "to-black-10/50",
    textColor: "text-purple-100"
  },
  {
    id: 2,
    title: "Agencies",
    description: "Scale your agency and maximize your performance with a results-focused solution. Launch pages faster than ever with collaborative tools and gather critical audience insights to share with your clients.",
    imageSrc: "/card-2.png",
    gradientFrom: "from-black/20",
    gradientTo: "to-purple-800/50",
    textColor: "text-blue-100"
  },
  {
    id: 3,
    title: "Businesses",
    description: "Optimize your lead-collection strategy with powerful conversion tools, including AI assistants and custom forms. Build and launch pages quickly, then analyze the results and perform A/B tests to continually improve performance.",
    imageSrc: "/card-3.png",
    gradientFrom: "from-black/20",
    gradientTo: "to-purple-900/50",
    textColor: "text-gray-100"
  },
  {
    id: 4,
    title: "Enterprise",
    description: "Streamline your lead-capture launches and maximize your results with a robust lead optimization solution. Integrate your landing page and lead collection with email marketing platforms, CRMs, analytics tools, and more to enhance your entire tech stack.",
    imageSrc: "/card-4.png",
    gradientFrom: "from-black/20",
    gradientTo: "to-purple-900/50",
    textColor: "text-indigo-100"
  }
];

export default function TailoredSolutionsSection() {
  return (
    <div className="bg-gray-900 py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <section className="pinion pinion-textBlock mb-16">
          <div className="pinion-inner">
            <div className="flex flex-col gap-2 items-center">
              <article className="portable-text xs:px-3 sm:px-0">
                <h2 className="type-title-t6 sm:type-title-t4 md:type-title-t3 text-center text-4xl lg:text-5xl font-extrabold text-white leading-tight font-heading mb-6">
                  <span className="block [.text-center_&]:mx-auto max-w-cols8">
                    <span className="block text-center">Tailored solutions for your unique business</span>
                  </span>
                </h2>
                <p className="text-body-muted type-body-md sm:type-body-lg text-center text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  <span className="block text-center">Whether you're an agency seeking improved results, a business owner scaling your marketing, or an enterprise wanting to expand your reach, Leadpages empowers you to succeed.</span>
                </p>
              </article>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          {tailoredSolutions.map((solution) => (
            <div key={solution.id} className={`bg-gradient-to-br p-4 border border-[#302e3c] ${solution.gradientFrom} ${solution.gradientTo} rounded-3xl text-white relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-30">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${solution.imageSrc})` }}
                ></div>
              </div>
              <div className="relative z-content p-4 md:p-6">
                <div className="flex flex-col">
                  <article className="portable-text flex-col flex gap-2">
                    <h4 className="type-h2 md:type-h1 text-3xl ">{solution.title}</h4>
                    <p className={`text-body-muted type-body-xs md:type-body-sm ${solution.textColor} leading-relaxed`}>
                      {solution.description}
                    </p>
                  </article>
                </div>
                <div className="aspect-[5/2] w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
