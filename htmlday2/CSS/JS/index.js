const employee={
    ename: "Rahul Kumar",
    eage:"30",
    eaddress:"Ghaziabad",
    planguage:[
        {
        lang1:"java",
        lang2:"Python"
    },
    {
        database1:"oracle",
        database2:"MySql"
    },
    {
        framework1:"Hibernate",
        framework2: "spring"
    }
]
}
// console.log(employee);
// console.log(employee.ename);
// console.log(employee);
// console.log(employee.planguage[0].lang2);
// employee.company="Infosys";
// console.log(employee);

// employee.planguage[1].database1="Mongodb";
// console.log(employee);

delete employee.ename;
console.log(employee);




