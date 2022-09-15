import React from "react"
import { Tag } from "antd";


const initialItemTypes = ["mug", "skirt"],

  ProductItemType = () => {
    const [selectedItemType, setSelectedItemType] = React.useState<string[]>(["mug"]),

      onChangeItemTypes = (item: string, checked: boolean) => {
        
        const selectedItems = checked ? [...selectedItemType, item] : selectedItemType.filter((s) => s !== item);
        setSelectedItemType(selectedItems);
      };

    return (
      <div className="market-item-types">
        {
          initialItemTypes.map(item => {
            return (
              <Tag.CheckableTag
                key={item}
                checked={selectedItemType.indexOf(item) > -1}
                onChange={(checked) => onChangeItemTypes(item, checked)}
              >
                {item}
              </Tag.CheckableTag>
            )
          })
        }
      </div>
    )
  }

export default ProductItemType
