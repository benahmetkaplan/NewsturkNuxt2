$(document).ready(function(){

    $(document).on("click", "#appSidebarBtn", function(){
        $("#appSidebar").toggleClass("show");
    });

    $(document).on("click", ".sidebar-menu ul li a", function(){
        $("#appSidebar").removeClass("show");
    });

});