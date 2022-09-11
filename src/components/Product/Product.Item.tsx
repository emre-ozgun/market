import React from "react"
import { useSelector } from "react-redux";
import { Button, Card, Spin } from "antd";

import { IStore } from "@store/IStore";



type ProductItemProps = {
  price: number;
  name: string;
}

const ProductCover = React.lazy(() => import("./Product.Cover")),

  ProductItem = ({ price, name }: ProductItemProps) => {

    const { loader } = useSelector((state: IStore) => ({
      loader: state.system.loader
    })),

      addToBasket = () => {
        console.log("ADD IS WORK");
      }

    return (
      <Spin size="default" spinning={loader}>
        <Card
          className="getir-product-item"
          cover={<ProductCover />}
          actions={[<Button key="add-to-basket" htmlType="button" type="primary" block onClick={addToBasket}>Add</Button>]}
        >
          <Card.Meta title={`₺ ${price}`} description={name} />
        </Card>
      </Spin>

    )
  }

export default ProductItem;