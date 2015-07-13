/* Here, we store the metadata information on the 'members' selector, i.e. event delegation.
* So basically, here we are saying that we want a selector that looks like 
* 'li a' that is under #members, and we want to match the event (click)
* and we want to invoke the handler too.
* So if you want to use this callback function/event handler, you must have
* a 'li a' selector under the 'members' selector, and you must invoke the click event.
* This is important when you are adding ellements dynamically onto the DOM
*/
$("#members").on("click","li a", function (e) {
    e.preventDefault();
    toastr.success($(this).text(), "click");
});

/* Here we are adding a new 'li a' under 'members', and we want it to have the same event-handler 
* on its click event
*/
$("button").on("click", function (e) {
  $('<li><a href="#">Detail 6</a></li>').appendTo("#members");
})

// toastr customization. Get this and more at http://codeseven.github.io/toastr/demo.html
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}