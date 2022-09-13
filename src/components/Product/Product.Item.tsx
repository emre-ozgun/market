import React from "react"
import { Button, Card, Skeleton } from "antd";
import { useDispatch } from "react-redux";

import { BasketActions } from "@store/actions";
import { IProduct } from "@base/interfaces";



type ProductItemProps = {
  product: IProduct;
  loading: boolean;
}

const ProductCover = React.lazy(() => import("./Product.Cover")),

  ProductItem = ({ product, loading }: ProductItemProps) => {

    const dispatch = useDispatch(),

      addToBasket = () => {
        dispatch(BasketActions.addToBasketAction(product));
      }

    return (
      <Skeleton loading={loading} active paragraph>
        <Card
          className="market-product-item"
          cover={<ProductCover />}
          actions={[<Button key="add-to-basket" htmlType="button" type="primary" block onClick={addToBasket}>Add</Button>]}
        >
          <Card.Meta title={`₺ ${product.price}`} description={product.name} />
        </Card>
      </Skeleton>

    )
  }

export default ProductItem;