import React, {useState} from "react";


let ITEMS_PER_PAGE = 6;
let NAVIGATION_LEFT_RIGHT_LENGTH = 3;
let MAX_PAGES = 10;

export const Pagination = ({data, itemsPerPage, children}: any) => {
    const [currentPage, setCurrentPage] = useState('1');

    if (itemsPerPage) {
        ITEMS_PER_PAGE = itemsPerPage;
    }

    const indexOfLastItem = Number(currentPage) * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    const pagesLength = Math.ceil(data.length / ITEMS_PER_PAGE);

    for (let i = 1; i <= pagesLength; i++) {
        if(pagesLength < MAX_PAGES){
            pageNumbers.push(i);
        }else{
            if(i === 1){
                pageNumbers.push(i);
            }else if(i === pagesLength){
                pageNumbers.push(i);
            }else{
                if(i <= Number(currentPage) - NAVIGATION_LEFT_RIGHT_LENGTH){
                    pageNumbers.push('...');
                    i = Number(currentPage) - NAVIGATION_LEFT_RIGHT_LENGTH;
                }else if(i >= Number(currentPage) + NAVIGATION_LEFT_RIGHT_LENGTH){
                    pageNumbers.push('...');
                    i = pagesLength - 1;
                }else{
                    pageNumbers.push(i);
                }
            }
        }
    }

    const handleClick = (number: number|string) => {
        if(String(number) === '...'){
            return
        }
        setCurrentPage(String(number));
        window.scrollTo(0, 0)
    };

    const renderPageNumbers = pageNumbers.map((number, key) => {
        return (
            <li
                className={String(number) === currentPage ? 'current' : ''}
                key={key}
                onClick={() => handleClick(number)}
            >
                {number}
            </li>
        );
    });

    return (
        <div
            className={'pagination'}
        >
            {React.cloneElement(children, {
                    data: currentData
                }
            )}
            <div
                className={'pagination__nav'}
            >
                {renderPageNumbers}
            </div>
        </div>
    );
};