var levelData = [
    {
        "name": "Section 1",
        "description": "This is the first section.",
        "progress": 0,
        data: [
            {
                "name": "Level 1",
                "description": "This is the first level.",
                "difficulty": "Easy",
                "progress": 0,
                "data":
                    [
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
            {
                "name": "Level 2",
                "description": "This is the second level.",
                "difficulty": "Easy",
                "progress": 0,
                "data":
                    [
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
        ],
    },
];

function loadLevelSelect() {
    const levelSelect = document.getElementById("levelSelect");
    // Remove old sections (except the h1)
    Array.from(levelSelect.querySelectorAll(".levelSection")).forEach(e => e.remove());

    for (let i = 0; i < levelData.length; i++) {
        const section = document.createElement("div");
        section.classList.add("levelSection");

        // Top bar
        const top = document.createElement("div");
        top.classList.add("top");

        // Progress
        const progress = document.createElement("span");
        progress.classList.add("progress");
        progress.innerText = (levelData[i].progress || 0) + "% complete";
        top.appendChild(progress);

        // Dropdown icon
        const dropdown = document.createElement("img");
        dropdown.src = "img/icons/dropdown.png";
        dropdown.classList.add("dropdown");
        top.appendChild(dropdown);

        // Section title
        const sectionTitle = document.createElement("h2");
        sectionTitle.innerText = levelData[i].name;
        top.appendChild(sectionTitle);

        // Section description
        const sectionDescription = document.createElement("span");
        sectionDescription.classList.add("description");
        sectionDescription.innerText = levelData[i].description;
        top.appendChild(sectionDescription);

        section.appendChild(top);

        // Levels list
        const ul = document.createElement("ul");
        if (levelData[i].data) {
            for (let j = 0; j < levelData[i].data.length; j++) {

                // Individual level
                const level = levelData[i].data[j];
                const li = document.createElement("li");
                li.classList.add("level");

                // Progress
                const prog = document.createElement("span");
                prog.classList.add("progress");
                prog.innerText = (level.progress || 0) + "% complete";
                li.appendChild(prog);

                // Level Heading
                const h4 = document.createElement("h4");
                h4.innerText = level.name;
                li.appendChild(h4);

                // Level Difficulty
                const dif = document.createElement("i");
                dif.classList.add("difficulty");
                dif.innerText = level.difficulty;
                li.appendChild(dif);

                // Level Description
                const desc = document.createElement("span");
                desc.classList.add("description");
                desc.innerText = level.description;
                li.appendChild(desc);

                ul.appendChild(li);
            }
        }
        section.appendChild(ul);

        // Toggle open/close on click
        top.onclick = function () {
            section.classList.toggle("open");
        };

        levelSelect.appendChild(section);
    }
}

function openLevelSelect() {
    loadLevelSelect();
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