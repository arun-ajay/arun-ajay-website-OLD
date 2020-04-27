import {faPython,faHtml5,faCss3,faJs,faAngular, faReact} from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
var colors = {
    "python": "#306998",
    "html" :  "#F16529",
    "css" :   "#264de4",
    "java": "#f89820",
    "javascript":"#F0DB4F",
    "sql": "#812878",
    "angular": "#b52e31",
    "react": "#61dbf"
}

export const experiencesData = [
    {
        "company" : "Bank of America - Merill Lynch",
        "image": "BOFA.jpg",
        "title" : "Global Technology Summer Analyst Intern",
        "location": "Manhattan,NY",
        "term" : "Summer 2019",
        "fontColor" : "#0061aa",
        "technologies":[
            {
                "icon":faAngular,
                "color":colors.angular
            },
            {
                "icon":faPython,
                "color":colors.python
            },
            {
                "icon":faHtml5,
                "color":colors.html
            },
            {
                "icon":faCss3,
                "color":colors.css
            },
            {
                "icon":faJs,
                "color":colors.javascript
            },
            {
                "icon":faDatabase,
                "color":colors.sql
            },

        ]
    },
    {
        "company" : "The New York Public Library",
        "title" : "Systems Engineering Intern",
        "image": "NYPL.jpg",
        "location": "Manhattan,NY",
        "term" : "October 2019 - May 2020",
        "fontColor" : "black",
        "technologies":[
            {
                "icon":faReact,
                "color":colors.react
            },
            {
                "icon":faPython,
                "color":colors.python
            },
            {
                "icon":faHtml5,
                "color":colors.html
            },
            {
                "icon":faCss3,
                "color":colors.css
            },
            {
                "icon":faJs,
                "color":colors.javascript
            },
            {
                "icon":faDatabase,
                "color":colors.sql
            },

        ]
    },
    {
        "company" : "Bank of America - Merill Lynch",
        "image": "BOFA.jpg",
        "title" : "Global Technology Summer Analyst Intern",
        "location": "Manhattan,NY",
        "term" : "Summer 2020",
        "fontColor" : "#0061aa",
        "technologies":[]
    },
    
]