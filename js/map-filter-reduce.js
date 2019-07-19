const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const moreThanThree = users.filter(user => user.languages.length > 2);
console.log(moreThanThree);


const emailAddress = users.map(user => user.email)
console.log(emailAddress);

const totalYearsExperience = users.reduce(function(accumulation, current){
    const currentYears = current.yearsOfExperience;
    return currentYears + accumulation;
},0);
console.log("average: " + totalYearsExperience/users.length)

const longestEmail = users.reduce(function(previous, current){
    const currentEmail = current.email;
    if(currentEmail.length > previous.length){
        return currentEmail
    } else {
        return previous;
    }
},"");


const instructors = users.reduce(function(previous, current, index, arr){
    if(index === (arr.length - 1)){
        return previous + ` ${current.name}.` ;

    }
    return previous + ` ${current.name},` ;
},"You're instructors are:");


// Use .reduce to get the unique list of languages from the list of users.

const uniquelanguages = users.reduce(function(prev,current){
   const langs = current.languages;
   for(const lang of langs){
       prev.add(lang);
   }
   return prev;
},new Set);
