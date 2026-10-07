import { ImageResponse } from 'next/og';
import { physicsFirstSolar } from '@/content/charts';
import { HERO, LINKS } from '@/content/site';
import { plotChart } from '@/lib/chart';
import { OG_SIZE, dataUri, ogFonts } from '@/lib/og';
import { PALETTE } from '@/lib/palette';

export const alt = `${HERO.name}. ${HERO.title}`;
export const size = OG_SIZE;
export const contentType = 'image/png';

const SPARK = { width: 200, height: 48 };

function sparkPath(): string {
  if (physicsFirstSolar.kind !== 'line') return '';
  const plot = plotChart(physicsFirstSolar);
  const ys = plot.series[0].ys;
  return plot.xs
    .map((x, i) => `${i === 0 ? 'M' : 'L'}${(x * SPARK.width).toFixed(1)} ${((1 - ys[i]) * SPARK.height).toFixed(1)}`)
    .join('');
}

export default async function Image() {
  const portrait = await dataUri('/images/profile.png');
  const line = sparkPath();
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: PALETTE.canvas,
          color: PALETTE.ink,
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 30, fontWeight: 500 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={portrait} width={64} height={64} alt="" style={{ borderRadius: 32, objectFit: 'cover' }} />
          {HERO.name}
        </div>
        <div style={{ display: 'flex', fontFamily: 'Instrument Serif', fontSize: 92, lineHeight: 1.02, letterSpacing: '-0.015em' }}>
          {HERO.title}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 26, color: PALETTE.muted }}>
          {LINKS.site.replace('https://', '')}
          <div
            style={{
              display: 'flex',
              padding: '14px 22px',
              borderRadius: 999,
              border: `1.5px solid ${PALETTE.border}`,
              background: PALETTE.surface,
            }}
          >
            <svg width={SPARK.width} height={SPARK.height} viewBox={`0 0 ${SPARK.width} ${SPARK.height}`}>
              <path d={`${line}L${SPARK.width} ${SPARK.height}L0 ${SPARK.height}Z`} fill={PALETTE.accent} fillOpacity={0.12} />
              <path d={line} fill="none" stroke={PALETTE.accent} strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
