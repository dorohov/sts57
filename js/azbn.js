$(function(){
	
	$(document.body).on('submit.azbn', '.azbn-modal-form', {}, function(event){
		event.preventDefault();
		
		var form = $(this);
		var form_arr = form.serialize();
		
		$.post('/azbn-feedback-form.php', form_arr, function(data){
			
			$('#modal-message .azbn-modal-message-result')
				.html(data)
			;
			$('#modal-message')
				.modal('show')
			;
			
			form.trigger('reset');
			
		});
		
	});
	
});