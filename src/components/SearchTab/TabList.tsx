import React from "react";
import {RecipeItemProps, TabItem} from "./TabItem";
import {WithDataProps} from "../../HOCs/withData";
import {Col, Row} from "react-bootstrap";


export const TabList = ({data}: WithDataProps) => (
    <Row>
        {data.map((item: RecipeItemProps, key: number) => (
            <Col
                bsPrefix={'col-lg-6 p-3'}
                key={key}
            >
                <TabItem
                    id={item.id}
                    title={item.title}
                    artist={item.artist}
                    chordsPresent={item.chordsPresent}
                    tabTypes={item.tabTypes}
                />
            </Col>
        ))}
    </Row>
);
