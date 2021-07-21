import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About.js"
import ArticleList from "./ArticleList"

const lukeURL = 'https://images.squarespace-cdn.com/content/v1/606565ca16d89a5965d7f646/1617258625839-RNR1PG1F9N0JR7KTGXQA/NY+Xpro+Ektachrome3-positive.jpg?format=750w'
const lukeAlt = 'a picture of Luke'


console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header />
      <About image = {lukeURL} alt = {lukeAlt}/>
      <ArticleList />
      {/* // header.js */}
      {/* // about.js
      // articlelist.js
          //child article.js
      // bonus */}
    </div>
  );
}

export default App;



// Header
// Make a Header component as a child of App. It should return:

// a <header> element with the following elements inside:
// a <h1> with the name of the blog, passed as a prop
// About
// Make a About component as a child of App. It should return:

// a <aside> element with the following elements inside:
// a <img> element, with the src set to an image passed as a prop
// the <img> element should use this placeholder image as a default value for the prop if no prop is passed in: "https://via.placeholder.com/215"
// the image should also be accessible! Give it an alt attribute of "blog logo"
// a <p> element, with the about text for the blog passed in as a prop
// ArticleList
// Make a ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop to ArticleList)
// make sure to assign a unique key prop to each Article
// Article
// Make a Article component as a child of ArticleList. It should return:

// a <article> element, with the following elements inside:
// a <h3> element displaying the title of the article, passed as a prop
// a <small> element displaying the date of the article, passed as a prop
// a default value of "January 1, 1970" should be used if no date is passed as a prop
// a <p> element displaying the preview of the article, passed as a prop