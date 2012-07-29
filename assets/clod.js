Clod = (function(c) {
	var version = 0.2,
	    Glyph = (function() {
		    function Glyph() {
			    this._history = {
				    stack: [],
				    index: 0
			    };

			    this.contours = [];
			    this.open = true;
		    }

		    Glyph.prototype.history = function() {};

		    return Glyph;
	    })(),

	    GlyphSet = (function() {
		    function GlyphSet() {
		    }

		    /* Glyphset::find()
		     * usage:
		     *   id:   Glyphset.find(int)
		     *   name: Glyphset.find('string')
		     */

		    GlyphSet.prototype.find   = function() {};
		    GlyphSet.prototype.create = function() {};
		    GlyphSet.prototype.remove = function() {};

		    return GlyphSet;
	    })();

	function Clod(c) {
		//if (!(this instanceof Clod))
		//	return new Clod(c);

		var named   = {},
		    unicode = {};

		this.data = {
			format: 'clodifle',
			version: version,

			generator: {
				name:    'Fontclod',
				release: Fontclod.release,
				version: Fontclod.version,
				build:   Fontclod.build
			},

			font: {
				name: c.name || '',

				version: {
					major: (c.version || {}).major || 0,
					minor: (c.version || {}).minor || 0
				},

				family:  c.family  || '',
				style:   c.style   || '',

				width:   c.width   || 400,
				ascent:  c.ascent  || 400,
				descent: c.descent || 100,
				cap:     c.cap     || 0,
				xHeight: c.xHeight || 0,
				angle:   c.angle   || 0,

				glyphs: named
			}
		};

		this.glyph = {
			named: named,
			unicode: unicode
		};
	}

	Clod.prototype.serialize   = function() {};
	Clod.prototype.unserialize = function() {};

	Clod.prototype.findGlyph = function(search) {
		if (search[0] == '#') {
			search = search.substr(1);

			if (this.glyphs.unicode.hasOwnProperty(search))
				return this.glyphs.unicode[search];
		} else {
			if (this.glyphs.named.hasOwnProperty(search))
				return this.glyphs.named[search];
		}

		return undefined;
	};

	Clod.prototype.createGlyph = function() {
	};

	Clod.prototype.removeGlyph = function() {
	};

	Clod.prototype.serialize = function() {
	};

	// to aid in copy()
	Clod.prototype.valueOf = function() {
		return new this.constructor(this);
	};

	return Clod;
})();
