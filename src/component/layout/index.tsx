import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from './Layout';

const PageLayout = ({ children }: Layout.Iprops) => {
  const history = useHistory();

  return (
    <div>
      <header className="w-full bg-indigo-600">
        <nav className="px-4 mx-auto sm:px-6 xl:px-16" aria-label="Top">
          <div className="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
            <div className="flex items-center cursor-pointer" onClick={() => history.push('/')}>
              <p className="text-xl text-white">UPayments Store</p>
            </div>
            <div className="ml-10 space-x-4">
              <p className="text-xl text-white">Register</p>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default PageLayout;
