import React from "react";
import "./_search.scss";
import CommonIcons from "../../../assets/icons/CommonIcons";

export default function Search() {
  const fontSize = ".8rem";

  return (
    <div className="search base-filter" style={{ fontSize }}>
      <input type="text" placeholder="Search Attractions “ Ferrari World”" />
      <CommonIcons type="search" width="24px" height="24px" color="gray" />
    </div>
  );
}
