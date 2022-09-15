// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import React from "react"
import { Tag } from "antd"

import { ITags } from "@base/interfaces"



type TagProps = {
  data: ITags[]
}
const Tags = ({ data }: TagProps) => {

  return (
    <>
      {
        data.map(tagItem => {
          return (
            <Tag key={tagItem.name}>
              {tagItem.name}
            </Tag>
          )
        })
      }
    </>
  )
}

export default Tags;
