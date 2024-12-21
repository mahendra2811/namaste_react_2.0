import React from 'react'

const ShimmerMenuRestaurent = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Restaurant Info Shimmer */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-pulse">
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
                <div className="flex gap-4 pt-4">
                  <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
                  <div className="h-8 w-32 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
    
            {/* Menu Cards Shimmer */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 border-b border-gray-100">
                <div className="h-8 bg-gray-200 rounded w-32"></div>
              </div>
    
              <div className="divide-y divide-gray-100">
                {/* Generate 6 shimmer cards */}
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="flex h-48">
                    {/* Content side */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col h-full animate-pulse">
                        <div className="mb-auto space-y-4">
                          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="h-6 bg-gray-200 rounded w-24"></div>
                        </div>
                      </div>
                    </div>
    
                    {/* Image placeholder */}
                    <div className="w-[30%] bg-gray-200 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
    
            {/* Shimmer overlay effect - creates the moving gradient */}
            <style jsx="true">{`
              @keyframes shimmer {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
    
              .animate-pulse {
                position: relative;
                overflow: hidden;
              }
    
              .animate-pulse::after {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                transform: translateX(-100%);
                background-image: linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0) 0,
                  rgba(255, 255, 255, 0.2) 20%,
                  rgba(255, 255, 255, 0.5) 60%,
                  rgba(255, 255, 255, 0)
                );
                animation: shimmer 2s infinite;
                content: '';
              }
            `}</style>
          </div>
        </div>
      );
    };

export default ShimmerMenuRestaurent
