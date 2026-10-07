import { ImageResponse } from 'next/og';
import { Mark } from '@/lib/mark';
import { ogFonts } from '@/lib/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default async function Icon() {
  return new ImageResponse(<Mark size={32} radius={7} />, { ...size, fonts: await ogFonts() });
}
