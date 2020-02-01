import React from "react";
import {RecipeItemProps, SearchRecipeItem} from "./SearchRecipeItem";
import {WithDataProps} from "../../HOCs/withData";
import {Col, Row} from "react-bootstrap";


export const SearchRecipeList = ({data, fetchData}: WithDataProps) => (
    <Row>
        {data.map((item: RecipeItemProps, key: number) => (
                <Col
                    bsPrefix={'col-lg-6 p-3'}
                    key={key}
                >
                    <SearchRecipeItem
                        title={item.title}
                        href={item.href}
                        ingredients={item.ingredients}
                        thumbnail={item.thumbnail}
                        fetchData={fetchData}
                    />
                </Col>
        ))}
    </Row>
);
