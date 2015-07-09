var $tbody;

$(document).ready(function () {
    $tbody = $("#tblCustomer tbody");

    $("#btnLoadCustomers").click(function () {
         $tbody.html("");
         var start = new Date().getTime();
         var customers = getCustomers();
         var tableRows = '';

         for (var i = 0; i < customers.length; i++) {
            /*
            * Avoid intteracting with the DOM within a loop, e.g. $tbody.append(tr);
            * Instead, form the tr(s) or list elements through string concatenation
            * then after the loop, append the entire string at once 
            */
             var customer = customers[i];
             tableRows += "<tr>" +
             "<td>" + customer.id +"</td>" +
             "<td>" + customer.name +"</td>" +
             "<td>" + customer.address +"</td>" +
             "<td>" + customer.city +"</td>" +
             "<td>" + customer.state +"</td></tr>\n";
         };

         $tbody.append(tableRows);

         var end = new Date().getTime();
         var diff = end - start;
         $("#diff").html(diff); 
    });
});

function getCustomers() {
    var customers = [];

    for (var i = 0; i < 4000; i++) {
        var customer = {
            id: i,
            name: "John Doe",
            address: "12345 Some St.",
            city: "Chandler",
            state: "Arizona"
        };
        customers.push(customer);
    };
    return customers;
}