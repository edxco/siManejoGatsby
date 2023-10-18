import React, { MutableRefObject, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        apiURL
        fromURL
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(query);
  return data.site.siteMetadata.fromURL ? data.site.siteMetadata.apiURL : '';
};
