import { ImageResponse } from 'next/og';
import { HERO } from '@/content/site';
import { OG_SIZE, dataUri, ogFonts } from '@/lib/og';
import { PALETTE } from '@/lib/palette';
import { ALL_CASE_STUDIES, findCaseStudy, workImage } from '@/lib/work';

export const alt = `Case study by ${HERO.name}`;
export const size = OG_SIZE;
export const contentType = 'image/png';

export function generateStaticParams() {
  return ALL_CASE_STUDIES.map(({ slug }) => ({ slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const entry = findCaseStudy(params.slug);
  if (!entry) return new Response('Not found', { status: 404 });
  const { study } = entry;
  const [metric] = study.metrics;
  const photo = await dataUri(workImage(study.slug));
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', padding: 40, background: PALETTE.canvas, fontFamily: 'Geist' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 660,
            padding: '24px 56px 24px 32px',
            color: PALETTE.ink,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', gap: 10, fontSize: 24, color: PALETTE.muted }}>
              <span style={{ color: PALETTE.ink, fontWeight: 500 }}>{HERO.name}</span>
              <span>·</span>
              <span>{study.org}</span>
              <span>·</span>
              <span>{study.period}</span>
            </div>
            <div style={{ display: 'flex', fontFamily: 'Instrument Serif', fontSize: 56, lineHeight: 1.06, letterSpacing: '-0.012em' }}>
              {study.title}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', fontFamily: 'Geist Mono', fontSize: 60, letterSpacing: '-0.02em', color: PALETTE.accent }}>
              {metric.value}
            </div>
            <div style={{ display: 'flex', fontSize: 22, color: PALETTE.muted }}>{metric.label}</div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo} width={460} height={550} alt="" style={{ objectFit: 'cover', borderRadius: 24 }} />
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
