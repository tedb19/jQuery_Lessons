/*
* Sometimes, we only want to initialize DOM ellements when its neccessary,
* and this may not be on document ready
* An example is a datepicker. There is no need to wait for the DOM to be ready so as to initialize all 
* the datepickers, when we will only need each individual datepicker on the 'focus' event.
* Moreover, we may even end up initializing datepickers that we never get to use 
* (e.g. a datepicker that is only activated when a given condition is true)
* To prevent this unneccessary work, which slows down the web page, do the following
* To test this, we monkey path the jquery ui datepicker first lets backup the original version
*/
var _datepicker = $.fn.datepicker;

//now create a new wrapper jquery plugin
$.fn.datepicker = function (options) {
  var that = this;
  this.each(function () {
    /*
    * for each datepicker that's initialized, print out
    * a success message, then run the original widget
    */
    toastr.success("Initialized", "DatePicker");
    _datepicker.apply(that, [options]);
  });
};

/*
* avoid using this:
*     $(document).ready(function () {
*        $("input.date").datepicker();
*      });
* and use the following instead:
* add an event listener on document that checks if it has descendants 
* that match the selector 'input.date' that has no 'hasDatepicker' class,
* and checks if these descendants have their 'focus' event fired up,
* then add the datepicker
*/
$(document).on("focus", "input.date:not(.hasDatepicker)", function(e) {
  $(this).datepicker();
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
