$('.js-sym-nav-toggle').on('click', function(event){
	event.preventDefault();
	if ($('body').hasClass('offcanvas')) {
		$(this).removeClass('active');
		$('body').removeClass('offcanvas');
	} else {
		$(this).addClass('active');
		$('body').addClass('offcanvas');
	}
});

$('#mc').resizable();
$('#md').draggable();
$('#myModal').on('show.bs.modal', function () {
	$(this).find('.modal-body').css({
		'max-height':'100%'
	});
});

$('#clickNeedToCopy').on('click', function(event){
	event.preventDefault();
	CopyToClipboard('divNeedToCopy');
});
$('#clickNeedToCopyb').on('click', function(event){
	event.preventDefault();
	CopyToClipboard('divNeedToCopyb');
});

CopyToClipboard = (containerid) => {
	CopyTextToClipboard(document.getElementById(containerid).innerText);
}
CopyTextToClipboard = (text) => {
	navigator.clipboard.writeText(text).then(function() {
		alert("Copying to clipboard was successful!");
	}, function(err) {
		console.error('Async: Could not copy text: ', err);
	});
}