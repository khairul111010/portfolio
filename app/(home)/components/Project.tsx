import {
  Bot,
  Calendar,
  ChevronRight,
  DollarSign,
  ExternalLink,
  Eye,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState<any | null>(null);

  const projects = [
    {
      id: 1,
      title: "WeGro ERP & Investor App",
      subtitle: "Enterprise Agricultural Management System",
      description:
        "Comprehensive ERP solution transforming agricultural operations with real-time tracking, investor management, and financial reconciliation.",
      gradient: "from-blue-600 via-blue-700 to-cyan-600",
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
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Fleetblox",
      subtitle: "AI Fleet Management Platform",
      description:
        "Revolutionary AI-powered fleet management system optimizing routes, monitoring vehicle health, and reducing operational costs.",
      gradient: "from-purple-600 via-pink-600 to-rose-600",
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
      icon: <Bot className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Anchorbooks",
      subtitle: "Next-Gen Accounting Suite",
      description:
        "Cutting-edge accounting software with advanced automation, AI integration, and seamless user experience for modern businesses.",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
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
        accuracy: "99.9%",
        time: "60%",
      },
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.03),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing enterprise-level solutions that drive business growth,
            operational efficiency, and digital transformation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Main card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-slate-200/50 h-full">
                {/* Header with gradient */}
                <div
                  className={`bg-gradient-to-r ${project.gradient} ${project.bgPattern} p-8 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl text-white">
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
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.slice(0, 3).map((feature, i) => (
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
                      {project.features.length > 3 && (
                        <li className="text-sm text-slate-500 ml-7">
                          +{project.features.length - 3} more features
                        </li>
                      )}
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
                  <div className="flex justify-between items-center mb-6 p-4 bg-slate-50/50 rounded-xl">
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
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <div className="text-right">
                        <div className="text-xs text-slate-500">Value</div>
                        <div className="font-semibold text-green-600 text-sm">
                          {project.value}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
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
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-slate-600 text-sm">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                20K+
              </div>
              <div className="text-slate-600 text-sm">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                ₹26.8M+
              </div>
              <div className="text-slate-600 text-sm">Total Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">2+</div>
              <div className="text-slate-600 text-sm">Years Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
