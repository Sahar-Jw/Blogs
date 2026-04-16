import "./MainBtn.css"

export default function MainBtn({Btn, onClick}) {
  return (
    <>
      <button 
      // to make the hero btn wider
        style={{height: (Btn === "Subscribe") ? "48px" : "38px" }} 
        // for the popup
        onClick={onClick}
      >
        {Btn}
      </button>
    </>
  )
}
