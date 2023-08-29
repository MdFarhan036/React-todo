import React from 'react'
// import { FaCheck } from 'react-icons/fa';

export const NavBar = () => {
    return (
        <>
            <div className="sidebar">

                <ul className="nav-links">
                    <li>
                        <a href={{}} className="active">
                            <i className='bx bx-grid-alt' ></i>
                            <span className="links_name">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href={{}}>
                            <i className='bx bx-box' ></i>
                            <span className="links_name">Product</span>
                        </a>
                    </li>
                    <li>
                        <a href={{}}>
                            <i className='bx bx-list-ul' ></i>
                            <span className="links_name">Order list</span>
                        </a>
                    </li>
                    <li>
                        <a href={{}}>
                            <i className='bx bx-pie-chart-alt-2' ></i>
                            <span className="links_name">Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href={{}}>
                            <i className='bx bx-coin-stack' ></i>
                            <span className="links_name">Stock</span>
                        </a>
                    </li>
                    <li>
                        <a href={{}}>
                            <i className='bx bx-cog' ></i>
                            <span className="links_name">Setting</span>
                        </a>
                    </li>
                    <li className="log_out">
                        <a href={{}}>
                            <i className='bx bx-log-out'></i>
                            <span className="links_name">Log out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
