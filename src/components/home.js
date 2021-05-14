import React from 'react';
import {
  Education,
  Experience,
  Footer,
  Header,
  List,
  Projects,
  Seo,
  Skills,
  Summary,
} from '.';

const Home = ({ resume, locale }) => {
  const title = locale === 'es' ? 'CV' : 'Resume';
  return (
    <main className="antialiased text-neutral-500 dark:text-gray-200 bg-gray-50 dark:bg-dark-700 print:bg-none min-h-screen sm:p-5 print:p-0">
      <Seo title={title} locale={locale} />
      <div className="container max-w-5xl print:w-full print:max-w-full shadow-2xl print:shadow-none mx-auto shadow bg-white dark:bg-dark-900 py-5 print:py-0 px-5 sm:px-10 print:px-0">
        <Header
          contacts={resume.contact}
          name={resume.fullname}
          role={resume.role}
          locale={locale}
        />
        <Summary data={resume.summary} />
        <div className="border-b print:border-none border-neutral-300 pb-2 my-5 md:flex flex-row-reverse">
          <div className="md:w-2/3 md:pl-4 lg:pl-8 md:border-l md:border-neutral-300">
            {resume.experience && (
              <Experience data={resume.experience} locale={locale} />
            )}
            {resume.projects && (
              <Projects data={resume.projects} locale={locale} />
            )}
          </div>
          <div className="md:w-1/3 md:pr-4 lg:pr-8">
            {resume.skills && <Skills data={resume.skills} locale={locale} />}
            {resume.education && (
              <Education data={resume.education} locale={locale} />
            )}
            {resume.sidebar &&
              resume.sidebar.map((item) => (
                <List key={`${item.title}-side`} data={item} />
              ))}
          </div>
        </div>
        <Footer social={resume.social} locale={locale} />
      </div>
    </main>
  );
};

export default Home;
