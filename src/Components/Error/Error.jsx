import React from 'react';
import { Alert } from "@material-tailwind/react";
function Error() {
  return (
    <>
    <div className="grid grid-cols-1 h-screen items-center justify-items-center">
      <div className="w-[96]">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
    {/* icon={<Icon />} */}
      <Alert color="red" className="text-xl font-inter font-bold">
      Sorry no products match your filter search ... Clear the filter and
          try again 😀.</Alert>
      </div>
      </div>
    </>
  );
}

export default Error;
