import React from "react";

const Category = () => {
    return (
        <div className="category">
            <ul className="select-category">
                <li>
                    Select Category
                    <ul className="category-options">
                        <li>
                            <p>Top Grossing</p>
                        </li>
                        <li>
                            <p>Men's Collection</p>
                        </li>
                        <li>
                            <p>Ladies Collection</p>
                        </li>
                        <li>
                            <p>Accessories</p>
                        </li>
                        <li>
                            <p>Electronics</p>
                        </li>
                        <li>
                            <p>Footwear</p>
                        </li>
                        <li>
                            <p>Sportswear</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Category;
