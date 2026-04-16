import './Input.css'

export default function Input({type, placeholder}) {
    return (
        <input 
            className='Inputs' 
            type={type} 
            placeholder={placeholder} 
        />
    )
}
