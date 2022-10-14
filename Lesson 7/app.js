// Callbacks and promises
// Simulation: Imagine we are dealing with the posts from server side

posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.querySelector('div').innerHTML += output;
    }, 1000)
}


// callbacks
function createPosts(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

createPosts({title: "Post bad", body: "This is bad post"});
getPosts();


// callbacks
function createPostsCallBack(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPosts({title: "Post Thee", body: "This is post three"}, getPosts);


// Promises
function createPostsPromises(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Smth get wrong!');
            }
        }, 2000);
    });
}

createPostsPromises({title: "Post Four", body: "This is post fours"})
    .then(getPosts)
    .catch(err => console.log(err));


// async await method

async function init() {
    await createPosts({title: "Post Five", body: "This is post five"});
    getPosts();
}

init();

// or
(async() => {
    await createPosts({title: "Post Five", body: "This is post five"});
    await getPosts();
});


// sync await with fetch

let userOutput = ''

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(res);
    const data = await res.json();
    console.log(data);
    data.forEach(user => {
        userOutput += `name: ${user.name} <br> username: ${user.username} <br> email: ${user.email} <br><br>`
    })

document.querySelector('div').innerHTML += userOutput;


}

fetchUsers();

