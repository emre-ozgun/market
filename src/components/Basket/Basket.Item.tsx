import React from "react"
import { useSelector } from "react-redux";
import { Button, List, Spin, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

import { IStore } from "@store/IStore";
import { IBasket } from "@base/interfaces";

const BasketEmpty = React.lazy(() => import("./Basket.Empty"));



type BasketItemProps = {
  data?: IBasket[];
}

const BasketItem = ({ data }: BasketItemProps) => {

  const { loader } = useSelector((state: IStore) => ({
    loader: state.system.loader
  })),

    addQuantity = () => {
      console.log("ADD_QUATITY");
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
        renderItem={(item: IBasket) => (
          <List.Item
            actions={[
              <>
                <Button type="default" htmlType="button" icon={<MinusOutlined />} onClick={addQuantity}></Button>
                <Typography.Text className="basket-item-quantity">5</Typography.Text>
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