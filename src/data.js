// images
import Logo from '../src/assets/img/header/logo.svg';
import ResistanceImg from '../src/assets/img/workouts/resistance.png';
import BoxingImg from '../src/assets/img/workouts/boxing.png';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import FitnessImg from '../src/assets/img/workouts/fitness.png';
import BattleRopeImg from '../src/assets/img/workouts/battle-rope.png';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/join/woman.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
  logo: Logo,
  btnLoginText: 'Login',
  btnSignupText: 'Logout',
};

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/' },
  { name: 'Allenamenti', href: '/' },
  { name: 'Prezzi', href: '/' },
  { name: 'Community', href: '/' },
  { name: 'FAQ', href: '/' },
];

export const banner = {
  titlePart1: 'Ottieni la parte migliore della tua giornata',
  titlePart2: '– la troviqui',
  subtitle:
    'Offriamo una forma fisica perfetta in una struttura divertente, amichevole e sicura',
  textBtn: 'Iscriviti',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'La nostra Missione',
  subtitle1:
    'Ci distinguiamo per la nostra insuperabile atmosfera motivante, il personale competente e le migliori attrezzature per esercizi che aiutano i nostri membri nel raggiungere i loro obiettivi di fitness individuali',
  subtitle2:
    'La forza della nostra sincera identità viene utilizzata per ispirare ogni persona che entra nelle nostre palestre a migliorare se stessa',
  link: 'Iscriviti',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Piano allenamenti',
  programs: [
    {
      image: ResistanceImg,
      name: 'Resistenza',
    },
    {
      image: BoxingImg,
      name: 'Boxing',
    },
    {
      image: BodyPumpImg,
      name: 'Per il corpo',
    },
    {
      image: YogaImg,
      name: 'Yoga',
    },
    {
      image: FullBodyImg,
      name: 'Full Body',
    },
    {
      image: FitnessImg,
      name: 'Fitness',
    },
    {
      image: BattleRopeImg,
      name: 'Battle Rope',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Piano tariffario',
  plans: [
    {
      name: 'Basic',
      price: '20',
      list: [
        { name: 'accesso illimitato alla palestra' },
        { name: '1 programma di formazione' },
        { name: 'consulenza fitness gratuita' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      price: '35',
      list: [
        { name: 'accesso illimitato alla palestra' },
        { name: '5 programmi di formazione' },
        { name: 'consulenza fitness gratuita' },
        { name: 'personal trainer' },
      ],
      delay: 800,
    },
    {
      name: 'Elite',
      price: '49',
      list: [
        { name: 'accesso illimitato alla palestra' },
        { name: 'tutti i programmi di formazione' },
        { name: 'consulenza fitness gratuita' },
        { name: 'personal trainer' },
        { name: '50% di sconto sulle bevande' },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Community',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Mark A.',
      message:
        '“Ottima location, ottimi prezzi e persone fantastiche e disponibili. Cosa volere di più?”',
    },
    {
      image: CommunityImg2,
      name: 'Lauren K.',
      message:
        '“Gymme mi ha cambiato la vita. Non solo fisicamente ma anche mentalmente. Sono una madre migliore e un essere umano migliore grazie a questa palestra”',
    },
    {
      image: CommunityImg3,
      name: 'Jhon D.',
      message:
        '“Adoro questi allenamenti! I trainers sono competenti e motivanti. Gymme è meraviglioso!”',
    },
    {
      image: CommunityImg4,
      name: 'Anne R.',
      message:
        '“Adoro questi allenamenti! I trainers sono competenti e motivanti. Gymme è meraviglioso!”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'FAQ',
  accordions: [
    {
      question: 'Come posso prenotare una lezione di allenamento?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Posso pagare in contanti la mia iscrizione?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Che età devo avere per iscrivermi?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Ci sono degli armadietti?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Come posso annullare la mia iscrizione?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Trovo acqua disponibile in palestra?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Vuoi unirti a noi e divertirti?',
  subtitle:
    'Ti terremo aggiornato sulle cose che devi sapere su Gymme. Niente di più, niente di meno.',
  btnText: 'Iscriviti',
};

export const footer = {
  logo: Logo,
  copyrightText: 'All rights reserved. Pixelpro 2023.',
};
