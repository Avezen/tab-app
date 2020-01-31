import React from 'react';
import {FormattedMessage} from "react-intl";
import {withHelmet} from "../HOCs/withHelmet";
import SearchRecipe from "../components/SearchRecipe/SearchRecipeContainer";
import {Col, Container, Row} from "react-bootstrap";

const MainPageBase = () => {

    return (
        <Container>
            <Row>
                <h1>
                    <FormattedMessage id="mainPage.pageTitle"/>
                </h1>
            </Row>
            <Row>
                <Col lg={12}>
                    <SearchRecipe />
                </Col>
            </Row>
        </Container>
    );
};


export const MainPage = withHelmet(MainPageBase);

