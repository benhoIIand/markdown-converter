var delay;

function setDelay() {
    clearTimeout(delay);
    delay = setTimeout(function() {
        getPreview();
    }, 400);
}

function getPreview() {
    $.ajax({
        type: 'post',
        url: 'converter.php',
        data: 'content='+encodeURIComponent($('#code_view').val()),
        success: function(r) {
            $('#preview').html(r);
        }
    });
}

$(function() {
    $('#add_css').click(function() {
        $('#css_dialog').fadeToggle();
        $('#dialog_overlay').fadeToggle();
    });
    $('#btn_save').click(function() {
        if($('#remember_css').is(':checked')) {
            localStorage.setItem('css-styles', JSON.stringify($('#css_textarea').val()));
        }
        $('#extra_styles').html($('#css_textarea').val());
    });
    $('#btn_clear').click(function() {
        $('#css_textarea').val('');
    });
    $('#dialog_overlay').click(function() {
        $('#css_dialog').fadeToggle();
        $('#dialog_overlay').fadeToggle();
    });
    $('#code_view').on('keyup keydown paste', setDelay).focus();
    $('textarea').keydown(function(e) {
        if(e.keyCode === 9) {
            e.preventDefault();
            $(this).val($(this).val() + '    ');
        }
    });
});