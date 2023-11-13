import React from "react";
import { HTMLMarkDown, MaxWidthContainer, SubtitleAndTitle } from "../../atoms";
import { useTableOrMobile } from "../../hooks";

interface IInfoSchoolProps {
  title: string;
  description: string;
  city: string;
}

const InfoSchoolSection = (props: IInfoSchoolProps) => {
  const [mobileSize, tabletSize] = useTableOrMobile();

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <MaxWidthContainer isMobile={mobileSize || tabletSize}>
        <SubtitleAndTitle
          title={`En ${props.city}`}
          subtitle={props.title}
          margin="20px 0"
        />
        <HTMLMarkDown description={props.description} />
      </MaxWidthContainer>
    </div>
  );
};

export default InfoSchoolSection;