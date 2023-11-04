import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Details() {
  const router = useRouter();

  return (
    <div>
      <Link href={"/dashboard"}>Dashboard</Link>
      <p>{router.query.Details}</p>
      <button onClick={() => router.back()}>back</button>
      <br />
      Details
    </div>
  );
}

export default Details;


