import React from "react";
import styled from "@emotion/styled";
import { Typography, Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useTableOrMobile } from "../../hooks";
import { ILink } from "../../components/Footer";
import { CustomAccordion, CustomLink } from "..";

const MainContainer = styled.div(() => ({
  maxWidth: "300px",
  minWidth: "300px",
  margin: 0,
  padding: 0,
}));

const LinkContainer = styled.div(({ mobileSize }: { mobileSize: boolean }) => ({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  marginLeft: mobileSize ? 0 : "10px",
  marginBottom: mobileSize ? "10px" : 0,
}));

interface IFooterList {
  title: string;
  listData: Array<ILink>;
}

const LinkContainerJSX = ({
  listData,
  color,
  mobileSize,
  hoverColor,
}: {
  listData: Array<ILink>;
  color: string;
  mobileSize: boolean;
  hoverColor: string;
}) => (
  <LinkContainer mobileSize={mobileSize}>
    {listData.map((link) => (
      <CustomLink
            variant="body1"
            fontWeight={400}
            align="left"
            underline="none"
            color={color}
            href={link.slug} 
            hoverColor={hoverColor}
            sx={{mb: 2}}
        >
        {link.section}
      </CustomLink>
    ))}
  </LinkContainer>
);

const FooterList = (props: IFooterList) => {
  const theme = useTheme();
  const [mobileSize, tabletSize] = useTableOrMobile();

  return (
    <MainContainer>
      {mobileSize || tabletSize ? (
        <CustomAccordion title={props.title}>
          <LinkContainerJSX
            color={theme.grayScale.light}
            hoverColor={theme.siManejoSecondary.main}
            listData={props.listData}
            mobileSize={mobileSize || tabletSize}
          />
        </CustomAccordion>
      ) : (
        <>
          <Typography
            variant="h6"
            fontWeight={900}
            align="left"
            color={"white"}
            margin={"20px 10px 10px 10px"}
          >
            {props.title}
          </Typography>
          <LinkContainerJSX
            color={theme.grayScale.light}
            listData={props.listData}
            mobileSize={mobileSize || tabletSize}
          />
        </>
      )}
    </MainContainer>
  );
};

export default FooterList;
