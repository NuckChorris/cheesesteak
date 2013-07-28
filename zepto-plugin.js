;(function($){
	if (!$.fn.data)
		throw new Error('Cabinet requires $.fn.data; if you are using Zepto, add the data module.')

	$.fn.cabinet = function (input) {
		input = $(input)

		this.on('dragenter', function (e) {
			input.trigger('dragenter')
			e.preventDefault()
		})
		this.on('dragover', function (e) {
			input.trigger('dragover')
			e.preventDefault()
		})
		this.on('dragleave', function (e) {
			input.trigger('dragleave')
			e.preventDefault()
		}, false)
		this.on('drop', function (e) {
			e.preventDefault()
			$(this).trigger('dragleave')
			input[0].files = e.dataTransfer.files
		}, false)
		this.on('click', function (e) {
			input.trigger('click')
		})
	}
})($)
