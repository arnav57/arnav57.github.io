interface CycleData {
  activations?: Record<string, string>; // wire entering a PE (row,col) carrying activation `a`
  partialSums?: Record<string, string>; // wire entering a PE (row,col) carrying partial sum `c`
  outputs?: Record<string, string>;     // wire LEAVING a PE (row,col), e.g. final result exiting the array
}

interface SystolicArrayProps {
  rows: number;
  cols: number;
  cellSize?: number;
  weights?: Record<string, string>; // key "row,col" -> the actual b value held in that PE
  cycle?: CycleData;
}

export function SystolicArray({ rows, cols, cellSize = 100, weights, cycle }: SystolicArrayProps) {
  const gap = cellSize * 0.6;
  const step = cellSize + gap;
  const margin = gap;
  const width = cols * step - gap + margin * 2;
  const height = rows * step - gap + margin * 2;

  const cx = (col: number) => margin + col * step + cellSize / 2;
  const cy = (row: number) => margin + row * step + cellSize / 2;

  const activeColor = 'var(--color-fd-primary)';

  const baseWires: React.ReactNode[] = [];
  const activeWires: React.ReactNode[] = [];
  const boxes: React.ReactNode[] = [];
  const labels: React.ReactNode[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = margin + col * step;
      const y = margin + row * step;
      const key = `${row},${col}`;
      const weightValue = weights?.[key];

      boxes.push(
        <g key={`pe-${key}`}>
          <rect x={x} y={y} width={cellSize} height={cellSize} rx="6"
            fill="var(--color-fd-background)" stroke="var(--color-fd-foreground)" strokeWidth="2" />
          <text x={x + cellSize / 2} y={y + cellSize / 2 + 6} textAnchor="middle"
            fontSize={weightValue ? 16 : 18} fontWeight="600" fill="var(--color-fd-foreground)">
            {weightValue ?? (
              <>b<tspan fontSize="12" dy="3">{row},{col}</tspan></>
            )}
          </text>
        </g>
      );

      const aExitX = col < cols - 1 ? x + cellSize + gap : width;
      baseWires.push(
        <line key={`a-${key}`}
          x1={x + cellSize} y1={cy(row)} x2={aExitX} y2={cy(row)}
          stroke="var(--color-fd-foreground)" strokeWidth="2" markerEnd="url(#sa-arrow)" />
      );

      const cExitY = row < rows - 1 ? y + cellSize + gap : height;
      baseWires.push(
        <line key={`c-${key}`}
          x1={cx(col)} y1={y + cellSize} x2={cx(col)} y2={cExitY}
          stroke="var(--color-fd-foreground)" strokeWidth="2" markerEnd="url(#sa-arrow)" />
      );

      // --- entering activation ---
      const aValue = cycle?.activations?.[key];
      if (aValue !== undefined) {
        const entryX1 = col > 0 ? x - gap : 0;
        activeWires.push(
          <line key={`a-active-${key}`} x1={entryX1} y1={cy(row)} x2={x} y2={cy(row)}
            stroke={activeColor} strokeWidth="3" markerEnd="url(#sa-arrow-active)" />
        );
        labels.push(
          <text key={`a-label-${key}`} x={(entryX1 + x) / 2} y={cy(row) - 10}
            textAnchor="middle" fontSize="13" fontWeight="600" fill={activeColor}>
            {aValue}
          </text>
        );
      }

      // --- entering partial sum ---
      const cValue = cycle?.partialSums?.[key];
      if (cValue !== undefined) {
        const entryY1 = row > 0 ? y - gap : 0;
        activeWires.push(
          <line key={`c-active-${key}`} x1={cx(col)} y1={entryY1} x2={cx(col)} y2={y}
            stroke={activeColor} strokeWidth="3" markerEnd="url(#sa-arrow-active)" />
        );
        labels.push(
          <text key={`c-label-${key}`} x={cx(col) + 10} y={(entryY1 + y) / 2 + 4}
            fontSize="13" fontWeight="600" fill={activeColor}>
            {cValue}
          </text>
        );
      }

      // --- leaving output (e.g. final result exiting the array) ---
      const outValue = cycle?.outputs?.[key];
      if (outValue !== undefined) {
        activeWires.push(
          <line key={`out-active-${key}`} x1={cx(col)} y1={y + cellSize} x2={cx(col)} y2={cExitY}
            stroke={activeColor} strokeWidth="3" markerEnd="url(#sa-arrow-active)" />
        );
        labels.push(
          <text key={`out-label-${key}`} x={cx(col) + 10} y={(y + cellSize + cExitY) / 2 + 4}
            fontSize="13" fontWeight="600" fill={activeColor}>
            {outValue}
          </text>
        );
      }
    }

    baseWires.push(
      <line key={`a-in-${row}`} x1={0} y1={cy(row)} x2={margin - 2} y2={cy(row)}
        stroke="var(--color-fd-foreground)" strokeWidth="2" markerEnd="url(#sa-arrow)" />
    );
  }

  for (let col = 0; col < cols; col++) {
    baseWires.push(
      <line key={`c-in-${col}`} x1={cx(col)} y1={0} x2={cx(col)} y2={margin - 2}
        stroke="var(--color-fd-foreground)" strokeWidth="2" markerEnd="url(#sa-arrow)" />
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ maxWidth: '100%', height: 'auto' }}>
        <defs>
          <marker id="sa-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-fd-foreground)" />
          </marker>
          <marker id="sa-arrow-active" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L8,4 L0,8 Z" fill={activeColor} />
          </marker>
        </defs>
        {baseWires}
        {activeWires}
        {boxes}
        {labels}
      </svg>
    </div>
  );
}