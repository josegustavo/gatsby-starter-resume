import React from 'react';

const Summary = ({ data }) => (
  <section className="py-5 border-b border-neutral-300 md:flex items-center">
    <p className="text-center tracking-wide leading-relaxed md:text-justify md:mx-8 md:text-md">
      {data}
    </p>
  </section>
);

export default Summary;
