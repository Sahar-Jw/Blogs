import "./LinkRouter.css"

export default function LinkRouter({link, onClick}) {
    return (
        <p className="linkRouter">
            Don't have an account?
            {/* onclick to toggle between popups and the linke to change the text for it */}
            <a href="#" onClick={onClick}>{link}</a>
        </p>
    )
}
