import React from 'react'
import PaginationPreps from '../PaginationPreps';
const PaginationWork = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers=[ ];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav>
                <ul className='pagination'>
                {pageNumbers.map(number=>(
                    <li key={number} className='page-item'>
                    <span style={{border:"1px solid green",padding:"20px", textDecoration: "none"}}><a onClick={()=>paginate(number)} href="!#" clasName='page-link'>{number}</a></span>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
}
export default PaginationWork;