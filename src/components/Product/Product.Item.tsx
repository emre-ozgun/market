import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "antd";

import { IStore } from "@store/IStore";
import { currentBasket } from "@store/lib/selectors";
import { BasketActions } from "@store/actions";
import { IProduct } from "@base/interfaces";

import ProductCover from "./Product.Cover";



type ProductItemProps = {
  product: IProduct;
}

const ProductItem = ({ product }: ProductItemProps) => {

  const dispatch = useDispatch(),
    { basket } = useSelector((state: IStore) => ({
      basket: currentBasket(state)
    })),

    addToBasket = () => dispatch(BasketActions.addToBasketAction(product)),

    foundItemOnBasket = basket.some((item: { id: string }) => item.id === product.id);

  return (
    <Card
      className="market-product-item"
      cover={<ProductCover />}
      actions={[
        <Button disabled={foundItemOnBasket} key="add-to-basket" htmlType="button" type="primary" block onClick={addToBasket}>
          Add
        </Button>
      ]}
    >
      <Card.Meta title={`₺ ${product.price}`} description={product.name} />
    </Card>

  )
}

export default ProductItem;