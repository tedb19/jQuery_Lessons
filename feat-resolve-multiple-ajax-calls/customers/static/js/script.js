function getResults(){
  var customerID = 1;
  /*
  * $.when() creates a master deferred object that monitors
  * both of the promises
  * If they both resolve successfully, then done gets executed
  * Otherwise fail gets executed.
  */
  $.when(DataService.getCustomer(customerID),
         OrderDataService.getCustomerOrders(customerID))
      .done(function (customerData, ordersData){
        /*
        * Both customerData and ordersData will return arrays, whereby
        * the first item in the array is the object that we are interested in,
        * the second item is the statusText
        * the third is the jquery Xml Http Request object
        */
        var customer = customerData[0];
        $("#customerName").html(customer.firstName + " " + customer.lastName);
        $("#orderCount").html(ordersData[0].length);
      })
      .fail(function(jqXHR, statusText, err){
        alert("Error using $.when(): " + err);
      });
}

$("#displayResults").on("click", getResults());
