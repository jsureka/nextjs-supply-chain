/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import SideBar from "../components/Sidebar/Sidebar";
import CardPageVisits from "components/Cards/CardPageVisits";
import CardSocialTraffic from "components/Cards/CardSocialTraffic";
import CardBarChart from "components/Cards/CardBarChart";
import CardLineChart from "components/Cards/CardLineChart";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import HeaderStats from "components/Headers/HeaderStats";
import CardSettings from "components/Cards/CardWorker";
import CardProduct from "components/Cards/CardProduct";

export default function Index() {
  return (
    <>
      <SideBar></SideBar>
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
              <CardSettings />
            </div>
            <div className="w-full xl:w-6/12 px-4">
              <CardProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
