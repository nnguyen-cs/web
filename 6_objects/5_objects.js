const group = {
    members: {
        leader: {
            name: "Emily",
            major: "CS",
        },
        researcher: {
            name: "Elon",
            major: "Physics",
        },
        coder: {
            name: "Trumph",
            major: "Econ"
        }
    },
    guest: {
        admin: {
            name: "testing"
        }
    }
}

// loop through the group object
for(let role in group.members){
    console.log(group.members[role].name);
}