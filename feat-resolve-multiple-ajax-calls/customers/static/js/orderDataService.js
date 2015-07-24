var OrderDataService = function (){

    var urlBase = 'orders/api/',

    getCustomerOrders = function(customerID) {
        return $.ajax({
            url: urlBase + 'get_orders/',
            data: {'customerID': customerID},
            type: 'POST',
            headers: {"X-CSRFToken": Utility.getCookie('csrftoken')}
        });
    };

    return {
        getCustomerOrders: getCustomerOrders
    }
}(); //make it a singleton (self-invoking)