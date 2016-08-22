// back end
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
var joe = new Contact("Joe");
joe.lastName = "Schmoe";

$(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    $("ul#contacts").append("<li>" + newContact.firstName + "</li>");
    $("ul#contacts").append("<li>" + newContact.lastName + "</li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
