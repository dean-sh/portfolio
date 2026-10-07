import path from 'node:path';
import { Children, type ReactNode } from 'react';
import { Document, Font, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { BASE, EDUCATION, EXPERIENCE, REMOTE, SKILL_GROUPS, SUMMARY } from '@/content/resume';
import { EMAIL } from '@/content/email';
import { HERO, LINKS } from '@/content/site';
import { PALETTE } from '@/lib/palette';

const font = (file: string) => path.join(process.cwd(), 'assets/fonts', file);

Font.register({
  family: 'Geist',
  fonts: [
    { src: font('Geist-Regular.ttf'), fontWeight: 400 },
    { src: font('Geist-Medium.ttf'), fontWeight: 500 },
    { src: font('Geist-SemiBold.ttf'), fontWeight: 600 },
  ],
});
Font.register({ family: 'Geist Mono', src: font('GeistMono-Regular.ttf') });
Font.register({ family: 'Instrument Serif', src: font('InstrumentSerif-Regular.ttf') });
Font.registerHyphenationCallback((word) => [word]);

const { ink: INK, muted: MUTED, border: BORDER, accent: ACCENT, surface: PAPER } = PALETTE;
const HAIRLINE = 0.6;
const MARGIN = 44;

const bare = (url: string) => url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '');

const CONTACTS = [
  { href: `mailto:${EMAIL}`, label: EMAIL },
  ...[LINKS.site, LINKS.linkedin, LINKS.github].map((url) => ({ href: url, label: bare(url) })),
];

// react-pdf resolves a unitless lineHeight against the element's own fontSize (default 18), not the inherited one.
const type = (fontSize: number, lineHeight: number) => ({ fontSize, lineHeight });

const s = StyleSheet.create({
  page: {
    paddingTop: MARGIN,
    paddingBottom: MARGIN + 12,
    paddingHorizontal: MARGIN,
    backgroundColor: PAPER,
    color: INK,
    fontFamily: 'Geist',
  },
  name: { ...type(30, 1), fontFamily: 'Instrument Serif' },
  summary: { ...type(9.5, 1.5), marginTop: 10, maxWidth: 440, color: MUTED },
  meta: { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' },
  locations: { ...type(7.5, 1.4), color: MUTED },
  contacts: { flexDirection: 'row', gap: 10 },
  contact: { ...type(7.5, 1.4), color: INK, textDecoration: 'none' },
  heading: {
    ...type(15, 1.1),
    marginTop: 18,
    paddingBottom: 6,
    borderBottomWidth: HAIRLINE,
    borderBottomColor: BORDER,
    fontFamily: 'Instrument Serif',
  },
  entry: { flexDirection: 'row', paddingVertical: 7, borderBottomWidth: HAIRLINE, borderBottomColor: BORDER },
  aside: { width: 108, paddingTop: 2, paddingRight: 10 },
  period: { ...type(7.5, 1.4), fontFamily: 'Geist Mono' },
  // The location and institution offsets keep each period closer to its title than to the line below, so pdfminer reads the gutter with its entry.
  location: { ...type(8, 1.4), marginTop: 6, color: MUTED },
  main: { flex: 1 },
  // Wider than a space, so item-based parsers keep the title, the dot and the company as separate items.
  roleLine: { flexDirection: 'row', columnGap: 4.5 },
  // OpenResume picks the company as the first bold item that is neither title nor date, reading bold from the font name, so the dot stays Regular.
  role: { ...type(10, 1.3), fontWeight: 600 },
  company: { ...type(10, 1.3), fontWeight: 600, color: MUTED },
  separator: { ...type(10, 1.3), color: MUTED },
  bullets: { marginTop: 4 },
  bullet: { flexDirection: 'row', marginTop: 1.5 },
  dash: { width: 6, height: 1, marginTop: 6.2, marginRight: 6, backgroundColor: ACCENT },
  bulletText: { ...type(9, 1.5), flex: 1, color: MUTED },
  skills: { ...type(7.5, 1.4), marginTop: 5, color: MUTED },
  degree: { ...type(9.5, 1.3), fontWeight: 500 },
  institution: { ...type(8.5, 1.4), marginTop: 4, color: MUTED },
  details: { ...type(8.5, 1.5), marginTop: 3, color: MUTED },
  skillGroup: { marginTop: 6 },
  skillLabel: { ...type(9, 1.3), fontWeight: 500 },
  skillItems: { ...type(8.5, 1.4), marginTop: 1, color: MUTED },
  footer: {
    position: 'absolute',
    bottom: MARGIN - 14,
    left: MARGIN,
    right: MARGIN,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: MUTED,
  },
  footerText: { fontSize: 7.5 },
  // A lineHeight on a render Text drops the whole fixed footer.
  pageNumber: { fontFamily: 'Geist Mono', fontSize: 7 },
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  const [first, ...rest] = Children.toArray(children);
  return (
    <>
      <View wrap={false}>
        <Text style={s.heading}>{title}</Text>
        {first}
      </View>
      {rest}
    </>
  );
}

function Entry({ aside, children }: { aside: ReactNode; children: ReactNode }) {
  return (
    <View style={s.entry} wrap={false}>
      <View style={s.aside}>{aside}</View>
      <View style={s.main}>{children}</View>
    </View>
  );
}

// OpenResume joins the last text of one page to the first text of the next, so later pages draw their footer before the body.
function Footer({ onFirstPage }: { onFirstPage: boolean }) {
  const show = (pageNumber: number, text: string) => ((pageNumber === 1) === onFirstPage ? text : '');
  return (
    <View style={s.footer} fixed>
      <Text style={s.footerText} render={({ pageNumber }) => show(pageNumber, `${bare(LINKS.site)}/resume`)} />
      <Text style={s.pageNumber} render={({ pageNumber, totalPages }) => show(pageNumber, `${pageNumber} / ${totalPages}`)} />
    </View>
  );
}

export function ResumeDocument() {
  return (
    <Document title={`${HERO.name} · Resume`} author={HERO.name}>
      <Page size="A4" style={s.page}>
        <Footer onFirstPage={false} />
        <Text style={s.name}>{HERO.name}</Text>
        <Text style={s.summary}>{SUMMARY}</Text>
        <View style={s.meta}>
          <Text style={s.locations}>{`${BASE.city}, ${BASE.countryCode} · ${REMOTE}`}</Text>
          <View style={s.contacts}>
            {CONTACTS.map(({ href, label }) => (
              <Link key={href} src={href} style={s.contact}>
                {label}
              </Link>
            ))}
          </View>
        </View>

        <Section title="Experience">
          {EXPERIENCE.map((item) => (
            <Entry
              key={`${item.role}-${item.company}`}
              aside={
                <>
                  <Text style={s.period}>{item.period}</Text>
                  <Text style={s.location}>{item.location}</Text>
                </>
              }
            >
              <View style={s.roleLine}>
                <Text style={s.role}>{item.role}</Text>
                <Text style={s.separator}>·</Text>
                <Text style={s.company}>{item.company}</Text>
              </View>
              <View style={s.bullets}>
                {item.bullets.map((bullet) => (
                  <View key={bullet} style={s.bullet}>
                    <View style={s.dash} />
                    <Text style={s.bulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
              <Text style={s.skills}>{item.skills.join(' · ')}</Text>
            </Entry>
          ))}
        </Section>

        <Section title="Education">
          {EDUCATION.map((item) => (
            <Entry key={item.degree} aside={<Text style={s.period}>{item.period}</Text>}>
              <Text style={s.degree}>{item.degree}</Text>
              <Text style={s.institution}>{item.institution}</Text>
              {item.details && <Text style={s.details}>{item.details}</Text>}
            </Entry>
          ))}
        </Section>

        <Section title="Skills">
          {SKILL_GROUPS.map((group) => (
            <View key={group.label} style={s.skillGroup} wrap={false}>
              <Text style={s.skillLabel}>{group.label}</Text>
              <Text style={s.skillItems}>{group.items.join(', ')}</Text>
            </View>
          ))}
        </Section>

        <Footer onFirstPage />
      </Page>
    </Document>
  );
}
