import React from 'react';
import Contact from './contact';

const Header = ({ name, role, contacts }) => (
  <header className="border-b border-neutral-300 pb-2 sm:flex md:flex-row-reverse md:flex items-center justify-between">
    <div className="md:w-2/3 md:pl-0 px-12 lg:px-8">
      <h1 className="text-4xl text-center sm:text-left md:text-center font-bold tracking-wide leading-tight">
        {name}
      </h1>
      <h2 className="font-light text-center sm:text-left md:text-center text-lg md:text-2xl leading-relaxed tracking-widest">
        {role}
      </h2>
    </div>
    <div className="md:w-1/3 sm:pl-4 md:pl-0 lg:pr-8 sm:border-l md:border-l-0 md:border-r border-neutral-300 md:border-0 overflow-ellipsis overflow-hidden">
      {contacts &&
        Object.keys(contacts).map((key) => (
          <Contact key={key} field={key} value={contacts[key]} />
        ))}
    </div>
  </header>
);

export default Header;
