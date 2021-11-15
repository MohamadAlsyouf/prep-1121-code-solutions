const person = {
  firstName: 'Erik',
  lastName: 'Satie',
  hobby: 'Music'
};
person.job = 'Composer';
person.previousJob = 'Chill guy';
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);
console.log("The person's current job is: " + person.job);
console.log("The person's previous job was: " + person.previousJob);
console.log('The complete person object: ');
console.log(person);
