
function greet(user) {
  console.log(
    `${user.gender == "Male" ? "MR." : "MRS."} ${user.firstname} ${
      user.lastname
    } your age is ${user.age} and you ${
      user.age >= 18 ? "can vote" : "cannot vote"
    }`
  );
}

let user = {
  firstname: "Manish",
  age: 20,
  lastname: "Nayak",
  gender: "Male",
};
greet(user);
