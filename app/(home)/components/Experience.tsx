"use client";

import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Code,
  Globe2Icon,
  MapPin,
  TrendingUp,
  Zap,
} from "lucide-react";

import { useState } from "react";

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Wegro",
      location: "Dhaka, BD",
      period: "Mar 2025 – Present",
      status: "current",
      color: "from-green-500 to-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      achievements: [
        "Engineered ERP system for 15,000+ farmers, reducing manual coordination by 30%",
        "Implemented real-time tracking for 150+ field officers",
        "Optimized API integration, reducing network errors by 67%",
      ],
      metrics: [
        {
          value: "$800K+",
          label: "Investment transactions processed",
          color: "text-green-600",
        },
        {
          value: "25%",
          label: "Increase in transaction volume",
          color: "text-green-600",
        },
      ],
      tech: ["React", "TypeScript", "API Integration", "Real-time Systems"],
      icon: (
        <img src="/wegro.png" alt="Wegro Logo" className="w-12 object-cover" />
      ),
    },
    {
      id: 2,
      role: "Senior Frontend Developer",
      company: "Fleetblox",
      location: "Canada (Remote - Part time)",
      period: "Nov 2024 – Mar 2025",
      status: "completed",
      color: "from-[#2D65F2] to-[#2D65F2]",
      bgColor: "bg-[#2D65F2]/5",
      borderColor: "border-[#2D65F2]/20",
      achievements: [
        "Developed AI-powered fleet management platform for 100+ companies",
        "Integrated AI algorithms reducing operational costs by 15%",
        "Built real-time tracking for 5,000+ fleet units",
      ],
      metrics: [
        { value: "100+", label: "Companies served", color: "text-[#2D65F2]" },
        {
          value: "15%",
          label: "Cost reduction achieved",
          color: "text-[#2D65F2]",
        },
      ],
      tech: ["React", "Redux", "AI Integration", "Real-time Analytics"],
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
      role: "Frontend Engineer",
      company: "Anchorblock Technology",
      location: "Dhaka, BD",
      period: "May 2023 – Feb 2025",
      status: "completed",
      color: "from-[#1A34D1] to-[#1A34D1]",
      bgColor: "bg-[#1A34D1]/5",
      borderColor: "border-[#1A34D1]/20",
      achievements: [
        "Refactored Anchorbooks accounting software for 500+ clients",
        "Built USSD monitoring tool for 5M+ active users",
        "Integrated AI for automated invoice generation",
      ],
      metrics: [
        {
          value: "5M+",
          label: "Active users supported",
          color: "text-[#1A34D1]",
        },
        { value: "500+", label: "Clients served", color: "text-[#1A34D1]" },
      ],
      tech: ["TypeScript", "React", "Redux", "D3.js"],
      icon: (
        <img
          src="/anchorblocklogo.jpeg"
          alt="Anchorblock Logo"
          className="w-12 object-cover"
        />
      ),
    },
    {
      id: 4,
      role: "Software Engineer",
      company: "IOTA Infotech Limited",
      location: "Dhaka, BD",
      period: "Apr 2022 – Apr 2023",
      status: "completed",
      color: "from-[#F01A26] to-[#F01A26]",
      bgColor: "bg-[#F01A26]/5",
      borderColor: "border-[#F01A26]/20",
      achievements: [
        "Reduced Google Maps API usage by 40%",
        "Increased social media engagement by 53%",
        "Built SAAS frontend for 55,000+ employees",
      ],
      metrics: [
        {
          value: "85%",
          label: "Development efficiency improvement",
          color: "text-[#F01A26]",
        },
        { value: "40%", label: "API cost reduction", color: "text-[#F01A26]" },
      ],
      tech: ["JavaScript", "React", "SAAS", "API Optimization"],
      icon: (
        <img src="/iota.jpeg" alt="IOTA Logo" className="w-12 object-cover" />
      ),
    },
    {
      id: 5,
      role: "Junior Software Engineer",
      company: "ITGlobalOnline",
      location: "Dhaka, BD",
      period: "Mar 2021 – Feb 2022",
      status: "completed",
      color: "from-amber-600 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      achievements: [
        "Developed REST API using Node.js & Web3.js for blockchain integration handling 500+ transactions daily",
        "Improved NFT marketplace backend with Laravel to support daily active users seamlessly",
        "Managed and optimized VPS servers across 5+ live platforms, ensuring 94% uptime",
      ],
      metrics: [
        {
          value: "500+",
          label: "Blockchain transactions/day",
          color: "text-amber-600",
        },
        {
          value: "94%",
          label: "Platform uptime maintained",
          color: "text-amber-600",
        },
      ],
      tech: ["Node.js", "Web3.js", "Laravel", "REST API", "Server Management"],
      icon: <Globe2Icon className="w-5 h-5 text-amber-600" />,
    },
  ];

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-8 relative overflow-hidden">
      <div className="w-full pr-8 relative">
        {/* Header */}

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-[#2D65F2] via-[#1A34D1] via-[#F01A26] to-amber-600 opacity-30"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg border-2 border-white z-10`}
                >
                  {exp.status === "current" && (
                    <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Content card */}
                <div className="ml-16 group">
                  <div
                    className={`bg-white/80 dark:bg-slate-400 backdrop-blur-sm rounded-md shadow-lg hover:shadow-xl transition-all duration-500 border ${exp.borderColor} overflow-hidden`}
                  >
                    {/* Card header */}
                    <div
                      className={`${exp.bgColor} dark:bg-white py-4 px-2 cursor-pointer`}
                      onClick={() => toggleCard(exp.id)}
                    >
                      <div className="flex md:flex-row flex-col md:items-center items-end justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-lg text-white`}>
                              {exp.icon}
                            </div>
                            <div>
                              <h3 className=" font-bold text-slate-900">
                                {exp.role}
                              </h3>
                              <div className="flex items-center gap-4 text-slate-600 mt-1">
                                <span className="text-sm font-semibold">
                                  {exp.company}
                                </span>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span className="text-xs">
                                    {exp.location}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right flex items-center gap-4">
                          <div className="flex items-center gap-2 text-slate-600">
                            <Calendar className="w-4 h-4" />
                            <span className="text-xs font-medium">
                              {exp.period}
                            </span>
                          </div>
                          {exp.status === "current" && (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                              Current
                            </span>
                          )}
                          <button className="p-2 hover:bg-white/50 bg-white dark:bg-slate-700 rounded-full transition-colors">
                            {expandedCard === exp.id ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <div
                      className={`transition-all duration-500 md:overflow-hidden overflow-y-auto ${
                        expandedCard === exp.id
                          ? "max-h-[600px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                                >
                                  <div
                                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}
                                  ></div>
                                  <span className="text-sm leading-relaxed">
                                    {achievement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Metrics & Tech */}
                          <div className="space-y-6">
                            {/* Impact metrics */}
                            <div>
                              <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                Impact Metrics
                              </h4>
                              <div className="grid grid-cols-1 gap-3">
                                {exp.metrics.map((metric, i) => (
                                  <div
                                    key={i}
                                    className="bg-white/50 dark:bg-slate-800 backdrop-blur-sm p-4 rounded-xl border border-slate-200"
                                  >
                                    <div
                                      className={`text-2xl font-bold ${metric.color} mb-1`}
                                    >
                                      {metric.value}
                                    </div>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                      {metric.label}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Tech stack */}
                            <div>
                              <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Tech Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="bg-white/70 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm border border-slate-200 hover:border-slate-300 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
