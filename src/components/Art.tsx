// Hero skyline only.
const B = [[0,90,260],[100,70,180],[180,110,340],[300,80,220],[390,120,400],[520,90,280],[620,130,360],[760,80,200],[850,110,320],[970,90,240],[1070,130,300]];
export function City({ className = '', lit = '#B08D57' }: { className?: string; lit?: string }) {
  return (<svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden>
    {B.map(([x, w, h], i) => { const y = 500 - h, cols = Math.floor((w - 16) / 18), rows = Math.floor((h - 20) / 26);
      return (<g key={i}><rect x={x} y={y} width={w} height={h} fill="currentColor" />
        {Array.from({ length: cols * rows }, (_, k) => { const c = k % cols, r = Math.floor(k / cols), on = (i * 7 + c * 3 + r * 5) % 6 === 0;
          return <rect key={k} x={x + 10 + c * 18} y={y + 12 + r * 26} width="9" height="14" className={on ? 'win-lit' : ''} fill={on ? lit : '#ffffff14'} />; })}</g>); })}
  </svg>);
}
