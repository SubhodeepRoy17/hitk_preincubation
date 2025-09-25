// app/innovations/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function InnovationsPage() {
  const [activeTab, setActiveTab] = useState<"jawaan" | "farmbytes" | "paradox">("jawaan")

  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 mx-auto max-w-6xl w-full px-4 py-8 md:py-12">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-balance bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Innovations at Heritage Incubation Cell
          </h1>
          <p className="mt-3 text-muted-foreground text-lg max-w-3xl mx-auto">
            A showcase of student-led R&D from the Pre‑Incubation Centre
          </p>
        </header>

        {/* Enhanced Tabs Navigation */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex bg-muted/50 p-2 rounded-2xl border shadow-sm">
            <button
              onClick={() => setActiveTab("jawaan")}
              className={`px-6 py-3 font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 ${
                activeTab === "jawaan"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-muted-foreground hover:text-foreground bg-transparent"
              }`}
            >
              🛡️ JAWAAN
            </button>
            <button
              onClick={() => setActiveTab("farmbytes")}
              className={`px-6 py-3 font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 mx-2 ${
                activeTab === "farmbytes"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25"
                  : "text-muted-foreground hover:text-foreground bg-transparent"
              }`}
            >
              🌱 FarmBytes
            </button>
            <button
              onClick={() => setActiveTab("paradox")}
              className={`px-6 py-3 font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 ${
                activeTab === "paradox"
                  ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "text-muted-foreground hover:text-foreground bg-transparent"
              }`}
            >
              ⚡ Paradox Innovators
            </button>
          </div>
        </div>

        {/* Content Container with Beautiful Box */}
        <div className="bg-gradient-to-br from-white to-gray-50/80 border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10">
            
            {/* JAWAAN Tab Content */}
            {activeTab === "jawaan" && (
            <section className="space-y-8">
                <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                    🛡️ Defense Technology
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    JAWAAN — Integrated Defense Support Platform
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4">
                    <strong className="text-sm text-blue-600">Team Lead</strong>
                    <p className="font-semibold text-blue-900">Sandeep Sarkar</p>
                    </div>
                    <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4">
                    <strong className="text-sm text-blue-600">TRL Level</strong>
                    <p className="font-semibold text-blue-900">6/9</p>
                    </div>
                </div>
                </div>

                <p className="text-pretty leading-relaxed text-base md:text-lg text-gray-700 text-center max-w-3xl mx-auto">
                JAWAAN integrates surveillance, optimized path planning, threat detection, sound recognition, health
                monitoring, and emergency response into a unified platform. Leveraging AI, ML, and IoT, it enhances safety,
                efficiency, and mission success for the armed forces.
                </p>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center max-w-2xl mx-auto">
                <h4 className="font-bold text-lg mb-2">🚀 Innovation Impact</h4>
                <p className="text-blue-50 text-sm">
                    Transforming defense operations with cutting-edge AI and IoT integration for enhanced national security.
                </p>
                </div>

                <div>
                <h3 className="text-xl font-semibold mb-6 text-blue-800 flex items-center justify-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Key Features
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                    {
                        title: "24×7 AI-Driven Surveillance using Drones",
                        desc: "AI-powered drones detect intrusions and suspicious activity in real time, including low light and adverse weather.",
                        icon: "🚁"
                    },
                    {
                        title: "Path Planning with Optimized Routing",
                        desc: "Terrain-aware routing selects safe, efficient paths for maximum coverage and endurance.",
                        icon: "🗺️"
                    },
                    {
                        title: "Weapon & Threat Detection",
                        desc: "Live video analysis to identify and classify threats with real-time alerts.",
                        icon: "🎯"
                    },
                    {
                        title: "Sound Recognition",
                        desc: "Detection and classification of battlefield audio for better situational awareness.",
                        icon: "🔊"
                    },
                    {
                        title: "Soldier Health Monitoring",
                        desc: "Wearable IoT tracks vitals; AI flags fatigue and medical risks.",
                        icon: "❤️"
                    },
                    {
                        title: "Emergency Response (SOS)",
                        desc: "Multi-channel distress signaling across radio, satellite, and network.",
                        icon: "🆘"
                    }
                    ].map((feature, index) => (
                    <div key={index} className="p-4 bg-white border border-blue-100 rounded-xl hover:shadow-md transition-all duration-300 hover:border-blue-300 h-full">
                        <div className="flex flex-col items-center text-center">
                        <span className="text-3xl mb-3">{feature.icon}</span>
                        <strong className="text-blue-900 text-sm">{feature.title}</strong>
                        <p className="mt-2 text-xs text-gray-600">{feature.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>
            )}

            {/* FarmBytes Tab Content */}
            {activeTab === "farmbytes" && (
            <section className="space-y-8">
                <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                    🌱 Agricultural Technology
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                    FarmBytes — Voice-Activated Farm Assistant
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="bg-green-50/80 border border-green-200 rounded-xl p-4">
                    <strong className="text-sm text-green-600">Team Members</strong>
                    <p className="font-semibold text-green-900">Barkha Vijay, Sohan Saha, Shubham Kumar</p>
                    </div>
                    <div className="bg-green-50/80 border border-green-200 rounded-xl p-4">
                    <strong className="text-sm text-green-600">Technology</strong>
                    <p className="font-semibold text-green-900">IoT + Voice AI</p>
                    </div>
                </div>
                </div>

                <p className="text-pretty leading-relaxed text-base md:text-lg text-gray-700 text-center max-w-3xl mx-auto">
                An offline, voice-controlled assistant for farmers that responds to simple voice commands in local languages.
                The system provides farm-related information to help small-scale farmers make better decisions using voice-based
                technology, making farming simpler and more accessible.
                </p>

                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center max-w-2xl mx-auto">
                <h4 className="font-bold text-lg mb-2">🎯 Our Mission</h4>
                <p className="text-green-50 text-sm">
                    Empowering farmers with accessible technology - making farming simpler through voice-based solutions for all literacy levels.
                </p>
                </div>

                <div>
                <h3 className="text-xl font-semibold mb-6 text-green-800 flex items-center justify-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Core Features
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                    {[
                    {
                        title: "Temperature & Humidity Monitoring",
                        desc: "Real-time environmental data for better crop planning and management decisions.",
                        icon: "🌡️"
                    },
                    {
                        title: "Soil pH & Moisture Sensing",
                        desc: "Comprehensive soil health monitoring to optimize irrigation and fertilization.",
                        icon: "🌱"
                    },
                    {
                        title: "Pest Detection using Camera",
                        desc: "AI-powered camera system to identify pests and protect crops from damage.",
                        icon: "📷"
                    },
                    {
                        title: "Voice-Based Guidance",
                        desc: "Accessible voice commands in local languages, eliminating the need for reading or smartphone apps.",
                        icon: "🎤"
                    }
                    ].map((feature, index) => (
                    <div key={index} className="p-4 bg-white border border-green-100 rounded-xl hover:shadow-md transition-all duration-300 hover:border-green-300 h-full">
                        <div className="flex flex-col items-center text-center">
                        <span className="text-3xl mb-3">{feature.icon}</span>
                        <strong className="text-green-900 text-sm">{feature.title}</strong>
                        <p className="mt-2 text-xs text-gray-600">{feature.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>
            )}

            {/* Paradox Innovators Tab Content */}
            {activeTab === "paradox" && (
            <section className="space-y-8">
                <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
                    ⚡ Smart India Hackathon 2024 Winners
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                    Paradox Innovator - Smart Earthing Monitoring System
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-4">
                    <strong className="text-sm text-purple-600">Team Leader</strong>
                    <p className="font-semibold text-purple-900">Anshu Raj</p>
                    <p className="text-xs text-purple-700">AEIE, 4th Year</p>
                    </div>
                    <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-4">
                    <strong className="text-sm text-purple-600">Theme</strong>
                    <p className="font-semibold text-purple-900">Renewable Energy & Smart Cities</p>
                    </div>
                </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center max-w-4xl mx-auto">
                <h4 className="font-bold text-lg mb-2">🚨 Critical Problem</h4>
                <p className="text-purple-50 text-sm">
                    Multiple deaths across India due to faulty streetlights leaking current. Delhi reported 26 electrocution deaths, 
                    with similar tragedies in Gurugram, Lucknow, and Mangalore during rains and storms.
                </p>
                </div>

                <div>
                <h3 className="text-xl font-semibold mb-6 text-purple-800 flex items-center justify-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    Smart Earthing Monitoring System
                </h3>
                
                <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-pretty leading-relaxed text-gray-700 text-center">
                    A real-time monitoring system that continuously monitors earthing connections and instantly detects faults 
                    such as high resistance, disconnections, or leakage currents in public and industrial infrastructures.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-white border border-purple-100 rounded-xl hover:shadow-md transition-all duration-300 hover:border-purple-300">
                        <div className="flex flex-col items-center text-center">
                        <span className="text-3xl mb-3">⚡</span>
                        <strong className="text-purple-900 text-sm">Real-time Fault Detection</strong>
                        <p className="mt-2 text-xs text-gray-600">
                            Instant alerts for open earth, high resistance, or leakage currents - unlike traditional systems
                        </p>
                        </div>
                    </div>
                    <div className="p-4 bg-white border border-purple-100 rounded-xl hover:shadow-md transition-all duration-300 hover:border-purple-300">
                        <div className="flex flex-col items-center text-center">
                        <span className="text-3xl mb-3">🔌</span>
                        <strong className="text-purple-900 text-sm">Plug-and-Play Integration</strong>
                        <p className="mt-2 text-xs text-gray-600">
                            Compact, low-cost device integrates seamlessly with existing infrastructure without major modifications
                        </p>
                        </div>
                    </div>
                    <div className="p-4 bg-white border border-purple-100 rounded-xl hover:shadow-md transition-all duration-300 hover:border-purple-300">
                        <div className="flex flex-col items-center text-center">
                        <span className="text-3xl mb-3">🌧️</span>
                        <strong className="text-purple-900 text-sm">Harsh Environment Ready</strong>
                        <p className="mt-2 text-xs text-gray-600">
                            Designed to work in harsh outdoor conditions, ideal for streetlights and public installations
                        </p>
                        </div>
                    </div>
                    <div className="p-4 bg-white border border-purple-100 rounded-xl hover:shadow-md transition-all duration-300 hover:border-purple-300">
                        <div className="flex flex-col items-center text-center">
                        <span className="text-3xl mb-3">📡</span>
                        <strong className="text-purple-900 text-sm">Wireless Communication</strong>
                        <p className="mt-2 text-xs text-gray-600">
                            Supports both wired and wireless communication for remote monitoring and proactive maintenance
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                <div className="space-y-4">
                    <div className="rounded-xl border border-purple-200 bg-purple-50/80 p-4">
                    <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Innovation Impact
                    </h3>
                    <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Prevents electrocution deaths from faulty streetlights</li>
                        <li>• Ensures public safety and regulatory compliance</li>
                        <li>• Reduces maintenance downtime and costs</li>
                        <li>• Proactive safety alerts for urban infrastructure</li>
                    </ul>
                    </div>
                    
                    <div className="rounded-xl border border-purple-200 bg-purple-50/80 p-4">
                    <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        YouTube Demonstration
                    </h3>
                    <a 
                        href="https://www.youtube.com/watch?v=DBtQAI7xeDo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 underline text-sm hover:text-purple-800"
                    >
                        Watch Smart Earthing Monitoring System Demo
                    </a>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-semibold mb-3">💬 From the Innovators</h3>
                    <p className="text-purple-50 text-sm italic">
                        "Our journey from a student tech team to Smart India Hackathon winners was made possible by the continuous support of
                        the Heritage Incubation Cell. The center provided mentorship and resources that shaped our projects and
                        fueled our innovation."
                    </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl border-2 border-purple-200">
                        <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2017.04.35_18b99ebf.jpg-eehTO7RvWP4EFCG8IdMQcGkaxN9XgE.jpeg"
                        alt="Paradox Innovator team at the Innovation and Incubation Center"
                        fill
                        className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl border-2 border-purple-200">
                        <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2017.04.37_228dceeb.jpg-m5A0ml3yAA2uHrAcEq5zstfZHgOybB.jpeg"
                        alt="Team showcasing drone and laptop in lab environment"
                        fill
                        className="object-cover"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            )}
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}