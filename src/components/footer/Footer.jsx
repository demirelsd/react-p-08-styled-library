import React from "react";
import { FooterBtn, FooterContainer } from "./Footer.style";
import { lightIcon, darkIcon } from "../../helper/iconData";

const Footer = ({ myTheme, setMyTheme }) => {
  const handleClick = () => {
    if (myTheme === "light") {
      setMyTheme("dark");
    } else {
      setMyTheme("light");
    }
  }; 

  return (
    <FooterContainer>
      <FooterBtn onClick={handleClick} title="Switch theme">
        {myTheme === "light" ? <>{lightIcon}</> : <>{darkIcon}</>}
      </FooterBtn>
    </FooterContainer>
  );
};

export default Footer;
