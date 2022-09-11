import React from "react"
import { Button, Card } from "antd";



const ProductCover = React.lazy(() => import("./Product.Cover")),

  ProductItem = () => {

    const addToBasket = () => {
      console.log("ADD IS WORK");
    }

    return (
      <Card
        className="getir-product-item"
        cover={<ProductCover />}
        actions={[<Button key="add-to-basket" htmlType="button" type="primary" block onClick={addToBasket}>Add</Button>]}
      >
        <Card.Meta title="₺ 14,99" description="Gorgeous Office Mug" />
      </Card>
    )
  }

export default ProductItem;