import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { Button, List, Spin, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

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

    addQuantity = () => {
      dispatch(BasketActions.addQuantityAction(product.name))
    },

    removeQuantity = () => {
      console.log("REMOVE_QUATITY");
    };


  return (
    <Spin size="default" spinning={loader}>
      <List>
        <List.Item
          actions={[
            <>
              <Button type="default" htmlType="button" icon={<MinusOutlined />} onClick={removeQuantity}></Button>
              <Typography.Text className="basket-item-quantity">{product.quantity}</Typography.Text>
              <Button type="default" htmlType="button" icon={<PlusOutlined />} onClick={addQuantity}></Button>
            </>
          ]}
        >
          <List.Item.Meta
            title={product.name}
            description={product.price}
          />
        </List.Item>
      </List>
    </Spin>
  )
}

export default BasketItem;