import loader from "../../icons/loader.svg";
import React from "react";

export default function Loader() {
  return (
    <div className="w100 flex fjc-c faic pd10">
      <img src={ loader } alt="loader" />
    </div>
  )
}