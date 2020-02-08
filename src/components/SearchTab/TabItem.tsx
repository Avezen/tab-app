import React from "react";
import {Col} from "react-bootstrap";
import {TabTypeItem} from "./TabTypeItem";


interface ArtistProps {
    id: number;
    name: string;
    nameWithoutThePrefix: string;
    type: string;
    useThePrefix: boolean;
}

export interface RecipeItemProps {
    id: number;
    title?: string;
    artist: ArtistProps;
    chordsPresent: true
    readonly tabTypes: ["PLAYER" | "TEXT_GUITAR_TAB" | "CHORDS" | "TEXT_BASS_TAB"];
    type?: string;
}


export const TabItem = ({id, title, artist, tabTypes}: RecipeItemProps) => (
    <div
        className={'tab-item'}
    >
        <Col
            bsPrefix={'col-sm-12 p-0 h-100'}
        >
            <div
                className={'tab-item__item-info'}
            >
                <small>
                    {artist.name}
                </small>
                <h5>
                    {title}
                </h5>
                <div
                    className={'item-info__tab-types'}
                >
                    {tabTypes.map((tabType, key) => (
                        <TabTypeItem
                            key={key}
                            id={id}
                            tabType={tabType}
                        />
                    ))}
                </div>
            </div>
        </Col>
    </div>
);
