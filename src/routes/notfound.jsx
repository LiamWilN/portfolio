import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-4 bg-neutral-900">
      <h1 className="text-neutral-100 font-extrabold text-7xl">
        {error.statusText || error.status}
      </h1>
      <span className="text-neutral-100">{error.data}</span>
      <Link
        to="/"
        className="rounded-lg shadow-lg px-6 py-4 bg-slate-50 text-neutral-900 font-bold"
      >
        Back to Portfolio
      </Link>
    </div>
  );
};

export default NotFound;
