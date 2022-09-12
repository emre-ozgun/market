import React from "react"
import { Layout } from "antd"

import GlobalHelmet from "@components/GlobalHelmet";
import { Footer, Header } from "..";



type ContentProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ title, children, className }) => {
  return (
    <Layout className={`fadeIn ${className}`}>
      <Header />
      <Layout.Content className="market-content-container">
        {
          children && (
            <React.Fragment>
              <GlobalHelmet direction="ltr" title={title} language="tr" />
              {children}
            </React.Fragment>
          )
        }
      </Layout.Content>
      <Footer />
    </Layout>
  )
}

export default Content;