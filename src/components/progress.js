import React from 'react';

const Progress = ({ percent, name }) => (
  <div className="shadow w-full bg-neutral-200 rounded overflow-hidden mb-2">
    <div
      className="text-sm py-1 bg-neutral-500 text-gray-50 dark:text-gray-200 font-light"
      style={{ width: `${percent}%` }}
    >
      <span className="pl-2">{name}</span>
    </div>
  </div>
);

export default Progress;
