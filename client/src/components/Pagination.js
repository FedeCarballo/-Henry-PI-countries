import React from "react";

const pagination = ({countriesperpage, totalCountries, paginate}) => {
    
    const countriesPage = [];

    for (let i = 1; i <= Math.ceil(totalCountries / countriesperpage); i++){

        countriesPage.push(i);
    }
    return(
    <div>
        <nav>
            <ul>
                {
                    countriesPage.map(n => (
                        <li key={n}>
                           <a onClick={() => paginate(n)} href="#">
                            {n}
                           </a>
                       </li>
                   )) 
                }
            </ul>
        </nav>
    </div>
    )
}

export default pagination;