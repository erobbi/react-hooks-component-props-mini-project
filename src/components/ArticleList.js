import Article from "./Article";
import blogData from "../data/blog";

console.log(blogData)
console.log(blogData.posts)

const posts = blogData.posts
console.log(posts)

// function ArticleList() {
//     return (
//        <main>
//         posts.map( post => {
//             <Article
//                 key = {post.id}
//                 title = {post.title}
//                 date = {post.date}
//                 preview = {post.preview}
//                 minutes = {post.minutes}
//             />
//         </main>
//     }
//     ))
// }



function ArticleList(posts) {
    return (
      <main>
        {posts.map(post => {
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
          />
        })}
      </main>
    )
  }

export default ArticleList