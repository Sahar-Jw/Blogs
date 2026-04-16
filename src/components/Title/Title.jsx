import './Title.css'

export default function Title({title, subTitle}) {
    return (
        <>
            <h1 className='Title'>{title}</h1>
            <p className='SubTitle'>{subTitle}</p>
        </>
    )
}
