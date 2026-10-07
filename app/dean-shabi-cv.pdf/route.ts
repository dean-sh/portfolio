import { createElement } from 'react';
import { renderToBuffer } from '@react-pdf/renderer';
import { ResumeDocument } from '@/components/ResumeDocument';

export const dynamic = 'force-static';

export async function GET() {
  const pdf = await renderToBuffer(createElement(ResumeDocument));
  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="dean-shabi-cv.pdf"',
    },
  });
}
