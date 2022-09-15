import React from "react"
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import { Col, Layout, Row, Tooltip, Typography } from "antd";

import { IStore } from "@store/IStore";
import { getBasket } from "@store/lib/selectors";
import { sumByBasket } from "@components/Basket/container";




const marketIcon = require("@assets/images/market.svg") as string,
  basketIcon = require("@assets/icons/basket.svg") as string,

  Header = () => {

    const { basket } = useSelector((state: IStore) => ({
      basket: getBasket(state)
    }));

    return (
      <Layout.Header className="market-header">
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
                <Typography.Paragraph>
                  {
                    `₺${sumByBasket(basket.map((product) => product.price * product.quantity)).toFixed(2)}`
                  }
                </Typography.Paragraph>
              </Typography.Text>
            </Tooltip>
          </Col>
        </Row>
      </Layout.Header>
    )
  }

export default Header;