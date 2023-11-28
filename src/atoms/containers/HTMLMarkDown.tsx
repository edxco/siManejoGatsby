import React from "react";
import { transformOembedToIframe } from "../../helpers";
import "./HTMLMarkDown.css";
import { BaseCenterContainer } from "..";
import styled from "@emotion/styled";

const TitleContainer = styled.div(() => ({
    margin: "90px 0",
  }));

const HTMLMarkDown = ({ description }: { description: string }) => {
  return (
    <div className="markdown-body">
      <div
        dangerouslySetInnerHTML={{
          __html: transformOembedToIframe(description),
        }}
      />
    </div>
  );
};

export default HTMLMarkDown;
