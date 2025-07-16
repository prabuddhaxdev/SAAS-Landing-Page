interface LandingPagePreviewProps {
  rotation: number;
  scale: number;
}

export default function LandingPagePreview({ rotation, scale }: LandingPagePreviewProps) {
  return (
    <section className="px-6 pb-20 max-w-5xl mx-auto perspective-1000">
        
      <div
        className="relative transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotation}deg) scale(${scale})`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="absolute top-0 right-0 z-50 transform translate-x-1/4 translate-y-1/2">
        <svg width="280" height="200" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background Card */}
          <rect x="20" y="20" width="240" height="160" rx="20" fill="url(#cardGradient)" fillOpacity="0.9" />
          
          {/* A/B TEST Text */}
          <text x="40" y="50" className="text-white text-sm font-medium" fill="white" fontSize="12" letterSpacing="2">
            A/B TEST
          </text>
          
          {/* +45% Text */}
          <text x="40" y="85" className="text-white text-3xl font-bold" fill="white" fontSize="32" fontWeight="bold">
            +45%
          </text>
          
          {/* Chart Area */}
          <g transform="translate(30, 100)">
            {/* Chart Background */}
            <rect x="0" y="0" width="200" height="60" rx="8" fill="url(#chartBg)" fillOpacity="0.3" />
            
            {/* Wave Chart */}
            <path 
              d="M10,50 Q20,45 30,40 T50,35 T70,30 T90,25 T110,20 T130,18 T150,15 T170,12 T190,10" 
              stroke="url(#waveGradient1)" 
              strokeWidth="2" 
              fill="none"
            />
            
            {/* Fill area under wave */}
            <path 
              d="M10,50 Q20,45 30,40 T50,35 T70,30 T90,25 T110,20 T130,18 T150,15 T170,12 T190,10 L190,60 L10,60 Z" 
              fill="url(#areaGradient1)" 
              fillOpacity="0.6"
            />
            
            {/* Second wave (darker) */}
            <path 
              d="M10,55 Q25,50 40,45 T70,38 T100,32 T130,28 T160,24 T190,20" 
              stroke="url(#waveGradient2)" 
              strokeWidth="2" 
              fill="none"
            />
            
            {/* Fill area under second wave */}
            <path 
              d="M10,55 Q25,50 40,45 T70,38 T100,32 T130,28 T160,24 T190,20 L190,60 L10,60 Z" 
              fill="url(#areaGradient2)" 
              fillOpacity="0.4"
            />
          </g>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
            </linearGradient>
            
            <linearGradient id="chartBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#374151" stopOpacity="0.3" />
            </linearGradient>
            
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
            
            <linearGradient id="areaGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
            
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            
            <linearGradient id="areaGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
        {/* Browser Window Frame */}
        <div className="bg-white rounded-t-2xl shadow-2xl overflow-hidden mx-auto max-w-4xl transform-gpu">
          {/* Browser Bar */}
          <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-500 ml-4">
              1.00
            </div>
          </div>

          <div className="relative transform-gpu">
            <img
              src="https://www.leadpages.com/_next/image?url=https%3A%2F%2Fcustomer-4yowinxxlegi56v8.cloudflarestream.com%2F7b6ee0fce0d1988bb99cf21d125a3b15%2Fthumbnails%2Fthumbnail.jpg&w=1600&q=75"
              alt="Fintastech Landing Page Preview"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
