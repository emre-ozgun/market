import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Col, Input, List, Radio, Skeleton, Space, Typography } from "antd";

import { IStore } from "@store/IStore";
import { productOrderBySelector } from "@store/lib/selectors";
import { FilterActions } from "@store/actions";
import { IFilter } from "@base/interfaces";
import { filterTypes } from "./types";




type FilterProps = {
  filters: any[];
}

const Filter = ({ filters }: FilterProps) => {

  const dispatch = useDispatch(),
    { orderBy } = useSelector((state: IStore) => ({
      orderBy: productOrderBySelector(state),
    })),
    [searchedBrand, setSearchedBrand] = React.useState<string>(""),
    [searchedTag, setSearchedTag] = React.useState<string>(""),

    onChangeFilterBrand = (e: any) => {
      const { checked, name } = e.target;

      if (checked) {
        dispatch(FilterActions.addFilterByBrandAction(name));
      } else {
        dispatch(FilterActions.removeFilterByBrandAction(name));
      }
    },

    onChangeFilterTag = (e: any) => {

      const { checked, name } = e.target;

      if (checked) {
        dispatch(FilterActions.addFilterByTagAction(name));
      } else {
        dispatch(FilterActions.removeFilterByTagAction(name));
      }

    },

    onChangeOrderByFilter = (e: any) => dispatch(FilterActions.setOrderByAction(e.target.value));

  return (
    <Col xs={24} md={24} className="filter">
      {
        filters && filters.length > 0 && filters.map((filterItem: IFilter) => {
          return (
            filterItem && (
              <Col xs={24} md={24} key={filterItem.name}>
                {
                  filterItem.type === filterTypes.radio && (
                    <Col xs={24} md={24} className={`filter-sorting-radio ${filterItem.className}`}>
                      <Typography.Paragraph className="filter-title">
                        {filterItem.label}
                      </Typography.Paragraph>
                      <Col xs={24} md={24}>
                        <Skeleton loading={filterItem.loading} active paragraph>
                          <Radio.Group value={orderBy} onChange={onChangeOrderByFilter} >
                            <Space direction="vertical">
                              {
                                filterItem.items && Object.values(filterItem.items).map(({ id, name, value }) => {
                                  return (
                                    <Radio key={id} value={value}>
                                      {name}
                                    </Radio>
                                  )
                                })
                              }
                            </Space>
                          </Radio.Group>
                        </Skeleton>
                      </Col>
                    </Col>
                  )
                }

                {
                  (filterItem.type === filterTypes.searchableCheckbox && filterItem.brand) && (
                    <Col xs={24} md={24} className={`filter-searchable-checkbox ${filterItem.className}`}>
                      <Typography.Paragraph className="filter-title">
                        {filterItem.label}
                      </Typography.Paragraph>
                      <Col xs={24} md={24}>
                        <Skeleton loading={filterItem.loading} active paragraph>
                          <Input
                            placeholder={`Search ${filterItem.label}`}
                            className={filterItem.className}
                            value={searchedBrand}
                            onChange={(e: any) => setSearchedBrand(e.currentTarget.value)}
                          />
                          <List
                            locale={{ emptyText: "No results matched your search." }}
                            dataSource={filterItem.items.filter((brandItem) => brandItem.name.toString().toLowerCase().indexOf(searchedBrand.toString().toLowerCase()) > -1)}
                            renderItem={(item) => (
                              <List.Item key={item.id}>
                                <Checkbox onChange={onChangeFilterBrand} name={item.name}>
                                  {item.name} {`(${item.count})`}
                                </Checkbox>
                              </List.Item>
                            )}
                          />
                        </Skeleton>
                      </Col>
                    </Col>
                  )
                }

                {
                  (filterItem.type === filterTypes.searchableCheckbox && filterItem.tag) && (
                    <Col xs={24} md={24} className={`filter-searchable-checkbox ${filterItem.className}`}>
                      <Typography.Paragraph className="filter-title">
                        {filterItem.label}
                      </Typography.Paragraph>
                      <Col xs={24} md={24}>
                        <Skeleton loading={filterItem.loading} active paragraph>
                          <Input
                            placeholder={`Search ${filterItem.label}`}
                            className={filterItem.className}
                            value={searchedTag}
                            onChange={(e: any) => setSearchedTag(e.currentTarget.value)}
                          />
                          <List
                            locale={{ emptyText: "No results matched your search." }}
                            dataSource={filterItem.items.filter((tagItem) => tagItem.name.toString().toLowerCase().indexOf(searchedTag.toString().toLowerCase()) > -1)}
                            renderItem={(item) => (
                              <List.Item key={item.id}>
                                <Checkbox onChange={onChangeFilterTag} name={item.name}>
                                  {item.name} {`(${item.count})`}
                                </Checkbox>
                              </List.Item>
                            )}
                          />
                        </Skeleton>
                      </Col>
                    </Col>
                  )
                }
              </Col>
            )
          )
        })
      }
    </Col>
  )
}

export default Filter;