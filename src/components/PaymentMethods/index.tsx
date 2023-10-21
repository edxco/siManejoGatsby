import React from "react";
import { IHomePage } from "../../atoms/types";
import { FlexContainerCenter } from "../../atoms";
import theme from "../../theme";
import { useAPIURL, useTableOrMobile } from "../../hooks";
import styled from "@emotion/styled";
import { webSizes } from "../../constants";

const MainContainer = styled.div(
  ({
    mobileSize,
    tabletSize,
  }: {
    mobileSize: boolean;
    tabletSize: boolean;
  }) => ({
    width: "100%",
    maxWidth: webSizes.maxWidth,
    padding: 0,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    margin: '20px 0',
  })
);

const PaymentMethods = (props: IHomePage) => {
  const [mobileSize, tabletSize] = useTableOrMobile();
  const API_URL = useAPIURL();
  console.log("props payment", props);
  return (
    <FlexContainerCenter
      bgColor={theme.grayScale.light}
    >
      <MainContainer mobileSize={mobileSize} tabletSize={tabletSize}>
        {props.paymentOption?.map((payment) => (
          <img
            src={
              API_URL +
              payment.image.localFile.childImageSharp.gatsbyImageData.images
                .fallback.src
            }
            alt={payment.payment}
            style={{ width: "100px", maxWidth: "60px" }}
          />
        ))}
      </MainContainer>
    </FlexContainerCenter>
  );
};

export default PaymentMethods;
