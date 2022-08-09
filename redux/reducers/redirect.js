import React from "react";
import { useRouter } from "next/router";
export default function redirect() {
  let r = useRouter();
  r.push("/");
  return <div></div>;
}
