import "./Nav.css"


export default function Nav({logo, links, children,onclick}) {
    return (
        <nav>
            <div className="nav-text">
                <h1>{logo}</h1>
                {links.map((link, index) => (
                    <ul key={index}>
                        {/* to check if the active is true add active class to the li */}
                        <li className={link.active ? 'active' : ''}>
                            {link.title}
                        </li>
                    </ul>
                ))}
            </div>
            <img src="/assets/img/menu.svg" className="menu" alt="menu icon"  onClick={onclick}/>
            {/* to add the btn component */}
            {children}
        </nav>
    )
}
