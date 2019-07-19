function wait (milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(milliseconds/1000)
        }, milliseconds);
    })

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then((message) => console.log(message));

wait(1000).then((message)=>{console.log(message);})
wait(2000).then((message)=>{console.log(message);})






// function nameUser (username){
//     return fetch(`https://api.github.com/users${username}/events {headers:{Authorization:token ${gitKey}`})
//         .then(response => response.json())
//         .then(users => users.map(user => user.login));
//
// }
// console.log(nameUser());
//
// nameUser().then((usernames)=> {
//     usernames.forEach((username)=> {
//         console.log(username);
//     });
// }).catch(error => console.error(error));
//


function commits(username) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization':`token ${githubkey}`}})
        .then (response=> response.json())
        .then ((data) => {
            console.log(data)
​
            // const userData = data.map((gitStat) => {
            //     // console.log(gitStat);
            //     if (gitStat.type === "PushEvent") {
            //         return gitStat
            //     }
            // });
        ​
           const userData = data.filter((gitStat) => {
               // console.log(gitStat);
               if (gitStat.type === "PushEvent") {
                   return gitStat
               }
           });
​
           console.log(userData[0].created_at)
        })
        .catch(error => console.error(error))
​
}
​
commits("susanlin0705");