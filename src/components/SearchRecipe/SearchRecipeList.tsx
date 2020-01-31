import React from "react";
import {RecipeItemProps, SearchRecipeItem} from "./SearchRecipeItem";
import {WithDataProps} from "../../HOCs/withData";
import {Col, Row} from "react-bootstrap";

interface SearchRecipeListProps {
    setInputItems: any;
}

export const SearchRecipeList = ({data, setInputItems, fetchData}: WithDataProps & SearchRecipeListProps) => {

    return (
        <Row>
            {data.fetchedData.map((item: RecipeItemProps, key: number) => {
                return (
                    <Col
                        bsPrefix={'col-lg-6 p-3'}
                        key={key}
                    >
                        <SearchRecipeItem
                            title={item.title}
                            href={item.href}
                            ingredients={item.ingredients}
                            thumbnail={item.thumbnail}
                            setInputItems={setInputItems}
                            fetchData={fetchData}
                        />
                    </Col>
                );
            })}
        </Row>
    );

};