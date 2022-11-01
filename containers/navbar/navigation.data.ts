import { INavbar } from '@/interfaces/i-navbar';

export const navigations: INavbar[] = [
  {
    id: 1,
    path: '/',
    label: 'Home',
    singlePage: false,
  },
  {
    id: 2,
    path: 'metamorfozy',
    label: 'Metamorfozy',
    singlePage: true,
  },
  {
    id: 3,
    path: 'doswiadczenie',
    label: 'Doświadczenie',
    singlePage: true,
  },
  {
    id: 4,
    path: 'opinie',
    label: 'Opinie',
    singlePage: true,
  },
  {
    id: 5,
    path: '/blog',
    label: 'Porady',
    singlePage: false,
  },
  {
    id: 6,
    path: 'kontakt',
    label: 'Kontakt',
    singlePage: true,
  },
];

export const navBarIcons = [
  {
    id: 1,
    Icon: null,
    href: '/',
  },
  {
    id: 2,
    Icon: null,
    href: '/',
  },
];
