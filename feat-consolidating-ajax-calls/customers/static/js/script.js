
var urlBase = 'customers/api';



  $("#getCustomers").on("click", function () {
    getCustomers();
  });

  $("#updateCustomers").on("click", function () {
    updateCustomer();
  });

  $("#insertCustomers").on("click", function () {
    addCustomer();

  });




function addCustomer() {

  //simulate customer data, since we dont have a form yet
    var customer = {
      firstName: "Bon",
      lastName: "Jovi"
    };
    
    DataService.addCustomer(customer)
        .done(function () {
          $('#outputDiv')
            .css("color","green") //this is just for the demo. You should addClass instead!
            .html('Added customer! Refreshing customer list!');
          //reusing the getCustomer method, which knows how to handle the callbacks
          getCustomers();
        })
        .fail(function (jqXHR, textStatus, err){
 
        })
}

/*
* This function gets the promise from the ajax request, and handles all
* the callbacks.
* done executes the success callback,
* fail executes the error callback
* always executes the complete callback
*/
function getCustomers() {
  var promise = DataService.getCustomers();

  promise
    .done(function (custs) {
        var custHtml = "";
        for (var i = 0; i < custs.length; i++) {
          custHtml += "<li>" + custs[i].first_name + " " + custs[i].last_name + "</li>";
        };

        $("#customersContainer").html(custHtml);
        $('#outputDiv')
        .css("color","green") //this is just for the demo. You should addClass instead!
        .html('Loaded Customers');
    })
    .fail(function () {
      $("#customersContainer").html('Oooops! Unable to get customers');
    })
    .always(function () {
      
    })
}

function updateCustomer() {

    //simulate customer data, since we dont have a form yet
    var customer = {
      id: 2,
      firstName: "Daisy",
      lastName: "Backer"
    };
    
    DataService.updateCustomer(customer)
        .done(function () {
          $('#outputDiv')
            .css("color","green") //this is just for the demo. You should addClass instead!
            .html('Updated Customer! Refreshing customer list!');
          //reusing the getCustomer method, which knows how to handle the callbacks
          getCustomers();
        })
        .fail(function (jqXHR, textStatus, err){
 
        })

}
