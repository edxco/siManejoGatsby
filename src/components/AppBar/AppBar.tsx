import React from "react";
import SocialBar from "./SocialBar";
// import NavBar from "./NavBar";
import { useOrientation, useViewPortSize } from "../../hooks";
import { useMediaQuery } from "react-responsive";

export default ({
  hideSocialBar,
  hideNavBar,
}: {
  hideSocialBar: boolean;
  hideNavBar: boolean;
}) => {
  const [mobileSize, tabletSize, isMobileFix] = useViewPortSize();
  const { isRotated } = useOrientation();

  return (
    <div style={{ display: hideNavBar && isRotated ? "none" : "block" }}>
      <SocialBar hide={hideSocialBar} isTabletOrMobile={isMobileFix} />
      {/* <NavBar hidden={hideSocialBar} isTabletOrMobile={isMobileFix} /> */}
    </div>
  );
};
