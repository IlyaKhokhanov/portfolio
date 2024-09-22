import { ReactNode } from 'react';

import { Footer, Header } from '@/components';

type LayoutProps = {
  params: { locale: string };
  children: ReactNode;
};

const RootLayout = ({ params, children }: LayoutProps) => {
  return (
    <>
      <Header locale={params.locale} />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
