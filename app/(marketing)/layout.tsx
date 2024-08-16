import React, { ReactNode } from 'react';
import { Navbar } from "./_components/navbar"
import { Footer } from "./_components/footer"

type MarketingLayoutProps = {
    children: ReactNode;
};

const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
    return (
      <div className='h-full bg-slate-100'>
        <Navbar />
        <main className=' pt-40 pb-20 justify-around padding- bg-slate-100'>
            {children}
        </main>
        <Footer />
      </div>
    );
};

export default MarketingLayout ;