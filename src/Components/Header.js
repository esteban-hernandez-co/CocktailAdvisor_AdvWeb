import { NavLink } from "react-router-dom";

export function Header( props ) {
    const SiteNav = props.navigation.map( (item) => {
        return (
            <li className="nav-item">
                <NavLink to = {item.link} className = "nav-link" activeClassName ="active" > 
                    {item.name}
                </NavLink>
            </li>
        )
    })
    return (
                                                //colours for header (words and background)
        <nav className="navbar navbar-expand-lg navbar-primary bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/images/logobrand.png"></img> 
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {SiteNav}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
