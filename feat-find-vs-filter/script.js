$(document).ready(function () {
    $tbody = $("#tblCustomer tbody");

    $("#showButton").click(function () {

        var $names = $("#people li");
        var $output = $("#output");
        //use find to get to the children, and the chiidren of the children
        var $tafiti = $names.find(".tafiti");
        //use filter to get to the peers
        var $oec = $names.filter(".oec");
        
        $output.html("");

        if ($tafiti.length) {
            var html = "";
            $tafiti.each(function () {
                html += "<li>" + $(this).text() + "</li>";
            });
            $output.append(html);
        }else{
            $output.append("<li>No tafiti found</li>");
        }

        if ($oec.length) {
            var html = "";
            $oec.each(function () {
                html += "<li>" + $(this).text() + "</li>";
            });
            $output.append(html);
        }else{
            $output.append("<li>No oec found</li>");
        }
    });
});