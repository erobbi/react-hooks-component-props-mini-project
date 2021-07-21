import Article from "./Article";
import blogData from "../data/blog";

console.log(blogData)
console.log(blogData.posts)

const posts = blogData.posts

function ArticleList() {
    return (posts.map(post => {
        console.log(post)
        Art

    }))

}

export default ArticleList