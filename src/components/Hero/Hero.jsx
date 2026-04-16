import './Hero.css'

export default function Hero({children}) {
  return (
    <div className='Hero'>
      {/* to pass the title component , input component and button component */}
      {children}
    </div>
  )
}
