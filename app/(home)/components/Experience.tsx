"use client";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Code,
  MapPin,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Wegro",
      location: "Dhaka, BD",
      period: "Mar 2025 – Present",
      status: "current",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      achievements: [
        "Engineered ERP system for 15,000+ farmers, reducing manual coordination by 30%",
        "Implemented real-time tracking for 150+ field officers",
        "Optimized API integration, reducing network errors by 67%",
      ],
      metrics: [
        {
          value: "$800K+",
          label: "Investment transactions processed",
          color: "text-blue-600",
        },
        {
          value: "25%",
          label: "Increase in transaction volume",
          color: "text-green-600",
        },
      ],
      tech: ["React", "TypeScript", "API Integration", "Real-time Systems"],
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: 2,
      role: "Senior Frontend Developer",
      company: "Fleetblox",
      location: "Remote (Part-time)",
      period: "Nov 2024 – Mar 2025",
      status: "completed",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      achievements: [
        "Developed AI-powered fleet management platform for 100+ companies",
        "Integrated AI algorithms reducing operational costs by 15%",
        "Built real-time tracking for 5,000+ fleet units",
      ],
      metrics: [
        { value: "100+", label: "Companies served", color: "text-purple-600" },
        {
          value: "15%",
          label: "Cost reduction achieved",
          color: "text-green-600",
        },
      ],
      tech: ["React", "Redux", "AI Integration", "Real-time Analytics"],
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: 3,
      role: "Frontend Engineer",
      company: "Anchorblock Technology",
      location: "Dhaka, BD",
      period: "May 2023 – Feb 2025",
      status: "completed",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      achievements: [
        "Refactored Anchorbooks accounting software for 500+ clients",
        "Built USSD monitoring tool for 5M+ active users",
        "Integrated AI for automated invoice generation",
      ],
      metrics: [
        {
          value: "5M+",
          label: "Active users supported",
          color: "text-green-600",
        },
        { value: "500+", label: "Clients served", color: "text-blue-600" },
      ],
      tech: ["TypeScript", "React", "Redux", "D3.js"],
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: 4,
      role: "Software Engineer",
      company: "IOTA Infotech Limited",
      location: "Dhaka, BD",
      period: "Apr 2022 – Apr 2023",
      status: "completed",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      achievements: [
        "Reduced Google Maps API usage by 40%",
        "Increased social media engagement by 53%",
        "Built SAAS frontend for 55,000+ employees",
      ],
      metrics: [
        {
          value: "85%",
          label: "Development efficiency improvement",
          color: "text-amber-600",
        },
        { value: "40%", label: "API cost reduction", color: "text-green-600" },
      ],
      tech: ["JavaScript", "React", "SAAS", "API Optimization"],
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const toggleCard = (id: any) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
            Experience & Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building scalable solutions and delivering exceptional user
            experiences across diverse industries with measurable impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 to-amber-500 opacity-30"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg border-2 border-white z-10`}
                >
                  {exp.status === "current" && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Content card */}
                <div className="ml-16 group">
                  <div
                    className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border ${exp.borderColor} overflow-hidden`}
                  >
                    {/* Card header */}
                    <div
                      className={`${exp.bgColor} p-8 cursor-pointer`}
                      onClick={() => toggleCard(exp.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} text-white`}
                            >
                              {exp.icon}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-slate-900">
                                {exp.role}
                              </h3>
                              <div className="flex items-center gap-4 text-slate-600 mt-1">
                                <span className="text-lg font-semibold">
                                  {exp.company}
                                </span>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span className="text-sm">
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
                            <span className="text-sm font-medium">
                              {exp.period}
                            </span>
                          </div>
                          {exp.status === "current" && (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                              Current
                            </span>
                          )}
                          <button className="p-2 hover:bg-white/50 rounded-full transition-colors">
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
                      className={`transition-all duration-500 overflow-hidden ${
                        expandedCard === exp.id
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-8 pt-0">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-slate-700"
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
                              <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                Impact Metrics
                              </h4>
                              <div className="grid grid-cols-1 gap-3">
                                {exp.metrics.map((metric, i) => (
                                  <div
                                    key={i}
                                    className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-slate-200"
                                  >
                                    <div
                                      className={`text-2xl font-bold ${metric.color} mb-1`}
                                    >
                                      {metric.value}
                                    </div>
                                    <p className="text-xs text-slate-600">
                                      {metric.label}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Tech stack */}
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
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
