export interface Statistic {
  value: string;
  description: string;
}

interface StatisticsSectionProps {
  statistics: Statistic[];
}

export default function StatisticsSection({ statistics }: StatisticsSectionProps) {
  return (
    <div className="space-y-8">
      {statistics.map((stat, index) => (
        <div key={index} className="text-left">
          <div className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-light bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            {stat.value}
          </div>
          <p className="text-gray-600 mt-2 text-base lg:text-lg">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}
