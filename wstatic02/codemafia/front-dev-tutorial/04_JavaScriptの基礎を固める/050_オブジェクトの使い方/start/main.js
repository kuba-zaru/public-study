// オブジェクトを定義する
const person = {
  name: ["Code", "Mafia"],
  age: 32,
  gender: "male",
  interests: {
    sports: "soccer",
    music: "piano",
  },
  getFullName: function () {
    return this.name[0] + " " + this.name[1];
  },
};

console.log(person);
console.log(person.getFullName());
