import React from "react";
import {Container, Row} from "react-bootstrap";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
    form: any;
    content: any;
}

export const MainLayout = ({form, content}: MainLayoutProps) => (
    <React.Fragment>
        <div
            className={styles.header}
        >
            <Container>
                {form}
            </Container>
        </div>
        <div
            className={styles.content}
        >
            <Container>
                {content}
            </Container>
        </div>
    </React.Fragment>
);
