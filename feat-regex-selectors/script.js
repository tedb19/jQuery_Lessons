$(document).ready(function () {

    $("#showButton").on('click', function () {

        //here we select all ids that start with 'cc-list-item-'
        displaySpecifiedPersons('[id^=cc-list-item-]');
    });

    $("#showOec").on('click', function () {
        /*
        * here we select all ids that start with 'cc-list-item-',
        * and end with 'oec'.
        */
       displaySpecifiedPersons('[id^=cc-list-item-][id$=oec]');
    });
});

function displaySpecifiedPersons(selector){
    var $output = $('#output');
    var html = '';
    $output.text(''); //clear the output div

    /*
    * since they are many, we use the each function,
    * to get to the individual items. 
    * Using 'this' in that context refers to each individual item
    */
    $(selector).each(function(){
            html += "<li>" + $(this).text() + "</li>";
       });
    $output.append(html);
}