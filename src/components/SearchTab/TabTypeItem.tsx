import React from "react";
import {
    isMobile
} from "react-device-detect";

interface TabTypeItem {
    id: number;
    tabType: "PLAYER" | "TEXT_GUITAR_TAB" | "CHORDS" | "TEXT_BASS_TAB";
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

export const TabTypeItem = ({id, tabType}: TabTypeItem) => (
    <a
        className={'tab-type-item'}
        href={`https://www.songsterr.com/a/wa/song?id=${id}&inst=${tabTypesInstTranslate[tabType]}`}
        target={'_blank'}
    >
        <img
            src={`images/icons/${tabTypesInstTranslate[tabType]}.svg`}
            alt={`${tabTypesTranslate[tabType]}-icon`}
            width={25}
        />
        {isMobile ? (
            <React.Fragment/>
            ) : (
            <label>
                {tabTypesTranslate[tabType]}
            </label>
        )}
    </a>
);