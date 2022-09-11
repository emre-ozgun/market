import React from "react"
import { Button, List, Spin, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

import { IBasket } from "@base/interfaces";
import BasketEmpty from "./Basket.Empty";



type BasketItemProps = {
  data?: IBasket[];
}

const BasketItem = ({ data }: BasketItemProps) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <Spin spinning={loading}>
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
                <Button type="default" htmlType="button" icon={<MinusOutlined />}></Button>
                <Typography.Text className="basket-item-quantity">5</Typography.Text>
                <Button type="default" htmlType="button" icon={<PlusOutlined />}></Button>
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