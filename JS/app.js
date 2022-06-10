let teamMembers = [
    {
        names: "Aladesuru Oriyomi",
        track: "Beginner Frontend",
        bestFood: "Pounded yam and okro soup",
        complexion: "Dark",
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "Charmed",
        age: 23,
    },
    {
        names: "Igah Abiye",
        track: "Beginner Frontend",
        bestFood: "Ewa Agoyin",
        complexion: "Chocolate black",
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "Halo",
        age: 21,
    },
    {
        names: "Amos Thibault",
        track: "Beginner Frontend",
        bestFood: "Uburobe and ndagara",
        complexion: "Dark",
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "SUITS",
        age: 23,
    },
    {
        names: "Susan Chepkosgei",
        track: "Beginner Frontend",
        bestFood: "Pilau and chicken",
        complexion: "Dark",
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "The Darkest Minds",
        age: 22,
    },
    {
        names: "Susan Mwende",
        track: "Beginner Frontend",
        bestFood: "Chips and chicken",
        complexion: "Dark",
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "The Legend",
        age: 21,
    },
    {
        names: "Izima Obisike",
        track: "Beginner Frontend",
        bestFood: "Eba and Egusi",
        complexion: "fair",
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "House MD",
        age: 22,
    },
    {
        names: "Austin Tonayam (Lead)",
        track: "Beginner Frontend",
        bestFood: "Spaghetti",
        complexion: "dark",
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "Inglorious Basterds",
        age: 22,
    },
    {
        names: "Oyindamola Ogunkunle",
        track: "Beginner Frontend",
        bestFood: "Amala with Abula",
        complexion: "dark",
        thingsLearnt: ["HTML", "CSS", "Bootstrap", "Javascript"],
        bestMovie: "Nil",
        age: 24,
    },

]

let names = document.querySelectorAll("name");
let track = document.querySelectorAll("#track");
let bestFood = document.querySelectorAll("#bestFood");
let complexion = document.querySelectorAll("#complexion");
let learnt = document.querySelectorAll("#learnt");
let age = document.querySelectorAll("#age");
let bestMovie = document.querySelectorAll("#bestMovie");


for (let i = 0; i < teamMembers.length; i ++) {
    let member = teamMembers[i]
    let textList = "";
    textList += `${member.thingsLearnt}`;
    

    console.log(textList)
    document.querySelector(".swiper-wrapper").innerHTML += 
                `<div class="swiper-slide">
                    <div class="member-box rounded-3 container">
                        <div class="image overflow-hidden">
                            <img class="img-fluid w-100" src="images/member${i+1}.jpg" height="500px">
                        </div>
                        <div class="description w-100">
                            <div class="description-inner">
                                <h4 id="name" class="pb-1"><span id="namespan">Name: </span>${member.names}</h4>
                                <p id="track"><span>Track: </span>${member.track}</p>
                                <p id="bestFood"><span>Best Food: </span>${member.bestFood}</p>
                                <p id="complexion"><span>Complexion: </span>${member.complexion}</p>
                                <p id="learnt"><span>Things Learnt: </span>${textList}.</p>
                                <p  id="bestMovie"><span>Best Movie: </span>${member.bestMovie}</p>
                                <p  id="age"><span>Age: </span>${member.age} years old</p>
                                <button class="btn btn-primary rounded-pill px-4 py-2 my-2 me-auto" onclick="show(${i})">Click Me, Please</button>
                            </div>
                        </div>
                    </div>
                </div>`
}

function show(n) {
    alert(`Hi. I'm ${teamMembers[n].names}. Nice to meet you.`)
}

// let btns = document.querySelectorAll(".btn")
// btns.forEach((show(btn)) {

// })
