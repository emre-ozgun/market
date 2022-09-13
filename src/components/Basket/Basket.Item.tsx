import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { Button, List, Spin, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

import { IStore } from "@store/IStore";
import { Basket } from "@store/types";
import { BasketActions } from "@store/actions";



type BasketItemProps = {
  data: Basket;
}

const BasketEmpty = React.lazy(() => import("./Basket.Empty")),

  BasketItem = ({ data }: BasketItemProps) => {

    const dispatch = useDispatch(),
      { loader } = useSelector((state: IStore) => ({
        loader: state.system.loader
      })),

      addQuantity = () => {
        dispatch(BasketActions.addQuantityAction("Handcrafted Bear Mug"))
      },

      removeQuantity = () => {
        console.log("REMOVE_QUATITY");
      };


    return (
      <Spin size="default" spinning={loader}>
        <List
          locale={{ emptyText: <BasketEmpty /> }}
          dataSource={data}
          footer={[
            data && <Typography.Text key="basket-total">₺ 39,97</Typography.Text>
          ]}
          renderItem={(item) => (
            <List.Item
              actions={[
                <>
                  <Button type="default" htmlType="button" icon={<MinusOutlined />} onClick={addQuantity}></Button>
                  <Typography.Text className="basket-item-quantity">{item.quantity}</Typography.Text>
                  <Button type="default" htmlType="button" icon={<PlusOutlined />} onClick={removeQuantity}></Button>
                </>
              ]}
            >
              <List.Item.Meta
                title={item.name}
                description={item.price}
              />
            </List.Item>
          )}
        />
      </Spin>
    )
  }

export default BasketItem;