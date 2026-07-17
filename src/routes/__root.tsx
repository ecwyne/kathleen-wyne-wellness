import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';

import appCss from '../styles.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Kathleen Wyne Wellness | Functional Wellness Coach',
      },
      {
        name: 'description',
        content:
          'Compassionate functional wellness coaching for women, available online and in person in Northern California.',
      },
      {
        name: 'theme-color',
        content: '#758578',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
