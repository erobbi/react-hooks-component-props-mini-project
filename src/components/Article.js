
import blogData from "../data/blog";

function Article(prop) {
    return (
        blogData.posts.map(e => {
            return (<article>
                <h3>
                    {e.title}
                </h3>
                <small>
                    {e.date}
                </small>
                <p>
                    {e.preview}
                </p>
            </article>

            )
        }

        )

    )
}








// function Article(prop) {
//     return(
//         <article>
//             <h3>
//                 {prop.title}
//             </h3>
//             <small>
//                 {prop.date}
//             </small>
//             <p>
//                 {prop.preview}
//             </p>
//         </article>
//     )
// }


export default Article