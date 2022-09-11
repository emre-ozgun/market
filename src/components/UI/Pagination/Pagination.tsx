import React from "react"
import { Pagination as Custom } from "antd"
import { productPerPage } from "@base/constants";


type PaginationProps = {
  items: any[];
}
const Pagination = ({ items }: PaginationProps) => {

  const [pageNumber, setPageNumber] = React.useState(0),

    pageTotal = Math.ceil(items.length / productPerPage),

    onChangePage = () => {
      setPageNumber(pageNumber)
    },

    itemRender = (_: any, type: string, originalElement: any) => {
      console.log({ _, type, originalElement });

      if (type === "prev") {
        return <a>Prev0</a>;
      }

      if (type === "next") {
        return <a>Next</a>;
      }

      return originalElement;
    };

  return (
    <Custom pageSize={10} total={pageTotal} onChange={onChangePage} showSizeChanger={false} itemRender={itemRender} />
  )
}

export default Pagination;