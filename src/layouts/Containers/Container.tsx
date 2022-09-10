import React from "react"
import { Layout } from "antd"
import GlobalHelmet from "@components/GlobalHelmet";


type ContainerProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ title, children, className }) => {
  return (
    <Layout className={`fadeIn ${className}`}>
      <Layout.Content>
        {
          children && (
            <React.Fragment>
              <GlobalHelmet direction="ltr" title={title} language="tr" />
              {children}
            </React.Fragment>
          )
        }
      </Layout.Content>
    </Layout>
  )
}

export default Container;