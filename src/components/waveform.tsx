interface WaveformProps {
  signal: Array<{ name: string; wave: string; data?: string[] }>;
}

export async function Waveform({ signal }: WaveformProps) {
  const json = JSON.stringify({ signal });

  let svg: string;
  try {
    const res = await fetch(`https://svg.wavedrom.com/${encodeURIComponent(json)}`);
    if (!res.ok) throw new Error(`WaveDrom service returned ${res.status}`);
    svg = await res.text();
  } catch (err) {
    return (
      <div style={{ color: 'var(--color-fd-destructive, red)', fontSize: 14 }}>
        Failed to render waveform: {String(err)}
      </div>
    );
  }

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', background: '#fff', padding: 16, borderRadius: 8 }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}