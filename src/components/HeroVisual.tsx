import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Activity, Zap, CheckCircle2 } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  radius: number;
  color: string;
  active: boolean;
  connections: string[];
  metrics: string;
}

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('ai');
  const [fps, setFps] = useState<number>(60);
  const [packetCount, setPacketCount] = useState<number>(1420);

  // Nodes flow: AI -> AUTOMATION -> FINANCIAL INTELLIGENCE -> QUANTITATIVE SYSTEMS -> DIGITAL SYSTEMS -> BUSINESS
  const nodesRef = useRef<Node[]>([
    {
      id: 'ai',
      label: 'AI',
      sublabel: 'Agentic Models',
      x: 0.15,
      y: 0.25,
      radius: 22,
      color: '#10B981',
      active: true,
      connections: ['automation', 'quant'],
      metrics: 'Gemini 2.5 / Deep Reasoning'
    },
    {
      id: 'automation',
      label: 'AUTOMATION',
      sublabel: 'Workflows & Orchestration',
      x: 0.45,
      y: 0.2,
      radius: 20,
      color: '#00E5FF',
      active: true,
      connections: ['finint', 'digsys'],
      metrics: 'Async Pipelines / Zero-Latency'
    },
    {
      id: 'finint',
      label: 'FINANCIAL INTELLIGENCE',
      sublabel: 'Liquidity & Market Data',
      x: 0.78,
      y: 0.3,
      radius: 22,
      color: '#3B82F6',
      active: true,
      connections: ['quant', 'business'],
      metrics: 'Real-Time Order Flow / Macro'
    },
    {
      id: 'quant',
      label: 'QUANTITATIVE SYSTEMS',
      sublabel: 'Algorithmic Execution',
      x: 0.3,
      y: 0.7,
      radius: 22,
      color: '#8B5CF6',
      active: true,
      connections: ['digsys', 'finint'],
      metrics: 'MQL5 / Backtesting / VaR Risk'
    },
    {
      id: 'digsys',
      label: 'DIGITAL SYSTEMS',
      sublabel: 'Infrastructure & Tools',
      x: 0.62,
      y: 0.75,
      radius: 20,
      color: '#10B981',
      active: true,
      connections: ['business'],
      metrics: 'SAYEMATRIX OS / Cloud Assets'
    },
    {
      id: 'business',
      label: 'BUSINESS',
      sublabel: 'SANR Corp Ventures',
      x: 0.88,
      y: 0.7,
      radius: 24,
      color: '#F59E0B',
      active: true,
      connections: [],
      metrics: 'Long-Term Value Generation'
    }
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; targetX: number; targetY: number; progress: number; speed: number; color: string }[] = [];
    let frameCount = 0;
    let lastTime = performance.now();

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Spawn packets moving along node connection pathways
    const spawnParticle = () => {
      const nodes = nodesRef.current;
      const validSources = nodes.filter(n => n.connections.length > 0);
      if (validSources.length === 0) return;

      const sourceNode = validSources[Math.floor(Math.random() * validSources.length)];
      const targetId = sourceNode.connections[Math.floor(Math.random() * sourceNode.connections.length)];
      const targetNode = nodes.find(n => n.id === targetId);

      if (sourceNode && targetNode) {
        particles.push({
          x: sourceNode.x * canvas.width,
          y: sourceNode.y * canvas.height,
          targetX: targetNode.x * canvas.width,
          targetY: targetNode.y * canvas.height,
          progress: 0,
          speed: 0.005 + Math.random() * 0.008,
          color: sourceNode.color
        });
      }
    };

    // Main Canvas Render Loop
    const render = (time: number) => {
      frameCount++;
      if (time - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = time;
        setPacketCount(prev => prev + Math.floor(Math.random() * 5));
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;

      // 1. Draw subtle background coordinate grid
      ctx.strokeStyle = '#242830';
      ctx.lineWidth = 0.5;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Connection Lines between nodes
      const nodes = nodesRef.current;
      nodes.forEach(node => {
        const startX = node.x * width;
        const startY = node.y * height;

        node.connections.forEach(targetId => {
          const target = nodes.find(n => n.id === targetId);
          if (!target) return;

          const endX = target.x * width;
          const endY = target.y * height;

          const isSelectedPath = selectedNodeId === node.id || selectedNodeId === target.id;

          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = isSelectedPath ? node.color : '#242830';
          ctx.lineWidth = isSelectedPath ? 1.8 : 1.0;
          if (isSelectedPath) {
            ctx.setLineDash([4, 4]);
          } else {
            ctx.setLineDash([]);
          }
          ctx.stroke();
          ctx.setLineDash([]);
        });
      });

      // 3. Spawn & Animate Flow Particles
      if (Math.random() < 0.2) {
        spawnParticle();
      }

      particles = particles.filter(p => p.progress < 1);
      particles.forEach(p => {
        p.progress += p.speed;
        const currentX = p.x + (p.targetX - p.x) * p.progress;
        const currentY = p.y + (p.targetY - p.y) * p.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 4. Draw Nodes
      nodes.forEach(node => {
        const nx = node.x * width;
        const ny = node.y * height;
        const isSelected = selectedNodeId === node.id;

        // Outer glow
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius + (isSelected ? 10 : 4), 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? `${node.color}25` : '#10121680';
        ctx.fill();

        // Node circle border
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#14171C';
        ctx.strokeStyle = isSelected ? node.color : '#242830';
        ctx.lineWidth = isSelected ? 2 : 1;
        ctx.fill();
        ctx.stroke();

        // Inner status dot
        ctx.beginPath();
        ctx.arc(nx, ny, 4, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Node Title Label
        ctx.fillStyle = isSelected ? '#F5F5F5' : '#9299A5';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, nx, ny + node.radius + 14);

        // Node Sublabel
        ctx.fillStyle = '#9299A5';
        ctx.font = '8px monospace';
        ctx.fillText(node.sublabel, nx, ny + node.radius + 24);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Canvas click handler to select node
    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      nodesRef.current.forEach(node => {
        const nx = node.x * canvas.width;
        const ny = node.y * canvas.height;
        const dist = Math.hypot(clickX - nx, clickY - ny);
        if (dist <= node.radius + 10) {
          setSelectedNodeId(node.id);
        }
      });
    };

    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [selectedNodeId]);

  const activeNode = nodesRef.current.find(n => n.id === selectedNodeId) || nodesRef.current[0];

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] rounded-xl bg-[#101216] border border-[#242830] overflow-hidden shadow-2xl group">
      {/* Canvas Layer */}
      <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />

      {/* Top Header Overlay Bar */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#08090B]/90 border border-[#242830] backdrop-blur-md">
          <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono text-[#F5F5F5] font-medium">
            SYSTEM GRAPH / INTERACTIVE NODES
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-2 py-0.5 rounded bg-[#08090B]/90 border border-[#242830] text-[10px] font-mono text-[#9299A5]">
            FPS: <span className="text-emerald-400">{fps}</span>
          </div>
          <div className="px-2 py-0.5 rounded bg-[#08090B]/90 border border-[#242830] text-[10px] font-mono text-[#9299A5]">
            PACKETS: <span className="text-cyan-400">{packetCount}</span>
          </div>
        </div>
      </div>

      {/* Bottom Selected Node Info Banner */}
      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#08090B]/95 border border-[#242830] backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-all">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded border flex items-center justify-center font-mono font-bold text-xs"
            style={{
              borderColor: activeNode.color,
              backgroundColor: `${activeNode.color}15`,
              color: activeNode.color,
            }}
          >
            {activeNode.label.substring(0, 2)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#F5F5F5] uppercase tracking-wider">
                NODE: {activeNode.label}
              </span>
              <span className="inline-flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="w-2.5 h-2.5" /> ONLINE
              </span>
            </div>
            <p className="text-[11px] font-mono text-[#9299A5]">{activeNode.sublabel} — {activeNode.metrics}</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#9299A5] bg-[#14171C] px-2.5 py-1 rounded border border-[#242830]">
          <Zap className="w-3 h-3 text-amber-400" />
          <span>Click any node to inspect data pathways</span>
        </div>
      </div>
    </div>
  );
};
