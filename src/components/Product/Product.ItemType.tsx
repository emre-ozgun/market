import React from "react"
import { useDispatch } from "react-redux";
import { Tag } from "antd";
import { FilterActions } from "@store/actions";


const initialItemTypes = ["mug", "shirt"],

  ProductItemType = () => {
    const dispatch = useDispatch(),
      [selectedItemType, setSelectedItemType] = React.useState<string[]>(["mug"]),

      onChangeItemTypes = (item: string, checked: boolean) => {

        const selectedItems = checked ? [...selectedItemType, item] : selectedItemType.filter((s) => s !== item);
        setSelectedItemType(selectedItems);

        if (checked) {
          dispatch(FilterActions.addFilterByItemTypeAction(item));
        } else {
          dispatch(FilterActions.removeFilterByItemTypeAction(item));
        }
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
