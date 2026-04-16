import './PostsSection.css'

export default function PostsSection({title, children}) {
    return (
        <section className='post-section'>
            <h1>{title}</h1>
            {/* to show the posts */}
            <div className='container'>
                {children}
            </div>
        </section>
    )
}
