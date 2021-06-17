import React from 'react';

const Projects = ({ data, locale }) => (
  <section>
    <h1 className="section-header">
      {locale === 'es' ? 'Proyectos' : 'Projects'}
    </h1>
    {data.map((item) => (
      <article className="my-5" key={item.name}>
        <h2 className="item-header">{item.name}</h2>
        <h3 className="item-sub">{item.company}</h3>
        <p className="pt-2 text-justify">{item.description}</p>
        {item.link && (
          <div className="flex justify-end">
            <a
              className="btn print:hidden"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {locale === 'es' ? 'Visitar Proyecto' : 'Visit Project'}
            </a>
          </div>
        )}
      </article>
    ))}
  </section>
);

export default Projects;
