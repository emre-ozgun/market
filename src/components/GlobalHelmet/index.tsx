import React from "react";
import { Helmet } from "react-helmet";

import { TDirection, TLanguage } from "@base/types";


type GlobalHelmetProps = {
  language: TLanguage;
  direction: TDirection;
  title: string;
  description?: string;
}

/**
 * @param {string} language
 * @param {string} direction
 * @param {string} title
 * @param {string} description
 */

const GlobalHelmet = ({ language, direction, title, description }: GlobalHelmetProps) => {

  return (
    <>
      {/* @ts-ignore */}
      <Helmet htmlAttributes={{ lang: language, dir: direction }}>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{`Getir | ${title}`}</title>
        <link rel="shortcut icon" href="favicon.ico?" type="image/x-icon" />
      </Helmet>
    </>
  )
}

export default GlobalHelmet;