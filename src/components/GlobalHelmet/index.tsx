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
 * @param {string} language - defaultSystemConfig'e setlenen language parametresini beklemektedir.
 * @param {string} direction - defaultSystemConfig'e setlenen direction parametresini beklemektedir.
 * @param {string} title - Oluşturulan sayfaların title keylerini bekler.
 * @param {string} description - Oluştrulan sayfaların var ise açıklamalarını bekler.
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