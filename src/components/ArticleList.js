import Article from "./Article";
import Data from "../data/blog";

console.log(Data)
console.log(Data.posts)

const posts = Data.posts

function ArticleList() {
    return (
        <main>
            <h4>test article</h4>
            <Article title = 'My Finnish Skinny dipping story' date = 'March 31st 2019' preview = 'It was a cold evening...'/>
        </main>
    )
}

export default ArticleList