import "./PopUp.css"


export default function PopUp({children, setShow}) {
    // unlock the scroll
    const unlockScroll = window.unlockScroll || (() => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    });
    
    return (
        <>
            {/* Overlay layout - click outside to close + unlock scroll */}
            <div 
                className="layout" 
                onClick={(e) => {
                    // Close if clicked on layout (outside inner popup)
                    if (e.target === e.currentTarget) {
                        setShow(false);
                        unlockScroll();
                    }
                }}
            >
                {/* Inner popup content container - stop propagation on clicks */}
                <div 
                    className="popUp"
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </>
    )
}
