const friends = ["Kalam", "Balam", "Salam", "Gelam", "Pailam", "Khailam"];
friends.pop("Khailam");
console.log(friends);

friends.pop();
console.log(friends);

const out1 = friends.pop();
console.log(friends);
const out2 = friends.pop();
console.log(friends);
console.log(out1, out2);

