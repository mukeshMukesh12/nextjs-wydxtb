import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./page"), {
  ssr: false,
});

import React from "react";

export default function index() {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
