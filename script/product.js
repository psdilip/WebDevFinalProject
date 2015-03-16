$(document).ready(function () {
    $('#tabl1').height('100px');
    $('#table1').width('100px');
    $('#table2').height('100px');
    $('#table2').width('100px');
    $('#table3').height('100px');
    $('#table3').width('100px');

    $('#table1').on("click", function () {
        $('#tabl1').height('500px');
        $('#table1').width('1000px');
        $('#table2').height('100px');
        $('#table2').width('100px');
        $('#table3').height('100px');
        $('#table3').width('100px');
        $('#product1').show();
        
    });
    $('#table2').on("click", function () {
        $('#tabl1').height('100px');
        $('#table1').width('100px');
        $('#table2').height('500px');
        $('#table2').width('1000px');
        $('#table3').height('100px');
        $('#table3').width('100px');
        $('product1').hide();
        $('product3').toggle();
    });

    $('#table3').on("click", function () {
        $('#tabl1').height('100px');
        $('#table1').width('100px');
        $('#table2').height('100px');
        $('#table2').width('100px');
        $('#table3').height('500px');
        $('#table3').width('1000px');
        $('product1').toggle();
        $('product2').toggle();
    });
});