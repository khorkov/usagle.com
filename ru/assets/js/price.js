jQuery(function() {
    var tarif = 6,
        result_outptut = jQuery("#revenue span"),
        client = 24,
        revenue = 0,
        check = 4000,
        time = 3;

    function recount() {
        revenue = (client+check+time)*tarif;
        result_outptut.html(revenue + ' tokens');
    };
    jQuery('#tarif').change(function() {
        tarif = jQuery('#tarif option:selected').val();
        recount();
    });
    $(document).on("change keyup", "#amount", function() {
        client = +$(this).val();
        $("#slider-range-min").slider("value", client);
        recount();
    });
    $(document).on("change keyup", "#amount2", function() {
        check = +$(this).val();
        $("#slider-range-min2").slider("value", check);
        recount();
    });
    $(document).on("change keyup", "#amount3", function() {
        time = +$(this).val();
        $("#slider-range-min3").slider("value", time);
        recount();
    });
});
$(function() {
    $("#slider-range-min").slider({
        range: "min",
        value: 24,
        min: 1,
        max: 700,
        slide: function(event, ui) {
            $('#amount').val(ui.value).trigger("change");
        }
    });
    $("#amount").val($("#slider-range-min").slider("value"));
});

$(function() {
    $("#slider-range-min2").slider({
        range: "min",
        value: 4000,
        min: 1000,
        max: 40000,
        slide: function(event, ui) {
            $("#amount2").val(ui.value).trigger("change");
        }
    });
    $("#amount2").val($("#slider-range-min2").slider("value"));
});

$(function() {
    $("#slider-range-min3").slider({
        range: "min",
        value: 3,
        min: 1,
        max: 10,
        slide: function(event, ui) {
            $("#amount3").val(ui.value).trigger("change");
        }
    });
    $("#amount3").val($("#slider-range-min3").slider("value"));
});