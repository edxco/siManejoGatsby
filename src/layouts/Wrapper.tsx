import styled from "@emotion/styled";

type IWrapper = {
  isCentered?: boolean;
  isPadded?: boolean;
  noScroll?: boolean;
  main?: boolean;
  autoHeight?: boolean;
  compact?: boolean;
  socialHidden?: boolean;
  isItMobile?: boolean;
  verticalDirection?: boolean;
};

const Wrapper = styled.div((props: IWrapper) => {
  return {
    width: "100%",
    // maxWidth: "1280px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "normal",
    position: "relative",
    flexDirection: props.verticalDirection ? "column" : "row",
    overflowX: props.noScroll ? "hidden" : "auto",
    ...(props.autoHeight ? { height: "auto" } : {}),
    minHeight: `calc(100vh - ${
      props.socialHidden && props.isItMobile
        ? "0px"
        : props.socialHidden && !props.isItMobile
        ? "75px"
        : "113px"
    }`,
  };
});

export default Wrapper;
