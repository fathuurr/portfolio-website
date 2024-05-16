import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/threads-clone.png';
import rmtdevImg from '@/public/luxspace.png';
import wordanalyticsImg from '@/public/topupgame.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Vocational High School 21 Jakarta',
    location: 'Jakarta, Indonesia',
    description:
      'I graduated from a Vocational High School majoring in Software Engineering for 3 years. Since school, I have been involved in various activities, such as winning the third prize in the IT Software competition at the Central Jakarta II regional level.',
    icon: React.createElement(LuGraduationCap),
    date: '2018 - 2021',
  },
  {
    title: 'Computer and Information Technology Education',
    location: 'Jakarta, Indonesia',
    description:
      'Currently, I am studying at Jakarta State of University. During my studies, I am engaged in various activities, from learning about leadership by participating in organizations such as the Student Executive Board, to keeping busy with learning about the latest technologies through creating several projects.',
    icon: React.createElement(LuGraduationCap),
    date: '2021 - Present',
  },
  {
    title: 'Frontend Engineer',
    location: 'Jakarta, Indonesia',
    description:
      'I used to work at PT. Cakra Radha Mustika where, in this role, I learned a lot about frontend tech stack such as Next.js, Axios, Typescript, and React Formik for form validation. During those 1 years, my project was building a Custom Relationship Manager (CRM) website.',
    icon: React.createElement(FaReact),
    date: 'March 2022 - June 2023',
  },
  {
    title: 'Software Developer',
    location: 'Jakarta, Indonesia',
    description:
      'In this position, I worked as an intern at PT. Cakra Wijaya Solusi. During the internship, I did many things such as building a cost-estimator application using React.js technology and also developing a company profile website using Next.js.',
    icon: React.createElement(FaReact),
    date: 'January 2024 - May 2024',
  },
] as const;

export const projectsData = [
  {
    title: 'Mention',
    description:
      'This is a Mention feature, where in the application I developed, it is similar to the currently trending Meta application, Threads.',
    tags: ['Typescript', 'Next.js 13', 'MongoDB', 'Tailwind', 'Clerk'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'Luxspace',
    description:
      'The website offers elegant furniture for household needs and creates rooms that are visually pleasing.',
    tags: ['React', 'Javascript', 'Tailwind', 'Redux', 'Axios'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Top Up Game Store',
    description:
      'The website provides game top-up services to facilitate the fast and reliable needs of gamers.',
    tags: [
      'Typescript',
      'Next.js',
      'MongoDB',
      'Express.js',
      'Tailwind',
      'Axios',
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Express.js',
] as const;
