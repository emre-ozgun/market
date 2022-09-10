import React from "react"
import { ReactSVG } from "react-svg";
import { Col, Layout, Row } from "antd";

const Basket = React.lazy(() => import("./Basket")),
  marketIcon = require("@assets/images/market.svg") as string;

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
          <Basket />
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header;