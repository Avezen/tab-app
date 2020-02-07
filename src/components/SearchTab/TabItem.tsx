import React from "react";
import {Col} from "react-bootstrap";


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


const tabTypesInstTranslate = {
    PLAYER: 'player',
    TEXT_GUITAR_TAB: 'gtr',
    CHORDS: 'chord',
    TEXT_BASS_TAB: 'bass'
};

const tabTypesTranslate = {
    PLAYER: 'Player',
    TEXT_GUITAR_TAB: 'Guitar',
    CHORDS: 'Chords',
    TEXT_BASS_TAB: 'Bass'
};

export const TabItem = ({id, title, artist, tabTypes}: RecipeItemProps) => (
    <div
        className={'recipe-item'}
    >
        <Col
            bsPrefix={'col-sm-12 p-0 h-100'}
        >
            <div
                className={'recipe-item__item-info'}
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
                        <a
                            key={key}
                            href={`https://www.songsterr.com/a/wa/song?id=${id}&inst=${tabTypesInstTranslate[tabType]}`}
                            target={'_blank'}
                        >
                            <label>
                                {tabTypesTranslate[tabType]}
                            </label>
                            <img
                                src={`images/icons/${tabTypesInstTranslate[tabType]}.svg`}
                                alt={`${tabTypesTranslate[tabType]}-icon`}
                                width={20}
                            />
                        </a>
                ))}
                </div>
            </div>
        </Col>
    </div>
);
