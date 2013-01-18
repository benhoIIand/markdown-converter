var delay, windowWidth;

var $textarea, $addCSS, $btnSave, $btnClear, $dialogOverlay, $dialogyCSS, $codeView, $rememberCSSCheckbox, $extraStylesContainer, $cssTextarea, $ruler, $preview, $window;

var setDelay = function() {
    clearTimeout(delay);
    delay = setTimeout(function() {
        getPreview();
    }, 400);
}

var getPreview = function() {
    $.ajax({
        type: 'post',
        url: 'converter.php',
        data: 'content='+encodeURIComponent($codeView.val()),
        success: function(r) {
            $preview.html(r);
        }
    });
}

var extendJquery = function() {
    $.fn.extend({
        disableSelection: function() {
            return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
                ".ui-disableSelection", function( event ) {
                    event.preventDefault();
                });
        },

        enableSelection: function() {
            return this.unbind( ".ui-disableSelection" );
        }
    });
}

var showHideDialog = function() {
    $dialogyCSS.fadeToggle();
    $dialogOverlay.fadeToggle();
}

var saveStyles = function() {
    if($rememberCSSCheckbox.is(':checked')) {
        localStorage.setItem('css-styles', JSON.stringify($cssTextarea.val()));
    }
    $extraStylesContainer.html($cssTextarea.val());
}

var clearCSSTextarea = function() {
    $cssTextarea.val('');
}

var checkForTabbing = function() {
    if(e.keyCode === 9) {
        e.preventDefault();
        $(this).val($(this).val() + '    ');
    }
}

var updateWindowDimensions = function() {
    windowWidth = $window.width();
}

$(function() {

    extendJquery();

    $textarea = $('#textarea');
    $addCSS = $('#add_css');
    $btnSave = $('#btn_save');
    $btnClear = $('#btn_clear');
    $dialogOverlay = $('#dialog_overlay');
    $dialogyCSS = $('#dialog_css');
    $codeView = $('#code_view');
    $rememberCSSCheckbox = $('#remember_css');
    $preview = $('#preview').contents().find('#content');
    $extraStylesContainer = $preview.next('#extra_styles_container');
    $cssTextarea = $('#css_textarea');
    $ruler = $('#ruler');
    $window = $(window);

    updateWindowDimensions();

    $addCSS.on('click', showHideDialog);
    $btnSave.on('click', saveStyles);
    $btnClear.on('click', clearCSSTextarea);
    $dialogOverlay.on('click', showHideDialog);
    $codeView.on('keyup keydown paste', setDelay).focus();
    $textarea.keydown(checkForTabbing);
    $window.resize(updateWindowDimensions);

    // TIDY THIS FUCKING SHIT UP!!!! ERRRRRRRRRRRRGH
    $ruler
        .on('mousedown', function() {
            $window
                .on('mousemove', function(e) {
                    var fromLeft = e.clientX;
                    if(fromLeft > 200 && fromLeft < windowWidth - 200) {
                        $ruler.css({'left': perc(fromLeft, windowWidth)});
                        $codeView.css({'width': perc(fromLeft, windowWidth)});
                        $preview.css({'width': perc(windowWidth - fromLeft, windowWidth)});
                    }
                })
                .on('mouseup', function() {
                    rulerActive = false;
                    $window
                        .off('mousemove')
                        .off('mouseup');
                });

        }).disableSelection();


    // make a request if there is content in the box already
    if($codeView.val() != '') setDelay();
});

function perc(a, b) {
    console.log(a, b);
    console.log(parseInt(a / b * 100, 10) + '%');
    return parseInt(a / b * 100, 10) + '%';
}