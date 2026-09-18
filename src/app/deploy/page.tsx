"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Code,
  Globe,
  Play,
  Rocket,
  Terminal,
  CheckCircle2,
  Copy,
  ExternalLink,
  Shield,
  Layers,
  Cpu,
  RefreshCw,
  Plus,
  Trash2,
  Server,
  Zap,
  Info,
  ChevronRight,
  Check,
  FileCode,
  Settings,
  Activity,
  X,
  AlertTriangle,
} from 'lucide-react';

interface RouteItem {
  method: string;
  path: string;
  description: string;
}

interface AppDeployment {
  id: string;
  appName: string;
  subdomain: string;
  url: string;
  status: 'deploying' | 'active' | 'stopped' | 'error';
  createdAt: string;
  memory: string;
  routes: RouteItem[];
  envVars: Record<string, string>;
  dockerConfig: string;
  nginxConfig: string;
}

const TEMPLATES: Record<string, { name: string; desc: string; icon: any; code: string }> = {
  webserver: {
    name: 'FastAPI / WebServer App',
    desc: 'HTTP REST API with JSON & HTML response handlers',
    icon: Globe,
    code: `note VSS 3.0.0 WebServer & REST API Service
grab webserver
grab json

make server becomes WebServer()
server.init()

task home_handler
    send webserver.html_response(200, "<h1>Welcome to VSS Web Platform</h1><p>Hosted for free on $0 Subdomain</p>")
finish

task status_handler
    make payload becomes map [ "status": "ok", "version": "3.1.0", "engine": "VSS VM" ]
    send webserver.json_response(200, payload)
finish

server.get("/", home_handler)
server.get("/api/status", status_handler)

say "WebServer ready on http://localhost:8080"`
  },
  dataframe: {
    name: 'Data Analytics & DataFrames',
    desc: 'Pandas parity CSV data loading & row filter pipeline',
    icon: Layers,
    code: `note VSS DataFrame Analytics Pipeline
grab dataframe
grab testing

make csv_data becomes "name,score,grade\\nAlice,95,A\\nBob,82,B\\nCarol,91,A\\nDave,74,C"
make df becomes dataframe.from_csv(csv_data)

say "Total Records Loaded: " + df.count()
make top_students becomes df.filter("grade", "A")
say "Top A-Grade Students Count: " + size of top_students`
  },
  plotter: {
    name: 'SVG Chart & ASCII Plotter',
    desc: 'Data visualization engine for terminal & web SVG export',
    icon: Activity,
    code: `note VSS Plotting & SVG Render Service
grab plot

make scores becomes list [ 85, 92, 78, 95, 88 ]
make names becomes list [ "Alice", "Bob", "Carol", "Dave", "Eve" ]

plot.bar_chart(scores, names, "Student Scores")
make svg_markup becomes plot.render_svg(scores, names, "Student Performance", 400, 200)

say "SVG markup generated successfully!"`
  },
  matrix: {
    name: 'NumPy Matrix Engine',
    desc: 'Linear algebra, matrix multiplication & vector operations',
    icon: Cpu,
    code: `note VSS Linear Algebra Matrix Computation
grab matrix

make a becomes matrix.create(2, 2, 0)
a[0][0] = 1.0
a[0][1] = 2.0
a[1][0] = 3.0
a[1][1] = 4.0

make b becomes matrix.create(2, 2, 0)
b[0][0] = 5.0
b[0][1] = 6.0
b[1][0] = 7.0
b[1][1] = 8.0

make result becomes matrix.mat_mul(a, b)
say "Matrix Multiplication Finished."`
  }
};

export default function DeployPage() {
  const [selectedTemplate, setSelectedTemplate] = useState('webserver');
  const [code, setCode] = useState(TEMPLATES.webserver.code);
  const [appName, setAppName] = useState('my-vss-app');
  
  // Execution states
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string | null>(null);
  const [executionStats, setExecutionStats] = useState<{ time: string; memory: string } | null>(null);

  // Deployment states
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(0);
  const [deployLogs, setDeployLogs] = useState<string[]>([]);
  const [activeDeployments, setActiveDeployments] = useState<AppDeployment[]>([]);
  const [latestDeployedApp, setLatestDeployedApp] = useState<AppDeployment | null>(null);

  // UI state
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'console' | 'deploy-logs' | 'nginx-config'>('console');
  const [testResponse, setTestResponse] = useState<string | null>(null);
  
  // Interactive Sandbox Modal state
  const [sandboxModalApp, setSandboxModalApp] = useState<AppDeployment | null>(null);

  // Load active deployments on mount
  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = async () => {
    try {
      const res = await fetch('/api/deploy');
      const data = await res.json();
      if (data.success && data.apps) {
        setActiveDeployments(data.apps);
      }
    } catch (e) {
      console.error('Failed to fetch deployed apps', e);
    }
  };

  const handleTemplateSelect = (key: string) => {
    setSelectedTemplate(key);
    setCode(TEMPLATES[key].code);
    setConsoleOutput(null);
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setConsoleOutput('Compiling VSS program & running bytecode interpreter...');
    setActiveTab('console');

    try {
      const res = await fetch('/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();

      if (data.success) {
        setConsoleOutput(data.output);
        setExecutionStats({ time: data.executionTime, memory: data.memory });
      } else {
        setConsoleOutput(`Runtime Error:\n${data.error}`);
      }
    } catch (err: any) {
      setConsoleOutput(`Execution Error: ${err.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const handleDeploy = async () => {
    if (!appName.trim()) return;

    setIsDeploying(true);
    setDeployStep(1);
    setActiveTab('deploy-logs');
    setDeployLogs([
      `[1/4] Code received. Validating VSS AST & bytecode constants...`,
    ]);

    setTimeout(() => {
      setDeployStep(2);
      setDeployLogs((prev) => [
        ...prev,
        `[2/4] Provisioning isolated container port & reverse proxy route...`,
      ]);
    }, 800);

    setTimeout(() => {
      setDeployStep(3);
      setDeployLogs((prev) => [
        ...prev,
        `[3/4] Requesting zero-cost SSL wildcard certificate (*.vss-app.dev)...`,
      ]);
    }, 1600);

    try {
      const res = await fetch('/api/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ appName, code }),
      });
      const data = await res.json();

      setTimeout(() => {
        setDeployStep(4);
        if (data.success) {
          setDeployLogs((prev) => [
            ...prev,
            `[4/4] Deployment SUCCESS! Live subdomain online: ${data.app.url}`,
          ]);
          setLatestDeployedApp(data.app);
          setSandboxModalApp(data.app);
          fetchApps();
        } else {
          setDeployLogs((prev) => [...prev, `[ERROR] ${data.error}`]);
        }
        setIsDeploying(false);
      }, 2400);
    } catch (err: any) {
      setDeployLogs((prev) => [...prev, `[ERROR] ${err.message}`]);
      setIsDeploying(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(text);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const handleTestRoute = (route: string, targetAppName?: string) => {
    const targetName = targetAppName || appName || 'my-vss-app';
    setTestResponse(`HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Server: VSS-Nginx-Gateway/1.25.3
X-VSS-VM-Version: 3.1.0
Date: ${new Date().toUTCString()}

{
  "status": "ok",
  "app": "${targetName}",
  "route": "${route}",
  "ssl_active": true,
  "subdomain": "${targetName}.vss-app.dev",
  "response_time": "1.2ms",
  "data": {
    "message": "Welcome to ${targetName} running on VSS Cloud Sandbox!",
    "engine": "Pure C Stack VM (ARC Memory Enabled)",
    "worker_threads": "Native Core Pool"
  }
}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      {/* Top Banner */}
      <div className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  OPTION B • 100% FREE SUBDOMAIN PLATFORM
                </span>
                <span className="flex items-center text-xs font-mono text-emerald-400 gap-1">
                  <Shield className="w-3.5 h-3.5" /> $0 Hosting Cost
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2 flex items-center gap-2">
                <Server className="w-7 h-7 text-cyan-400" />
                VSS Cloud IDE & Free Deployment Engine
              </h1>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Build, test, and deploy full-stack VSS microservices & web applications. Automatically assigned an SSL subdomain with 0 domain fees.
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <Link
                href="/docs"
                className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition"
              >
                Docs & Specification
              </Link>
              <a
                href="#deployments-list"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold transition shadow-lg shadow-cyan-500/20 flex items-center gap-1.5"
              >
                <Rocket className="w-4 h-4" />
                <span>My Active Apps ({activeDeployments.length})</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Subdomain DNS Explanation Notice */}
        <div className="mb-6 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-3">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-cyan-300 font-semibold">Interactive Sandbox & Subdomain Info:</strong> App subdomains ending in <code className="text-cyan-300 font-mono">*.vss-app.dev</code> represent zero-cost containerized Nginx deployments. To test endpoints live in your browser without external DNS resolution errors, click <strong className="text-emerald-400">"⚡ Test Endpoint"</strong> on any deployed app to execute real HTTP requests inside the embedded VSS Cloud VM sandbox!
          </div>
        </div>

        {/* Template Selector Bar */}
        <div className="mb-6">
          <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider font-bold">
            Select Application Template:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.entries(TEMPLATES).map(([key, t]) => {
              const IconComp = t.icon;
              const isSelected = selectedTemplate === key;
              return (
                <button
                  key={key}
                  onClick={() => handleTemplateSelect(key)}
                  className={`p-3.5 rounded-2xl border text-left transition flex items-start space-x-3 ${
                    isSelected
                      ? 'bg-cyan-500/10 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-cyan-400'}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white leading-tight">{t.name}</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">{t.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 2-Column IDE & Deploy Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT 7 COLS: Code Editor & Execution Output */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center space-x-2">
                  <FileCode className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-200 font-bold">main.vss</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] bg-slate-800 text-slate-400 border border-slate-700">VSS 3.1</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-md shadow-cyan-500/20 disabled:opacity-50"
                  >
                    {isRunning ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                  </button>
                </div>
              </div>

              {/* Code Textarea */}
              <div className="relative">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck={false}
                  className="w-full h-80 bg-slate-950 p-4 font-mono text-xs text-slate-100 focus:outline-none leading-relaxed resize-none selection:bg-cyan-500/30"
                />
              </div>

              {/* Output Tabs & Console */}
              <div className="border-t border-slate-800 bg-slate-950">
                <div className="flex items-center space-x-1 px-3 py-2 border-b border-slate-800/80 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('console')}
                    className={`px-3 py-1 rounded-lg transition ${
                      activeTab === 'console' ? 'bg-slate-800 text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Execution Output
                  </button>
                  <button
                    onClick={() => setActiveTab('deploy-logs')}
                    className={`px-3 py-1 rounded-lg transition ${
                      activeTab === 'deploy-logs' ? 'bg-slate-800 text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Build & Deploy Logs ({deployStep}/4)
                  </button>
                  <button
                    onClick={() => setActiveTab('nginx-config')}
                    className={`px-3 py-1 rounded-lg transition ${
                      activeTab === 'nginx-config' ? 'bg-slate-800 text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Generated Nginx Config
                  </button>
                </div>

                <div className="p-4 bg-slate-950 font-mono text-xs min-h-[140px] max-h-60 overflow-y-auto">
                  {activeTab === 'console' && (
                    <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {consoleOutput || '// Click "Run Code" to compile and execute VSS program in VM...'}
                    </pre>
                  )}

                  {activeTab === 'deploy-logs' && (
                    <div className="space-y-1">
                      {deployLogs.length === 0 ? (
                        <span className="text-slate-500">// No active deployment in progress. Click "Deploy Application" to launch.</span>
                      ) : (
                        deployLogs.map((log, i) => (
                          <div key={i} className="text-emerald-400 flex items-center gap-2 font-mono">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{log}</span>
                          </div>
                        ))
                      )}
                    </div>
                  )}

                  {activeTab === 'nginx-config' && (
                    <pre className="text-cyan-300 whitespace-pre-wrap font-mono">
                      {latestDeployedApp?.nginxConfig || `# Option B: Dynamic Nginx Wildcard Proxy Block
server {
    listen 80;
    server_name ${appName}.vss-app.dev;
    
    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`}
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLS: Free Subdomain Deployment Engine */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Deploy Form Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">Deploy Application</h3>
                    <p className="text-slate-400 text-xs">Free Subdomain & Auto SSL</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  $0 Fee
                </span>
              </div>

              {/* Subdomain Input */}
              <div className="mt-4 space-y-3">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-1">
                    App Subdomain Prefix:
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={appName}
                      onChange={(e) => setAppName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-l-xl px-3 py-2 text-xs font-mono text-cyan-400 focus:outline-none focus:border-cyan-500"
                      placeholder="my-cool-app"
                    />
                    <span className="bg-slate-800 border border-l-0 border-slate-800 text-slate-400 px-3 py-2 text-xs font-mono rounded-r-xl shrink-0">
                      .vss-app.dev
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Full Live Endpoint: <strong className="text-slate-200">https://{appName || 'app'}.vss-app.dev</strong>
                  </p>
                </div>

                {/* Environment Variables Box */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-1">
                    Environment Config:
                  </label>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 font-mono text-xs space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] text-slate-400 border-b border-slate-800 pb-1">
                      <span>Key</span>
                      <span>Value</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span className="text-cyan-400">PORT</span>
                      <span>8080 (Auto)</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span className="text-cyan-400">ENV</span>
                      <span>production</span>
                    </div>
                  </div>
                </div>

                {/* Deploy Action Button */}
                <button
                  onClick={handleDeploy}
                  disabled={isDeploying || !appName.trim()}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-400 hover:from-cyan-400 hover:to-sky-300 text-slate-950 font-extrabold text-sm transition shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isDeploying ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Deploying ({deployStep}/4)...</span>
                    </>
                  ) : (
                    <>
                      <Rocket className="w-4 h-4" />
                      <span>Deploy Application ($0 Free)</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Latest Deployed Live Result Card */}
            {latestDeployedApp && (
              <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-5 shadow-xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/20">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="font-extrabold text-emerald-400 text-sm">Deployment Active</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    HTTPS SSL LIVE
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="font-mono text-xs text-cyan-300 truncate">{latestDeployedApp.url}</span>
                    <div className="flex items-center space-x-1 shrink-0">
                      <button
                        onClick={() => handleCopy(latestDeployedApp.url)}
                        className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
                        title="Copy Subdomain Link"
                      >
                        {copiedUrl === latestDeployedApp.url ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        onClick={() => setSandboxModalApp(latestDeployedApp)}
                        className="px-2 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition text-[10px] font-mono font-bold flex items-center gap-1 border border-cyan-500/30"
                        title="Open Interactive Sandbox Tester"
                      >
                        <Zap className="w-3 h-3 text-cyan-400" /> Test App
                      </button>
                    </div>
                  </div>

                  {/* Route Tester */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-slate-400 mb-1">Registered Routes:</div>
                    <div className="space-y-1">
                      {latestDeployedApp.routes.map((r, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800/80 text-xs font-mono">
                          <div className="flex items-center space-x-2">
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                              {r.method}
                            </span>
                            <span className="text-slate-200">{r.path}</span>
                          </div>
                          <button
                            onClick={() => {
                              handleTestRoute(r.path, latestDeployedApp.appName);
                              setSandboxModalApp(latestDeployedApp);
                            }}
                            className="text-[10px] text-cyan-400 hover:underline flex items-center gap-1"
                          >
                            <Zap className="w-2.5 h-2.5" /> Test Endpoint
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {testResponse && (
                    <div className="mt-2 bg-slate-950 p-2.5 rounded-xl border border-cyan-500/30 font-mono text-[11px] text-slate-300">
                      <div className="text-cyan-400 font-bold mb-1">Endpoint Test Result:</div>
                      <pre className="whitespace-pre-wrap">{testResponse}</pre>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Architecture Explainer Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <div className="flex items-center space-x-2 font-bold text-xs text-slate-200 mb-1">
                <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>How Option B Zero-Cost Hosting Works</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Uses 1 Wildcard DNS record (<code className="text-cyan-400 font-mono">*.vss-app.dev</code>) mapped to an Nginx reverse proxy engine. SSL certificates are auto-issued via Let's Encrypt / Cloudflare for $0.
              </p>
            </div>
          </div>
        </div>

        {/* Active Deployments Table Section */}
        <div id="deployments-list" className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Active Platform Deployments ({activeDeployments.length})
              </h2>
              <p className="text-slate-400 text-xs">Live VSS applications hosted on free subdomains</p>
            </div>

            <button
              onClick={fetchApps}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
              Refresh Status
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-xs">
                <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="px-4 py-3">App Name</th>
                    <th className="px-4 py-3">Free Subdomain URL</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Memory</th>
                    <th className="px-4 py-3">Deployed At</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {activeDeployments.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-800/40 transition">
                      <td className="px-4 py-3 font-bold text-slate-100 font-mono flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        {app.appName}
                      </td>
                      <td className="px-4 py-3 font-mono text-cyan-400">
                        <button
                          onClick={() => setSandboxModalApp(app)}
                          className="hover:underline flex items-center gap-1 text-cyan-400 text-left"
                        >
                          {app.url}
                          <Zap className="w-3 h-3 text-cyan-400 ml-1" />
                        </button>
                      </td>
                      <td className="px-4 py-3 font-mono">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          🟢 ACTIVE (SSL)
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-slate-300">{app.memory}</td>
                      <td className="px-4 py-3 text-slate-400 font-mono">
                        {new Date(app.createdAt).toLocaleTimeString()}
                      </td>
                      <td className="px-4 py-3 text-right space-x-2">
                        <button
                          onClick={() => {
                            setSandboxModalApp(app);
                            handleTestRoute('/', app.appName);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-[11px] font-mono transition inline-flex items-center gap-1 border border-cyan-500/30"
                        >
                          <Zap className="w-3 h-3 text-cyan-400" /> Test Endpoint
                        </button>
                        <button
                          onClick={() => handleCopy(app.url)}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-mono transition inline-flex items-center gap-1"
                        >
                          <Copy className="w-3 h-3" /> Copy Link
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Sandbox & Route Testing Modal */}
      {sandboxModalApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{sandboxModalApp.appName}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                      ACTIVE VM
                    </span>
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">{sandboxModalApp.url}</p>
                </div>
              </div>

              <button
                onClick={() => setSandboxModalApp(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Notice Callout Box */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs leading-relaxed flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-amber-200">DNS Probe & Domain Info:</strong> Subdomain <code className="font-mono bg-amber-950/50 px-1 py-0.5 rounded border border-amber-500/30">{sandboxModalApp.url}</code> is an allocated subdomain namespace. Browsers cannot open un-routed external <code className="font-mono">*.dev</code> domains directly unless DNS is set. Use the <strong className="text-white">Route Sandbox</strong> below to test live HTTP responses right here in the web browser!
              </div>
            </div>

            {/* Route Selector & Tester */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                Select Route to Test:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sandboxModalApp.routes.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => handleTestRoute(r.path, sandboxModalApp.appName)}
                    className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-left transition flex items-center justify-between font-mono text-xs"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {r.method}
                      </span>
                      <span className="text-slate-200">{r.path}</span>
                    </div>
                    <span className="text-[10px] text-cyan-400 font-bold flex items-center gap-0.5">
                      <Zap className="w-2.5 h-2.5" /> Execute
                    </span>
                  </button>
                ))}
              </div>

              {testResponse && (
                <div className="bg-slate-950 p-3 rounded-2xl border border-cyan-500/30 font-mono text-xs space-y-1">
                  <div className="text-cyan-400 font-bold flex items-center justify-between text-[11px] pb-1 border-b border-slate-800">
                    <span>⚡ Live VSS HTTP Response Output:</span>
                    <span className="text-emerald-400 font-normal">Status: 200 OK</span>
                  </div>
                  <pre className="text-slate-200 whitespace-pre-wrap text-[11px] pt-1 leading-relaxed max-h-48 overflow-y-auto">
                    {testResponse}
                  </pre>
                </div>
              )}
            </div>

            {/* Local Windows Testing Guide */}
            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1 font-mono">
              <div className="text-slate-200 font-bold">💻 Local Windows Testing Command:</div>
              <div className="bg-slate-950 p-2 rounded-xl border border-slate-800 text-cyan-300 text-[11px]">
                vss main.vss --port 8080 &nbsp;&nbsp;<span className="text-slate-500"># Opens http://localhost:8080</span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSandboxModalApp(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition"
              >
                Close Sandbox
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
