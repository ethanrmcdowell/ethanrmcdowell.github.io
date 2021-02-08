import React from "react";

function Nav() {
    return(
        <nav className="nav">
            <a className="nav-link" href="/">About</a>
            <a className="nav-link" href="/portfolio">Portfolio</a>
            <a className="nav-link" href="../public/EthanResume.PDF">Resume</a>
        </nav>
    )
}

export default Nav;