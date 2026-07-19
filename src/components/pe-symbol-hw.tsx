interface PESymbolHWProps {
    size?: number;
  }
  
  export function PESymbolHW({ size = 360 }: PESymbolHWProps) {
    // Dimensions
    const boxW = 200;
    const boxH = 200;
    const offsetX = (size - boxW) / 2;
    const offsetY = (size - boxH) / 2;
  
    // Port layout coordinates
    const yData = offsetY + 40;     // A_i, A_o
    const yValid = offsetY + 80;    // Av_i, Av_o
    const yCtrl1 = offsetY + 140;   // latch_i
    const yCtrl2 = offsetY + 170;   // clear_i
  
    const xData = offsetX + 60;     // P_i, P_o
    const xValid = offsetX + 140;   // Pv_i, Pv_o
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <marker id="pe-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="var(--color-fd-foreground)" />
            </marker>
            <marker id="pe-arrow-muted" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="var(--color-fd-muted-foreground)" />
            </marker>
          </defs>
  
          {/* Main PE Box */}
          <rect
            x={offsetX} y={offsetY} width={boxW} height={boxH} rx="8"
            fill="var(--color-fd-background)" 
            stroke="var(--color-fd-foreground)" 
            strokeWidth="2"
          />
  
          {/* --- LEFT INPUTS (Activations & Control) --- */}
          {/* A_i (Bus) */}
          <line x1={10} y1={yData} x2={offsetX} y2={yData} stroke="var(--color-fd-foreground)" strokeWidth="2" markerEnd="url(#pe-arrow)" />
          <line x1={35} y1={yData + 6} x2={45} y2={yData - 6} stroke="var(--color-fd-foreground)" strokeWidth="2" /> {/* Bus Slash */}
          <text x={10} y={yData - 8} fontSize="14" fontFamily="monospace" fill="var(--color-fd-foreground)">A_i</text>
  
          {/* Av_i (Single bit) */}
          <line x1={10} y1={yValid} x2={offsetX} y2={yValid} stroke="var(--color-fd-muted-foreground)" strokeWidth="1.5" markerEnd="url(#pe-arrow-muted)" strokeDasharray="4 2" />
          <text x={10} y={yValid - 8} fontSize="14" fontFamily="monospace" fill="var(--color-fd-muted-foreground)">Av_i</text>
  
          {/* latch_i */}
          <line x1={10} y1={yCtrl1} x2={offsetX} y2={yCtrl1} stroke="var(--color-fd-muted-foreground)" strokeWidth="1.5" markerEnd="url(#pe-arrow-muted)" />
          <text x={10} y={yCtrl1 - 8} fontSize="14" fontFamily="monospace" fill="var(--color-fd-muted-foreground)">latch_i</text>
  
          {/* clear_i */}
          <line x1={10} y1={yCtrl2} x2={offsetX} y2={yCtrl2} stroke="var(--color-fd-muted-foreground)" strokeWidth="1.5" markerEnd="url(#pe-arrow-muted)" />
          <text x={10} y={yCtrl2 - 8} fontSize="14" fontFamily="monospace" fill="var(--color-fd-muted-foreground)">clear_i</text>
  
  
          {/* --- RIGHT OUTPUTS (Activations) --- */}
          {/* A_o (Bus) */}
          <line x1={offsetX + boxW} y1={yData} x2={size - 10} y2={yData} stroke="var(--color-fd-foreground)" strokeWidth="2" markerEnd="url(#pe-arrow)" />
          <line x1={size - 45} y1={yData + 6} x2={size - 35} y2={yData - 6} stroke="var(--color-fd-foreground)" strokeWidth="2" /> {/* Bus Slash */}
          <text x={offsetX + boxW + 10} y={yData - 8} fontSize="14" fontFamily="monospace" fill="var(--color-fd-foreground)">A_o</text>
  
          {/* Av_o (Single bit) */}
          <line x1={offsetX + boxW} y1={yValid} x2={size - 10} y2={yValid} stroke="var(--color-fd-muted-foreground)" strokeWidth="1.5" markerEnd="url(#pe-arrow-muted)" strokeDasharray="4 2" />
          <text x={offsetX + boxW + 10} y={yValid - 8} fontSize="14" fontFamily="monospace" fill="var(--color-fd-muted-foreground)">Av_o</text>
  
  
          {/* --- TOP INPUTS (Partial Sums) --- */}
          {/* P_i (Bus) */}
          <line x1={xData} y1={10} x2={xData} y2={offsetY} stroke="var(--color-fd-foreground)" strokeWidth="2" markerEnd="url(#pe-arrow)" />
          <line x1={xData - 6} y1={35} x2={xData + 6} y2={25} stroke="var(--color-fd-foreground)" strokeWidth="2" /> {/* Bus Slash */}
          <text x={xData + 12} y={35} fontSize="14" fontFamily="monospace" fill="var(--color-fd-foreground)">P_i</text>
  
          {/* Pv_i (Single bit) */}
          <line x1={xValid} y1={10} x2={xValid} y2={offsetY} stroke="var(--color-fd-muted-foreground)" strokeWidth="1.5" markerEnd="url(#pe-arrow-muted)" strokeDasharray="4 2" />
          <text x={xValid + 8} y={35} fontSize="14" fontFamily="monospace" fill="var(--color-fd-muted-foreground)">Pv_i</text>
  
  
          {/* --- BOTTOM OUTPUTS (Partial Sums) --- */}
          {/* P_o (Bus) */}
          <line x1={xData} y1={offsetY + boxH} x2={xData} y2={size - 10} stroke="var(--color-fd-foreground)" strokeWidth="2" markerEnd="url(#pe-arrow)" />
          <line x1={xData - 6} y1={size - 35} x2={xData + 6} y2={size - 45} stroke="var(--color-fd-foreground)" strokeWidth="2" /> {/* Bus Slash */}
          <text x={xData + 12} y={size - 30} fontSize="14" fontFamily="monospace" fill="var(--color-fd-foreground)">P_o</text>
  
          {/* Pv_o (Single bit) */}
          <line x1={xValid} y1={offsetY + boxH} x2={xValid} y2={size - 10} stroke="var(--color-fd-muted-foreground)" strokeWidth="1.5" markerEnd="url(#pe-arrow-muted)" strokeDasharray="4 2" />
          <text x={xValid + 8} y={size - 30} fontSize="14" fontFamily="monospace" fill="var(--color-fd-muted-foreground)">Pv_o</text>
  
  
          {/* --- INTERNAL BLOCK LOGIC --- */}
          <text x={size / 2} y={size / 2} textAnchor="middle" fontSize="16" fontWeight="bold" fill="var(--color-fd-foreground)">
            Weight-Stationary PE
          </text>
  
  
        </svg>
      </div>
    );
  }