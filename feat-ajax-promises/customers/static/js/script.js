
var urlBase = 'customers/api';

function getCookie (name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

  $("#getCustomers").on("click", function () {
    getCustomers();
  });

  $("#updateCustomers").on("click", function () {
    updateCustomer();
  });

  $("#insertCustomers").on("click", function () {
    addCustomer();

  });

/*
* The following is a reusable function, that only knows how to get 
* the customers. This function returns a promise
*/
function getCustomersData() {
  /**
   * The following ajax request returns a promise. 
   * The only difference from a normal ajax request is that we 
   * dont include the callback functions for the response.
   * Instead, the ajax request returns a promise, which we
   * then use to access the callbacks
   */
  return $.ajax({url: urlBase + "/get_customers/"});
}

/*
* The following is a reusable function, that only knows how to update 
* a customer. This function returns a promise
*/
function updateCustomerData(customer){
    
    return $.ajax ({
      url: urlBase + '/update_customer/'+customer.id + '/',
      data: customer,
      type: 'PUT',
      headers: {"X-CSRFToken": getCookie('csrftoken')}
    });
}

function addCustomerData(customer) {
  return $.ajax({
    url: urlBase + "/add_customer/",
    data: customer,
    type: 'POST',
    headers: {"X-CSRFToken": getCookie('csrftoken')},
  });
}

function addCustomer() {

  //simulate customer data, since we dont have a form yet
    var customer = {
      firstName: "Bon",
      lastName: "Jovi"
    };
    
    addCustomerData(customer)
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
  var promise = getCustomersData();

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
    
    updateCustomerData(customer)
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
