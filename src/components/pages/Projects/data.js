import {faPython,faJira,faJava,faAndroid,faHtml5,faCss3,faJs, faReddit, faReact} from '@fortawesome/free-brands-svg-icons'

var colors = {
    "python": "#306998",
    "reddit": "#ff4500",
    "html" :  "#F16529",
    "css" :   "#264de4",
    "java": "#f89820",
    "android": "#3DDC84",
    "javascript":"#F0DB4F"
}
export const projectData = [
    {
        "projectTitle": "NYPL-Tenable-Jira",
        "projectIcons": [
            {
            "icon":faPython,
            "color": colors.python
        }],
        "projectDescription": "Backend-system that organizes data from Tenable into a reduced ticket load for Jira ",
        "projectURL": "https://github.com/NYPL/NYPL-Tenable-Jira"
    },   
    {
        "projectTitle": "Site Hearing",
        "projectIcons": [
            {
            "icon":faPython,
            "color": colors.python
            },
            {
                "icon":faHtml5,
                "color": colors.html
            },
            {
                "icon":faCss3,
                "color": colors.css
            },
            {
                "icon":faJs,
                "color": colors.javascript
            }
        ],
        "projectDescription": "A web application that scan's a tourist location and provides a tour of landmarks of the area via a human-like verbalization",
        "projectURL": "https://github.com/Gerard-Cancino/SiteHearing"
    },
    {
        "projectTitle": "arunajay.com",
        "projectIcons": [
            {
            "icon":faReact,
            "color": colors.react
            },
            {
                "icon":faHtml5,
                "color": colors.html
            },
            {
                "icon":faCss3,
                "color": colors.css
            },
            {
                "icon":faJs,
                "color": colors.javascript
            }
        ],
        "projectDescription": "My personal website (you're on it!). Feel free to use this!",
        "projectURL": "https://github.com/arun-ajay/arun-ajay-website"
    },
    {
        "projectTitle": "Reddi-lert",
        "projectIcons": [
            {
            "icon":faPython,
            "color": colors.python
            },
            {
                "icon":faReddit,
                "color": colors.reddit
            }
        ],
        "projectDescription": "Notifies a user if specified content from a subreddit has just been posted.",
        "projectURL": "https://github.com/arun-ajay/Reddi-lert"
    },
    {
        "projectTitle": "Weight Loss App",
        "projectIcons": [
            {
            "icon":faJava,
            "color": colors.java
            },
            {
                "icon":faAndroid,
                "color": colors.android
            }
        ],
        "projectDescription": "Android application that tracks a user's weight loss period and calculates trends over time.",
        "projectURL": "https://github.com/arun-ajay/stuntin-shunt"
    },
    {
        "projectTitle": "Stuntin' Shunt",
        "projectIcons": [{
            "icon":faPython,
            "color": colors.python
            }
        ],
        "projectDescription": "An arduino system that monitors shunt activity and notifies a physician when a potential blockage has occurred",
        "projectURL": "https://github.com/arun-ajay/stuntin-shunt"
    }

]