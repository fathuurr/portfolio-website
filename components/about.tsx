'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am an enthusiastic college student who is passionate about becoming a
        skilled <span className="italic">Frontend Engineer</span>
        {'  '} with expertise in React JS. I possess a solid understanding of
        HTML, CSS, and JavaScript, as well as various frameworks such as
        Tailwind, React, and Vue. Throughout my academic journey, I have
        developed several projects that showcase my ability to produce clean,
        well-structured, and easily understandable code.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies. I also enjoy{' '}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
