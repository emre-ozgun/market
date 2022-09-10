import React from "react"
import { ReactSVG } from "react-svg";
import { Button, Dropdown, List, Skeleton, Tooltip, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

import { IBasket } from "@base/interfaces";



const basketIcon = require("@assets/icons/basket.svg") as string,
  BasketItems: IBasket[] = [
    {
      name: "Example Product",
      price: "₺ 14,99"
    },
    {
      name: "Example Product",
      price: "₺ 14,99"
    },
    {
      name: "Example Product",
      price: "₺ 14,99"
    }
  ];

const Basket = () => {
  const [visible, setVisible] = React.useState<boolean>(false),
    [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (!visible) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [visible]);


  return (
    <Dropdown
      trigger={["click"]}
      open={visible}
      onOpenChange={setVisible}
      overlay={
        <div className="getir-header-basket">
          <List
            dataSource={BasketItems}
            footer={[
              <Typography.Text key="basket-total">₺ 39,97</Typography.Text>
            ]}
            renderItem={(item: IBasket) => (
              <Skeleton loading={loading} active>
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
              </Skeleton>
            )}
          />
        </div>
      }
    >
      <Tooltip placement="left" title="Sepetim">
        <Typography.Text>
          <ReactSVG src={basketIcon} />
          <Typography.Paragraph>₺ 39,97</Typography.Paragraph>
        </Typography.Text>
      </Tooltip>
    </Dropdown>
  )
}

export default Basket;