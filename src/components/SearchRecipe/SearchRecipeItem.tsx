import React from "react";
import styles from './SearchRecipeItem.module.css';

export interface RecipeItemProps {
    title: string;
    href: string;
    ingredients: string;
    thumbnail: string;
    setInputItems: any;
    fetchData: any;
}

export const SearchRecipeItem = ({title, href, ingredients, thumbnail, setInputItems, fetchData}: RecipeItemProps) => {

    return (
        <a href={href} target={'_blank'}>
            <div className={styles.recipeItem}>
                <div className={styles.recipeItem__itemImageWrapper}>
                    <img
                        className={styles.recipeItem__itemImage}
                        src={thumbnail}
                        alt={`${title}-image`}
                        width={200}
                        height={200}
                    />
                </div>
                <div className={styles.recipeItem__itemInfo}>
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
                                #{item} &nbsp;
                            </a>
                        ))}
                    </p>
                </div>
            </div>
        </a>
    );
};