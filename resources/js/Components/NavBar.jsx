import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary"> {/* Changed bg-body-tertiary to bg-primary */}
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="assets/logo/elmuna logo 1.png" alt="" width={200} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="/">Home</a> {/* Added text-white class */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/articles">Article</a> {/* Added text-white class */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="products">Shop</a> {/* Added text-white class */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href='profile'>Profile</a> {/* Added text-white class */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
