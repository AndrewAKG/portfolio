import favicons from 'favicons';
import { writeFile, mkdir } from 'node:fs/promises';

const source = 'src/assets/logos/logo-1024.png'; // put your Canva PNG here
const config = {
  path: '/', // href path used in generated HTML
  appName: 'Andrew Ghobrial',
  appDescription: 'Andrew Ghobrial',
  icons: {
    android: true, // 192x192, 512x512
    appleIcon: true, // 180x180
    appleStartup: false,
    coast: false,
    favicons: true, // 16x16, 32x32 + favicon.ico
    windows: false, // mstile-150x150 + browserconfig.xml
    yandex: false,
  },
  manifestMaskable: true, // produce maskable PWA icon
};

const { images, files, html } = await favicons(source, config);
await mkdir('public', { recursive: true });
for (const img of images) await writeFile(`public/${img.name}`, img.contents);
for (const f of files) await writeFile(`public/${f.name}`, f.contents);
await writeFile('public/favicon.html', html.join('\n'));
console.log(
  'Favicons generated to /public. Paste tags from public/favicon.html into <head>.'
);
