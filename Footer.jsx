import React from "react";

function Footer() {
  const today = new Date();

  return (
    <footer>
      {" "}
      <p>Copyright ⓒ {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
