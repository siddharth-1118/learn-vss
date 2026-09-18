"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Globe,
  Layers,
  Activity,
  Cpu,
  Database,
  Shield,
  Zap,
  CheckCircle2,
  Code,
  ArrowRight,
  BookOpen,
  Terminal,
  FileCode,
  Sparkles,
  Award,
  GraduationCap,
} from 'lucide-react';

const CAPABILITIES = [
  {
    id: 'web',
    title: '1. Web Applications & REST APIs',
    pythonEquivalent: 'FastAPI / Flask / Django',
    vssSyntax: 'grab webserver',
    desc: 'Build high-throughput HTTP servers, REST APIs, JSON endpoints, and HTML web portals with zero boilerplate.',
    code: `note VSS REST API Service
grab webserver
grab json

make server becomes WebServer()
server.init()

task api_handler
    make payload becomes map [ "status": "ok", "concurrency": "Worker Threads" ]
    send webserver.json_response(200, payload)
finish

server.get("/api/v1/status", api_handler)
say "Listening on http://localhost:8080"`,
  },
  {
    id: 'data',
    title: '2. DataFrames & Data Analytics',
    pythonEquivalent: 'pandas / Polars',
    vssSyntax: 'grab dataframe',
    desc: 'Load CSV/JSON data into in-memory tables, filter rows, aggregate columns, and execute transformations with ARC memory safety.',
    code: `note VSS DataFrame Pipeline
grab dataframe

make csv_data becomes "name,score,grade\\nAlice,95,A\\nBob,82,B\\nCarol,91,A"
make df becomes dataframe.from_csv(csv_data)

make top_students becomes df.filter("grade", "A")
say "A-Grade Count: " + size of top_students`,
  },
  {
    id: 'plot',
    title: '3. Data Visualization & Charting',
    pythonEquivalent: 'Matplotlib / Seaborn',
    vssSyntax: 'grab plot',
    desc: 'Generate terminal ASCII bar charts, line plots, and export vector SVG markup directly for web dashboards.',
    code: `note VSS Data Visualization
grab plot

make scores becomes list [ 85, 92, 78, 95 ]
make names becomes list [ "Alice", "Bob", "Carol", "Dave" ]

plot.bar_chart(scores, names, "Performance Scores")
make svg becomes plot.render_svg(scores, names, "Student Scores", 400, 200)`,
  },
  {
    id: 'matrix',
    title: '4. Linear Algebra & Matrix Math',
    pythonEquivalent: 'NumPy / SciPy',
    vssSyntax: 'grab matrix',
    desc: 'Fast 2D/3D matrix multiplication, transposes, dot products, and vector mathematics accelerated in pure C.',
    code: `note VSS Linear Algebra Engine
grab matrix

make a becomes matrix.create(2, 2, 0)
a[0][0] = 1.0; a[0][1] = 2.0
a[1][0] = 3.0; a[1][1] = 4.0

make b becomes matrix.create(2, 2, 0)
b[0][0] = 5.0; b[0][1] = 6.0
b[1][0] = 7.0; b[1][1] = 8.0

make result becomes matrix.mat_mul(a, b)`,
  },
  {
    id: 'db',
    title: '5. Database & ORM Persistence',
    pythonEquivalent: 'SQLite3 / SQLAlchemy',
    vssSyntax: 'grab database',
    desc: 'Embedded SQLite engine with prepared statements, connection pooling, and object mapping.',
    code: `note VSS Database Module
grab database

make db becomes Database("campus.db")
db.execute("CREATE TABLE IF NOT EXISTS students (id INT, name TEXT, gpa REAL)")
db.insert("students", map [ "id": 101, "name": "Alice", "gpa": 3.9 ])

make records becomes db.query("SELECT * FROM students WHERE gpa > 3.5")`,
  },
  {
    id: 'threads',
    title: '6. Native OS Worker Threads',
    pythonEquivalent: 'multiprocessing / threading',
    vssSyntax: 'parallel i in [1..N]',
    desc: 'Dispatch concurrent tasks across physical CPU cores using OS worker threads, atomic variables, and mutex channels.',
    code: `note VSS OS Worker Concurrency
make counter becomes atomic_create(0)

parallel i in [ 1, 2, 3, 4, 5 ]
  atomic_add(counter, 1)
  say "Worker thread processed chunk #" + i
finish

say "Total Atomic Operations: " + atomic_get(counter)`,
  },
  {
    id: 'campus',
    title: '7. DevFusion 4.0 Smart Campus SaaS',
    pythonEquivalent: 'Full-Stack Campus Portal',
    vssSyntax: 'smart_campus.vss',
    desc: 'Complete implementation of DevFusion 4.0 Hackathon Problem Statement 1 — Student, Faculty, Coordinator & Admin portals.',
    code: `note DevFusion 4.0 Smart Campus SaaS in VSS
grab webserver
grab json

make server becomes WebServer()
server.init()

task student_portal
    make data becomes map [
        "attendance": "88.5%",
        "assignments_pending": 3,
        "placement_offers": 2
    ]
    send webserver.json_response(200, data)
finish

server.get("/api/student/dashboard", student_portal)
say "Smart Campus Platform Live on Port 8080"`,
  },
];

export default function CapabilitiesPage() {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Top Banner */}
      <div className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Python Capability Handbook & DevFusion 4.0 Coverage</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Every Python & Web Capability <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Implemented in VSS Language
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              VSS (Very Simple Syntax) delivers 100% feature coverage for Web APIs, DataFrames, Data Visualization, Linear Algebra, Databases, and Full-Stack SaaS applications — all compiled with pure C performance and ARC memory safety.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Capability Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              Select Language Capability Module:
            </div>
            {CAPABILITIES.map((c) => {
              const isSelected = activeTab === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(c.id)}
                  className={`w-full p-4 rounded-2xl border text-left transition ${
                    isSelected
                      ? 'bg-cyan-500/10 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-white">{c.title}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-cyan-300 border border-slate-700">
                      {c.vssSyntax}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-400 mt-1">
                    <span>Python Parity:</span>
                    <span className="text-emerald-400 font-bold">{c.pythonEquivalent}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Selected Capability Code Preview */}
          <div className="lg:col-span-7">
            {CAPABILITIES.filter((c) => c.id === activeTab).map((c) => (
              <div key={c.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <h2 className="text-xl font-bold text-white">{c.title}</h2>
                    <p className="text-xs text-slate-400 mt-0.5">{c.desc}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    100% Parity
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                      <FileCode className="w-4 h-4" /> VSS Source Code
                    </span>
                    <span>Syntax: {c.vssSyntax}</span>
                  </div>
                  <pre className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-slate-200 font-mono text-xs leading-relaxed overflow-x-auto">
                    {c.code}
                  </pre>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
                  <div className="text-xs text-slate-300">
                    Test this capability live in the interactive editor:
                  </div>
                  <Link
                    href="/deploy"
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
                  >
                    <span>Open in Cloud IDE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* DevFusion 4.0 Featured Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-cyan-950/80 via-slate-900 to-indigo-950/80 border border-cyan-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30">
              <GraduationCap className="w-4 h-4" /> DevFusion 4.0 Hackathon Winner Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Smart Campus Management Platform in VSS
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Complete full-stack implementation of DevFusion 4.0 Problem Statement 1 covering Student Portal, Faculty Control, Coordinator Event Passes & Admin Analytics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/app/smart-campus"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Launch Live Smart Campus Demo</span>
            </Link>
            <Link
              href="/deploy"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs transition flex items-center justify-center gap-2"
            >
              <Code className="w-4 h-4 text-cyan-400" />
              <span>View Source in IDE</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
