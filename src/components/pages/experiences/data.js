import {faPython,faHtml5,faCss3,faJs,faAngular} from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
var colors = {
    "python": "#306998",
    "html" :  "#F16529",
    "css" :   "#264de4",
    "java": "#f89820",
    "javascript":"#F0DB4F",
    "sql": "#812878"
}

export const experiencesData = [
    {
        "company" : "Bank of America - Merill Lynch",
        "title" : "Global Technology Summer Analyst Intern",
        "location": "Manhattan,NY",
        "term" : "Summer 2019",
        "fontColor" : "#0061aa",
        "projects":[
            {
                "title": "Jargon Extractor and Definer",
                "description": "Built a full-stack web application that enables analysts to query for reports and \
                automates the extraction, tagging, and delineation of niche industry jargon \
                using Angular, Python, SQL, and a REST API",
                "technologies":[
                    {
                        "icon":faPython,
                        "color": colors.python
                    },
                    {
                        "icon":faAngular,
                        "color": colors.python
                    },
                    {
                        "icon":faCss3,
                        "color": colors.python
                    },
                    {
                        "icon":faHtml5,
                        "color": colors.python
                    },
                    {
                        "icon":faJs,
                        "color": colors.python
                    },
                    {
                        "icon": faDatabase,
                        "color":colors.sql
                    }
                ]
            }
        ]
    }
]