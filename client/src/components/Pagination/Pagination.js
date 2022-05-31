import React from "react";
import './Pagination.css'

const pagination = ({countriesperpage, totalCountries, paginate}) => {
    const countriesPage = [];
    for (let i = 1; i <= Math.ceil(totalCountries / countriesperpage); i++){
        countriesPage.push(i);
    }
    return(
    <div>
        <nav className="pagination">
            <ul>
                {
                  countriesPage &&  countriesPage.map(n => (
                        <li key={n}>
                           <a onClick={() => paginate(n)}>{n}</a>
                       </li>
                   )) 
                }
            </ul>
        </nav>
    </div>
    )
}

export default pagination;