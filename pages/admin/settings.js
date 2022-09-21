import React from "react";

// components

import CardSettings from "components/Cards/CardWorker.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";
import CardWorker from "components/Cards/CardWorker.js";
import CardProduct from "components/Cards/CardProduct";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardWorker />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProduct />
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;
