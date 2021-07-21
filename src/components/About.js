const { property } = require("lodash")


function About(prop) {
    return (
        <aside>
            <img src = {prop.image} alt = {prop.alt} ></img>
        </aside>
    )
}

export default About