const Employee = require('../Models/Employee');

module.exports = function(app) {
    const starterEmployees = [
        {
            name: "Eric",
            title: "Engineer",
            cell: "412-993-2222",
        },
        {
            name: "Allen",
            title: "Manager",
            cell: "412-993-2122",
        },
        {
            name: "Tom",
            title: "Engineer",
            cell: "412-923-2222",
        },
        {
            name: "Alex",
            title: "Engineer",
            gender: "Female",
            cell: "412-923-2222",
            startDate: "2002/09/20",
            email: "alex@1.com"
        },
        {
            name: "Alda",
            title: "Engineer",
            gender: "Female",
            cell: "412-923-1222",
            startDate: "2002/02/20",
            email: "alda@1.com",
            manager: {
                name: "Allen",
                id: "5bb812097c1e3c13b48b3800"
            }
        }
    ];
    Employee.create(starterEmployees, function(err, results) {
        if (err) console.log(err);
        console.log(results);
    });
};