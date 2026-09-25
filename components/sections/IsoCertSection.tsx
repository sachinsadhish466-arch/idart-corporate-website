"use client";

import React from "react";
import IsoQualityGraphic from "../ui/IsoQualityGraphic";

export default function IsoCertSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IsoQualityGraphic />
      </div>
    </section>
  );
}
