Fontclod = (function() {
	var version = 0.0012,
	    build   = 79,
	    release = 'alpha',
	    events  = 'focus click undo redo load save glyphchange glyphadd glyphremove';

	function Fontclod() {
		var glyph, clod;

		this.__defineGetter__('build',   function() { return build; });
		this.__defineGetter__('version', function() { return version; });
		this.__defineGetter__('release', function() { return release; });

		this.__defineGetter__('glyph', function() {
			return glyph;
		});

		this.__defineSetter__('glyph', function(val) {
			if (/^[a-z0-9_.]+$/i.test(val))
				glyph = val;

			if (!Fontclod.clod.glyph.find(glyph))
				Fontclod.clod.glyph.create({ name: glyph });
		});
	}

	Fontclod.prototype.on = function() {};
	Fontclod.prototype.emit = function() {};

	return new Fontclod();
})();
