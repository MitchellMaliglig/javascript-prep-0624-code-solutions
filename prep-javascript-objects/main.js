let person = {
  firstName: 'Bob',
  lastName: 'Ross',
  hobby: 'art',
};

console.log(person);

let fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'artist';
console.log("The person's current job is: " + person.job);

person.previousJob = 'pizza boy';
console.log('Their previous job was: ' + person.previousJob);

console.log(person);
