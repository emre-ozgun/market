import { Typography } from "antd";
import React from "react"
import { ReactSVG } from "react-svg";


const basketIcon = require("@assets/icons/basket.svg") as string,

  BasketEmpty = () => {

    return (
      <div className='basket-empty'>
        <ReactSVG src={basketIcon} />
        <Typography.Title level={5}>
          Your basket is empty
        </Typography.Title>
        <Typography.Paragraph>
          Add products to your basket to place an order.
        </Typography.Paragraph>
      </div>
    )
  }

export default BasketEmpty
