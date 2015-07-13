var $members = $("#members");

// Attach a directly bound event handler to 'members'
$members.on("click", function (e) {
    toastr.success(this.tagName, "Click");
});

/*Now how do we prevent the members click event from getting fired, when we click one of the 'li a' ?*/
$members.find("li a")
  .on("click", function (e) {
    e.preventDefault();
    /*
    * Any time one of our anchor tags is clicked, 
    * a click event is fired for that anchor, and then 
    * bubbles up the DOM tree, triggering each of 
    * its parent click event handlers.
    * This means that anytime you click one of our bound anchor tags,
    * you are effectively clicking the entire document body!
    * This is called event bubbling or event propagation.
    * To prevent the 'members' selector click event from getting fired up, use
    * stopPropagation() [Think of it as the 'Dont Tell My Parents' method]
    */
    e.stopPropagation();
    toastr.success(this.tagName, "Click: 1st");
    /* 
    * If we wanted to prevent the next click event from getting fired up, 
    * we'd use the stopImmediatePropagation() method instead 
    * ['Dont Tell My Siblings' method of the events world]
    */
  })
  .on("click", function (e) {
    e.preventDefault();
    toastr.success(this.tagName, "Click: 2nd");
  });

// toastr customization. Get this and more at http://codeseven.github.io/toastr/demo.html
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
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
