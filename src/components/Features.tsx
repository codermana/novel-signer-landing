import React from 'react';
import { Shield, FileCode2, ImagePlus, Bot, PenTool, Cpu } from 'lucide-react';

const features = [
  {
    title: "Credential Flexibility",
    description: "Novel Signer supports PKCS#11 hardware tokens and P12/PFX certificates so regulated signing flows do not need separate utilities.",
    icon: Shield,
    color: "text-indigo-500"
  },
  {
    title: "JSON and XML Signing",
    description: "Sign structured JSON and XML files from the same desktop flow used for PDFs, without switching tools or rebuilding your signing process.",
    icon: FileCode2,
    color: "text-cyan-500"
  },
  {
    title: "Image to PDF Signing",
    description: "Convert supported image files into signable PDFs, apply visible signatures, and enforce size limits before processing starts.",
    icon: ImagePlus,
    color: "text-emerald-500"
  },
  {
    title: "Auto-pilot Folder Watcher",
    description: "Monitor a folder and automatically sign any new PDFs dropped into it for hands-off intake and recurring operations.",
    icon: Bot,
    color: "text-amber-500"
  },
  {
    title: "Free-hand Signatures",
    description: "Capture and place drawn signatures alongside certificate-backed signing workflows when a natural handwritten mark is required.",
    icon: PenTool,
    color: "text-rose-500"
  },
  {
    title: "Hardware Support",
    description: "Direct integration with SafeNet, HyperSecu, ProxKey, and other PKCS#11 compliant hardware tokens.",
    icon: Cpu,
    color: "text-violet-500"
  }
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="p-6 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className={`w-12 h-12 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center mb-4 ${feature.color}`}>
            <feature.icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
