import './globals.css';

export const metadata = {
  title: 'Guardería Mi Bendición',
  description: 'A nurturing home childcare program in Mason, Ohio.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
