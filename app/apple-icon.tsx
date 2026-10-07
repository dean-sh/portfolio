import { ImageResponse } from 'next/og';
import { Mark } from '@/lib/mark';
import { ogFonts } from '@/lib/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// iOS rounds the corners itself, so the tile is square.
export default async function AppleIcon() {
  return new ImageResponse(<Mark size={180} radius={0} />, { ...size, fonts: await ogFonts() });
}
