import React from "react"
import { Button, Card } from "antd";



type ProductItemProps = {
  price: number;
  name: string;
}

const ProductCover = React.lazy(() => import("./Product.Cover")),

  ProductItem = ({ price, name }: ProductItemProps) => {

    const addToBasket = () => {
      console.log("ADD IS WORK");
    }

    return (
      <Card
        className="getir-product-item"
        cover={<ProductCover />}
        actions={[<Button key="add-to-basket" htmlType="button" type="primary" block onClick={addToBasket}>Add</Button>]}
      >
        <Card.Meta title={`₺ ${price}`} description={name} />
      </Card>
    )
  }

export default ProductItem;