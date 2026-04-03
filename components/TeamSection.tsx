"use client";

import Image from 'next/image';

import { useLanguage } from '@/components/LanguageProvider';
import Reveal from '@/components/Reveal';
import { getTeamContent } from '@/components/team-content';

export default function TeamSection() {
  const { language } = useLanguage();
  const teamMembers = getTeamContent(language);
  const copy =
    language === 'hi'
      ? {
          eyebrow: 'हमारी टीम',
          title: 'रणनीति, एक्जीक्यूशन और असर के लिए बनी टीम',
          description:
            'हमारी टीम technology, strategy, data और communication की expertise को एक साथ लाकर high-performance campaigns को structured execution और measurable outcomes के साथ चलाती है।',
          closing:
            'CampaignX एक multidisciplinary टीम को साथ लाता है जो strategy, technology और communication के जरिए structured और high-impact execution देती है।',
        }
      : {
          eyebrow: 'Our Team',
          title: 'A Team Built for Strategy, Execution & Impact',
          description:
            'Our team brings together expertise in technology, strategy, data, and communication to design and execute high-performance campaigns with a focus on structured execution and measurable outcomes.',
          closing:
            'CampaignX brings together a multidisciplinary team focused on delivering structured, high-impact execution through strategy, technology, and communication.',
        };

  return (
    <section id="team" className="mt-16 scroll-mt-28">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-amber-300/20 bg-[linear-gradient(140deg,#050505_0%,#0d0d0d_52%,#131313_100%)] px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.28)] sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_22%)]" />

        <div className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-amber-300">{copy.eyebrow}</p>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[0.005em] text-white sm:text-4xl lg:text-5xl">
              {copy.title}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              {copy.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 45}>
                <article className="group h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 text-center theme-transition hover:-translate-y-1.5 hover:border-amber-300/40 hover:shadow-[0_20px_60px_rgba(250,204,21,0.12)]">
                  <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-amber-300/25 bg-white/5 ring-4 ring-amber-300/10">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      sizes="(min-width: 1280px) 18vw, (min-width: 640px) 40vw, 72vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="font-display text-2xl font-semibold tracking-[0.005em] text-white">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-amber-300">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
                      {member.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 rounded-[1.6rem] border border-amber-300/18 bg-black/25 px-6 py-6 text-center">
            <p className="mx-auto max-w-4xl font-display text-xl font-semibold leading-8 tracking-[0.005em] text-white sm:text-2xl">
              {copy.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
