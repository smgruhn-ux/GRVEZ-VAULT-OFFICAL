export interface Release {
  title: string;
  artist: string;
  image: string;
  listenUrl: string;
  lyricsUrl: string;
  creditsUrl: string;
}

export const gizzyGravesReleases: Release[] = [
  { title: 'GRAVEFLOWER', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'TREMOR', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'DULL BLADE', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'DEADWEIGHT ANGEL', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'CASKET BLOOM', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'CHAIN OF COMMANDMENTS', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'STAY DOWN', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'ONE LIGHT LEFT', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'YOU WANT MONSTERS?', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'MY KRYPTONITE', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'UNDERNEATH IT ALL', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'DAMAGE CONTROL', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'SIDEWAYS', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'VELVET VENOM', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'ROTTING FROM THE INSIDE OUT', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'DEVIL IN THE GARDEN', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'HOME', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'MINE', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'BLACK DANDELIONS', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'ROTTING FROM THE INSIDE OUT: VOCAL REDUX', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'SERRATED HALO', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'STILL DEAD', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'PSYCHOSIS', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'STILL OURS', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'DAMAGE CONTROL: VOCAL REDUX', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'CONCRETE HALO', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'DRAGGED BELOW', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'DEAD CIRCUIT MERCY', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'SPIRAL DOWN', artist: 'Gizzy Graves', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'UNDER MY TONGUE', artist: 'Gizzy Graves', image: '/under-my-tongue.jpg', listenUrl: 'https://open.spotify.com/album/4uNlB0ql9fuhJ4DjV1vARL', lyricsUrl: '', creditsUrl: '' },
];

export const gizzyGravesFeatDmonix: Release[] = [
  { title: 'VOODOO BANE', artist: 'Gizzy Graves feat. DMONIX', image: '/voodoo-bane.jpg', listenUrl: 'https://open.spotify.com/album/4hsTeEGzRphu35zOeFoV5l', lyricsUrl: '', creditsUrl: '' },
  { title: 'WARNING SIGN', artist: 'Gizzy Graves feat. DMONIX', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'FOREVERMORE', artist: 'Gizzy Graves feat. DMONIX', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
];

export const dxxdGrvezReleases: Release[] = [
  { title: 'UNDER AND OVER', artist: 'DXXD GRVEZ', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
  { title: 'PRESSURE SICK', artist: 'DXXD GRVEZ', image: '', listenUrl: '', lyricsUrl: '', creditsUrl: '' },
];

export const dxxdGrvezFeatDmonix: Release[] = [];

export const releases = [
  ...gizzyGravesReleases,
  ...gizzyGravesFeatDmonix,
  ...dxxdGrvezReleases,
  ...dxxdGrvezFeatDmonix,
];
