const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const submitBtn = document.querySelector(".submitBtn");
const userList = document.querySelector("#userList");
const title = document.querySelector("#title");

const usersDB = [
    {
        userName: "TomRoj",
        email: "email1@mail.com",
        password: "123456",
    },
    {
        userName: "Mati",
        email: "email2@mail.com",
        password: "mati123",
    },
    {
        userName: "Juancito",
        email: "email3@mail.com",
        password: "john123",
    },
];

submitBtn.addEventListener("click", function () {
    const newUser = {
        userName: user.value,
        password: pass.value,
    };

    const findedUser = usersDB.find(function (user) {
        return user.userName == newUser.value;
    });

    if (findedUser) {
        alert("El usuario ya existe");
    } else {
        if (newUser.password.length < 4) {
            title.innerHTML = "Contraseña insegura";
        } else {
            usersDB.push(newUser);
            userList.innerHTML += `<li> ${newUser.userName} </li>`;
        }
    }
});

usersDB.forEach(function (user) {
    userList.innerHTML += `<li> ${user.userName} </li>`;
});
