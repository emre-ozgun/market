// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { Button, List, Spin, Typography } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

import { IStore } from "@store/IStore";
import { BasketActions } from "@store/actions";
import { IProduct } from "@base/interfaces";



type BasketItemProps = {
  product: IProduct;
}

const BasketItem = ({ product }: BasketItemProps) => {

  const dispatch = useDispatch(),
    { loader } = useSelector((state: IStore) => ({
      loader: state.system.loader
    })),

    { id } = product,

    addQuantity = () => dispatch(BasketActions.addQuantityAction(id)),

    minusQuantity = () => dispatch(BasketActions.minusQuantityAction(id)),

    removeFromBasket = () => dispatch(BasketActions.removeFromBasketAction(id));

  return (
    <Spin size="default" spinning={loader}>
      <List>
        <List.Item
          actions={[
            <>
              <Button type="default" htmlType="button" icon={product.quantity <= 1 ? <DeleteOutlined onClick={removeFromBasket} /> : <MinusOutlined />} onClick={minusQuantity}></Button>
              <Typography.Text className="basket-item-quantity">{product.quantity}</Typography.Text>
              <Button type="default" htmlType="button" icon={<PlusOutlined />} onClick={addQuantity}></Button>
            </>
          ]}
        >
          <List.Item.Meta
            title={product.name}
            description={`₺${product.price.toString().replace(".", ",")}`}
          />
        </List.Item>
      </List>
    </Spin>
  )
}

export default BasketItem;