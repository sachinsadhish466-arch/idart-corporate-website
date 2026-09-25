import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = ""
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center" ? "text-center mx-auto" : align === "right" ? "text-right ml-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 lg:mb-16 ${alignmentClass} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-orange-500/10 text-orange-400 border border-orange-500/20 backdrop-blur-md`}>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
      <div className={`mt-5 flex items-center gap-2 ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"}`}>
        <div className="w-12 h-1 bg-orange-500 rounded-full" />
        <div className="w-2 h-1 bg-blue-500 rounded-full" />
      </div>
    </div>
  );
}
