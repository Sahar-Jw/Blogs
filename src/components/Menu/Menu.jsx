import "./Menu.css"

export default function Menu({logo,links,children,setShowMenu}) {
    // unlock the scroll
    const unlockScroll = window.unlockScroll || (() => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    });

    return (
        <div className="menu">
        <div className="layout" onClick={(e) => {
                    // Close if clicked on layout (outside inner popup)
                    if (e.target === e.currentTarget) {
                        setShowMenu(false);
                        unlockScroll();
                    }
                }}>
            <div className="menu-text">
                    <h1>{logo}</h1>
                {links.map((link, index) => (
                    <ul key={index}>
                        {/* to check if the active is true add active class to the li */}
                        <li className={link.active ? 'active' : ''}>
                            {link.title}
                        </li>
                    </ul>
                ))}
            {children}
            </div>
        </div>
        </div>
    )
}
