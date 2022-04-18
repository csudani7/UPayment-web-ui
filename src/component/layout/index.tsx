import React, { ReactNode } from "react";
import { Layout } from "./Layout";
const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Company", href: "#" },
];
const Index = ({ children }: Layout.Iprops) => {
  return (
    <div>
      <header className="bg-indigo-600 w-full">
        <nav className="mx-auto px-4 sm:px-6 xl:px-64" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <span className="sr-only">Workflow</span>
              <p className="text-white text-xl">UPayments Store</p>
            </div>
            <div className="ml-10 space-x-4">
              <p className="text-white text-xl">Register</p>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Index;
