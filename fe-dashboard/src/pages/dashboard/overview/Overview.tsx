import React from "react";
import Link from "next/link";
import { useState } from "react";
import Details from "../details/[Details]";

function Overview() {
  const [change, setchange] = useState(false);

  const changeView = () => {
    setchange(true);
  };
  var raw: React.ReactNode;
  if (change) {
    raw = <Details />;
  } else {
    raw = (
      <>
        <p> Overview</p>
        <br />
      </>
    );
  }

  return (
    <div>
      {raw}
      <Link href={"/dashboard/details/hello"}>Details</Link>
      <br />
      <button onClick={changeView}>change</button>
    </div>
  );
}

export default Overview;
