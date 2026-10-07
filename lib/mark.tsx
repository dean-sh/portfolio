import { PALETTE } from './palette';

// Commit Green as the dark theme draws it, which keeps its contrast on the ink tile.
const GREEN_ON_INK = '#3FB950';

export function Mark({ size, radius }: { size: number; radius: number }) {
  const dot = Math.round(size * 0.19);
  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: radius,
        background: PALETTE.ink,
        color: PALETTE.canvas,
        fontFamily: 'Instrument Serif',
        fontSize: size * 1.02,
        lineHeight: 1,
      }}
    >
      <span style={{ marginTop: size * 0.08, marginLeft: -size * 0.14 }}>D</span>
      <div
        style={{
          position: 'absolute',
          right: size * 0.12,
          bottom: size * 0.19,
          width: dot,
          height: dot,
          borderRadius: dot,
          background: GREEN_ON_INK,
        }}
      />
    </div>
  );
}
