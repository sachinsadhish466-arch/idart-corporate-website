import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
  dark = false
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center" ? "text-center mx-auto" : align === "right" ? "text-right ml-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 lg:mb-16 ${alignmentClass} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
          dark
            ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
            : "bg-orange-50 text-orange-700 border border-orange-200"
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
          {badge}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
        dark ? "text-white" : "text-slate-900"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed font-normal ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-1.5 ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"}`}>
        <div className="w-10 h-1 bg-orange-500 rounded-full" />
        <div className="w-2 h-1 bg-blue-500 rounded-full" />
      </div>
    </div>
  );
}
