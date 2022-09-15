// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import React from "react"
import { Col, Row, Typography } from "antd";


type PageProps = {
  title: string;
  className: string;
  children: React.ReactNode;
}

const Page = ({ title, children, className }: PageProps) => {

  return (
    <Row className={className}>
      <Col xs={24} md={24}>
        <Col xs={24} md={24}>
          <Typography.Title level={4}>{title}</Typography.Title>
        </Col>
        <Col xs={24} md={24} className="page-inner">
          {children}
        </Col>
      </Col>
    </Row>
  )
}

export default Page;