var levelData = {
    "level1": {
        "name": "Level 1",
        "description": "This is the first level.",
        "difficulty": "Easy",
        "data": [
            {
                "type": "info",
                "title": "Welcome to Level 1",
                "content": `
                    <p>
                        This level will introduce you to the basics.
                    </p>
                    <img src="img/intro.png"/>
                `
            },
        ],
    },
    "level2": {
        "name": "Level 2",
        "description": "This is the second level.",
        "difficulty": "Medium",
        "data": [
            {
                "type": "info",
                "title": "Welcome to Level 2",
                "content": `
                    <p>
                        This level will introduce you to more advanced concepts.
                    </p>
                    <img src="img/advanced.png"/>
                `
            },
        ],
    }
}

function loadLevels() {

}

function openLevelSelect() {
    document.getElementById("bar").classList.remove("hidden");
    document.getElementById("levelSelect").classList.remove("hidden");
}

function openSection(element) {
    element.classList.toggle("open");
}

// var levelData = {
//     "level1": {
//         "name": "Level 1",
//         "description": "This is the first level.",
//         "difficulty": "Easy",
//         "data": [
//             {
//                 "type": "info",
//                 "title": "Welcome to Level 1",
//                 "content": `
//                     <p>
//                         This level will introduce you to the basics.
//                     </p>
//                     <img src="img/intro.png"/>
//                 `
//             },
//         ],
//     }
// }