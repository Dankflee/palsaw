import React, { ReactNode } from 'react';

type MarketingLayoutProps = {
    children: ReactNode;
};

const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
    return (
      <div className='h-full bg-slate-100'>
        <main className='pt-40 pb-20 bg-slate-100'>
            {children}
        </main>
      </div>
    );
};

export default MarketingLayout ;