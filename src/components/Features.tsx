import React from 'react';
import { Shield, Layout, Zap, Cpu, MousePointer2, Layers } from 'lucide-react';

const features = [
  {
    title: "Credential Flexibility",
    description: "Novel Signer supports PKCS#11 hardware tokens and P12/PFX certificates so regulated signing flows do not need separate utilities.",
    icon: Shield,
    color: "text-indigo-500"
  },
  {
    title: "Placement Control",
    description: "Review page placement, signature dimensions, and appearance before the file is signed and distributed with precision preview.",
    icon: Layout,
    color: "text-cyan-500"
  },
  {
    title: "Throughput",
    description: "Handle one document or a whole working set with progress visibility, structured output, and clear failure reporting.",
    icon: Zap,
    color: "text-emerald-500"
  },
  {
    title: "Hardware Support",
    description: "Direct integration with SafeNet, HyperSecu, ProxKey, and other PKCS#11 compliant hardware tokens.",
    icon: Cpu,
    color: "text-amber-500"
  },
  {
    title: "Visual Precision",
    description: "Drag-and-drop signature placement with real-time preview of how the final document will look.",
    icon: MousePointer2,
    color: "text-rose-500"
  },
  {
    title: "Batch Processing",
    description: "Process hundreds of documents in a single operation with detailed logs for audit and compliance.",
    icon: Layers,
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
