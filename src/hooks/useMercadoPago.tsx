import React, { MutableRefObject, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        mpPublicKey
        mpAccessToken
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(query);
  const MercadoPago = {mpPublicKey: data.site.siteMetadata.mpPublicKey, mpAccessToken: data.site.siteMetadata.mpAccessToken};
  return MercadoPago
};