"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { use } from 'react';
import {
  Server,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Zap,
  Globe,
  RefreshCw,
  Code,
  Users,
  UserCheck,
  Calendar,
  Briefcase,
  BookOpen,
  GraduationCap,
  Shield,
  Layers,
  Activity,
  FileText,
  FileCode,
  Sliders,
  Bell,
  Award,
} from 'lucide-react';

export default function VSSLiveAppPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const appName = resolvedParams.slug || 'my-vss-app';
  const isSmartCampus = appName.toLowerCase().includes('campus') || appName.toLowerCase().includes('devfusion') || appName.toLowerCase().includes('smart');

  const [activeRole, setActiveRole] = useState<'Student' | 'Faculty' | 'Coordinator' | 'Admin'>('Student');
  const [currentRoute, setCurrentRoute] = useState('/');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
      {/* Top VSS Platform Header Bar */}
      <header className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link
            href="/deploy"
            className="flex items-center space-x-1 text-xs text-slate-400 hover:text-white transition bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-700"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Cloud IDE</span>
          </Link>

          <div className="h-4 w-px bg-slate-800"></div>

          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-mono text-xs font-bold text-white">{appName}</span>
            {isSmartCampus && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                DEVFUSION 4.0 HACKATHON
              </span>
            )}
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 uppercase">
              200 OK
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="text-slate-400 hidden sm:inline">Engine: Pure C Stack VM 3.1</span>
          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            HTTPS Live SSL
          </span>
        </div>
      </header>

      {/* Subdomain & Endpoint Navigation Bar */}
      <div className="bg-slate-950 border-b border-slate-800/80 px-4 py-2.5 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center space-x-2 text-cyan-400">
          <Globe className="w-3.5 h-3.5" />
          <span className="text-slate-400">Endpoint:</span>
          <span className="font-bold text-cyan-300">https://learn-vss.vercel.app/app/{appName}</span>
        </div>

        {isSmartCampus ? (
          <div className="flex items-center space-x-1">
            <span className="text-slate-400 mr-2 text-[11px] font-sans">Role View:</span>
            {(['Student', 'Faculty', 'Coordinator', 'Admin'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setActiveRole(r)}
                className={`px-2.5 py-1 rounded text-[11px] transition font-sans font-bold ${
                  activeRole === r ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentRoute('/')}
              className={`px-2.5 py-1 rounded transition ${
                currentRoute === '/' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              GET /
            </button>
            <button
              onClick={() => setCurrentRoute('/api/status')}
              className={`px-2.5 py-1 rounded transition ${
                currentRoute === '/api/status' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              GET /api/status
            </button>
          </div>
        )}
      </div>

      {/* Main Render Window */}
      <main className="flex-1 p-6 max-w-6xl mx-auto w-full">
        {isSmartCampus ? (
          /* Smart Campus Platform Dashboard */
          <div className="space-y-6">
            
            {/* Header Hero Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-indigo-950/60 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold mb-2">
                  <GraduationCap className="w-3.5 h-3.5" /> DevFusion 4.0 Problem Statement 1 Solution
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Smart Campus Management Platform
                </h1>
                <p className="text-slate-300 text-xs mt-1 max-w-2xl leading-relaxed">
                  Full-stack SaaS application written in VSS language. Centralizing Student Portal, Faculty Control, Event Management & Placement Analytics.
                </p>
              </div>

              <div className="flex items-center space-x-2 font-mono text-xs">
                <div className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 uppercase">Active Role</div>
                  <div className="font-bold text-cyan-400">{activeRole}</div>
                </div>
                <div className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 uppercase">VSS VM Engine</div>
                  <div className="font-bold text-emerald-400">3.1.0</div>
                </div>
              </div>
            </div>

            {/* Role-Based Dashboard View */}
            {activeRole === 'Student' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Overall Attendance</span>
                      <UserCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-mono font-extrabold text-emerald-400 mt-2">88.5%</div>
                    <div className="text-[10px] text-slate-500 mt-1">Subject-wise status: Good</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Assignments Due</span>
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-mono font-extrabold text-cyan-400 mt-2">3 Pending</div>
                    <div className="text-[10px] text-slate-500 mt-1">Next: VSS Compiler Design (Tomorrow)</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Placement Status</span>
                      <Briefcase className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="text-xl font-mono font-bold text-indigo-300 mt-2">2 Offers Received</div>
                    <div className="text-[10px] text-slate-500 mt-1">Eligible for Tier-1 Companies</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Registered Events</span>
                      <Calendar className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-2xl font-mono font-extrabold text-amber-400 mt-2">2 Upcoming</div>
                    <div className="text-[10px] text-slate-500 mt-1">DevFusion Hackathon 4.0</div>
                  </div>
                </div>

                {/* Student Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                    <h3 className="font-bold text-sm text-white flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                      Active Assignments
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                        <div>
                          <div className="text-slate-200 font-bold">VSS Lexer & Parser Implementation</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">Due: Sep 20, 2026 • PDF / ZIP / GitHub</div>
                        </div>
                        <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[10px]">Submit</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                        <div>
                          <div className="text-slate-200 font-bold">ARC Memory Reference Counter Lab</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">Due: Sep 24, 2026 • C Source Code</div>
                        </div>
                        <span className="px-2 py-1 rounded bg-slate-800 text-slate-400 text-[10px]">Uploaded</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                    <h3 className="font-bold text-sm text-white flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-400" />
                      Placement Drive Updates
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                        <div>
                          <div className="text-slate-200 font-bold">Google Cloud AI Platform</div>
                          <div className="text-[10px] text-emerald-400 mt-0.5">CTC: $140,000 / yr • Shortlisted</div>
                        </div>
                        <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">Round 2</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                        <div>
                          <div className="text-slate-200 font-bold">VSS Systems Labs</div>
                          <div className="text-[10px] text-cyan-400 mt-0.5">CTC: $125,000 / yr • Compiler Eng</div>
                        </div>
                        <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[10px]">Applied</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeRole === 'Faculty' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400 font-mono">Today's Lectures</div>
                    <div className="text-2xl font-mono font-extrabold text-cyan-400 mt-2">4 Classes</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400 font-mono">Pending Assignment Reviews</div>
                    <div className="text-2xl font-mono font-extrabold text-amber-400 mt-2">18 Submissions</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400 font-mono">Average Attendance %</div>
                    <div className="text-2xl font-mono font-extrabold text-emerald-400 mt-2">91.2%</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-white font-bold text-sm">Take Attendance Session (Subject: VSS Compiler Architecture)</span>
                    <button className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition">
                      Submit Attendance
                    </button>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="text-slate-300">Total Enrolled: <strong className="text-white">45 Students</strong></div>
                    <div className="text-emerald-400">Present: <strong className="text-emerald-300">42 Students</strong></div>
                    <div className="text-rose-400">Absent: <strong className="text-rose-300">3 Students</strong></div>
                  </div>
                </div>
              </div>
            )}

            {activeRole === 'Coordinator' && (
              <div className="space-y-6 font-mono text-xs">
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <h3 className="font-bold text-sm text-white flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      Manage Campus Events & QR Passes
                    </h3>
                    <button className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold">
                      + Create New Event
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">DevFusion 4.0 Hackathon</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Open</span>
                      </div>
                      <div className="text-slate-400">Registrations: 280 / 300 Seats</div>
                      <div className="text-cyan-400 text-[10px]">QR Code Entry Passes Generated: YES</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">VSS Language Open Source Summit</span>
                        <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px]">Upcoming</span>
                      </div>
                      <div className="text-slate-400">Registrations: 145 Seats</div>
                      <div className="text-cyan-400 text-[10px]">QR Code Entry Passes Generated: YES</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeRole === 'Admin' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-mono">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400">Total Students</div>
                    <div className="text-2xl font-extrabold text-white mt-2">1,450</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400">Total Faculty</div>
                    <div className="text-2xl font-extrabold text-cyan-400 mt-2">85</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400">Active Departments</div>
                    <div className="text-2xl font-extrabold text-indigo-400 mt-2">5 Depts</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400">Placement %</div>
                    <div className="text-2xl font-extrabold text-emerald-400 mt-2">94.5%</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-3">
                  <div className="text-white font-bold text-sm">System Audit Logs & Security Checks</div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1 text-slate-300 leading-relaxed">
                    <div>[09:14:22] Google OAuth 2.0 Login: user 'siddharth@vss.edu' authenticated successfully.</div>
                    <div>[09:18:05] Attendance Session created by Faculty 'Prof. Sharma' for CSE-3A.</div>
                    <div>[09:22:11] Security: Password hashing (Argon2), JWT token verified.</div>
                    <div>[09:25:40] VSS Runtime Memory: 1.4 MB used, zero leaks reported by ARC engine.</div>
                  </div>
                </div>
              </div>
            )}

            {/* Source VSS Code Explainer Box */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-cyan-500/30 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-cyan-400 font-bold border-b border-slate-800 pb-2">
                <span className="flex items-center gap-1.5">
                  <FileCode className="w-4 h-4" /> VSS Source Code Implementation (smart_campus.vss)
                </span>
                <Link href="/deploy" className="text-xs text-emerald-400 hover:underline">Edit in Cloud IDE →</Link>
              </div>
              <pre className="text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed">
{`note DevFusion 4.0 - Smart Campus Platform in VSS Language
grab webserver
grab json

make server becomes WebServer()
server.init()

task student_dashboard
    make payload becomes map [ "attendance_pct": "88.5%", "placements": 2, "role": "Student" ]
    send webserver.json_response(200, payload)
finish

server.get("/api/student/dashboard", student_dashboard)
say "Smart Campus REST API listening on port 8080"`}
              </pre>
            </div>
          </div>
        ) : currentRoute === '/' ? (
          /* Default HTML Rendered Page for other app slugs */
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 border border-cyan-500/30 shadow-2xl space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                <Zap className="w-3.5 h-3.5" /> VSS WebServer v3.1.0 Active
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Welcome to <span className="text-cyan-400">{appName}</span>
              </h1>

              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                This microservice was written in VSS (Very Simple Syntax) and compiled with automatic reference counting (ARC) and native OS worker-thread concurrency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">Response Time</div>
                  <div className="text-lg font-mono font-bold text-emerald-400 mt-1">1.1 ms</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">Memory Usage</div>
                  <div className="text-lg font-mono font-bold text-cyan-400 mt-1">1.4 MB</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">Status</div>
                  <div className="text-lg font-mono font-bold text-emerald-400 mt-1">200 OK</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-2">
              <div className="text-slate-400 font-bold flex items-center justify-between">
                <span>VSS Server Runtime Output:</span>
                <span className="text-cyan-400">100% Live</span>
              </div>
              <pre className="text-slate-200 bg-slate-950 p-3 rounded-xl border border-slate-800 leading-relaxed">
{`[VSS WebServer Engine] HTTP request received for GET /
[VSS VM] Handled by task 'home_handler'
[VSS Memory] ARC ref count retained: 1, freed on return: 0
HTTP/1.1 200 OK (Content-Type: text/html)`}
              </pre>
            </div>
          </div>
        ) : (
          /* JSON API Response Rendered Page */
          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-300 font-bold">API Route Result: GET /api/status</span>
              <span className="text-emerald-400 font-bold">Content-Type: application/json</span>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-cyan-500/30 text-cyan-300 shadow-xl leading-relaxed">
              <pre className="text-xs">
{JSON.stringify(
  {
    status: 'ok',
    app_name: appName,
    route: '/api/status',
    timestamp: new Date().toISOString(),
    version: '3.1.0',
    compiler: 'GCC / Pure C VM',
    concurrency: 'Native OS Worker Threads',
    memory_managed: 'Automatic Reference Counting (ARC)',
  },
  null,
  2
)}
              </pre>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 px-4 py-4 text-center text-xs text-slate-500 font-mono">
        VSS Language Web Platform • Powered by VSS VM 3.1.0 • Created by Vooka Sai Siddharth
      </footer>
    </div>
  );
}
