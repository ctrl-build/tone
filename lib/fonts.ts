import localFont from 'next/font/local';

export const gtAmericaExtended = localFont({
  src: [
    {
      path: '../public/assets/fonts/GT America Extended Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/GT America Extended Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-gt-america-extended',
  display: 'swap',
});

export const inter = localFont({
  src: [
    {
      path: '../public/assets/fonts/Inter_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Inter_18pt-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/assets/fonts/Inter_18pt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Inter_18pt-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Inter_18pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const tiemposText = localFont({
  src: [
    {
      path: '../public/assets/fonts/TiemposText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/TiemposText-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/assets/fonts/TiemposText-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/TiemposText-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/TiemposText-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tiempos-text',
  display: 'swap',
});

