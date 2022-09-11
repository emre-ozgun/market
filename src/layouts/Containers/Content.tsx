import React from "react"
import { Layout } from "antd"

import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import GlobalHelmet from "@components/GlobalHelmet";



type ContentProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ title, children, className }) => {
  return (
    <Layout className={`fadeIn ${className}`}>
      <Header />
      <Layout.Content className="getir-content-container">
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