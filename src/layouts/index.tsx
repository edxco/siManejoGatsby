import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import theme from "../theme";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import "./index.css";
import Wrapper from "./Wrapper";
import { useViewPortSize } from "../hooks";
import { AppBar } from "../components/AppBar";

interface LayoutProviderProps {
  seo: boolean;
  children: any;
  locationSearch?: string;
  titleExt?: string;
  productCategory?: string;
  redirectNewUrl?: string;
}

const LayoutProvider = (props: LayoutProviderProps) => {
  const [hideSocialBar, setHideSocialBar] = useState(false);
  const [mobileSize, tabletSize, isMobileFix] = useViewPortSize();

  const onScroll = (e) => {
    if (e.target.scrollTop >= 38) {
      setHideSocialBar(true);
    } else {
      setHideSocialBar(false);
    }
  };

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <AppBar
            hideNavBar={isMobileFix && hideSocialBar}
            hideSocialBar={hideSocialBar}
          />
          <Wrapper socialHidden={hideSocialBar} onScroll={onScroll} main={true} verticalDirection noScroll>
            {props.children}
          </Wrapper>
        </LocalizationProvider>
      </ThemeProvider>
  );
};

export default LayoutProvider;
