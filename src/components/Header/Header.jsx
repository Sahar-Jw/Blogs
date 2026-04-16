import "./Header.css"

// Header to wrappe nav and hero components and 
export default function Header({children}) {
    return (
        <header>
            {children}
        </header>
    )
}
