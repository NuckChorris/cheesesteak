;(function () {
	/* Lightweight EventEmitter implementation */
	var EventEmitter = function () {}
	EventEmitter.prototype._events = {}

	EventEmitter.prototype.bind = function (evt, fn) {
		this._events[evt] = this._events[evt] || []
		this._events[evt].push(fn)
	}
	EventEmitter.prototype.unbind = function (evt, fn) {
		if (evt in this._events === false) return
		this._events[evt].splice(this._events[evt].indexOf(fn), 1)
	}
	EventEmitter.prototype.emit = function (evt, is_promise) {
		if (evt in this._events === false) return

		for (var i = 0, l = this._events[evt].length; i < l; i++) {
			this._events[evt][i].apply(this, Array.prototype.slice.call(arguments, 1))
		}
	}

	/* Copy the stuff from Array to FileList */
	FileList.prototype.forEach = Array.prototype.forEach
	FileList.prototype.every = Array.prototype.every
	FileList.prototype.some = Array.prototype.some
	FileList.prototype.filter = Array.prototype.filter
	FileList.prototype.map = Array.prototype.map
	FileList.prototype.reduce = Array.prototype.reduce
	FileList.prototype.reduceRight = Array.prototype.reduceRight

	Object.defineProperty(FileList.prototype, "size", {
		get: function getSize () {
			return this.map(function(item) {
				return item.size
			}).reduce(function (prev, curr) {
				return prev + curr
			})
		}
	})

	/* Utility to convert bytes into human units */
	var humanSize = {
		get: function humanSize (size) {
			var units = ["B", "KiB", "MIB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
			var e = Math.floor(Math.log(this.size) / Math.log(1024))
			return (this.size / Math.pow(1024, e)).toFixed(2) + " " + units[e]
		}
	}
	Object.defineProperty(FileList.prototype, "humanSize", humanSize)
	Object.defineProperty(File.prototype, "humanSize", humanSize)

	/* Object URL stuff */
	Object.defineProperty(File.prototype, "url", {
		get: function getURL () {
			return window.URL.createObjectURL(this);
		}
	})
	File.revokeURL = function revokeURL (url) {
		window.URL.revokeObjectURL(url)
	}

})()
