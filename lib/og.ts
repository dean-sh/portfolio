import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const OG_SIZE = { width: 1200, height: 630 };

const read = (file: string) => readFile(path.join(process.cwd(), file));

// Sniffs the type from the bytes, because profile.png is really a JPEG.
export async function dataUri(publicPath: string): Promise<string> {
  const bytes = await read(path.join('public', publicPath));
  const type = bytes[0] === 0xff && bytes[1] === 0xd8 ? 'image/jpeg' : 'image/png';
  return `data:${type};base64,${bytes.toString('base64')}`;
}

export async function ogFonts() {
  const [serif, regular, medium, mono] = await Promise.all(
    ['InstrumentSerif-Regular.ttf', 'Geist-Regular.ttf', 'Geist-Medium.ttf', 'GeistMono-Regular.ttf'].map((file) =>
      read(path.join('assets/fonts', file)),
    ),
  );
  return [
    { name: 'Instrument Serif', data: serif, weight: 400 as const },
    { name: 'Geist', data: regular, weight: 400 as const },
    { name: 'Geist', data: medium, weight: 500 as const },
    { name: 'Geist Mono', data: mono, weight: 400 as const },
  ];
}
