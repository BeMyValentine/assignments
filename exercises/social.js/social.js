var singer = {
    name: "Gabe",
    age: 26,
    topGenres:[],
    favoriteSongs: ["Bridge Over Troubled Water", "You Raise Me Up", "Indestructible"],
    simpleFunction: function () {
        console.log(singer.bandMembers[3].backupBassist.name);
    },
    bandMembers: [
        {
            Instrument: "Guitar",
            name: "Daniel Pak",
            age: 23,
            favoriteSongs: ["Like a Virgin", "Stop in the Name of Love", "Party in the USA"],
            backupGuitarist: {
                name: "Jarom Wilcox",
                age: 26,
                favoriteSongs: ["Sacrimony", "Polyamorous"],
            },
            },
        {
            Instrument: "Piano",
            name: "Morgan Handley",
            age: 15,
            favoriteSongs: ["Eye of the Tiger", "Rockbox"],
            backupPianist: {
                name: "Janeen Hare",
                age: 50,
                favoriteSongs: ["He Aint Heavy, Hes My Brother", "Bread"],
            }
        },
        {
            Instrument: "Drums",
            name: "Aaron Baum",
            age: 30,
            favoriteSongs: ["Brown Eyes", "No Rain"],
            backupDrummer: {
                name: "Anthony Hathaway",
                age: 33,
                favoriteSongs: ["Shoots and Ladders", "Black Hole Sun"]
            }
        },
        {
            Instrument: "Bass",
            name: "Josh Anonymity",
            age: 23,
            favoriteSongs: ["Bloody Mary", "Rock You Like a Hurricane"],
            backupBassist: {
                name: "Bob Ziroll",
                age: 12,
                favoriteSongs: ["White and Nerdy", "Pocket Calculator", "Computer Love"]
            }
        }
    ]
};
singer.topGenres.push("Country", "R&B", "Classical");
singer.isClassicallyTrained = false;
singer.bandMembers[3].backupBassist.isAGreatTeacher = true;