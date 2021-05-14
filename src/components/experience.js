import React from 'react';

const Experience = ({ data, locale }) => (
  <section>
    <h1 className="section-header">
      {locale === 'es' ? 'Experiencia' : 'Experience'}
    </h1>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
            {item.company} | {item.start} -{' '}
            {item.end || (locale === 'es' ? 'ACTUAL' : 'PRESENT')}
          </h3>
          <p className="item-content">{item.description}</p>
        </article>
      ))}
  </section>
);

export default Experience;
