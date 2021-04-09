import React from "react";

import "./Footer.css";

let date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Wulf Developments {year}</p>
      <div className="iconAttribute">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
