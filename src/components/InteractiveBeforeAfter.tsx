import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

interface InteractiveBeforeAfterProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const InteractiveBeforeAfter: React.FC<InteractiveBeforeAfterProps> = ({
  beforeImage = '/assets/work/yU9umWIxfkg.jpg',
  afterImage = '/assets/work/yLH4GfFotq0.jpg',
  beforeLabel = 'RAW & UNTREATED SURFACE (MARRING / GRIME)',
  afterLabel = 'ULTRACLEAN CERAMIC MIRROR GLOSS'
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full relative select-none">
      {/* Editorial Title Bar (Open, unboxed, bright theme) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 hairline-b">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#075BFF] font-bold">
            Optical Transformation Inspection
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#27313B] mt-1">
            Before & After Precision Detailing
          </h3>
        </div>
        <div className="flex items-center gap-3 text-xs text-[#27313B]/70 font-medium">
          <ArrowLeftRight className="w-4 h-4 text-[#075BFF]" />
          <span>DRAG THE SPLIT LINE TO INSPECT SURFACE LEVELING</span>
        </div>
      </div>

      {/* Full-width Unboxed Split Container (Bright styling) */}
      <div
        ref={containerRef}
        className="relative w-full h-[380px] sm:h-[460px] md:h-[580px] mt-6 overflow-hidden cursor-ew-resize shadow-[0_12px_40px_rgba(7,91,255,0.12)] border border-[#075BFF]/10"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Background / After Image (Full width) */}
        <img
          src={afterImage}
          alt="After detailing results"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold text-[#075BFF] tracking-wider uppercase flex items-center gap-2 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#00C7C7]" />
          <span>{afterLabel}</span>
        </div>

        {/* Foreground / Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before detailing condition"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%'
            }}
          />
          <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold text-[#27313B] tracking-wider uppercase shadow-sm">
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Divider Line & Grabber */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#075BFF] via-[#00C7C7] to-[#075BFF] pointer-events-none z-20 shadow-[0_0_15px_rgba(7,91,255,0.6)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-[#FFFFFF] border-2 border-[#075BFF] flex items-center justify-center text-[#075BFF] shadow-xl pointer-events-auto cursor-grab active:cursor-grabbing">
            <ArrowLeftRight className="w-4 h-4 text-[#075BFF]" />
          </div>
        </div>

        {/* Bottom subtle metrics ticker (open hairline) */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent p-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#27313B]">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-[#27313B]/60 block text-[10px] uppercase font-semibold">Glaze Depth</span>
              <span className="text-[#075BFF] font-bold text-sm tracking-wide">9H Optical Shield</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-[#27313B]/20" />
            <div className="hidden sm:block">
              <span className="text-[#27313B]/60 block text-[10px] uppercase font-semibold">Correction Depth</span>
              <span className="text-[#27313B] font-bold text-sm tracking-wide">Multi-Stage Rotary Leveling</span>
            </div>
          </div>
          <div className="text-[#075BFF] font-mono text-xs font-bold tracking-wider">
            <span>GENUINE ULTRACLEAN VEHICLE DETAILING</span>
          </div>
        </div>
      </div>
    </div>
  );
};
