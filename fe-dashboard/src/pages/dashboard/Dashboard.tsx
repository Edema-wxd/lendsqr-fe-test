import React from "react";
import { DashboardLayout } from "./layout";
import Overview from "./overview/Overview";
import Details from "./details";
import Link from "next/link";
/**import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";*/

function Dashboard() {
  var wwe: string = "yellow";
  return (
    <DashboardLayout>
      <Link href={"/dashboard/overview"}>Overview</Link>
      <Overview />
      <Details />
      <Link href={`/dashboard/details/${wwe}`}>{wwe}</Link>
    </DashboardLayout>
  );
}

export default Dashboard;
