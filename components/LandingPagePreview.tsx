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
