"use client";

import React, { useState } from "react";
import Image from "next/image";
import photoPic from "../../public/photo.jpg";

interface ProfilePhotoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  priority?: boolean;
}

const sizeMap = {
  sm: {
    container: "w-10 h-10 text-sm",
    px: 40,
  },
  md: {
    container: "w-16 h-16 text-xl",
    px: 64,
  },
  lg: {
    container: "w-32 h-32 md:w-40 md:h-40 text-3xl md:text-4xl",
    px: 160,
  },
  xl: {
    container: "w-48 h-48 md:w-64 md:h-64 text-5xl md:text-6xl",
    px: 256,
  },
};

export function ProfilePhoto({
  size = "lg",
  className = "",
  priority = false,
}: ProfilePhotoProps) {
  const [hasError, setHasError] = useState(false);
  const currentSize = sizeMap[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-2 border-teal-600/30 dark:border-teal-400/30 bg-gradient-to-br from-navy-800 to-navy-950 transition-all duration-300 hover:border-teal-500/60 ${currentSize.container} ${className}`}
    >
      {!hasError ? (
        <Image
          src={photoPic}
          alt="Abdullrazak Mohammed Mojahed"
          width={currentSize.px}
          height={currentSize.px}
          priority={priority}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : null}

      {/* Fallback to Initials "AM" if missing or failed to load */}
      {hasError && (
        <div
          className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1E2B3C] via-[#16212E] to-[#0D141E] text-white font-extrabold select-none p-2 text-center"
          aria-label="Abdullrazak Mohammed Mojahed (Initials AM)"
        >
          <span className="font-heading tracking-wider bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
            AM
          </span>
          {size === "xl" && (
            <span className="text-xs uppercase tracking-widest text-slate-400 mt-1 font-mono font-medium">
              Software Engineer
            </span>
          )}
        </div>
      )}
    </div>
  );
}
