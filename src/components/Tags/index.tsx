// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import React from "react"
import { Tag } from "antd"



type TagProps = {
  data: any[];
  setSelectedTags: (a: any, b: any) => void;
}

const Tags = ({ data, setSelectedTags }: TagProps) => {

  return (
    <div className="market-item-types">
      {
        data.map(tagItem => {
          return (
            <Tag.CheckableTag key={Math.random()}
              checked={data.indexOf(tagItem) > -1}
              onChange={(checked) => setSelectedTags(tagItem, checked)}
            >
              {tagItem.name}
            </Tag.CheckableTag>
          )
        })
      }
    </div>
  )
}

export default Tags;
