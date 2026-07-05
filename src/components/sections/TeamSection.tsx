import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionHead } from '@/components/common/SectionHead';
import { SECTION_IDS } from '@/constants/sections';
import { TEAM_INTRO, TEAM_MEMBERS } from '@/constants/team';
import type { TeamMember } from '@/types';
import { assetUrl } from '@/utils/assets';

export function TeamSection() {
  return (
    <Section id={SECTION_IDS.team} background="pink">
      <Reveal>
        <SectionHead
          eyebrow="team"
          title="Introducing Our Team"
          lead="A세대의 라이프스타일을 혁신하는 청년 창업팀, 이음입니다."
        />
        <p className="mx-auto mt-3 max-w-[760px] text-center text-lg leading-relaxed text-muted">{TEAM_INTRO}</p>
      </Reveal>
      <div className="mx-auto mt-14 flex max-w-[1020px] flex-wrap justify-center gap-8">
        {TEAM_MEMBERS.map((member, index) => (
          <Reveal key={member.name} delay={index * 0.05}>
            <TeamMemberCard member={member} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="w-[140px] text-center sm:w-[168px]">
      <div className="mx-auto mb-4 h-[104px] w-[104px] overflow-hidden rounded-full bg-brand-tint shadow-card sm:h-[132px] sm:w-[132px]">
        <img
          className="h-full w-full object-cover"
          src={assetUrl(member.photo)}
          alt={`${member.role} ${member.name}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="text-[19px] font-bold text-ink">{member.name}</h3>
      <p className="mt-1 text-[15px] font-semibold text-brand">{member.role}</p>
    </article>
  );
}
