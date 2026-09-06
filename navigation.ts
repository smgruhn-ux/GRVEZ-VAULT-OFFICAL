export interface NavItem {
  path: string;
  label: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { path: '/', label: 'Home' },
  {
    path: '/music',
    label: 'Music',
    children: [
      { path: '/about/gizzy-graves', label: 'Gizzy Graves' },
      { path: '/dxxd-grvez', label: 'DXXD GRVEZ' },
      { path: '/music', label: 'Releases' },
    ]
  },
  {
    path: '/archive',
    label: 'Archive',
    children: [
      { path: '/archive', label: 'Overview' },
      { path: '/manuscripts', label: 'Manuscripts' },
      { path: '/media', label: 'Visual Documentation' },
    ]
  },
  { path: '/relational-continuity', label: 'Continuity' },
  { path: '/films', label: 'Films & Media' },
  { path: '/vaultline', label: 'Vaultline' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];
