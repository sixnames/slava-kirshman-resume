import type { LinksFunction, MetaFunction } from 'remix';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import styles from './tailwind-o.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Resume',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export default function App() {
  return (
    <html lang='en' className='relative h-full'>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='relative h-full min-w-[320px]'>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
