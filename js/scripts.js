function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
var joe = new Contact("Joe");
joe.lastName = "Schmoe";
console.log(joe);
