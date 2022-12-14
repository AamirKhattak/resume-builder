import React from "react";

export default function Personal({ personal }) {
  return (
    <div className="w-full border-2 border-red-500">
      <img
        className="w-20 rounded-3xl absolute"
        alt={personal.name}
        src={personal.thumbnail}
      />
      <h2>{personal.firstName + " " + personal.lastName}</h2>
      <h2>{personal.contactNo}</h2>
      <h2>{personal.email}</h2>
      <h2>{personal.linkedIn}</h2>
      <h2>{personal.Github}</h2>
      <h2>{personal.about}</h2>
    </div>
  );
}
