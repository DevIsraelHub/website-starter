import React from 'react';

const Heading = ({ heading, classNames, text }: {
  heading?: string;
  classNames?: string;
  text?: string;
}) => {

  return (
    <div className={`sapce-y-4 text-center w-full md:w-[500px] lg:w-[680px] mx-auto mb-20 ${classNames}`}>
      <h1 className="capitalize text-3xl md:text-4xl lg:text-5xl font-bold text-brandText">
        {heading}
      </h1>
      {text && (
        <p className="text-brandTextDull text-sm mt-6 lg:text-md">
          {text}
        </p>
      )
      }
    </div>
  )
}

export default Heading
