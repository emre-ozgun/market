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
        data.map(tItem => {
          return (
            <Tag key={`${tItem}_ TAG`}>
              {tItem.tags}
            </Tag>
          )
        })
      }
    </>
  )
}

export default Tags
