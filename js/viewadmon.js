var $MODAL_BACKGROUND = $("#js-modal-background");
var $MODAL = $("#js-modal");
var $VIEW_MODAL = $(".js-view-modal");
var $CLOSE_MODAL = $("#js-close-modal");

// view modal
$VIEW_MODAL.click(function() {
    $MODAL_BACKGROUND.fadeIn();
    $MODAL.slideDown();

});

// close modal
$CLOSE_MODAL.click(function() {
    $MODAL.slideUp();
    $MODAL_BACKGROUND.fadeOut();
});

// close modal when clicking modal background
$MODAL_BACKGROUND.click(function() {
    $MODAL.slideUp();
    $MODAL_BACKGROUND.fadeOut();
});