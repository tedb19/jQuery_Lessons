/*
* the dataservice class uses the revealing module pattern
* The return statement returns the public API, which in return exposes the internal API
* All of the methods here return promises.
* the DataService class is self-invoked, which means
* you dont need to create an instance so as to use
* the methods (singleton)
* DataService is a single responsiblity class, i.e.
* it only knows how to make ajax calls for the customer app.
* In this case since we only have one entity (customer), we only
* have one dataservice. If we had several, we'd create a dataservice
* for each, e.g. CustomerDataService, OrderDataService etc
*/
var DataService = function () {
    var urlBase = 'customers/api',

    getCustomers = function () {
        return $.ajax({
            url: urlBase + "/get_customers/"
        });
    },

    insertCustomer = function (cust) {
        return $.ajax({
            url: urlBase,
            data: cust,
            type: 'POST'
        });
    },

    updateCustomer = function (customer){
        return $.ajax ({
          url: urlBase + '/update_customer/'+customer.id + '/',
          data: customer,
          type: 'PUT',
          headers: {"X-CSRFToken": getCookie('csrftoken')}
        });
    },

    addCustomer = function (customer) {
        return $.ajax({
            url: urlBase + "/add_customer/",
            data: customer,
            type: 'POST',
            headers: {"X-CSRFToken": getCookie('csrftoken')},
        });
    },

    deleteCustomer = function (id) {
        return $.ajax({
            url: urlBase + id,
            type: 'DELETE'
        })
    };

    return {
        getCustomers: getCustomers,
        insertCustomer: insertCustomer,
        deleteCustomer: deleteCustomer,
        addCustomer: addCustomer,
        updateCustomer: updateCustomer
    }
}();

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