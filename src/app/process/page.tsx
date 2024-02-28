import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import designPad from '@/images/designing.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discovery and Planning" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, embedding ourselves in their every day operations to understand
          how can we grow thier business.
        </p>
        <p>
          In this initial phase, we work closely with you to comprehend your
          <strong className="font-semibold text-neutral-950">
            goals, challenges, and expectations.
          </strong>{' '}
          Through in-depth consultations, we define project scope, objectives,
          and timelines. This collaborative process lays the foundation for a
          strategic development roadmap.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Study of Competition</TagListItem>
      </TagList>
    </Section>
  )
}
function DesignAndPrototyping() {
  return (
    <Section title="Design and Prototyping" image={{ src: designPad }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our{' '}
          <strong className="font-semibold text-neutral-950">
            talented design
          </strong>{' '}
          team transforms ideas into visual concepts. We craft intuitive user
          interfaces and design prototypes that bring your vision to life. This
          phase allows for
          <strong className="font-semibold text-neutral-950">
            {' '}
            feedback and refinement
          </strong>
          , ensuring the final design aligns perfectly with your expectations.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>User Experience Research</TagListItem>
        <TagListItem>User Interface Research</TagListItem>
        <TagListItem>UI/UX Designing</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based off of the discovery phase, we develop a comprehensive roadmap
          for each product and start working towards delivery.
        </p>
        <p>
          The magic begins as our experienced developers turn designs into
          functional code. Leveraging the latest technologies, we build{' '}
          <strong className="font-semibold text-neutral-950">
            robust, scalable, and secure solutions
          </strong>
          . Continuous communication keeps you informed, and our iterative
          approach allows for flexibility in adapting to evolving project
          requirements.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Development</TagListItem>
        <TagListItem>Backend Engineering</TagListItem>
        <TagListItem>Database Engineering</TagListItem>
      </TagList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          At{' '}
          <strong className="font-semibold text-neutral-950">LogicLeaps</strong>
          , we take pride in delivering projects seamlessly, guided by an agile
          methodology that prioritizes flexibility and adaptability.{' '}
          <strong className="font-semibold text-neutral-950">
            Transparent communication is at the forefront of our approach
          </strong>
          , ensuring you are well-informed at every stage of the project. Our
          milestone-driven process, coupled with dedicated project management,
          guarantees that your{' '}
          <strong className="font-semibold text-neutral-950">vision</strong> is
          transformed into reality with precision and efficiency. From concept
          to completion, our commitment is to provide you with a development
          experience that is not just successful but a true realization of your
          aspirations.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Prior to deployment, rigorous testing is conducted to identify and
          address any potential issues. Our quality assurance team ensures that
          the solution meets the highest standards for functionality,
          performance, and security. We value delivering a flawless product that
          exceeds expectations.
        </ListItem>
        <ListItem title="Infrastructure">
          Once testing is successful, we deploy the solution in your
          environment. Our experts manage the seamless integration of the
          developed project into your systems, minimizing disruptions and
          ensuring a smooth transition.
        </ListItem>
        <ListItem title="Support">
          Technology evolves, and so do we. Our process includes a commitment to
          continuous improvement. We gather feedback post-launch and implement
          updates or enhancements to keep your tech project at the forefront of
          innovation.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          Our commitment to excellence is underscored by a strategic approach to
          technology adoption. While we actively monitor emerging trends and
          technologies. This deliberate choice aligns with our core values,
          emphasizing stability, reliability, and a deep understanding of the
          technologies we employ. We believe that by staying true to these
          principles, we not only ensure a high standard of performance but also
          uphold a commitment to delivering dependable and secure solutions to
          our clients.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            At LogicLeaps, meticulousness is ingrained in our work ethos. We
            approach every task with careful attention to detail, ensuring
            precision and accuracy in every deliverable.
          </GridListItem>
          <GridListItem title="Efficient">
            Efficiency is at the core of our operations. We optimize processes,
            streamline workflows, and leverage cutting-edge tools to deliver
            results promptly without compromising quality.
          </GridListItem>
          <GridListItem title="Adaptable">
            In a dynamic and ever-evolving landscape, adaptability is our
            strength. We embrace change, swiftly adjust to evolving
            requirements, and proactively seek innovative solutions.
          </GridListItem>
          <GridListItem title="Honest">
            Honesty is the foundation of our client relationships. We prioritize
            transparency in communication, providing clear insights into project
            progress, challenges, and outcomes. Our commitment to honesty
            fosters trust, creating a collaborative environment where clients
            can rely on us for integrity in all interactions.
          </GridListItem>
          <GridListItem title="Loyalty">
            Loyalty is not just a virtue but a guiding principle in our client
            partnerships. We are steadfast in our dedication to client success,
            going above and beyond to meet expectations.
          </GridListItem>
          <GridListItem title="Innovative">
            Innovation fuels our approach to problem-solving. We consistently
            seek creative and forward-thinking solutions to address challenges
            and optimize processes. Our team embraces a culture of continuous
            improvement, ensuring that we stay at the forefront of technological
            advancements.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          At Logic Leaps, our core philosophy centers on efficiency and optimal
          resource utilization. We are dedicated to maximizing our efforts to
          deliver unparalleled value to our clients. By prioritizing efficiency,
          we ensure that every service and solution we provide reflects the
          highest standard of value, solidifying our commitment to client
          success.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <DesignAndPrototyping />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
