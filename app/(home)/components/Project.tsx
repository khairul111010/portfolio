"use client";
import {
  Calendar,
  ChevronRight,
  Copy,
  ExternalLink,
  Eye,
  Key,
} from "lucide-react";
import { JSX, useState } from "react";
type ProjectType = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  bgPattern: string;
  features: string[];
  timeline: string;
  value: string;
  status: "Live" | "Development";
  link: string;
  linkText: string;
  tech: string[];
  impact: Record<string, string>;
  credentials: {
    email: string;
    password: string;
  };
  icon: JSX.Element;
};
const Project = () => {
  const [showCredentials, setShowCredentials] = useState<
    Record<number, boolean>
  >({});

  const toggleCredentials = (projectId: number): void => {
    setShowCredentials((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text);
  };

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "WeGro ERP & Investor App",
      subtitle: "Enterprise Agricultural Management System",
      description:
        "Comprehensive ERP solution transforming agricultural operations with real-time tracking, investor management, and financial reconciliation.",
      gradient: "bg-[#025647]",
      bgPattern:
        "bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]",
      features: [
        "ERP for 15,000+ farmers, field officers & accountants",
        "Real-time field officer tracking with GPS integration",
        "Dynamic investor portal handling $800K+ transactions",
        "Bank panel for reconciliation with zero errors",
        "Multi-role dashboard with advanced analytics",
      ],
      timeline: "Nov 2024 – Present",
      value: "BDT 5.2M+",
      status: "Live",
      link: "https://dev.wegro.global",
      linkText: "View Demo",
      tech: ["React", "Redux", "TypeScript", "Real-time", "Financial"],
      impact: {
        users: "15K+",
        transactions: "$800K+",
        efficiency: "30%",
      },
      credentials: {
        email: "superadmin@wegro.global",
        password: "123456",
      },
      icon: (
        <img src="/wegro.png" alt="Wegro Logo" className="w-12 object-cover" />
      ),
    },
    {
      id: 2,
      title: "Fleetblox",
      subtitle: "AI Fleet Management Platform",
      description:
        "Revolutionary AI-powered fleet management system optimizing routes, monitoring vehicle health, and reducing operational costs.",
      gradient: "bg-[#2D65F2]",
      bgPattern:
        "bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.1),transparent_70%)]",
      features: [
        "AI-based route optimization and fleet scheduling",
        "Real-time vehicle tracking and health monitoring",
        "Dashboard for 100+ fleet companies (5,000+ vehicles)",
        "Predictive maintenance with cost savings",
        "Advanced analytics and reporting suite",
      ],
      timeline: "July 2024 – June 2025",
      value: "BDT 7.2M",
      status: "Development",
      link: "https://dev.fleetblox.com/",
      linkText: "View Demo",
      tech: ["AI/ML", "React", "Analytics", "IoT", "Predictive"],
      impact: {
        companies: "100+",
        vehicles: "5K+",
        savings: "15%",
      },
      credentials: {
        email: "ydwbo@mailto.plus",
        password: "Test@0202",
      },
      icon: (
        <img
          src="/fleetbloxIcon.svg"
          alt="Fleetblox Logo"
          className="w-12 object-cover"
        />
      ),
    },
    {
      id: 3,
      title: "Anchorbooks",
      subtitle: "Next-Gen Accounting Suite",
      description:
        "Cutting-edge accounting software with advanced automation, AI integration, and seamless user experience for modern businesses.",
      gradient: "bg-[#2046AB]",
      bgPattern:
        "bg-[radial-gradient(circle_at_40%_80%,rgba(34,197,94,0.1),transparent_70%)]",
      features: [
        "Advanced automation & AI integration",
        "Seamless user experience with intuitive design",
        "Accuracy and compliance focused architecture",
        "Real-time financial reporting and analytics",
        "Multi-currency and multi-entity support",
      ],
      timeline: "May 2023 – Aug 2024",
      value: "BDT 14.4M+",
      status: "Live",
      link: "https://anchorbooks.ai/",
      linkText: "Visit Site",
      tech: ["AI", "FinTech", "Enterprise", "Automation", "Cloud"],
      impact: {
        clients: "500+",
        accuracy: "94%",
        "Time Saved": "60%",
      },
      credentials: {
        email: "mobin@anchorblock.vc",
        password: "12345678",
      },
      icon: (
        <img
          src="/anchorbooks.svg"
          alt="Anchorbooks Logo"
          className="w-20 object-cover"
        />
      ),
    },
  ];

  return (
    <section className="py-8 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}

        {/* Projects Grid */}
        <div className="flex flex-col gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              {/* Main card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-md shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-slate-200/50 h-full">
                {/* Header with gradient */}
                <div
                  className={`${project.gradient} p-8 relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white backdrop-blur-sm rounded-xl text-white">
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-white/90 text-sm font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === "Live"
                            ? "bg-green-100 text-green-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {project.status}
                      </div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <div
                        className={`w-2 h-2 ${project.gradient} rounded-full`}
                      ></div>
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <ChevronRight className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(project.impact).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-slate-900 mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-slate-500 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Timeline and Value */}
                  <div className="flex justify-between items-center mb-6 p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <div>
                        <div className="text-xs text-slate-500">Timeline</div>
                        <div className="font-semibold text-slate-900 text-sm">
                          {project.timeline}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="text-xs text-slate-500">Value</div>
                        <div className="font-semibold text-green-600 text-sm">
                          {project.value}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex md:flex-row flex-col items-center justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-medium group`}
                    >
                      <Eye className="w-4 h-4" />
                      {project.linkText}
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 md:mt-0 mt-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6 mt-4 p-4 bg-slate-50/50 rounded-xl border border-slate-200/50">
                    <button
                      onClick={() => toggleCredentials(project.id)}
                      className="flex items-center gap-2 w-full text-left hover:text-slate-900 transition-colors"
                    >
                      <Key className="w-4 h-4 text-slate-500" />
                      <span className="text-sm font-medium text-slate-700">
                        Demo Credentials
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          showCredentials[project.id] ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {showCredentials[project.id] && (
                      <div className="mt-3 space-y-2 pl-6">
                        <div className="flex items-center justify-between p-2 bg-white rounded-lg border">
                          <div>
                            <div className="text-xs text-slate-500">Email</div>
                            <div className="font-mono text-sm text-slate-900">
                              {project.credentials.email}
                            </div>
                          </div>
                          <button
                            onClick={() =>
                              copyToClipboard(project.credentials.email)
                            }
                            className="p-1 hover:bg-slate-100 rounded transition-colors"
                          >
                            <Copy className="w-4 h-4 text-slate-500" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-white rounded-lg border">
                          <div>
                            <div className="text-xs text-slate-500">
                              Password
                            </div>
                            <div className="font-mono text-sm text-slate-900">
                              {project.credentials.password}
                            </div>
                          </div>
                          <button
                            onClick={() =>
                              copyToClipboard(project.credentials.password)
                            }
                            className="p-1 hover:bg-slate-100 rounded transition-colors"
                          >
                            <Copy className="w-4 h-4 text-slate-500" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl pointer-events-none`}
              ></div>
            </div>
          ))}
        </div>

        {/* Portfolio summary */}
      </div>
    </section>
  );
};

export default Project;
