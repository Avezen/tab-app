import React from "react";
import {Container, Row} from "react-bootstrap";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
    form: any;
    content: any;
}

export const MainLayout = ({form, content}: MainLayoutProps) => (
    <React.Fragment>
        <div className={styles.header}>
            {form}
        </div>
        <Container>
            <Row>
                <div className={styles.content}>
                    {content}
                </div>
            </Row>
        </Container>
    </React.Fragment>
);
