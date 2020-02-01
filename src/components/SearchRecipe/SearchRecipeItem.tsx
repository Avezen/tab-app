import React from "react";
import {Col} from "react-bootstrap";
import {FormattedMessage} from "react-intl";

export interface RecipeItemProps {
    title: string;
    href: string;
    ingredients: string;
    thumbnail: string;
    fetchData: any;
}

export const SearchRecipeItem = ({title, href, ingredients, thumbnail, fetchData}: RecipeItemProps) => (
    <div
        className={'recipe-item'}
    >
        <Col
            bsPrefix={'col-sm-5 col-12 p-0 h-100'}
        >
            <img
                className={'recipe-item__item-image'}
                src={thumbnail}
                alt={`${title}`}
            />
        </Col>
        <Col
            bsPrefix={'col-sm-7 col-12 p-0 h-100'}
        >
            <div
                className={'recipe-item__item-info'}
            >
                <h5>
                    {title}
                </h5>
                <p>
                    {ingredients.split(', ').map((item: string, key: number) => (
                        <a
                            key={key}
                            href={`#${item}`}
                            onClick={() => fetchData([item])}
                        >
                            <label
                                className={'hash-label'}
                            >
                                #{item}
                            </label>
                        </a>
                    ))}
                </p>
                <div
                    className={'item-info__button-container'}
                >
                    <a
                        href={href}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        className={'main-button recipe-button'}
                    >
                        <FormattedMessage id="mainPage.openRecipe"/>
                    </a>
                </div>
            </div>
        </Col>
    </div>
);
