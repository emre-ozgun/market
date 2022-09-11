import React from "react"
import { Button, Card } from "antd";


const ProductCoverBG = () => <div className="product-item-cover"></div>,

  ProductItem = () => {

    return (
      <Card
        className="getir-product-item"
        cover={
          <ProductCoverBG />
        }
        actions={[
          <>
            <Button htmlType="button" type="primary" block>Add</Button>
          </>
        ]}
      >
        <Card.Meta
          title="₺ 14,99"
          description="Gorgeous Office Mug"
        />
      </Card>
    )
  }

export default ProductItem;