/*
* The $ on the variable just lets us know that the variable will be holding jQuery data
* It's just a convention, but is not required
*/
var $emailContainer;

$(document).ready(function () {

    /*
    * Here we are doing selector caching, to prevent re-querying of the DOM
    * every time the selector is called. Also makes maintenance a breeze
    * because now if emailContainer id changes in name, we only update one place
    */
    $emailContainer = $("#emailContainer");

    /*
    * The following is called function chaining, and is the recommended
    * way of hooking multiple functions onto a selector
    */
    $emailContainer
        .attr("title","Emails")
        .click(function () {
            alert("Clicked container!");
        });

    updatePanels($emailContainer);
});

function updatePanels($context){
    /*
    * find all divs with a css class of 'panel' within the $context selector
    * and then for each of them, execute the callback function
    */
    $context.find("div.panel").each(function (i) {
        $(this).html("Panel " + i);
    });
}