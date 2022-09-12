import React from "react"
import { Button, Card, Skeleton } from "antd";



type ProductItemProps = {
  price: number;
  name: string;
  loading: boolean;
}

const ProductCover = React.lazy(() => import("./Product.Cover")),

  ProductItem = ({ price, name, loading }: ProductItemProps) => {

    const addToBasket = () => {
      console.log("ADD IS WORK");
    }

    return (
      <Skeleton loading={loading} active paragraph>
        <Card
          className="getir-product-item"
          cover={<ProductCover />}
          actions={[<Button key="add-to-basket" htmlType="button" type="primary" block onClick={addToBasket}>Add</Button>]}
        >
          <Card.Meta title={`₺ ${price}`} description={name} />
        </Card>
      </Skeleton>

    )
  }

export default ProductItem;