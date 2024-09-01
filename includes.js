const friends = ['Kalam', 'Balam', 'Salam', 'Gelam', 'Pailam', 'Khailam'];

console.log(friends.includes('Gelam'));
console.log(friends.includes('Nilam'));

if(friends.includes('Salam')){
  console.log('Party');
}
else {
  console.log('No Party');
}

if(friends.includes('salam')){
  console.log('Party');
}
else {
  console.log('No Party');
}