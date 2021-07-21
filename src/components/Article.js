

function Article(prop) {
    return(
        <article>
            <h3>
                {prop.title}
            </h3>
            <small>
                {prop.date}
            </small>
            <p>
                {prop.preview}
            </p>
        </article>
    )
}


export default Article