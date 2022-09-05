$(document).ready(function () {

    function calculate() {
        let sum = parseInt($("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val()) + parseInt($("#select3 option:selected").val());
        let days = parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days")) + parseInt($("#select3 option:selected").attr("days"));
        $(".days1 .days").text(days);
        $(".price1 .price").text(sum);
    }
    $("select").on("change", function () {
        calculate();
    });
    calculate();

});
