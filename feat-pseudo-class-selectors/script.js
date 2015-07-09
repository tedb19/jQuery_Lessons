/*
* Here we create a custom pseudo class selector that selects all hidden panels
* Pseudo class selectors are CSS selectors with a colon preceding them. Examples include:
*   :first
*   :hover
*   :visited
* They are normally used to filter items within the DOM.
* jQuery can use all of these in its selectors, and also provides a way to create custom ones
*
*/

/*
* Extend the expression, which is the colon, by adding the object given in the second
* parameter, to the available pseudo class selectors
* The object has to have the name of the custom pseudo class selector, as well as the function to 
* use when filtering
*/
$.extend($.expr[":"], {
    hiddenPanel: function (pnl) {
        if(pnl === null) return false;

        //wrap the pnl inside a jQuery wrapper so as to have access to jQuery awesomeness
        var $pnl = $(pnl);
        return $pnl.css("display") == "none" || 
               $pnl.css("visibility") == "hidden" ||
               $pnl.hasClass("hidden");
    }
});

$(document).ready(function () {
    $("#showPanels").click(function () {
        //use the hiddenPannel custom pseudo class selector to get all hidden panels
        $("div:hiddenPanel")
            .removeClass("hidden")
            .css({"display":"","visibility":""});
    });
});