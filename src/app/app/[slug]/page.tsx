"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { use } from 'react';
import { Server, ArrowLeft, ExternalLink, CheckCircle2, Zap, Globe, RefreshCw, Code } from 'lucide-react';

export default function VSSLiveAppPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const appName = resolvedParams.slug || 'my-vss-app';
  const [currentRoute, setCurrentRoute] = useState('/');

  const isApiRoute = currentRoute.includes('/api');

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
          <span className="font-bold text-cyan-300">https://learn-vss.vercel.app/app/{appName}{currentRoute}</span>
        </div>

        {/* Route Selector Buttons */}
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
      </div>

      {/* Main Render Window */}
      <main className="flex-1 p-6 max-w-5xl mx-auto w-full">
        {currentRoute === '/' ? (
          /* HTML Rendered Page */
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
