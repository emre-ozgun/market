import React from "react"
import { ReactSVG } from "react-svg";
import { Col, Layout, Row, Tooltip, Typography } from "antd";

const marketIcon = require("@assets/images/market.svg") as string,
  basketIcon = require("@assets/icons/basket.svg") as string;

const Header = () => {
  return (
    <Layout.Header className="getir-header">
      <Row>
        <Col xs={24} md={8}>
          Getir
        </Col>
        <Col xs={24} md={8}>
          <ReactSVG src={marketIcon} />
        </Col>
        <Col xs={24} md={8}>
          <Tooltip placement="left" title="Basket">
            <Typography.Text>
              <ReactSVG src={basketIcon} />
              <Typography.Paragraph>₺ 39,97</Typography.Paragraph>
            </Typography.Text>
          </Tooltip>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header;