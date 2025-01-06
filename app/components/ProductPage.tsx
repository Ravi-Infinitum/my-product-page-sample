'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Box } from 'lucide-react';

const ProductPage = () => {
  const images = [
    {
      id: 1,
      url: "/chair1.png",
      alt: "Grey office chair front view",
      type: "image"
    },
    {
      id: 2,
      url: "/chair6.png",
      alt: "Brown office chair front view",
      type: "image"
    },
    {
      id: 3,
      url: "/chair2.png",
      alt: "Generic office chair 02",
      type: "image"
    },
    {
      id: 4,
      url: "https://www.3dinfinitum.com/view/6775301b49e256c6e88edf19",
      alt: "3D Model View",
      type: "3d",
    }
  ];

  const [activeView, setActiveView] = useState<typeof images[0] | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setActiveView(images[0]);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="aspect-square bg-gray-100 rounded-lg"/>
              <div className="space-y-4">
                <div className="h-8 bg-gray-100 rounded w-3/4"/>
                <div className="h-4 bg-gray-100 rounded w-1/2"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery Section */}
          <div className="space-y-6">
            <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
              {activeView?.type === 'image' ? (
                <img
                  src={activeView.url}
                  alt={activeView.alt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <iframe 
                  src={activeView?.url}
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts"
                  title="3D Model Viewer"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
            <div className="flex gap-4">
              {images.map((view) => (
                <button
                  key={view.id}
                  onClick={() => setActiveView(view)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden
                    ${activeView?.id === view.id 
                      ? 'ring-2 ring-blue-600 ring-offset-2' 
                      : 'ring-1 ring-gray-200'}`}
                >
                  {view.type === 'image' ? (
                    <img
                      src={view.url}
                      alt={view.alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <Box className="h-8 w-8 text-blue-600" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col pt-4 lg:pt-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700">
                In Stock
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                Free Shipping
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Generic Office Chair</h1>
            
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-3xl font-bold text-blue-600">$299.99</span>
              <span className="text-xl text-gray-500 line-through">$399.99</span>
              <span className="text-sm font-semibold text-green-600">25% OFF</span>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Experience optimal comfort with our professional office chair. 
              Features ergonomic design elements and adjustable settings for personalized comfort.
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Adjustable lumbar support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">360° swivel casters</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Breathable mesh back</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">300 lbs capacity</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto space-y-4">
              <button className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center text-lg font-semibold transition-colors">
                <ShoppingCart className="mr-3 h-5 w-5" />
                Add to Cart
              </button>
              <p className="text-sm text-gray-500 text-center">
                Free returns within 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;