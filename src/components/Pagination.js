import React from "react";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNums.map((num) => (
          <li key={num} className="page-item">
            <a onClick={() => paginate(num)} href="#!" className="page-link">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
