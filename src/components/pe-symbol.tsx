interface PESymbolProps {
  size?: number;
}

export function PESymbol({ size = 200 }: PESymbolProps) {
  const box = size * 0.5;
  const offset = (size - box) / 2;

  return (
    <div style={{ display: 'flex', justifyContent: 'center '}}>
      <svg width={size} height={size+20} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <marker id="pe-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-fd-foreground)" />
          </marker>
        </defs>

        <rect
          x={offset} y={offset} width={box} height={box} rx="8"
          fill="var(--color-fd-background)" stroke="var(--color-fd-foreground)" strokeWidth="2"
        />
        <text x={size / 2} y={size / 2 + 7} textAnchor="middle" fontSize="22" fontWeight="600" fill="var(--color-fd-foreground)">
          b
        </text>

        {/* a: in from left, out to right */}
        <line x1={0} y1={size / 2} x2={offset - 2} y2={size / 2} stroke="var(--color-fd-foreground)" strokeWidth="2" markerEnd="url(#pe-arrow)" />
        <text x={offset * 0.3} y={size / 2 - 8} fontSize="15" fill="var(--color-fd-foreground)">a</text>

        <line x1={offset + box + 2} y1={size / 2} x2={size} y2={size / 2} stroke="var(--color-fd-foreground)" strokeWidth="2" markerEnd="url(#pe-arrow)" />
        <text x={offset + box + offset * 0.3} y={size / 2 - 8} fontSize="15" fill="var(--color-fd-foreground)">a</text>

        {/* c: in from top, out (result) from bottom */}
        <line x1={size / 2} y1={0} x2={size / 2} y2={offset - 2} stroke="var(--color-fd-foreground)" strokeWidth="2" markerEnd="url(#pe-arrow)" />
        <text x={size / 2 + 8} y={offset * 0.6} fontSize="15" fill="var(--color-fd-foreground)">c</text>

        <line x1={size / 2} y1={offset + box + 2} x2={size / 2} y2={size} stroke="var(--color-fd-foreground)" strokeWidth="2" markerEnd="url(#pe-arrow)" />
        <text x={size / 2 + 8} y={offset + box + offset * 0.8} fontSize="13" fill="var(--color-fd-foreground)">PE(a,b,c)</text>
      </svg>
    </div>
  );
}