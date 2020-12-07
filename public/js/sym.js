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
function CopyToClipboard(containerid) {
	if (document.selection) {
	  var range = document.body.createTextRange();
	  range.moveToElementText(document.getElementById(containerid));
	  range.select().createTextRange();
	  document.execCommand("copy");
	} else if (window.getSelection) {
	  var range = document.createRange();
	  range.selectNode(document.getElementById(containerid));
	  window.getSelection().addRange(range);
	  document.execCommand("copy");
	}
	alert("Text has been copied, now paste in the text-area");
  }