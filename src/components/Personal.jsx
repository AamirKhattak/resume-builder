import React from "react";

export default function Personal({ personal }) {
  return (
    <div className="w-full">
      {/* <img
        className="w-20 rounded-3xl absolute float-right"
        alt={personal.name}
        src={personal.thumbnail}
      /> */}
      <div className="text-4xl font-bold flex">
        <p className="inline-block">{personal.firstName}</p>
        <p className="text-blue-600 inline-block ml-2">{personal.lastName}</p>
      </div>
      <div className="flex flex-row text-md mt-2">
        <p><span className="font-bold">Cell No.</span> {personal.contactNo}</p>
        <span className="mx-2">•</span>
        <p><span className="font-bold">Email</span> {personal.email}</p>
      </div>
      <div className="flex flex-row text-md mt-0">
        <h2>{personal.linkedIn}</h2>
        <span className="mx-2">•</span>
        <h2>{personal.Github}</h2>
      </div>
      <h2>{personal.about}</h2>
    </div>
  );
}
