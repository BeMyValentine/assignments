var people = [
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 10
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 30
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 200
    }
];

function combine(people) {
    var combined = [];
    for (var i = 0; i < people.length - 1; i++) {

        for (var j = 1; j < people.length; j++) {
            if (people[i].name === people[j].name && people[i].email === people[j].email) {
                combined.push(people[i]);

                var friends = (people[i].numFriends + people[j].numFriends);

                people.splice(people[j], 1);
            }

        }
    }
    console.log(combined);
    return combined;
}

combine(people);

