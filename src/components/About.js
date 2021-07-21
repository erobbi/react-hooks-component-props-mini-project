const { property } = require("lodash")


function About(prop) {
    return (
        <aside>
            <img src = {prop.image} alt = {prop.alt} ></img>
        </aside>
    )
}

export default About

// //leslie
// function About({image ="https://via.placeholder.com/215", about }){
//     return(
//         <aside>
//             <img src={image} alt="blog logo"></img>
//             <p>{about}</p>
           
//         </aside>

//     )

// }

// export default About;