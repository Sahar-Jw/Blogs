import "./Post.css"

export default function Post({info}) {
    return (
        info.map((inf , index) => (
            <div className="post" key={index}>
                <img className="post-img" src={inf.src} alt="Blog post image" />
                <span>{inf.date}</span>
                <div className="post-titles">
                    <h2>{inf.title}</h2>
                    <img src="/assets/img/arrow-up-right.svg" alt="Read more arrow" />
                </div>
                <p>{inf.subTitle}</p>
            </div>
        ))
    )
}
