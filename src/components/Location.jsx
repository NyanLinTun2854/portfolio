import React from "react";
import Email from "./Email";

const Location = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-0 gap-x-8">
      <Email />
      <div className="w-full">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=16.879789,%2096.099462&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          className="w-full h-[335px] p-2 shadow-map"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
