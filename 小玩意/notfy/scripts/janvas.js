// https://github.com/JarenChow/Janvas Created by JarenChow in 2020 janvas.js v2.9.9
!function (global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : (global = global || self).janvas = factory()
}(this, function () {
    "use strict";

    function Utils() {
    }

    function Entry(value) {
        this.value = value
    }

    function LinkedList() {
        this.clear()
    }

    function LRU(maxSize) {
        this._list = new LinkedList, this._map = new Map, this._maxSize = isNaN(maxSize) ? 10 : maxSize
    }

    function Rgb(red, green, blue, alpha) {
        this.init(red, green, blue, alpha)
    }

    function Hsl(hue, saturation, lightness, alpha) {
        this.init(hue, saturation, lightness, alpha)
    }

    function Matrix() {
        this.offsetX = Matrix.DEFAULT_OFFSET_X, this.offsetY = Matrix.DEFAULT_OFFSET_Y, this.angle = Matrix.DEFAULT_ANGLE, this._cos = Matrix.DEFAULT_COS, this._sin = Matrix.DEFAULT_SIN, this.scaleX = Matrix.DEFAULT_SCALE_X, this.scaleY = Matrix.DEFAULT_SCALE_Y, this.skewX = Matrix.DEFAULT_SKEW_X, this._tanX = Matrix.DEFAULT_TAN_X, this.skewY = Matrix.DEFAULT_SKEW_Y, this._tanY = Matrix.DEFAULT_TAN_Y, this._tanV = Matrix.DEFAULT_TAN_V
    }

    function Style() {
        this.alpha = Style.DEFAULT_ALPHA, this.compositeOperation = Style.DEFAULT_COMPOSITE_OPERATION, this.filter = Style.DEFAULT_FILTER
    }

    function ShadowStyle() {
        Style.call(this), this.shadowBlur = ShadowStyle.DEFAULT_SHADOW_BLUR, this.shadowColor = ShadowStyle.DEFAULT_SHADOW_COLOR, this.shadowOffsetX = ShadowStyle.DEFAULT_SHADOW_OFFSET_X, this.shadowOffsetY = ShadowStyle.DEFAULT_SHADOW_OFFSET_Y
    }

    function FillStrokeStyle() {
        ShadowStyle.call(this), this.fillStyle = FillStrokeStyle.DEFAULT_FILL_STYLE, this.strokeStyle = FillStrokeStyle.DEFAULT_STROKE_STYLE
    }

    function ShapeStyle() {
        FillStrokeStyle.call(this), this.lineDash = ShapeStyle.DEFAULT_LINE_DASH, this.lineDashOffset = ShapeStyle.DEFAULT_LINE_DASH_OFFSET, this.lineWidth = ShapeStyle.DEFAULT_LINE_WIDTH, this.lineCap = ShapeStyle.DEFAULT_LINE_CAP, this.lineJoin = ShapeStyle.DEFAULT_LINE_JOIN, this.miterLimit = ShapeStyle.DEFAULT_MITER_LIMIT
    }

    function TextStyle() {
        ShapeStyle.call(this), this.font = TextStyle.DEFAULT_FONT, this.textAlign = TextStyle.DEFAULT_TEXT_ALIGN, this.textBaseline = TextStyle.DEFAULT_TEXT_BASELINE, this.direction = TextStyle.DEFAULT_DIRECTION
    }

    function ImageStyle() {
        ShapeStyle.call(this), this.smoothingEnabled = ImageStyle.DEFAULT_SMOOTHING_ENABLED, this.smoothingQuality = ImageStyle.DEFAULT_SMOOTHING_QUALITY
    }

    function Point(x, y) {
        this.init(x, y)
    }

    function Collision() {
    }

    function Animate(func, duration, interval) {
        this.func = func, this.duration = isNaN(duration) ? 0 : duration, this.interval = interval, this._requestId = void 0, this._loopBind = this._loop.bind(this), this._init()
    }

    function AnimateITV(func, duration, interval) {
        Animate.call(this, func, duration, interval || 16)
    }

    function AnimateRAF(func, duration, interval) {
        Animate.call(this, func, duration, interval)
    }

    function $Animation(animate, duration, interval, beforeUpdate, onUpdate, afterUpdate) {
        this.animate = animate, this.duration = isNaN(duration) ? 0 : duration, this.interval = interval, this._overflow = 0, beforeUpdate && (this.beforeUpdate = beforeUpdate), onUpdate && (this.onUpdate = onUpdate), afterUpdate && (this.afterUpdate = afterUpdate)
    }

    function Shape(ctx, sx, sy, ox, oy) {
        this.ctx = ctx, this.init(sx, sy, isNaN(ox) ? 0 : ox, isNaN(oy) ? 0 : oy), this.setMatrix(new Matrix), this._initStyle()
    }

    function Arc(ctx, sx, sy, radius, startAngle, endAngle, anticlockwise, ox, oy) {
        Shape.call(this, ctx, sx, sy, ox, oy), this.setRadius(radius).setStartAngle(isNaN(startAngle) ? 0 : startAngle).setEndAngle(isNaN(endAngle) ? 2 * Math.PI : endAngle).setAnticlockwise(!!anticlockwise)
    }

    function Sector(ctx, sx, sy, radius, startAngle, endAngle, anticlockwise, ox, oy) {
        Arc.call(this, ctx, sx, sy, radius, startAngle, endAngle, anticlockwise, ox, oy)
    }

    function Ring(ctx, sx, sy, outerRadius, innerRadius, startAngle, endAngle, anticlockwise, ox, oy) {
        Arc.call(this, ctx, sx, sy, outerRadius, startAngle, endAngle, anticlockwise, ox, oy), this.setInnerRadius(innerRadius)
    }

    function Ellipse(ctx, sx, sy, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise, ox, oy) {
        Arc.call(this, ctx, sx, sy, radiusX, startAngle, endAngle, anticlockwise, ox, oy), this.setRadiusY(radiusY).setRotation(isNaN(rotation) ? 0 : rotation)
    }

    function RegularPolygon(ctx, sx, sy, radius, sides, ox, oy) {
        Arc.call(this, ctx, sx, sy, radius, 0, 2 * Math.PI, !1, ox, oy), this.setSides(sides)
    }

    function RegularStar(ctx, sx, sy, radius, sides, ox, oy) {
        RegularPolygon.call(this, ctx, sx, sy, radius, sides, ox, oy)
    }

    function Rect(ctx, sx, sy, width, height, ox, oy) {
        Shape.call(this, ctx, sx, sy, ox, oy), this.setWidth(width).setHeight(height)
    }

    function Grid(ctx, sx, sy, width, height, spacing, ox, oy) {
        Rect.call(this, ctx, sx, sy, width, height, ox, oy), this.setSpacing(spacing)
    }

    function RoundRect(ctx, sx, sy, width, height, radius, ox, oy) {
        Rect.call(this, ctx, sx, sy, width, height, ox, oy), this.setRadius(radius)
    }

    function $Image(ctx, sx, sy, src, ox, oy, width, height, cropX, cropY, cropWidth, cropHeight) {
        Rect.call(this, ctx, sx, sy, width, height, ox, oy), this.setAdjustSize(isNaN(width) || isNaN(height)).setCropX(cropX).setCropY(cropY).setCropWidth(cropWidth).setCropHeight(cropHeight), "[object String]" === Utils._toString.call(src) ? this.setSrc(src) : this.setImage(src)
    }

    function $ImageData(ctx, sx, sy, sw_or_imageData, sh_or_sw, dx, dy, dw, dh) {
        this.ctx = ctx, this.setDirtyX(dx).setDirtyY(dy).setDirtyWidth(dw).setDirtyHeight(dh).setImageData(sx, sy, sw_or_imageData, sh_or_sw)
    }

    function Text(ctx, sx, sy, text, ox, oy) {
        Shape.call(this, ctx, sx, sy, ox, oy), this.setText(text)
    }

    function Line(ctx, sx, sy, ex, ey, ox, oy) {
        Shape.call(this, ctx, sx, sy, ox, oy), this.setEndX(ex).setEndY(ey)
    }

    function BezierLine(ctx, sx, sy, ex, ey, cp1x, cp1y, cp2x, cp2y, ox, oy) {
        Line.call(this, ctx, sx, sy, ex, ey, ox, oy), this.setControlPoint1X(cp1x).setControlPoint1Y(cp1y).setControlPoint2X(cp2x).setControlPoint2Y(cp2y)
    }

    function Edge(ctx, sx, sy, ex, ey, ax, ay, el, ox, oy) {
        Line.call(this, ctx, sx, sy, ex, ey, ox, oy), this.setAnchorX(ax).setAnchorY(ay).setEmptyLength(isNaN(el) ? 0 : el)
    }

    function Triangle(ctx, sx, sy, length, angle, rotation, closed, ox, oy) {
        Shape.call(this, ctx, sx, sy, ox, oy), this.setLength(isNaN(length) ? 10 : length).setAngle(isNaN(angle) ? Math.PI / 3 : angle).setRotation(isNaN(rotation) ? 0 : rotation).setClosed(void 0 === closed || closed)
    }

    function Pin(ctx, sx, sy, length, angle, rotation, closed, ox, oy) {
        Triangle.call(this, ctx, sx, sy, isNaN(length) ? 20 : length, isNaN(angle) ? Math.PI / 4 : angle, rotation, closed, ox, oy)
    }

    function Poly(ctx, sx, sy, points, length, ox, oy) {
        Shape.call(this, ctx, sx, sy, ox, oy), this.setPoints(points).setLength(isNaN(length) ? points.length : length)
    }

    function PolyShape(ctx, sx, sy, points, length, ox, oy) {
        Poly.call(this, ctx, sx, sy, points, length, ox, oy), this._initPoints()._initCache()
    }

    function Polyline(ctx, sx, sy, points, length, ox, oy) {
        PolyShape.call(this, ctx, sx, sy, points, length, ox, oy)
    }

    function Bezier(ctx, sx, sy, points, length, ox, oy) {
        Polyline.call(this, ctx, sx, sy, points, isNaN(length) ? 200 : length, ox, oy)
    }

    function Polygon(ctx, sx, sy, points, length, ox, oy) {
        Polyline.call(this, ctx, sx, sy, points, length, ox, oy)
    }

    function PolyRect(ctx, sx, sy, points, length, ox, oy) {
        Polygon.call(this, ctx, sx, sy, points, isNaN(length) ? 8 : length, ox, oy)
    }

    function PolyArc(ctx, sx, sy, points, length, ox, oy) {
        Polygon.call(this, ctx, sx, sy, points, isNaN(length) ? 200 : length, ox, oy)
    }

    function SuperEllipse(ctx, sx, sy, points, length, ox, oy) {
        Polygon.call(this, ctx, sx, sy, points, isNaN(length) ? 200 : length, ox, oy), this.setExponent(3)
    }

    function SmoothLine(ctx, sx, sy, points, length, ox, oy) {
        PolyShape.call(this, ctx, sx, sy, points, points.length ? 3 * points.length - 4 : 0, ox, oy), this.setTension(1)
    }

    function Dots(ctx, sx, sy, points, length, ox, oy) {
        PolyShape.call(this, ctx, sx, sy, points, length, ox, oy), this.setRadius(3)
    }

    function FixedShape(ctx, sx, sy, path, ox, oy) {
        Shape.call(this, ctx, sx, sy, ox, oy), this.setPath(path)
    }

    function FixedRect(ctx, sx, sy, width, height, ox, oy) {
        FixedShape.call(this, ctx, sx, sy, void 0, ox, oy), this.width = width, this.height = height, this.process()
    }

    function FixedArc(ctx, sx, sy, radius, startAngle, endAngle, anticlockwise, ox, oy) {
        FixedShape.call(this, ctx, sx, sy, void 0, ox, oy), this.radius = radius, this.startAngle = isNaN(startAngle) ? 0 : startAngle, this.endAngle = isNaN(endAngle) ? 2 * Math.PI : endAngle, this.anticlockwise = !!anticlockwise, this.process()
    }

    function Canvas(options) {
        var sty, $ = this;
        $.$container = options ? "[object String]" === Utils._toString.call(options.container) ? document.querySelector(options.container) : options.container : void 0, $.$container && (void 0 === ($.$wrapper = $.$container.children[0]) && $.$container.appendChild($.$wrapper = document.createElement("div")), void 0 === $.$wrapper._count && ($.$wrapper._count = $.$wrapper.tabIndex = 0, Object.assign($.$wrapper, Utils._eventMixin), (sty = $.$wrapper.style).position = "relative", sty.overflow = "hidden", sty.outline = "none"), this.$resizeAll(options.width, options.height), $.$canvas = document.createElement("canvas"), $.$canvas.style.position = "absolute", ($.$wrapper.appendChild($.$canvas).$ = $).$ctx = $.$canvas.getContext("2d", {
            alpha: !0,
            desynchronized: !1
        }), Object.defineProperties($.$ctx, {
            _dpr: {writable: !0, enumerable: !1},
            _stack: {value: [], enumberable: !1}
        }), $._$dpr = options.dpr, $.$raf = new AnimateRAF(function (timestamp, interval) {
            this.update(timestamp, interval), this.draw()
        }.bind($), $.$duration = options.duration, $.$interval = options.interval), Object.assign($, options.props, options.components, options.methods, options.events, options.functions, options.callbacks), $._$visible = !1, $._$resize().init(), $.resize(), $.draw(), 0 == $.$wrapper._count++ ? (Utils._resizeObserver.observe($.$wrapper), Utils._intersectionObserver.observe($.$wrapper)) : ($._$visible = $.$canvas.previousSibling.$._$visible, $._$visible && !document.hidden && $.visibilitychange(!0)), $._$initListeners(), $._$addListeners())
    }

    return Utils.LRU = (LinkedList.prototype.push = function (entry) {
        null === this.head ? this.head = this.tail = entry : ((this.tail.next = entry).previous = this.tail, entry.next = null, this.tail = entry), this._length++
    }, LinkedList.prototype.remove = function (entry) {
        var previous = entry.previous, next = entry.next;
        previous ? previous.next = next : this.head = next, next ? next.previous = previous : this.tail = previous, entry.previous = entry.next = null, this._length--
    }, LinkedList.prototype.clear = function () {
        this.head = this.tail = null, this._length = 0
    }, Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            return this._length
        }
    }), LRU.prototype.get = function (list) {
        var entry = this._map.get(list);
        if (void 0 !== entry) {
            list = this._list;
            return entry !== list.tail && (list.remove(entry), list.push(entry)), entry.value
        }
    }, LRU.prototype.set = function (key, value) {
        var list, entry, head, map = this._map;
        void 0 === map.get(key) && (head = (list = this._list).length, entry = this._last, head >= this._maxSize && 0 < head && (head = list.head, list.remove(head), map.delete(head.key), this._last = head), entry ? entry.value = value : entry = new Entry(value), entry.key = key, list.push(entry), map.set(key, entry))
    }, LRU.prototype.clear = function () {
        this._list.clear(), this._map.clear()
    }, Object.defineProperty(LRU.prototype, "length", {
        get: function () {
            return this._list.length
        }
    }), LRU), Utils._canvas = document.createElement("canvas"), Utils._ctx = Utils._canvas.getContext("2d", {
        alpha: !0,
        desynchronized: !1
    }), Utils._TEXT_CACHE = new Map, Utils._IMAGE_CACHE = new Utils.LRU(10), Utils._toString = Object.prototype.toString, Utils._a = document.createElement("a"), Utils._resizeObserver = new ResizeObserver(function (entries) {
        entries.forEach(function (rect) {
            for (var $, children = rect.target.children, rect = rect.contentRect, width = rect.right - rect.left, height = rect.bottom - rect.top, i = 0; i < children.length; i++) !($ = children[i].$) || Math.round($.$width * $.$dpr) === Math.round(width * $.$dpr) && Math.round($.$height * $.$dpr) === Math.round(height * $.$dpr) || $.$resize(width, height)
        })
    }), Utils._intersectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            for (var $, visible, children = entry.target.children, i = 0; i < children.length; i++) ($ = children[i].$) && $._$visible !== (visible = 0 !== entry.intersectionRatio) && $.visibilitychange($._$visible = visible)
        })
    }), Utils._eventMixin = {
        _listeners: {
            mousedown: function (ev) {
                this._desktop(ev), this._x = ev.$x, this._y = ev.$y, this._trigger("mousedown", ev)
            }, touchstart: function (ev) {
                for (var i = 0; i < ev.targetTouches.length; i++) {
                    var touch = this._mobile(ev.targetTouches[i]);
                    this["_x" + i] = touch.$x, this["_y" + i] = touch.$y
                }
                this._trigger("touchstart", ev)
            }, mousemove: function (ev) {
                this._desktop(ev), ev.$moveX = ev.$x - this._x, ev.$moveY = ev.$y - this._y, this._trigger("mousemove", ev)
            }, touchmove: function (ev) {
                for (var i = 0; i < ev.targetTouches.length; i++) {
                    var touch = this._mobile(ev.targetTouches[i]);
                    touch.$moveX = touch.$x - this["_x" + i], touch.$moveY = touch.$y - this["_y" + i]
                }
                this._trigger("touchmove", ev)
            }, mouseup: function (ev) {
                this._trigger("mouseup", this._desktop(ev))
            }, touchend: function (ev) {
                for (var i = 0; i < ev.targetTouches.length; i++) this._mobile(ev.targetTouches[i]);
                this._trigger("touchend", ev)
            }, touchcancel: function (ev) {
                for (var i = 0; i < ev.targetTouches.length; i++) this._mobile(ev.targetTouches[i]);
                this._trigger("touchcancel", ev)
            }, mouseover: function (ev) {
                this._trigger("mouseover", this._desktop(ev))
            }, mouseout: function (ev) {
                this._trigger("mouseout", this._desktop(ev))
            }, click: function (ev) {
                this._trigger("click", this._desktop(ev))
            }, dblclick: function (ev) {
                this._trigger("dblclick", this._desktop(ev))
            }, contextmenu: function (ev) {
                ev.preventDefault(), this._trigger("contextmenu", this._desktop(ev))
            }, wheel: function (ev) {
                this._scale = this._scale || 1, ev.$scaling = (ev.$scale = this._scale = Math.min(Math.max(.125, (ev.$lastScale = this._scale) * (ev.$scalingRatio = Math.pow(2, -(ev.deltaY || ev.deltaX) / 100))), 1024)) / ev.$lastScale, this._trigger("wheel", this._desktop(ev))
            }, focus: function (ev) {
                this._trigger("focus", ev)
            }, blur: function (ev) {
                this._trigger("blur", ev)
            }, focusin: function (ev) {
                this._trigger("focusin", ev)
            }, focusout: function (ev) {
                this._trigger("focusout", ev)
            }, keydown: function (ev) {
                ev.isComposing || "Process" === ev.key || this._trigger("keydown", ev)
            }, keyup: function (ev) {
                ev.isComposing || "Process" === ev.key || this._trigger("keyup", ev)
            }, keypress: function (ev) {
                this._trigger("keypress", ev)
            }
        }, _desktop: function (ev) {
            return ev.$x = ev.offsetX, ev.$y = ev.offsetY, ev
        }, _mobile: function (ev) {
            return ev.$x = ev.pageX - this.offsetLeft, ev.$y = ev.pageY - this.offsetTop, ev
        }, _preventDefault: function () {
            this._$preventDefault = !0
        }, _on: function (type, listener, options) {
            var map = this._listenersMap;
            void 0 === (map = map || (this._listenersMap = {}))[type] && (map[type] = [], this.addEventListener(type, this._listeners[type], options)), map[type].unshift(listener)
        }, _off: function (type, listener, options) {
            for (var listeners = this._listenersMap[type], i = 0; i < listeners.length; i++) if (listeners[i] === listener) {
                listeners.splice(i, 1);
                break
            }
            0 === listeners.length && (delete this._listenersMap[type], this.removeEventListener(type, this._listeners[type], options))
        }, _trigger: function (type, ev) {
            ev._$preventDefault = !1, ev.$preventDefault = this._preventDefault;
            for (var listeners = this._listenersMap[type], i = 0; i < listeners.length; i++) if (listeners[i].call(this, ev), ev._$preventDefault) break
        }
    }, Utils.ls = {
        get: function (key) {
            var value = localStorage.getItem(key);
            if (!value) return !1;
            try {
                return JSON.parse(decodeURIComponent(escape(atob(value))))
            } catch (e) {
                return value
            }
        }, set: function (key, value) {
            localStorage.setItem(key, btoa(unescape(encodeURIComponent(JSON.stringify(value)))))
        }, remove: function (key) {
            localStorage.removeItem(key)
        }, clear: function () {
            localStorage.clear()
        }
    }, Utils.ease = {
        in: {
            linear: function (t) {
                return t
            }, sine: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, quad: function (t) {
                return t * t
            }, cubic: function (t) {
                return t * t * t
            }, quart: function (t) {
                return t * t * t * t
            }, quint: function (t) {
                return t * t * t * t * t
            }, expo: function (t) {
                return 0 === t ? 0 : Math.pow(2, 10 * t - 10)
            }, circ: function (t) {
                return 1 - Math.sqrt(1 - Math.pow(t, 2))
            }, back: function (t) {
                return 2.70158 * t * t * t - 1.70158 * t * t
            }, elastic: function (t) {
                var c = 2 * Math.PI / 3;
                return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((10 * t - 10.75) * c)
            }, bounce: function (t) {
                var n = 7.5625, d = 2.75;
                return (t = 1 - t) < 1 / d ? 1 - n * t * t : t < 2 / d ? .25 - n * (t -= 1.5 / d) * t : t < 2.5 / d ? .0625 - n * (t -= 2.25 / d) * t : .015625 - n * (t -= 2.625 / d) * t
            }
        }, out: {
            linear: function (t) {
                return t
            }, sine: function (t) {
                return Math.sin(t * Math.PI / 2)
            }, quad: function (t) {
                return t * (2 - t)
            }, cubic: function (t) {
                return 1 - Math.pow(1 - t, 3)
            }, quart: function (t) {
                return 1 - Math.pow(1 - t, 4)
            }, quint: function (t) {
                return 1 - Math.pow(1 - t, 5)
            }, expo: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            }, circ: function (t) {
                return Math.sqrt(1 - Math.pow(t - 1, 2))
            }, back: function (t) {
                return 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2)
            }, elastic: function (t) {
                var c = 2 * Math.PI / 3;
                return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin((10 * t - .75) * c) + 1
            }, bounce: function (t) {
                var n = 7.5625, d = 2.75;
                return t < 1 / d ? n * t * t : t < 2 / d ? n * (t -= 1.5 / d) * t + .75 : t < 2.5 / d ? n * (t -= 2.25 / d) * t + .9375 : n * (t -= 2.625 / d) * t + .984375
            }
        }, inout: {
            linear: function (t) {
                return t
            }, sine: function (t) {
                return (1 - Math.cos(t * Math.PI)) / 2
            }, quad: function (t) {
                return t < .5 ? 2 * t * t : 1 - Math.pow(2 - 2 * t, 2) / 2
            }, cubic: function (t) {
                return t < .5 ? 4 * t * t * t : 1 - Math.pow(2 - 2 * t, 3) / 2
            }, quart: function (t) {
                return t < .5 ? 8 * t * t * t * t : 1 - Math.pow(2 - 2 * t, 4) / 2
            }, quint: function (t) {
                return t < .5 ? 16 * t * t * t * t * t : 1 - Math.pow(2 - 2 * t, 5) / 2
            }, expo: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, 10 - 20 * t)) / 2
            }, circ: function (t) {
                return t < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(2 - 2 * t, 2)) + 1) / 2
            }, back: function (t) {
                var c = 2.5949095;
                return t < .5 ? Math.pow(2 * t, 2) * (2 * (1 + c) * t - c) / 2 : (Math.pow(2 * t - 2, 2) * ((1 + c) * (2 * t - 2) + c) + 2) / 2
            }, elastic: function (t) {
                var c = 2 * Math.PI / 4.5;
                return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * c)) / 2 : Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * c) / 2 + 1
            }, bounce: function (t) {
                var n = 7.5625, d = 2.75;
                return t < .5 ? ((t = 1 - 2 * t) < 1 / d ? 1 - n * t * t : t < 2 / d ? .25 - n * (t -= 1.5 / d) * t : t < 2.5 / d ? .0625 - n * (t -= 2.25 / d) * t : .015625 - n * (t -= 2.625 / d) * t) / 2 : ((t = 2 * t - 1) < 1 / d ? 1 + n * t * t : t < 2 / d ? n * (t -= 1.5 / d) * t + 1.75 : t < 2.5 / d ? n * (t -= 2.25 / d) * t + 1.9375 : n * (t -= 2.625 / d) * t + 1.984375) / 2
            }
        }
    }, Utils._ctx._font = "10px sans-serif", Utils._ctx._textAlign = "start", Utils._ctx._textBaseline = "alphabetic", Utils._ctx._direction = "ltr", Utils.noop = function () {
        return this
    }, Utils.inheritPrototype = function (subType, superType) {
        subType.prototype = Object.create(superType.prototype), Object.defineProperty(subType.prototype, "constructor", {
            value: subType,
            enumerable: !1
        })
    }, Utils._assign = function (subType, superType) {
        for (var i = 2; i < arguments.length; i++) subType.prototype[arguments[i]] = superType.prototype[arguments[i]]
    }, Utils.measureTextWidth = function (text, font) {
        var ctx = Utils._ctx;
        return Utils.measureText(text, font, ctx._textAlign, ctx._textBaseline, ctx._direction).width
    }, Utils.measureTextFontSize = function (text, width, fontFamily, min, max) {
        return 0 === text.length || 0 === width ? 0 : (void 0 === min && (min = Math.floor(width / text.length)), void 0 === max && (max = Math.ceil(width / text.length * 4)), function searchFontSize(min, max) {
            {
                if (min === max) return min;
                if (min + 1 === max) return Utils.measureTextWidth(text, max + "px " + fontFamily) > width ? min : max
            }
            var sep = Math.floor((min + max) / 2), textWidth = Utils.measureTextWidth(text, sep + "px " + fontFamily);
            return width < textWidth ? searchFontSize(min, sep - 1) : textWidth < width ? searchFontSize(sep, max) : sep
        }(min, max))
    }, Utils.measureText = function (text, font, textAlign, textBaseline, direction) {
        var ctx = font + " " + textAlign + " " + textBaseline + " " + direction, textCache = Utils._TEXT_CACHE.get(ctx);
        void 0 === textCache && (textCache = new Utils.LRU(3755), Utils._TEXT_CACHE.set(ctx, textCache));
        var metrics = textCache.get(text);
        return void 0 === metrics && ((ctx = Utils._ctx)._font !== font && (ctx.font = ctx._font = font), ctx._textAlign !== textAlign && (ctx.textAlign = ctx._textAlign = textAlign), ctx._textBaseline !== textBaseline && (ctx.textBaseline = ctx._textBaseline = textBaseline), ctx._direction !== direction && (ctx.direction = ctx._direction = direction), (metrics = ctx.measureText(text)).actualBoundingBoxWidth = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight, metrics.actualBoundingBoxHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent, textCache.set(text, metrics)), metrics
    }, Utils.loadImage = function (src, callback, context) {
        var image = Utils._IMAGE_CACHE.get(src);
        return void 0 === image ? (image = document.createElement("img"), callback && image.addEventListener("load", _callback, {once: !0}), image.src = src, Utils._IMAGE_CACHE.set(src, image)) : image.complete ? callback && callback.call(context, image) : callback && image.addEventListener("load", _callback, {once: !0}), image;

        function _callback() {
            callback.call(context, this)
        }
    }, Utils.loadImages = function (srcs, callback, context) {
        var key, images = {}, loaded = 0, length = Object.keys(srcs).length;
        for (key in srcs) images[key] = Utils.loadImage(srcs[key], callback ? _callback : void 0);
        return images;

        function _callback() {
            ++loaded === length && callback.call(context, images)
        }
    }, Utils.createLinearGradient = function (x0, y0, x1, y1, shape) {
        return shape && (x0 += shape._sx, y0 += shape._sy, x1 += shape._sx, y1 += shape._sy), Utils._ctx.createLinearGradient(x0, y0, x1, y1)
    }, Utils.createRadialGradient = function (x0, y0, r0, x1, y1, r1, shape) {
        return shape && (x0 += shape._sx, y0 += shape._sy, x1 += shape._sx, y1 += shape._sy), Utils._ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)
    }, Utils.createPattern = function (image, pattern, matrix) {
        pattern = Utils._ctx.createPattern(image, pattern || "repeat");
        return matrix && pattern.setTransform({
            a: matrix.getM11(),
            b: matrix.getM12(),
            c: matrix.getM21(),
            d: matrix.getM22(),
            e: matrix.offsetX,
            f: matrix.offsetY
        }), pattern
    }, Utils.randInt = function (start, end, containsEnd) {
        return isNaN(end) && (end = start, start = 0), start + Math.floor(Math.random() * (end - start + (containsEnd || 0)))
    }, Utils.randSign = function () {
        return .5 < Math.random() ? 1 : -1
    }, Utils.factorial = function (n) {
        switch (n) {
            case 9:
                return 362880;
            case 8:
                return 40320;
            case 7:
                return 5040;
            case 6:
                return 720;
            case 5:
                return 120;
            case 4:
                return 24;
            case 3:
                return 6;
            case 2:
                return 2;
            case 1:
            case 0:
                return 1
        }
        return n * Utils.factorial(n - 1)
    }, Utils.permutation = function (n, m) {
        return Utils.factorial(m) / Utils.factorial(m - n)
    }, Utils.combination = function (n, m) {
        return 0 === n || n === m ? 1 : 1 === n || m - n == 1 ? m : Utils.factorial(m) / (Utils.factorial(n) * Utils.factorial(m - n))
    }, Utils.pythagorean = function (a, b) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    }, Utils.deg2rad = function (degree) {
        return .017453292519943295 * degree
    }, Utils.rad2deg = function (radian) {
        return 57.29577951308232 * radian
    }, Utils.unique = function (array) {
        return Array.from(new Set(array))
    }, Utils.clone = function (object) {
        return JSON.parse(JSON.stringify(object))
    }, Utils.debounce = function (func, delay, immediate) {
        var timeoutID;
        return function () {
            var callNow, context = this, args = arguments;
            timeoutID && clearTimeout(timeoutID), immediate ? (callNow = void 0 === timeoutID, timeoutID = setTimeout(function () {
                timeoutID = void 0
            }, delay), callNow && func.apply(context, args)) : timeoutID = setTimeout(function () {
                func.apply(context, args)
            }, delay)
        }
    }, Utils.throttle = function (func, delay, useTime) {
        var previous, timeoutID;
        return useTime && (previous = 0), function () {
            var now, context = this, args = arguments;
            useTime ? (now = performance.now(), delay < now - previous && (func.apply(context, args), previous = now)) : void 0 === timeoutID && (timeoutID = setTimeout(function () {
                timeoutID = void 0, func.apply(context, args)
            }, delay))
        }
    }, Utils.nextTick = function (func) {
        var next;
        return function () {
            var context = this, args = arguments;
            void 0 === next && (next = requestAnimationFrame(function () {
                next = void 0, func.apply(context, args)
            }))
        }
    }, Rgb.RGB = "rgb", Rgb.RGBA = "rgba", Rgb.LEFTPARENTHESIS = "(", Rgb.RIGHTPARENTHESIS = ")", Rgb.COMMA = ", ", Rgb.HEX = "#", Rgb.HEX_PREFIX = "0x", Rgb.HEX_MAP = new Map([[0, "0"], [1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "5"], [6, "6"], [7, "7"], [8, "8"], [9, "9"], [10, "a"], [11, "b"], [12, "c"], [13, "d"], [14, "e"], [15, "f"]]), Rgb.REGEX_RGB = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}),? ?([0,1]\.?\d*)?\)/, Rgb.REGEX_HEX = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?/, Rgb.mixing = function (back, front, ratio, result) {
        result.init(Math.round(back.red + (front.red - back.red) * ratio), Math.round(back.green + (front.green - back.green) * ratio), Math.round(back.blue + (front.blue - back.blue) * ratio), 255)
    }, Rgb.extract = function (back1, mix1, back2_or_alpha, mix2_or_result, result) {
        var ratio;
        4 === arguments.length ? (ratio = back2_or_alpha / 255, mix2_or_result.init(Math.round(back1.red + (mix1.red - back1.red) / ratio), Math.round(back1.green + (mix1.green - back1.green) / ratio), Math.round(back1.blue + (mix1.blue - back1.blue) / ratio), back2_or_alpha)) : 5 === arguments.length && Rgb.extract(back1, mix1, Math.round(255 * (1 - (mix1.red - mix2_or_result.red) / (back1.red - back2_or_alpha.red))) || Math.round(255 * (1 - (mix1.green - mix2_or_result.green) / (back1.green - back2_or_alpha.green))) || Math.round(255 * (1 - (mix1.blue - mix2_or_result.blue) / (back1.blue - back2_or_alpha.blue))) || 128, result)
    }, Rgb.sRgbMixing = function (srgb1, srgb2, ratio, result) {
        result.red = srgb1.red + (srgb2.red - srgb1.red) * ratio, result.green = srgb1.green + (srgb2.green - srgb1.green) * ratio, result.blue = srgb1.blue + (srgb2.blue - srgb1.blue) * ratio
    }, Rgb.sRgbGammaMixing = function (bright1, bright2, intensity, result) {
        Rgb.sRgbMixing(bright1, bright2, intensity, result);
        var sum = result.red + result.green + result.blue;
        0 !== sum && (bright1 = Math.pow(bright1.red + bright1.green + bright1.blue, .43), bright2 = Math.pow(bright2.red + bright2.green + bright2.blue, .43), intensity = Math.pow(bright1 + (bright2 - bright1) * intensity, 1 / .43), result.red *= intensity / sum, result.green *= intensity / sum, result.blue *= intensity / sum)
    }, Rgb.prototype.fromRgbString = function (reg) {
        reg = Rgb.REGEX_RGB.exec(reg);
        return this.init(parseInt(reg[1]), parseInt(reg[2]), parseInt(reg[3]), Math.round(255 * parseFloat(reg[4])))
    }, Rgb.prototype.fromHexString = function (reg) {
        reg = Rgb.REGEX_HEX.exec(reg);
        return this.init(parseInt(Rgb.HEX_PREFIX + reg[1]), parseInt(Rgb.HEX_PREFIX + reg[2]), parseInt(Rgb.HEX_PREFIX + reg[3]), parseInt(Rgb.HEX_PREFIX + reg[4]))
    }, Rgb.prototype.fromHsl = function (hsl) {
        var r, g, h = hsl.hue, b = hsl.saturation / 100, m = hsl.lightness / 100, c = (1 - Math.abs(2 * m - 1)) * b,
            b = c * (1 - Math.abs(h / 60 % 2 - 1)), m = m - c / 2,
            b = h < 60 ? (r = c, g = b, 0) : h < 120 ? (r = b, g = c, 0) : h < 180 ? (r = 0, g = c, b) : h < 240 ? (r = 0, g = b, c) : h < 300 ? (r = b, g = 0, c) : (r = c, g = 0, b);
        return this.init(Math.round(255 * (r + m)), Math.round(255 * (g + m)), Math.round(255 * (b + m)), hsl.alpha)
    }, Rgb.prototype.random = function (red, green, blue, alpha) {
        return this.init(isNaN(red) ? Utils.randInt(256) : red, isNaN(green) ? Utils.randInt(256) : green, isNaN(blue) ? Utils.randInt(256) : blue, isNaN(alpha) ? Utils.randInt(256) : alpha)
    }, Rgb.prototype.sRgbInverseCompanding = function () {
        return this.red = inverseCompanding(this.red), this.green = inverseCompanding(this.green), this.blue = inverseCompanding(this.blue), this;

        function inverseCompanding(c) {
            return .04045 < (c /= 255) ? Math.pow((c + .055) / 1.055, 2.4) : c / 12.92
        }
    }, Rgb.prototype.sRgbCompanding = function () {
        return this.red = companding(this.red), this.green = companding(this.green), this.blue = companding(this.blue), this;

        function companding(c) {
            return Math.round(255 * (.0031308 < c ? 1.055 * Math.pow(c, 1 / 2.4) - .055 : 12.92 * c))
        }
    }, Rgb.prototype.toRgbString = function (containsAlpha) {
        return (containsAlpha ? Rgb.RGBA : Rgb.RGB) + Rgb.LEFTPARENTHESIS + this.red + Rgb.COMMA + this.green + Rgb.COMMA + this.blue + (containsAlpha ? Rgb.COMMA + this.alpha / 255 : "") + Rgb.RIGHTPARENTHESIS
    }, Rgb.prototype.toHexString = function (containsAlpha) {
        return Rgb.HEX + Rgb.HEX_MAP.get(Math.floor(this.red / 16)) + Rgb.HEX_MAP.get(this.red % 16) + Rgb.HEX_MAP.get(Math.floor(this.green / 16)) + Rgb.HEX_MAP.get(this.green % 16) + Rgb.HEX_MAP.get(Math.floor(this.blue / 16)) + Rgb.HEX_MAP.get(this.blue % 16) + (containsAlpha ? Rgb.HEX_MAP.get(Math.floor(this.alpha / 16)) + Rgb.HEX_MAP.get(this.alpha % 16) : "")
    }, Rgb.prototype.init = function (red, green, blue, alpha) {
        return this.red = red, this.green = green, this.blue = blue, this.alpha = alpha, this
    }, Rgb.prototype.equals = function (rgb) {
        return this.red === rgb.red && this.green === rgb.green && this.blue === rgb.blue && this.alpha === rgb.alpha
    }, Rgb.prototype.copy = function (rgb) {
        return this.init(rgb.red, rgb.green, rgb.blue, rgb.alpha)
    }, Rgb.prototype.clone = function () {
        return new Rgb(this.red, this.green, this.blue, this.alpha)
    }, Rgb.prototype.getRed = function () {
        return this.red
    }, Rgb.prototype.setRed = function (red) {
        return this.red = red, this
    }, Rgb.prototype.getGreen = function () {
        return this.green
    }, Rgb.prototype.setGreen = function (green) {
        return this.green = green, this
    }, Rgb.prototype.getBlue = function () {
        return this.blue
    }, Rgb.prototype.setBlue = function (blue) {
        return this.blue = blue, this
    }, Rgb.prototype.getAlpha = function () {
        return this.alpha
    }, Rgb.prototype.setAlpha = function (alpha) {
        return this.alpha = alpha, this
    }, Hsl.HSL = "hsl", Hsl.HSLA = "hsla", Hsl.LEFTPARENTHESIS = "(", Hsl.RIGHTPARENTHESIS = ")", Hsl.COMMA = ", ", Hsl.PERCENT = "%", Hsl.REGEX_HSL = /hsla?\((\d{1,3}\.?\d?), ?(\d{1,3}\.?\d?)%, ?(\d{1,3}\.?\d?)%,? ?([0,1]\.?\d*)?\)/, Hsl.prototype.fromHslString = function (reg) {
        reg = Hsl.REGEX_HSL.exec(reg);
        return this.init(parseFloat(reg[1]), parseFloat(reg[2]), parseFloat(reg[3]), Math.round(255 * parseFloat(reg[4])))
    }, Hsl.prototype.fromRgb = function (rgb) {
        var hue, saturation, r = rgb.red / 255, g = rgb.green / 255, b = rgb.blue / 255, max = Math.max(r, g, b),
            lightness = Math.min(r, g, b), delta = max - lightness, lightness = (max + lightness) / 2;
        return 0 == delta ? hue = saturation = 0 : (hue = max === r ? (g - b) / delta * 60 + (g < b ? 360 : 0) : max === g ? (b - r) / delta * 60 + 120 : (r - g) / delta * 60 + 240, saturation = delta / (1 - Math.abs(2 * lightness - 1))), this.init(Math.round(10 * hue) / 10, Math.round(1e3 * saturation) / 10, Math.round(1e3 * lightness) / 10, rgb.alpha)
    }, Hsl.prototype.random = function (hue, saturation, lightness, alpha) {
        return this.init(isNaN(hue) ? Utils.randInt(3600) / 10 : hue, isNaN(saturation) ? Utils.randInt(1e3) / 10 : saturation, isNaN(lightness) ? Utils.randInt(1e3) / 10 : lightness, isNaN(alpha) ? Utils.randInt(256) : alpha)
    }, Hsl.prototype.toHslString = function (containsAlpha) {
        return (containsAlpha ? Hsl.HSLA : Hsl.HSL) + Hsl.LEFTPARENTHESIS + this.hue + Hsl.COMMA + this.saturation + Hsl.PERCENT + Hsl.COMMA + this.lightness + Hsl.PERCENT + (containsAlpha ? Hsl.COMMA + this.alpha / 255 : "") + Hsl.RIGHTPARENTHESIS
    }, Hsl.prototype.init = function (hue, saturation, lightness, alpha) {
        return this.hue = hue, this.saturation = saturation, this.lightness = lightness, this.alpha = alpha, this
    }, Hsl.prototype.equals = function (hsl) {
        return this.hue === hsl.hue && this.saturation === hsl.saturation && this.lightness === hsl.lightness && this.alpha === hsl.alpha
    }, Hsl.prototype.copy = function (hsl) {
        return this.init(hsl.hue, hsl.saturation, hsl.lightness, hsl.alpha)
    }, Hsl.prototype.clone = function () {
        return new Hsl(this.hue, this.saturation, this.lightness, this.alpha)
    }, Hsl.prototype.getHue = function () {
        return this.hue
    }, Hsl.prototype.setHue = function (hue) {
        return this.hue = hue, this
    }, Hsl.prototype.getSaturation = function () {
        return this.saturation
    }, Hsl.prototype.setSaturation = function (saturation) {
        return this.saturation = saturation, this
    }, Hsl.prototype.getLightness = function () {
        return this.lightness
    }, Hsl.prototype.setLightness = function (lightness) {
        return this.lightness = lightness, this
    }, Hsl.prototype.getAlpha = function () {
        return this.alpha
    }, Hsl.prototype.setAlpha = function (alpha) {
        return this.alpha = alpha, this
    }, Matrix.DEFAULT_SKEW_X = 0, Matrix.DEFAULT_TAN_X = 0, Matrix.DEFAULT_SKEW_Y = 0, Matrix.DEFAULT_TAN_Y = 0,Matrix.DEFAULT_TAN_V = 1,Matrix.DEFAULT_SCALE_X = 1,Matrix.DEFAULT_SCALE_Y = 1,Matrix.DEFAULT_ANGLE = 0,Matrix.DEFAULT_COS = 1,Matrix.DEFAULT_SIN = 0,Matrix.DEFAULT_OFFSET_X = 0,Matrix.DEFAULT_OFFSET_Y = 0,Matrix.prototype.equals = function (matrix) {
        return this.angle === matrix.angle && this.scaleX === matrix.scaleX && this.scaleY === matrix.scaleY && this.offsetX === matrix.offsetX && this.offsetY === matrix.offsetY && this.skewX === matrix.skewX && this.skewY === matrix.skewY
    },Matrix.prototype.getM11 = function () {
        return this._cos * this.scaleX - this._tanY * this._sin * this.scaleY
    },Matrix.prototype.getM11i = function () {
        return this._cos * this._tanV / this.scaleX + this._tanX * this._tanV * this._sin / this.scaleY
    },Matrix.prototype.getM12 = function () {
        return this._sin * this.scaleX + this._tanY * this._cos * this.scaleY
    },Matrix.prototype.getM12i = function () {
        return -this._tanY * this._tanV * this._cos / this.scaleX - this._sin * this._tanV / this.scaleY
    },Matrix.prototype.getM21 = function () {
        return -this._sin * this.scaleY + this._tanX * this._cos * this.scaleX
    },Matrix.prototype.getM21i = function () {
        return this._sin * this._tanV / this.scaleX - this._tanX * this._tanV * this._cos / this.scaleY
    },Matrix.prototype.getM22 = function () {
        return this._cos * this.scaleY + this._tanX * this._sin * this.scaleX
    },Matrix.prototype.getM22i = function () {
        return -this._tanY * this._tanV * this._sin / this.scaleX + this._cos * this._tanV / this.scaleY
    },Matrix.prototype.getM41 = function () {
        return this.offsetX
    },Matrix.prototype.getM41i = function () {
        return -this.offsetX * this.getM11i() - this.offsetY * this.getM21i()
    },Matrix.prototype.getM42 = function () {
        return this.offsetY
    },Matrix.prototype.getM42i = function () {
        return -this.offsetX * this.getM12i() - this.offsetY * this.getM22i()
    },Matrix.prototype.getSkewX = function () {
        return this.skewX
    },Matrix.prototype.setSkewX = function (skewX) {
        return this.skewX !== skewX && (this.skewX = skewX, this._tanX = Math.tan(skewX), this._tanV = 1 / (1 - this._tanX * this._tanY)), this
    },Matrix.prototype.getSkewY = function () {
        return this.skewY
    },Matrix.prototype.setSkewY = function (skewY) {
        return this.skewY !== skewY && (this.skewY = skewY, this._tanY = Math.tan(skewY), this._tanV = 1 / (1 - this._tanX * this._tanY)), this
    },Matrix.prototype.setSkew = function (skewX, skewY) {
        return this.skewX !== skewX && (this.skewX = skewX, this._tanX = Math.tan(skewX)), this.skewY !== skewY && (this.skewY = skewY, this._tanY = Math.tan(skewY)), this._tanV = 1 / (1 - this._tanX * this._tanY), this
    },Matrix.prototype.getScaleX = function () {
        return this.scaleX
    },Matrix.prototype.setScaleX = function (scaleX) {
        return this.scaleX = scaleX, this
    },Matrix.prototype.getScaleY = function () {
        return this.scaleY
    },Matrix.prototype.setScaleY = function (scaleY) {
        return this.scaleY = scaleY, this
    },Matrix.prototype.setScale = function (scaleX, scaleY) {
        return this.scaleX = scaleX, this.scaleY = scaleY, this
    },Matrix.prototype.getAngle = function () {
        return this.angle
    },Matrix.prototype.setAngle = function (angle) {
        return this.angle !== angle && (this.angle = angle, this._cos = Math.cos(angle), this._sin = Math.sin(angle)), this
    },Matrix.prototype.getOffsetX = function () {
        return this.offsetX
    },Matrix.prototype.setOffsetX = function (offsetX) {
        return this.offsetX = offsetX, this
    },Matrix.prototype.getOffsetY = function () {
        return this.offsetY
    },Matrix.prototype.setOffsetY = function (offsetY) {
        return this.offsetY = offsetY, this
    },Matrix.prototype.setOffset = function (offsetX, offsetY) {
        return this.offsetX = offsetX, this.offsetY = offsetY, this
    },Style.DEFAULT_ALPHA = 1,Style.DEFAULT_COMPOSITE_OPERATION = "source-over",Style.DEFAULT_FILTER = "none",Style.prototype.getAlpha = function () {
        return this.alpha
    },Style.prototype.setAlpha = function (alpha) {
        return this.alpha = alpha, this
    },Style.prototype.getCompositeOperation = function () {
        return this.compositeOperation
    },Style.prototype.setCompositeOperation = function (compositeOperation) {
        return this.compositeOperation = compositeOperation, this
    },Style.prototype.getFilter = function () {
        return this.filter
    },Style.prototype.setFilter = function (filter) {
        return this.filter = filter, this
    },Utils.inheritPrototype(ShadowStyle, Style),ShadowStyle.DEFAULT_SHADOW_BLUR = 0,ShadowStyle.DEFAULT_SHADOW_COLOR = "rgba(0, 0, 0, 0)",ShadowStyle.DEFAULT_SHADOW_OFFSET_X = 0,ShadowStyle.DEFAULT_SHADOW_OFFSET_Y = 0,ShadowStyle.prototype.getShadowBlur = function () {
        return this.shadowBlur
    },ShadowStyle.prototype.setShadowBlur = function (shadowBlur) {
        return this.shadowBlur = shadowBlur, this
    },ShadowStyle.prototype.getShadowColor = function () {
        return this.shadowColor
    },ShadowStyle.prototype.setShadowColor = function (shadowColor) {
        return this.shadowColor = shadowColor, this
    },ShadowStyle.prototype.getShadowOffsetX = function () {
        return this.shadowOffsetX
    },ShadowStyle.prototype.setShadowOffsetX = function (shadowOffsetX) {
        return this.shadowOffsetX = shadowOffsetX, this
    },ShadowStyle.prototype.getShadowOffsetY = function () {
        return this.shadowOffsetY
    },ShadowStyle.prototype.setShadowOffsetY = function (shadowOffsetY) {
        return this.shadowOffsetY = shadowOffsetY, this
    },ShadowStyle.prototype.setShadowOffset = function (shadowOffsetX, shadowOffsetY) {
        return this.setShadowOffsetX(shadowOffsetX).setShadowOffsetY(shadowOffsetY)
    },Utils.inheritPrototype(FillStrokeStyle, ShadowStyle),FillStrokeStyle.DEFAULT_FILL_STYLE = "#000000",FillStrokeStyle.DEFAULT_STROKE_STYLE = "#000000",FillStrokeStyle.prototype.getFillStyle = function () {
        return this.fillStyle
    },FillStrokeStyle.prototype.setFillStyle = function (fillStyle) {
        return this.fillStyle = fillStyle, this
    },FillStrokeStyle.prototype.getStrokeStyle = function () {
        return this.strokeStyle
    },FillStrokeStyle.prototype.setStrokeStyle = function (strokeStyle) {
        return this.strokeStyle = strokeStyle, this
    },Utils.inheritPrototype(ShapeStyle, FillStrokeStyle),ShapeStyle.DEFAULT_LINE_DASH = [],ShapeStyle.DEFAULT_LINE_DASH_OFFSET = 0,ShapeStyle.DEFAULT_LINE_WIDTH = 1,ShapeStyle.DEFAULT_LINE_CAP = "butt",ShapeStyle.DEFAULT_LINE_JOIN = "miter",ShapeStyle.DEFAULT_MITER_LIMIT = 10,ShapeStyle.prototype.getLineDash = function () {
        return this.lineDash
    },ShapeStyle.prototype.setLineDash = function (lineDash) {
        return this.lineDash = lineDash, this
    },ShapeStyle.prototype.getLineDashOffset = function () {
        return this.lineDashOffset
    },ShapeStyle.prototype.setLineDashOffset = function (lineDashOffset) {
        return this.lineDashOffset = lineDashOffset, this
    },ShapeStyle.prototype.getLineWidth = function () {
        return this.lineWidth
    },ShapeStyle.prototype.setLineWidth = function (lineWidth) {
        return this.lineWidth = lineWidth, this
    },ShapeStyle.prototype.getLineCap = function () {
        return this.lineCap
    },ShapeStyle.prototype.setLineCap = function (lineCap) {
        return this.lineCap = lineCap, this
    },ShapeStyle.prototype.getLineJoin = function () {
        return this.lineJoin
    },ShapeStyle.prototype.setLineJoin = function (lineJoin) {
        return this.lineJoin = lineJoin, this
    },ShapeStyle.prototype.getMiterLimit = function () {
        return this.miterLimit
    },ShapeStyle.prototype.setMiterLimit = function (miterLimit) {
        return this.miterLimit = miterLimit, this
    },Utils.inheritPrototype(TextStyle, ShapeStyle),TextStyle.DEFAULT_FONT = "10px sans-serif",TextStyle.DEFAULT_TEXT_ALIGN = "start",TextStyle.DEFAULT_TEXT_BASELINE = "alphabetic",TextStyle.DEFAULT_DIRECTION = "ltr",TextStyle.prototype.getFont = function () {
        return this.font
    },TextStyle.prototype.setFont = function (font) {
        return this.font = font, this
    },TextStyle.prototype.getTextAlign = function () {
        return this.textAlign
    },TextStyle.prototype.setTextAlign = function (textAlign) {
        return this.textAlign = textAlign, this
    },TextStyle.prototype.getTextBaseline = function () {
        return this.textBaseline
    },TextStyle.prototype.setTextBaseline = function (textBaseline) {
        return this.textBaseline = textBaseline, this
    },TextStyle.prototype.getDirection = function () {
        return this.direction
    },TextStyle.prototype.setDirection = function (direction) {
        return this.direction = direction, this
    },Utils.inheritPrototype(ImageStyle, ShapeStyle),ImageStyle.DEFAULT_SMOOTHING_ENABLED = !0,ImageStyle.DEFAULT_SMOOTHING_QUALITY = "low",ImageStyle.prototype.getSmoothingEnabled = function () {
        return this.smoothingEnabled
    },ImageStyle.prototype.setSmoothingEnabled = function (smoothingEnabled) {
        return this.smoothingEnabled = smoothingEnabled, this
    },ImageStyle.prototype.getSmoothingQuality = function () {
        return this.smoothingQuality
    },ImageStyle.prototype.setSmoothingQuality = function (smoothingQuality) {
        return this.smoothingQuality = smoothingQuality, this
    },Point.prototype.init = function (x, y) {
        return this.x = x, this.y = y, this
    },Point.prototype.equals = function (point) {
        return this.x === point.x && this.y === point.y
    },Point.prototype.getX = function () {
        return this.x
    },Point.prototype.setX = function (x) {
        return this.x = x, this
    },Point.prototype.getY = function () {
        return this.y
    },Point.prototype.setY = function (y) {
        return this.y = y, this
    },Point.basisX = new Point(1, 0),Point.basisY = new Point(0, 1),Point.vertical2point = function (x2, y2, result) {
        var x1, y1;
        0 === y2.x ? result.init(0, x2.y) : 0 === y2.y ? result.init(x2.x, 0) : (x1 = x2.x, y1 = x2.y, x2 = y2.x, y2 = y2.y, result.init((x1 * x2 * x2 + x2 * y2 * y2 + (y1 - y2) * x2 * y2) / (x2 * x2 + y2 * y2), (y1 * y2 * y2 + y2 * x2 * x2 + (x1 - x2) * x2 * y2) / (x2 * x2 + y2 * y2)))
    },Point.vertical2line = function (y2, x3, y3, result) {
        var x1, y1, x2;
        x3.x === y3.x ? result.init(x3.x, y2.y) : x3.y === y3.y ? result.init(y2.x, x3.y) : (x1 = y2.x, y1 = y2.y, x2 = x3.x, y2 = x3.y, x3 = y3.x, y3 = y3.y, result.init((x1 * (x2 - x3) * (x2 - x3) + x2 * (y2 - y3) * (y2 - y3) + (y1 - y2) * (x2 - x3) * (y2 - y3)) / ((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3)), (y1 * (y2 - y3) * (y2 - y3) + y2 * (x2 - x3) * (x2 - x3) + (x1 - x2) * (x2 - x3) * (y2 - y3)) / ((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3))))
    },Point.line2line = function (b2, a2, den, c2, result) {
        var a1 = a2.y - b2.y, b1 = b2.x - a2.x, c1 = -a1 * b2.x - b1 * b2.y, a2 = c2.y - den.y, b2 = den.x - c2.x,
            c2 = -a2 * den.x - b2 * den.y, den = a1 * b2 - a2 * b1;
        result.init((c2 * b1 - c1 * b2) / den, (c1 * a2 - c2 * a1) / den)
    },Point.line2arc = function (delta, mp1, point, x, result1, result2) {
        delta.x === mp1.x && (y = Math.sqrt(Math.pow(x, 2) - Math.pow(delta.x - point.x, 2)), result1.init(delta.x, point.y - y), result2.init(delta.x, point.y + y));
        var m = (mp1.y - delta.y) / (mp1.x - delta.x), d = delta.y - m * delta.x, y = Math.pow(m, 2), mp1 = y + 1,
            delta = Math.sqrt(Math.pow(x, 2) * mp1 - Math.pow(point.y - m * point.x - d, 2)),
            x = point.x + point.y * m - d * m, y = d + point.x * m + point.y * y;
        result1.init((x + delta) / mp1, (y + m * delta) / mp1), result2.init((x - delta) / mp1, (y - m * delta) / mp1)
    },Point.arc2arc = function (b, n, y, m, result1, result2) {
        var x1 = b.x, y1 = b.y, x = y.x, y2 = y.y, r1p = Math.pow(n, 2), r2p = Math.pow(m, 2),
            b = Math.pow(x - x1, 2) + Math.pow(y2 - y1, 2), y = Math.sqrt(b), n = (x - x1) / y, m = (y2 - y1) / y,
            y = (r1p - r2p) / 2 / y, x = (x1 + x) / 2 + y * n, y = (y1 + y2) / 2 + y * m,
            b = Math.sqrt((r1p + r2p) / 2 - Math.pow(r1p - r2p, 2) / 4 / b - b / 4), m = b * m, n = -b * n;
        result1.init(x + m, y + n), result2.init(x - m, y - n)
    },Point.arc = function (xy2, xy3, a, result) {
        var x1 = xy2.x, b = xy2.y, c = xy3.x, y2 = xy3.y, x3 = a.x, y3 = a.y, xy1 = x1 * x1 + b * b,
            xy2 = c * c + y2 * y2, xy3 = x3 * x3 + y3 * y3, a = x1 * (y2 - y3) - b * (c - x3) + c * y3 - x3 * y2,
            b = xy1 * (y3 - y2) + xy2 * (b - y3) + xy3 * (y2 - b),
            c = xy1 * (c - x3) + xy2 * (x3 - x1) + xy3 * (x1 - c);
        result.init(-b / a / 2, -c / a / 2)
    },Point.arcin = function (a, b, c, result) {
        var x1 = a.x, y1 = a.y, x2 = b.x, y2 = b.y, x3 = c.x, y3 = c.y,
            a = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2)),
            b = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2)),
            c = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        result.init((a * x1 + b * x2 + c * x3) / (a + b + c), (a * y1 + b * y2 + c * y3) / (a + b + c))
    },Point.prototype.ratio2point = function (point) {
        return 0 === point.x ? this.y / point.y : this.x / point.x
    },Point.prototype.ratio2line = function (point1, point2) {
        return point1.x === point2.x ? (this.y - point1.y) / (point2.y - point1.y) : (this.x - point1.x) / (point2.x - point1.x)
    },Point.prototype.anti2point = function (point) {
        return this.x * point.y < this.y * point.x
    },Point.prototype.anti2line = function (point1, point2) {
        return (this.x - point1.x) * (this.y - point2.y) < (this.y - point1.y) * (this.x - point2.x)
    },Point.prototype.modulus = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    },Point.prototype.slope = function () {
        return this.y / this.x
    },Point.prototype.radian = function () {
        return Math.atan2(this.y, this.x)
    },Point.prototype.distance = function (point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2))
    },Point.prototype.manhattan = function (point) {
        return Math.abs(this.x - point.x) + Math.abs(this.y - point.y)
    },Point.prototype.dotProduct = function (point) {
        return this.x * point.x + this.y * point.y
    },Point.prototype.crossProduct = function (point) {
        return this.x * point.y - this.y * point.x
    },Point.prototype.theta = function (point) {
        return Math.acos(this.dotProduct(point) / (this.modulus() * point.modulus()))
    },Point.prototype.offsetX = function (point) {
        return this.x - point.x
    },Point.prototype.offsetY = function (point) {
        return this.y - point.y
    },Point.prototype.copy = function (point) {
        return this.init(point.x, point.y)
    },Point.prototype.clone = function () {
        return new Point(this.x, this.y)
    },Point.prototype.unit = function () {
        var modulus = this.modulus();
        return this.x /= modulus, this.y /= modulus, this
    },Point.prototype.abs = function () {
        return this.x < 0 && (this.x = -this.x), this.y < 0 && (this.y = -this.y), this
    },Point.prototype.inverse = function () {
        return this.x = -this.x, this.y = -this.y, this
    },Point.prototype.inverseX = function () {
        return this.x = -this.x, this
    },Point.prototype.inverseY = function () {
        return this.y = -this.y, this
    },Point.prototype.vertical = function () {
        var y = this.x;
        return this.x = -this.y, this.y = y, this
    },Point.prototype.verticalAnti = function () {
        var y = -this.x;
        return this.x = this.y, this.y = y, this
    },Point.prototype.add = function (point) {
        return this.x += point.x, this.y += point.y, this
    },Point.prototype.subtract = function (point) {
        return this.x -= point.x, this.y -= point.y, this
    },Point.prototype.multiply = function (point) {
        var y = this.y * point.x + this.x * point.y;
        return this.x = this.x * point.x - this.y * point.y, this.y = y, this
    },Point.prototype.divide = function (point) {
        var den = Math.pow(point.x, 2) + Math.pow(point.y, 2), y = (this.y * point.x - this.x * point.y) / den;
        return this.x = (this.x * point.x + this.y * point.y) / den, this.y = y, this
    },Point.prototype.inline = function (point, ratio) {
        return this.x += (point.x - this.x) * ratio, this.y += (point.y - this.y) * ratio, this
    },Point.prototype.skewX = function (skewX) {
        return this.x += this.y * Math.tan(skewX), this
    },Point.prototype.skewY = function (skewY) {
        return this.y += this.x * Math.tan(skewY), this
    },Point.prototype.skew = function (skewX, y) {
        y = this.y + this.x * Math.tan(y);
        return this.x += this.y * Math.tan(skewX), this.y = y, this
    },Point.prototype.scaleX = function (scaleX) {
        return this.x *= scaleX, this
    },Point.prototype.scaleY = function (scaleY) {
        return this.y *= scaleY, this
    },Point.prototype.scale = function (scaleX, scaleY) {
        return this.x *= scaleX, this.y *= scaleY, this
    },Point.prototype.rotate = function (y) {
        var cos = Math.cos(y), sin = Math.sin(y), y = this.x * sin + this.y * cos;
        return this.x = this.x * cos - this.y * sin, this.y = y, this
    },Point.prototype.translateX = function (offsetX) {
        return this.x += offsetX, this
    },Point.prototype.translateY = function (offsetY) {
        return this.y += offsetY, this
    },Point.prototype.translate = function (offsetX, offsetY) {
        return this.x += offsetX, this.y += offsetY, this
    },Point.prototype.transform = function (mat) {
        var y = this.x * mat.getM12() + this.y * mat.getM22() + mat.offsetY;
        return this.x = this.x * mat.getM11() + this.y * mat.getM21() + mat.offsetX, this.y = y, this
    },Point.prototype.resetTransform = function (mat) {
        this.x -= mat.offsetX, this.y -= mat.offsetY;
        var y = this.x * mat.getM12i() + this.y * mat.getM22i();
        return this.x = this.x * mat.getM11i() + this.y * mat.getM21i(), this.y = y, this
    },Collision.arc = function (x1, y1, r1, x2, y2, r2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) <= r1 + r2
    },Collision.rect = function (x1, y1, x2, y2, x3, y3, x4, y4) {
        return x1 <= x4 && y1 <= y4 && x3 <= x2 && y3 <= y2
    },Collision.arcRect = function (x, y, r, x1, y1, minX, minY, ox, oy, cos, sin) {
        var t;
        return 11 === arguments.length && (t = (ox - x) * sin + (y - oy) * cos + oy, x = (x - ox) * cos + (y - oy) * sin + ox, y = t), minX = x < x1 ? x1 : minX < x ? minX : x, minY = y < y1 ? y1 : minY < y ? minY : y, Math.sqrt(Math.pow(minX - x, 2) + Math.pow(minY - y, 2)) <= r
    },Collision.light = function (x, y, a2, ix, x1, y1, x2, b2) {
        if ((x - x1) * (y - b2) < (y - y1) * (x - x2)) return !1;
        var a1 = ix - y, ix = x - a2, a2 = b2 - y1, b2 = x1 - x2,
            ix = ((a1 * x + ix * y) * b2 - (a2 * x1 + b2 * y1) * ix) / (a1 * b2 - a2 * ix);
        return x1 <= ix && ix <= x2
    },Collision.sepAxis = function (points1, points2) {
        for (var tx, ty, i = 0; i < points1.length; i += 2) if (tx = points1[i + 2], ty = points1[i + 3], i + 2 === points1.length && (tx = points1[0], ty = points1[1]), projection(points1, points2, ty - points1[i + 1], points1[i] - tx)) return !1;
        for (i = 0; i < points2.length; i += 2) if (tx = points2[i + 2], ty = points2[i + 3], i + 2 === points2.length && (tx = points2[0], ty = points2[1]), projection(points1, points2, ty - points2[i + 1], points2[i] - tx)) return !1;
        return !0;

        function projection(points1, points2, axisX, axisY) {
            for (var min1, max1, min2, max2, prod, i = 0; i < points1.length; i += 2) prod = points1[i] * axisX + points1[i + 1] * axisY, isNaN(min1) ? min1 = max1 = prod : prod < min1 ? min1 = prod : max1 < prod && (max1 = prod);
            for (i = 0; i < points2.length; i += 2) prod = points2[i] * axisX + points2[i + 1] * axisY, isNaN(min2) ? min2 = max2 = prod : prod < min2 ? min2 = prod : max2 < prod && (max2 = prod);
            return max1 < min2 || max2 < min1
        }
    },Collision.sepAxisArc = function (points, x, y, r) {
        for (var tx, ty, minX, minY, i = 0; i < points.length; i += 2) if (tx = points[i + 2], ty = points[i + 3], i + 2 === points.length && (tx = points[0], ty = points[1]), projection(points, x, y, r, ty - points[i + 1], points[i] - tx)) return !1;
        for (i = 0; i < points.length; i += 2) tx = points[i], ty = points[i + 1], (isNaN(minX) || Math.pow(tx - x, 2) + Math.pow(ty - y, 2) < Math.pow(minX - x, 2) + Math.pow(minY - y, 2)) && (minX = tx, minY = ty);
        return !projection(points, x, y, r, minX - x, minY - y);

        function projection(points, x, y, r, axisX, axisY) {
            var min1, max1, prod, i, modulus = Math.sqrt(Math.pow(axisX, 2) + Math.pow(axisY, 2));
            for (axisX /= modulus, axisY /= modulus, i = 0; i < points.length; i += 2) prod = points[i] * axisX + points[i + 1] * axisY, isNaN(min1) ? min1 = max1 = prod : prod < min1 ? min1 = prod : max1 < prod && (max1 = prod);
            return max1 < (prod = x * axisX + y * axisY) - r || prod + r < min1
        }
    },Animate.prototype._loop = Utils.noop,Animate.prototype._init = function () {
        return this._timestart = this._timestamp = this._nextstamp = this._pausestamp = this._pauserange = 0, this
    },Animate.prototype._callback = function (timestamp) {
        this.func(timestamp, timestamp - this._timestamp), this._timestamp = timestamp
    },Animate.prototype.start = function () {
        return this._init().resume()
    },Animate.prototype.pause = function () {
        return this.isRunning() && (this.stop()._pausestamp = this._realstamp), this
    },Animate.prototype.resume = function () {
        return this.isStopped() && this._resume(), this
    },Animate.prototype._resume = Utils.noop,Animate.prototype.stop = function () {
        return this.isRunning() && this._stop(), this
    },Animate.prototype._stop = Utils.noop,Animate.prototype.isRunning = function () {
        return void 0 !== this._requestId
    },Animate.prototype.isStopped = function () {
        return void 0 === this._requestId
    },Animate.prototype.isPaused = function () {
        return 0 !== this._pausestamp
    },Animate.prototype.inProgress = function () {
        return this._timestamp < this.duration
    },Utils.inheritPrototype(AnimateITV, Animate),AnimateITV.prototype._loop = function () {
        var timestamp = this._realstamp = performance.now();
        if (0 === this._timestart && (this._timestart = timestamp), 0 !== this._pausestamp) return this._pauserange += timestamp - this._pausestamp, void (this._pausestamp = 0);
        timestamp - this._pauserange - this._timestart < this.duration ? (this._callback(this._nextstamp), this._nextstamp += this.interval) : (this._callback(this._nextstamp = this.duration), this._stop())
    },AnimateITV.prototype._resume = function () {
        this._loop(), this._requestId = setInterval(this._loopBind, this.interval)
    },AnimateITV.prototype._stop = function () {
        this._requestId = clearInterval(this._requestId)
    },Utils.inheritPrototype(AnimateRAF, Animate),AnimateRAF.prototype._loop = function (timestamp) {
        if (this._requestId = requestAnimationFrame(this._loopBind), this._realstamp = timestamp, 0 === this._timestart && (this._timestart = timestamp), 0 !== this._pausestamp) return this._pauserange += timestamp - this._pausestamp, void (this._pausestamp = 0);
        (timestamp -= this._pauserange + this._timestart) < this.duration ? this.interval ? timestamp >= this._nextstamp && (this._callback(this._nextstamp), this._nextstamp += this.interval) : this._callback(this._nextstamp = timestamp) : (this._callback(this._nextstamp = this.duration), this._stop())
    },AnimateRAF.prototype._resume = function () {
        this._requestId = requestAnimationFrame(this._loopBind)
    },AnimateRAF.prototype._stop = function () {
        this._requestId = cancelAnimationFrame(this._requestId)
    },$Animation.prototype.start = function () {
        return this.beforeUpdate(), this._timestamp = this._nextstamp = 0, this._update = this._updateForward, this.resume()
    },$Animation.prototype.reverse = function () {
        return this.isStopped() ? this : (this._update = this.isForward() ? this._updateBackward : this._updateForward, this.interval && (this._nextstamp += this.isForward() ? this.interval : -this.interval), this.resume())
    },$Animation.prototype.pause = function () {
        return this.update = Utils.noop, this
    },$Animation.prototype.resume = function () {
        var duration;
        return this.isStopped() || (this._timestamp += this._overflow * (this.isForward() ? 1 : -1), this._overflow = 0, duration = this.isForward() ? this.duration - this._timestamp : this._timestamp, this.update = this._update, this.animate._timestamp + duration >= this.animate.duration && (this.animate.duration = duration, this.animate.start())), this
    },$Animation.prototype.stop = function (toEnd) {
        return this.isRunning() && (this.update = (this._timestamp = toEnd ^ this.isForward() ? 0 : this.duration) ? this._updateForward : this._updateBackward, this._update = Utils.noop), this
    },$Animation.prototype.inProgress = function () {
        return !this.isStopped() && (this.isForward() ? this._timestamp < this.duration : 0 < this._timestamp)
    },$Animation.prototype.isRunning = function () {
        return this._update !== Utils.noop && this.update !== Utils.noop
    },$Animation.prototype.isStopped = function () {
        return this._update === Utils.noop
    },$Animation.prototype.isPaused = function () {
        return this._update !== Utils.noop && this.update === Utils.noop
    },$Animation.prototype.isForward = function () {
        return this._update === this._updateForward
    },$Animation.prototype._updateForward = function (interval) {
        return (this._timestamp += interval) < this.duration ? this.interval ? this._timestamp >= this._nextstamp && (this._callback(this._nextstamp), this._nextstamp += this.interval) : this._callback(this._nextstamp = this._timestamp) : (this._overflow = this._timestamp - this.duration, this._callback(this._nextstamp = this._timestamp = this.duration), this.pause().afterUpdate(!0)), this
    },$Animation.prototype._updateBackward = function (interval) {
        return 0 < (this._timestamp -= interval) ? this.interval ? this._timestamp <= this._nextstamp && (this._callback(this._nextstamp), this._nextstamp -= this.interval) : this._callback(this._nextstamp = this._timestamp) : (this._overflow = -this._timestamp, this._callback(this._nextstamp = this._timestamp = 0), this.pause().afterUpdate(!1)), this
    },$Animation.prototype._callback = function (timestamp) {
        this.onUpdate(timestamp / this.duration)
    },["update", "_update", "beforeUpdate", "onUpdate", "afterUpdate"].forEach(function (method) {
        $Animation.prototype[method] = Utils.noop
    }),Shape.prototype._initStyle = function () {
        this.setStyle(new ShapeStyle)
    },Shape.prototype.init = function (sx, sy, ox, oy) {
        return this.sx = sx, this.sy = sy, this.ox = ox, this.oy = oy, this._sx = sx - ox, this._sy = sy - oy, this
    },Shape.prototype.fill = function (fillRule) {
        return this._setFillStyles()._preprocess()._fill(fillRule)
    },Shape.prototype._setFillStyles = function () {
        return this._setStyle()._setShadowStyle()._setFillStyle()
    },Shape.prototype._fill = function (fillRule) {
        return this.ctx.fill(fillRule), this
    },Shape.prototype.stroke = function () {
        return this._setStrokeStyles()._preprocess()._stroke()
    },Shape.prototype._setStrokeStyles = function () {
        return this._setStyle()._setShadowStyle()._setStrokeStyle()
    },Shape.prototype._stroke = function () {
        return this.ctx.stroke(), this
    },Shape.prototype.fillStroke = function (fillRule) {
        return this._setFillStrokeStyles()._preprocess()._fill(fillRule)._stroke()
    },Shape.prototype.strokeFill = function (fillRule) {
        return this._setFillStrokeStyles()._preprocess()._stroke()._fill(fillRule)
    },Shape.prototype._setFillStrokeStyles = function () {
        return this._setStyle()._setShadowStyle()._setFillStyle()._setStrokeStyle()
    },Shape.prototype._setStyle = function () {
        var ctx = this.ctx, sty = this.sty;
        return ctx._alpha !== sty.alpha && (ctx.globalAlpha = ctx._alpha = sty.alpha), ctx._compositeOperation !== sty.compositeOperation && (ctx.globalCompositeOperation = ctx._compositeOperation = sty.compositeOperation), ctx._filter !== sty.filter && (ctx.filter = ctx._filter = sty.filter), this
    },Shape.prototype._setShadowStyle = function () {
        var ctx = this.ctx, sty = this.sty, dpr = ctx._dpr;
        return ctx._shadowBlur !== sty.shadowBlur && (ctx.shadowBlur = (ctx._shadowBlur = sty.shadowBlur) * dpr), ctx._shadowColor !== sty.shadowColor && (ctx.shadowColor = ctx._shadowColor = sty.shadowColor), ctx._shadowOffsetX !== sty.shadowOffsetX && (ctx.shadowOffsetX = (ctx._shadowOffsetX = sty.shadowOffsetX) * dpr), ctx._shadowOffsetY !== sty.shadowOffsetY && (ctx.shadowOffsetY = (ctx._shadowOffsetY = sty.shadowOffsetY) * dpr), this
    },Shape.prototype._setFillStyle = function () {
        var ctx = this.ctx, sty = this.sty;
        return ctx._fillStyle !== sty.fillStyle && (ctx.fillStyle = ctx._fillStyle = sty.fillStyle), this
    },Shape.prototype._setStrokeStyle = function () {
        var ctx = this.ctx, sty = this.sty;
        return ctx._strokeStyle !== sty.strokeStyle && (ctx.strokeStyle = ctx._strokeStyle = sty.strokeStyle), ctx._lineDash !== sty.lineDash && ctx.setLineDash(ctx._lineDash = sty.lineDash), ctx._lineDashOffset !== sty.lineDashOffset && (ctx.lineDashOffset = ctx._lineDashOffset = sty.lineDashOffset), ctx._lineWidth !== sty.lineWidth && (ctx.lineWidth = ctx._lineWidth = sty.lineWidth), ctx._lineCap !== sty.lineCap && (ctx.lineCap = ctx._lineCap = sty.lineCap), ctx._lineJoin !== sty.lineJoin && (ctx.lineJoin = ctx._lineJoin = sty.lineJoin), ctx._miterLimit !== sty.miterLimit && (ctx.miterLimit = ctx._miterLimit = sty.miterLimit), this
    },Shape.prototype.clip = function (fillRule) {
        return this._preprocess()._save()._clip(fillRule)
    },Shape.prototype._clip = function (fillRule) {
        return this.ctx.clip(fillRule), this
    },Shape.prototype._save = function () {
        var ctx = this.ctx;
        return ctx._stack.push({
            _m11: ctx._m11,
            _m12: ctx._m12,
            _m21: ctx._m21,
            _m22: ctx._m22,
            _m41: ctx._m41,
            _m42: ctx._m42,
            _m11i: ctx._m11i,
            _m12i: ctx._m12i,
            _m21i: ctx._m21i,
            _m22i: ctx._m22i,
            _m41i: ctx._m41i,
            _m42i: ctx._m42i,
            _alpha: ctx._alpha,
            _compositeOperation: ctx._compositeOperation,
            _filter: ctx._filter,
            _shadowBlur: ctx._shadowBlur,
            _shadowColor: ctx._shadowColor,
            _shadowOffsetX: ctx._shadowOffsetX,
            _shadowOffsetY: ctx._shadowOffsetY,
            _fillStyle: ctx._fillStyle,
            _strokeStyle: ctx._strokeStyle,
            _lineDash: ctx._lineDash,
            _lineDashOffset: ctx._lineDashOffset,
            _lineWidth: ctx._lineWidth,
            _lineCap: ctx._lineCap,
            _lineJoin: ctx._lineJoin,
            _miterLimit: ctx._miterLimit,
            _font: ctx._font,
            _textAlign: ctx._textAlign,
            _textBaseline: ctx._textBaseline,
            _direction: ctx._direction,
            _smoothingEnabled: ctx._smoothingEnabled,
            _smoothingQuality: ctx._smoothingQuality
        }), ctx.save(), this
    },Shape.prototype.restore = function (count) {
        for (var pop, ctx = this.ctx, stack = ctx._stack; stack.length && (pop = stack.pop(), ctx._m11 = pop._m11, ctx._m12 = pop._m12, ctx._m21 = pop._m21, ctx._m22 = pop._m22, ctx._m41 = pop._m41, ctx._m42 = pop._m42, ctx._m11i = pop._m11i, ctx._m12i = pop._m12i, ctx._m21i = pop._m21i, ctx._m22i = pop._m22i, ctx._m41i = pop._m41i, ctx._m42i = pop._m42i, ctx._alpha = pop._alpha, ctx._compositeOperation = pop._compositeOperation, ctx._filter = pop._filter, ctx._shadowBlur = pop._shadowBlur, ctx._shadowColor = pop._shadowColor, ctx._shadowOffsetX = pop._shadowOffsetX, ctx._shadowOffsetY = pop._shadowOffsetY, ctx._fillStyle = pop._fillStyle, ctx._strokeStyle = pop._strokeStyle, ctx._lineDash = pop._lineDash, ctx._lineDashOffset = pop._lineDashOffset, ctx._lineWidth = pop._lineWidth, ctx._lineCap = pop._lineCap, ctx._lineJoin = pop._lineJoin, ctx._miterLimit = pop._miterLimit, ctx._font = pop._font, ctx._textAlign = pop._textAlign, ctx._textBaseline = pop._textBaseline, ctx._direction = pop._direction, ctx._smoothingEnabled = pop._smoothingEnabled, ctx._smoothingQuality = pop._smoothingQuality, ctx.restore(), --count);) ;
        return this
    },Shape.prototype.clear = function (sx, sy, width, height, fillRule) {
        return this.clip(fillRule).ctx.clearRect(this._sx + sx, this._sy + sy, width, height), this.restore()
    },Shape.prototype._setTransform = function () {
        var ctx = this.ctx, mat = this.mat, m11 = mat.getM11(), m22 = mat.getM22(), m12 = mat.getM12(),
            m21 = mat.getM21(), m41 = mat.offsetX + this.ox, m42 = mat.offsetY + this.oy;
        return m11 !== ctx._m11 || m22 !== ctx._m22 || m12 !== ctx._m12 || m21 !== ctx._m21 ? (ctx.transform(m11 * ctx._m11i + m12 * ctx._m21i, m11 * ctx._m12i + m12 * ctx._m22i, m21 * ctx._m11i + m22 * ctx._m21i, m21 * ctx._m12i + m22 * ctx._m22i, m41 * ctx._m11i + m42 * ctx._m21i + ctx._m41i, m41 * ctx._m12i + m42 * ctx._m22i + ctx._m42i), ctx._m11 = m11, ctx._m12 = m12, ctx._m21 = m21, ctx._m22 = m22, ctx._m41 = m41, ctx._m42 = m42, ctx._m11i = mat.getM11i(), ctx._m12i = mat.getM12i(), ctx._m21i = mat.getM21i(), ctx._m22i = mat.getM22i(), ctx._m41i = -m41 * ctx._m11i - m42 * ctx._m21i, ctx._m42i = -m41 * ctx._m12i - m42 * ctx._m22i) : m41 === ctx._m41 && m42 === ctx._m42 || (ctx.translate(m41 * ctx._m11i + m42 * ctx._m21i + ctx._m41i, m41 * ctx._m12i + m42 * ctx._m22i + ctx._m42i), ctx._m41 = m41, ctx._m42 = m42, ctx._m41i = -m41 * ctx._m11i - m42 * ctx._m21i, ctx._m42i = -m41 * ctx._m12i - m42 * ctx._m22i), this
    },Shape.prototype._resetTransform = function () {
        var ctx = this.ctx;
        return 1 !== ctx._m11i || 1 !== ctx._m22i || 0 !== ctx._m12i || 0 !== ctx._m21i ? (ctx.transform(ctx._m11i, ctx._m12i, ctx._m21i, ctx._m22i, ctx._m41i, ctx._m42i), ctx._m11 = ctx._m11i = ctx._m22 = ctx._m22i = 1, ctx._m12 = ctx._m12i = ctx._m21 = ctx._m21i = ctx._m41 = ctx._m41i = ctx._m42 = ctx._m42i = 0) : 0 === ctx._m41i && 0 === ctx._m42i || (ctx.translate(ctx._m41i, ctx._m42i), ctx._m41 = ctx._m41i = ctx._m42 = ctx._m42i = 0), this
    },Shape.prototype._preprocess = function () {
        return this._setTransform()._process()
    },Shape.prototype._process = function () {
        return this.process(), this
    },Shape.prototype.process = Utils.noop,Shape.prototype._isPointIn = function (type, x, y) {
        var ctx = this.ctx, m22 = this.mat, m11i = m22.getM11i(), m12i = m22.getM12i(), m21i = m22.getM21i(),
            m22i = m22.getM22i(), m41i = -(m22.offsetX + this.ox) * m11i - (m22.offsetY + this.oy) * m21i,
            m42i = -(m22.offsetX + this.ox) * m12i - (m22.offsetY + this.oy) * m22i, m11 = ctx._m11, m12 = ctx._m12,
            m21 = ctx._m21, m22 = ctx._m22;
        return this["_isPointIn" + type]((m11i * m11 + m12i * m21) * x + (m21i * m11 + m22i * m21) * y + m41i * m11 + m42i * m21 + ctx._m41, (m11i * m12 + m12i * m22) * x + (m21i * m12 + m22i * m22) * y + m41i * m12 + m42i * m22 + ctx._m42)
    },Shape.prototype.isPointInPath = function (x, y) {
        return this._isPointIn("Path", x, y)
    },Shape.prototype._isPointInPath = function (x, y) {
        var ctx = this._process().ctx, dpr = ctx._dpr;
        return ctx.isPointInPath(x * dpr, y * dpr)
    },Shape.prototype.isPointInStroke = function (x, y) {
        return this._isPointIn("Stroke", x, y)
    },Shape.prototype._isPointInStroke = function (x, y) {
        var ctx = this._process().ctx, dpr = ctx._dpr;
        return ctx.isPointInStroke(x * dpr, y * dpr)
    },Shape.prototype._isQuickIn = function (type, x, y) {
        var m42i = this.mat, m11i = m42i.getM11i(), m12i = m42i.getM12i(), m21i = m42i.getM21i(), m22i = m42i.getM22i(),
            m41i = -(m42i.offsetX + this.ox) * m11i - (m42i.offsetY + this.oy) * m21i,
            m42i = -(m42i.offsetX + this.ox) * m12i - (m42i.offsetY + this.oy) * m22i;
        return this["_isQuickIn" + type](m11i * x + m21i * y + m41i, m12i * x + m22i * y + m42i)
    },Shape.prototype.isQuickInPath = function (x, y) {
        return this._isQuickIn("Path", x, y)
    },Shape.prototype._isQuickInPath = function (x, y) {
        return this._resetTransform()._isPointInPath(x, y)
    },Shape.prototype.isQuickInStroke = function (x, y) {
        return this._isQuickIn("Stroke", x, y)
    },Shape.prototype._isQuickInStroke = function (x, y) {
        return this._resetTransform()._isPointInStroke(x, y)
    },Shape.prototype.getStartX = function () {
        return this.sx
    },Shape.prototype.setStartX = function (sx) {
        return this.sx = sx, this._sx = sx - this.ox, this
    },Shape.prototype.getStartY = function () {
        return this.sy
    },Shape.prototype.setStartY = function (sy) {
        return this.sy = sy, this._sy = sy - this.oy, this
    },Shape.prototype.setStart = function (sx, sy) {
        return this.setStartX(sx).setStartY(sy)
    },Shape.prototype.getOriginX = function () {
        return this.ox
    },Shape.prototype.setOriginX = function (ox) {
        return this.ox = ox, this._sx = this.sx - ox, this
    },Shape.prototype.getOriginY = function () {
        return this.oy
    },Shape.prototype.setOriginY = function (oy) {
        return this.oy = oy, this._sy = this.sy - oy, this
    },Shape.prototype.setOrigin = function (ox, oy) {
        return this.setOriginX(ox).setOriginY(oy)
    },Shape.prototype.getVectorX = function () {
        return this._sx
    },Shape.prototype.getVectorY = function () {
        return this._sy
    },Shape.prototype.getMatrix = function () {
        return this.mat
    },Shape.prototype.setMatrix = function (mat) {
        return this.mat = mat, this
    },Shape.prototype.getStyle = function () {
        return this.sty
    },Shape.prototype.setStyle = function (sty) {
        return this.sty = sty, this
    },Utils.inheritPrototype(Arc, Shape),Arc.prototype.process = function () {
        this.ctx.beginPath(), this.ctx.arc(this._sx, this._sy, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
    },Arc.prototype._isQuickInPath = function (x, y) {
        return Math.sqrt(Math.pow(this._sx - x, 2) + Math.pow(this._sy - y, 2)) <= this.radius
    },Arc.prototype._isQuickInStroke = function (x, y) {
        return 0 === Math.round((Math.sqrt(Math.pow(this._sx - x, 2) + Math.pow(this._sy - y, 2)) - this.radius) / this.sty.lineWidth)
    },Arc.prototype.getRadius = function () {
        return this.radius
    },Arc.prototype.setRadius = function (radius) {
        return this.radius = radius, this
    },Arc.prototype.getStartAngle = function () {
        return this.startAngle
    },Arc.prototype.setStartAngle = function (startAngle) {
        return this.startAngle = startAngle, this
    },Arc.prototype.getEndAngle = function () {
        return this.endAngle
    },Arc.prototype.setEndAngle = function (endAngle) {
        return this.endAngle = endAngle, this
    },Arc.prototype.getAnticlockwise = function () {
        return this.anticlockwise
    },Arc.prototype.setAnticlockwise = function (anticlockwise) {
        return this.anticlockwise = anticlockwise, this
    },Utils.inheritPrototype(Sector, Arc),Sector.prototype.process = function () {
        var ctx = this.ctx, sx = this._sx, sy = this._sy;
        ctx.beginPath(), ctx.moveTo(sx, sy), ctx.arc(sx, sy, this.radius, this.startAngle, this.endAngle, this.anticlockwise), ctx.closePath()
    },Utils.inheritPrototype(Ring, Arc),Ring.prototype.process = function () {
        Arc.prototype.process.call(this), this.ctx.arc(this._sx, this._sy, this.innerRadius, this.endAngle, this.startAngle, !this.anticlockwise), this.ctx.closePath()
    },Ring.prototype.getOuterRadius = function () {
        return this.radius
    },Ring.prototype.setOuterRadius = function (outerRadius) {
        return this.radius = outerRadius, this
    },Ring.prototype.getInnerRadius = function () {
        return this.innerRadius
    },Ring.prototype.setInnerRadius = function (innerRadius) {
        return this.innerRadius = innerRadius, this
    },Utils.inheritPrototype(Ellipse, Arc),Ellipse.prototype.process = function () {
        this.ctx.beginPath(), this.ctx.ellipse(this._sx, this._sy, this.radius, this.radiusY, this.rotation, this.startAngle, this.endAngle, this.anticlockwise)
    },Ellipse.prototype._isQuickInPath = function (x, y) {
        return x -= this._sx, y -= this._sy, Math.sqrt(Math.pow(this._cos * x + this._sin * y, 2) * this._ryx + Math.pow(-this._sin * x + this._cos * y, 2) * this._rxy) <= this._sqrtRxRy
    },Ellipse.prototype._isQuickInStroke = function (x, y) {
        return x -= this._sx, y -= this._sy, 0 === Math.round((Math.sqrt(Math.pow(this._cos * x + this._sin * y, 2) * this._ryx + Math.pow(-this._sin * x + this._cos * y, 2) * this._rxy) - this._sqrtRxRy) / this.sty.lineWidth)
    },Ellipse.prototype.getRadiusX = function () {
        return this.radius
    },Ellipse.prototype.setRadiusX = function (radiusX) {
        return this._setRadius(this.radius = radiusX, this.radiusY)
    },Ellipse.prototype.getRadiusY = function () {
        return this.radiusY
    },Ellipse.prototype.setRadiusY = function (radiusY) {
        return this._setRadius(this.radius, this.radiusY = radiusY)
    },Ellipse.prototype.setRadius = function (radiusX, radiusY) {
        return this.radius = radiusX, radiusY && this.setRadiusY(this.radiusY = radiusY), this
    },Ellipse.prototype._setRadius = function (radiusX, radiusY) {
        return this._sqrtRxRy = Math.sqrt(radiusX * radiusY), this._rxy = radiusX / radiusY, this._ryx = radiusY / radiusX, this
    },Ellipse.prototype.getRotation = function () {
        return this.rotation
    },Ellipse.prototype.setRotation = function (rotation) {
        return this.rotation !== rotation && (this.rotation = rotation, this._cos = Math.cos(rotation), this._sin = Math.sin(rotation)), this
    },Utils.inheritPrototype(RegularPolygon, Arc),RegularPolygon.prototype.process = function () {
        var tempY, ctx = this.ctx, sx = this._sx, sy = this._sy, cos = this._cos, sin = this._sin, vx = 0,
            vy = -this.radius;
        ctx.beginPath(), ctx.moveTo(sx + vx, sy + vy);
        for (var i = 0; i < this.sides - 1; i++) tempY = vx * sin + vy * cos, vx = vx * cos - vy * sin, vy = tempY, ctx.lineTo(sx + vx, sy + vy);
        ctx.closePath()
    },RegularPolygon.prototype.getSides = function () {
        return this.sides
    },RegularPolygon.prototype.setSides = function (sides) {
        return this.sides !== sides && (this.sides = sides, this._cos = Math.cos(2 * Math.PI / sides), this._sin = Math.sin(2 * Math.PI / sides)), this
    },Utils.inheritPrototype(RegularStar, RegularPolygon),RegularStar.prototype.process = function () {
        var tempY, ctx = this.ctx, sx = this._sx, sy = this._sy, vx = 0, vy = -this.radius, cos = this._cos,
            sin = this._sin;
        if (ctx.beginPath(), ctx.moveTo(sx + vx, sy + vy), this._even) {
            for (var cosh = this._cosh, sinh = this._sinh, i = 0; i < this.sides / 2 - 1; i++) lineToNext();
            for (ctx.closePath(), tempY = vx * sinh + vy * cosh, vx = vx * cosh - vy * sinh, vy = tempY, ctx.moveTo(sx + vx, sy + vy), i = 0; i < this.sides / 2 - 1; i++) lineToNext()
        } else for (i = 0; i < this.sides - 1; i++) lineToNext();

        function lineToNext() {
            tempY = vx * sin + vy * cos, vx = vx * cos - vy * sin, vy = tempY, ctx.lineTo(sx + vx, sy + vy)
        }

        ctx.closePath()
    },RegularStar.prototype.setSides = function (sides) {
        return this.sides !== sides && (this.sides = sides, this._cos = Math.cos(4 * Math.PI / sides), this._sin = Math.sin(4 * Math.PI / sides), (this._even = 0 == (1 & sides)) && (this._cosh = Math.cos(2 * Math.PI / sides), this._sinh = Math.sin(2 * Math.PI / sides))), this
    },Utils.inheritPrototype(Rect, Shape),Rect.prototype.init = function (sx, sy, ox, oy) {
        return Shape.prototype.init.call(this, sx, sy, ox, oy)._horizontal()._vertical()
    },Rect.prototype.process = function () {
        this.ctx.beginPath(), this.ctx.rect(this._sx, this._sy, this.width, this.height)
    },Rect.prototype._isQuickInPath = function (x, y) {
        return x >= this.getLeft() && y >= this.getTop() && x <= this.getRight() && y <= this.getBottom()
    },Rect.prototype._isQuickInStroke = function (x, y) {
        var left = this.getLeft(), top = this.getTop(), right = this.getRight(), bottom = this.getBottom(),
            lineWidth = this.sty.lineWidth;
        return (0 === Math.round((x - left) / lineWidth) || 0 === Math.round((x - right) / lineWidth)) && top <= y && y <= bottom || (0 === Math.round((y - top) / lineWidth) || 0 === Math.round((y - bottom) / lineWidth)) && left <= x && x <= right
    },Rect.prototype.setStartX = function (sx) {
        return Shape.prototype.setStartX.call(this, sx)._horizontal()
    },Rect.prototype.setStartY = function (sy) {
        return Shape.prototype.setStartY.call(this, sy)._vertical()
    },Rect.prototype.setOriginX = function (ox) {
        return Shape.prototype.setOriginX.call(this, ox)._horizontal()
    },Rect.prototype.setOriginY = function (oy) {
        return Shape.prototype.setOriginY.call(this, oy)._vertical()
    },Rect.prototype.getWidth = function () {
        return this.width
    },Rect.prototype.setWidth = function (width) {
        return this.width = width, this._horizontal()
    },Rect.prototype._horizontal = function () {
        return 0 < this.width ? this._right = (this._left = this._sx) + this.width : this._left = (this._right = this._sx) + this.width, this
    },Rect.prototype.getHeight = function () {
        return this.height
    },Rect.prototype.setHeight = function (height) {
        return this.height = height, this._vertical()
    },Rect.prototype._vertical = function () {
        return 0 < this.height ? this._bottom = (this._top = this._sy) + this.height : this._top = (this._bottom = this._sy) + this.height, this
    },Rect.prototype.getLeft = function () {
        return this._left
    },Rect.prototype.getTop = function () {
        return this._top
    },Rect.prototype.getRight = function () {
        return this._right
    },Rect.prototype.getBottom = function () {
        return this._bottom
    },Utils.inheritPrototype(Grid, Rect),Grid.prototype.process = function () {
        var i, ctx = this.ctx, left = this._left, top = this._top, right = this._right, bottom = this._bottom,
            spacing = this.spacing;
        for (ctx.beginPath(), i = left + spacing; i < right; i += spacing) ctx.moveTo(i, top), ctx.lineTo(i, bottom);
        for (i = top + spacing; i < bottom; i += spacing) ctx.moveTo(left, i), ctx.lineTo(right, i)
    },Grid.prototype.getSpacing = function () {
        return this.spacing
    },Grid.prototype.setSpacing = function (spacing) {
        return this.spacing = 0 < spacing ? spacing : 1, this
    },Utils.inheritPrototype(RoundRect, Rect),RoundRect.prototype.process = function () {
        var ctx = this.ctx, left = this._left, top = this._top, right = this._right, bottom = this._bottom,
            radius = this.radius;
        ctx.beginPath(), ctx.moveTo(left + radius, top), ctx.arcTo(right, top, right, bottom, radius), ctx.arcTo(right, bottom, left, bottom, radius), ctx.arcTo(left, bottom, left, top, radius), ctx.arcTo(left, top, right, top, radius)
    },Utils._assign(RoundRect, Arc, "getRadius", "setRadius"),Utils.inheritPrototype($Image, Rect),$Image.prototype._initStyle = function () {
        this.setStyle(new ImageStyle)
    },$Image.prototype._draw = $Image.prototype.onload = Utils.noop,$Image.prototype.getSrc = function () {
        return this.src
    },$Image.prototype.setSrc = function (src) {
        return Utils.loadImage(this.src = encodeURI(src), this._setImage, this), this
    },$Image.prototype._setImage = function (image) {
        return -1 !== image.src.indexOf(this.src) && this.setImage(image), this
    },$Image.prototype.getImage = function () {
        return this.image
    },$Image.prototype.setImage = function (image) {
        return this.image !== image && (this.image = image, this.src = image.src, this.resetDraw().onload()), this
    },$Image.prototype.toImageData = function () {
        return Utils._canvas.width = this.width, Utils._canvas.height = this.height, this._draw === $Image.prototype._draw6 ? Utils._ctx.drawImage(this.image, this.cropX, this.cropY, this.cropWidth, this.cropHeight, 0, 0, this.width, this.height) : Utils._ctx.drawImage(this.image, 0, 0, this.width, this.height), Utils._ctx.getImageData(0, 0, this.width, this.height)
    },$Image.prototype.isComplete = function () {
        return void 0 !== this.image && this.image.src === this.src
    },$Image.prototype.resetDraw = function () {
        return isNaN(this.cropX) || isNaN(this.cropY) || isNaN(this.cropWidth) || isNaN(this.cropHeight) ? this.adjustSize ? (this.setWidth(this.image.width).setHeight(this.image.height), this._draw = $Image.prototype._draw0) : this._draw = $Image.prototype._draw2 : (this.adjustSize && this.setWidth(this.cropWidth).setHeight(this.cropHeight), this._draw = $Image.prototype._draw6), this
    },$Image.prototype._draw0 = function () {
        return this.ctx.drawImage(this.image, this._sx, this._sy), this
    },$Image.prototype._draw2 = function () {
        return this.ctx.drawImage(this.image, this._sx, this._sy, this.width, this.height), this
    },$Image.prototype._draw6 = function () {
        return this.ctx.drawImage(this.image, this.cropX, this.cropY, this.cropWidth, this.cropHeight, this._sx, this._sy, this.width, this.height), this
    },$Image.prototype.draw = function () {
        return this._setImageStyles()._setTransform()._draw()
    },$Image.prototype._setImageStyles = function () {
        return this._setStyle()._setShadowStyle()._setImageStyle()
    },$Image.prototype._setImageStyle = function () {
        var ctx = this.ctx, sty = this.sty;
        return ctx._smoothingEnabled !== sty.smoothingEnabled && (ctx.imageSmoothingEnabled = ctx._smoothingEnabled = sty.smoothingEnabled), ctx._smoothingQuality !== sty.smoothingQuality && (ctx.imageSmoothingQuality = ctx._smoothingQuality = sty.smoothingQuality), this
    },$Image.prototype.getAdjustSize = function () {
        return this.adjustSize
    },$Image.prototype.setAdjustSize = function (adjustSize) {
        return this.adjustSize = adjustSize, this
    },$Image.prototype.getCropX = function () {
        return this.cropX
    },$Image.prototype.setCropX = function (cropX) {
        return this.cropX = cropX, this
    },$Image.prototype.getCropY = function () {
        return this.cropY
    },$Image.prototype.setCropY = function (cropY) {
        return this.cropY = cropY, this
    },$Image.prototype.setCrop = function (cropX, cropY) {
        return this.setCropX(cropX).setCropY(cropY)
    },$Image.prototype.getCropWidth = function () {
        return this.cropWidth
    },$Image.prototype.setCropWidth = function (cropWidth) {
        return this.cropWidth = cropWidth, this
    },$Image.prototype.getCropHeight = function () {
        return this.cropHeight
    },$Image.prototype.setCropHeight = function (cropHeight) {
        return this.cropHeight = cropHeight, this
    },$ImageData.prototype.getImageData = function () {
        return this._imageData
    },$ImageData.prototype.setImageData = function (sx, sy, sw_or_imageData, sh_or_sw) {
        return sw_or_imageData && (isNaN(sw_or_imageData) ? (this._imageData = new ImageData(sw_or_imageData.data, this.width = sh_or_sw || sw_or_imageData.width), this.height = this._imageData.height, this.data = this._imageData.data, (isNaN(sx) || isNaN(sy)) && (sx = sy = 0), this.setStart(sx, sy).resetPut()) : isNaN(sh_or_sw) || (this.width = sw_or_imageData, this.height = sh_or_sw, isNaN(sx) || isNaN(sy) ? (this._imageData = this.ctx.createImageData(sw_or_imageData, sh_or_sw), sx = sy = 0) : this._imageData = this.ctx.getImageData(sx, sy, sw_or_imageData, sh_or_sw), this.data = this._imageData.data, this.setStart(sx, sy).resetPut())), this
    },$ImageData.prototype._put = function () {
        return this.put === $ImageData.prototype._put0 ? (Utils._canvas.width = this.width, Utils._canvas.height = this.height, Utils._ctx.putImageData(this._imageData, 0, 0)) : (Utils._canvas.width = this.dw, Utils._canvas.height = this.dh, Utils._ctx.putImageData(this._imageData, 0, 0, this.dx, this.dy, this.dw, this.dh)), this
    },$ImageData.prototype.toDataURL = function (type, quality) {
        return this._put(), Utils._canvas.toDataURL(type, quality)
    },$ImageData.prototype.toBlob = function (callback, type, quality) {
        return this._put(), Utils._canvas.toBlob(callback, type, quality), this
    },$ImageData.prototype.saveAsImage = function (filename, type, quality) {
        return Utils._a.href = this.toDataURL(type, quality), Utils._a.download = filename, Utils._a.click(), this
    },$ImageData.prototype.resetPut = function () {
        return isNaN(this.dx) || isNaN(this.dy) || isNaN(this.dw) || isNaN(this.dh) ? this.put = $ImageData.prototype._put0 : this.put = $ImageData.prototype._put4, this
    },$ImageData.prototype.put = Utils.noop,$ImageData.prototype._put0 = function () {
        return this.ctx.putImageData(this._imageData, this.sx, this.sy), this
    },$ImageData.prototype._put4 = function () {
        return this.ctx.putImageData(this._imageData, this.sx, this.sy, this.dx, this.dy, this.dw, this.dh), this
    },$ImageData.prototype.getData = function () {
        return this.data
    },Utils._assign($ImageData, Rect, "getWidth", "getHeight", "getStartX", "getStartY", "setStart", "_horizontal", "_vertical", "getLeft", "getTop", "getRight", "getBottom"),$ImageData.prototype.isPointInPath = function (x, y) {
        return x >= this._left && y >= this._top && x <= this._right && y <= this._bottom
    },$ImageData.prototype.isPointInStroke = function (x, y) {
        return (0 === Math.round(x - this._left) || 0 === Math.round(x - this._right)) && y >= this._top && y <= this._bottom || (0 === Math.round(y - this._top) || 0 === Math.round(y - this._bottom)) && x >= this._left && x <= this._right
    },$ImageData.prototype.setStartX = function (sx) {
        return this.sx = this._sx = sx, this._horizontal()
    },$ImageData.prototype.setStartY = function (sy) {
        return this.sy = this._sy = sy, this._vertical()
    },$ImageData.prototype.getDirtyX = function () {
        return this.dx
    },$ImageData.prototype.setDirtyX = function (dx) {
        return this.dx = dx, this
    },$ImageData.prototype.getDirtyY = function () {
        return this.dy
    },$ImageData.prototype.setDirtyY = function (dy) {
        return this.dy = dy, this
    },$ImageData.prototype.setDirty = function (dx, dy) {
        return this.setDirtyX(dx).setDirtyY(dy)
    },$ImageData.prototype.getDirtyWidth = function () {
        return this.dw
    },$ImageData.prototype.setDirtyWidth = function (dw) {
        return this.dw = dw, this
    },$ImageData.prototype.getDirtyHeight = function () {
        return this.dh
    },$ImageData.prototype.setDirtyHeight = function (dh) {
        return this.dh = dh, this
    },$ImageData.prototype.getPixelIndex = function (x, y) {
        return 4 * (x - this.sx + (y - this.sy) * this.width)
    },$ImageData.prototype.forEach = function (callback, context, x, y, w, h) {
        x = isNaN(x) || x < this._left ? this._left : x, y = isNaN(y) || y < this._top ? this._top : y, w = isNaN(w) || x + w > this._right ? this._right - x : w, h = isNaN(h) || y + h > this._bottom ? this._bottom - y : h;
        for (var j, data = this.data, index = this.getPixelIndex(x, y), offset = 4 * (this.width - w), i = y; i < y + h; i++) {
            for (j = x; j < x + w; j++) callback.call(context, data, index, j, i), index += 4;
            index += offset
        }
        return this
    },$ImageData.prototype.mosaic = function (t, x, y, w, h) {
        if (1 === t) return this;
        t = t || 3, x = isNaN(x) || x < this._left ? this._left : x, y = isNaN(y) || y < this._top ? this._top : y, w = isNaN(w) || x + w > this._right ? this._right - x : w, h = isNaN(h) || y + h > this._bottom ? this._bottom - y : h;
        for (var j, data = this.data, index = this.getPixelIndex(x, y), width = this.width, th = Math.floor(h / t), tw = Math.floor(w / t), xm = w % t, ym = h % t, i = 0; i < th; i++) {
            for (j = 0; j < tw; j++) mosaicRect(index, t, t), index += 4 * t;
            mosaicRect(index, xm, t), index += 4 * (xm + (t - 1) * width)
        }
        for (j = 0; j < tw; j++) mosaicRect(index, t, ym), index += 4 * t;

        function mosaicRect(idx, w, h) {
            for (var l, rand = idx + 4 * (Utils.randInt(w) + Utils.randInt(h) * width), r = data[rand], g = data[rand + 1], b = data[rand + 2], a = data[rand + 3], k = 0; k < h; k++) {
                for (l = 0; l < w; l++) data[idx] = r, data[idx + 1] = g, data[idx + 2] = b, data[idx + 3] = a, idx += 4;
                idx += 4 * (width - w)
            }
        }

        return (1 < xm || 1 < ym) && mosaicRect(index, xm, ym), this
    },$ImageData.prototype.transparencyDisposal = function (ratio, x, y, w, h) {
        return ratio = isNaN(ratio) ? 255 : 255 * ratio, this.forEach(function (data, index) {
            data[index] >= ratio && data[index + 1] >= ratio && data[index + 2] >= ratio && (data[index + 3] = 0)
        }, this, x, y, w, h)
    },$ImageData.prototype.reverseColor = function (x, y, w, h) {
        return this.forEach(function (data, index) {
            data[index] = 255 - data[index], data[index + 1] = 255 - data[index + 1], data[index + 2] = 255 - data[index + 2]
        }, this, x, y, w, h)
    },$ImageData.prototype.greyProcessing = function (x, y, w, h) {
        return this.forEach(function (data, index) {
            data[index] = data[index + 1] = data[index + 2] = .299 * data[index] + .587 * data[index + 1] + .114 * data[index + 2]
        }, this, x, y, w, h)
    },$ImageData.prototype.blackWhite = function (ratio, x, y, w, h) {
        return ratio = isNaN(ratio) ? 127 : 254 * ratio, this.forEach(function (data, index) {
            data[index] = data[index + 1] = data[index + 2] = (data[index] + data[index + 1] + data[index + 2]) / 3 > ratio ? 255 : 0
        }, this, x, y, w, h)
    },$ImageData.prototype.relief = function () {
        for (var j, data = this.data, width = this.width, w = width - 1, h = this.height - 1, w4 = 4 * width, index = 0, i = 0; i < h; i++) {
            for (j = 0; j < w; j++) data[index] = 2 * data[index] - data[index + 4] - data[index + w4] + 127.5, data[index + 1] = 2 * data[index + 1] - data[index + 5] - data[index + 1 + w4] + 127.5, data[index + 2] = 2 * data[index + 2] - data[index + 6] - data[index + 2 + w4] + 127.5, index += 4;
            index += 4
        }
        for (index = 4 * w, i = 0; i < h; i++) data[index] = data[index - 4], data[index + 1] = data[index - 3], data[index + 2] = data[index - 2], index += w4;
        for (index = h * w4, j = 0; j < width; j++) data[index] = data[index - w4], data[index + 1] = data[index + 1 - w4], data[index + 2] = data[index + 2 - w4], index += 4;
        return this
    },$ImageData.prototype.sunGlass = function () {
        for (var j, data = this.data, width = this.width, w = width - 1, h = this.height - 1, w4 = 4 * width, index = 0, i = 0; i < h; i++) {
            for (j = 0; j < w; j++) data[index] = 2 * data[index] - 1.5 * data[index + 4], data[index + 1] = 2 * data[index + 1] - 1.5 * data[index + 5], data[index + 2] = 2 * data[index + 2] - 1.5 * data[index + 6], index += 4;
            index += 4
        }
        for (index = 4 * w, i = 0; i < h; i++) data[index] = data[index - 4], data[index + 1] = data[index - 3], data[index + 2] = data[index - 2], index += w4;
        for (index = h * w4, j = 0; j < width; j++) data[index] = data[index - w4], data[index + 1] = data[index + 1 - w4], data[index + 2] = data[index + 2 - w4], index += 4;
        return this
    },$ImageData.prototype.frostedGlass = function (t) {
        return t = t || 8, this.forEach(function (data, index, x, y) {
            var randX = Utils.randInt(t), rand = Utils.randInt(t);
            x + randX >= this._right || y + rand >= this._bottom || (rand = index + 4 * (randX + rand * this.width), data[index] = data[rand], data[index + 1] = data[rand + 1], data[index + 2] = data[rand + 2], data[index + 3] = data[rand + 3])
        }, this)
    },Utils.inheritPrototype(Text, Shape),Text.prototype._initStyle = function () {
        this.setStyle(new TextStyle)
    },Text.prototype._preprocess = Text.prototype._setTransform,Text.prototype._isPointIn = Text.prototype._isQuickIn,Utils._assign(Text, Rect, "_isQuickInPath", "_isQuickInStroke"),Text.prototype._fill = function () {
        return this.ctx.fillText(this.text, this._sx, this._sy), this
    },Text.prototype._stroke = function () {
        return this.ctx.strokeText(this.text, this._sx, this._sy), this
    },Text.prototype._clip = function () {
        var ctx = this.ctx;
        return ctx.beginPath(), ctx.rect(this.getLeft(), this.getTop(), this.getActualBoundingBoxWidth(), this.getActualBoundingBoxHeight()), ctx.clip(), this
    },Text.prototype._setFillStyles = function () {
        return Shape.prototype._setFillStyles.call(this)._setTextStyle()
    },Text.prototype._setStrokeStyles = function () {
        return Shape.prototype._setStrokeStyles.call(this)._setTextStyle()
    },Text.prototype._setFillStrokeStyles = function () {
        return Shape.prototype._setFillStrokeStyles.call(this)._setTextStyle()
    },Text.prototype._setTextStyle = function () {
        var ctx = this.ctx, sty = this.sty;
        return ctx._font !== sty.font && (ctx.font = ctx._font = sty.font), ctx._textAlign !== sty.textAlign && (ctx.textAlign = ctx._textAlign = sty.textAlign), ctx._textBaseline !== sty.textBaseline && (ctx.textBaseline = ctx._textBaseline = sty.textBaseline), ctx._direction !== sty.direction && (ctx.direction = ctx._direction = sty.direction), this
    },Text.prototype.getText = function () {
        return this.text
    },Text.prototype.setText = function (text) {
        return this.text = text, this
    },Text.prototype.getMetrics = function () {
        var sty = this.sty;
        return Utils.measureText(this.text, sty.font, sty.textAlign, sty.textBaseline, sty.direction)
    },Text.prototype.getWidth = function () {
        return this.getMetrics().width
    },Text.prototype.getActualBoundingBoxWidth = function () {
        return this.getMetrics().actualBoundingBoxWidth
    },Text.prototype.getActualBoundingBoxHeight = function () {
        return this.getMetrics().actualBoundingBoxHeight
    },Text.prototype.getLeft = function () {
        return this._sx - this.getMetrics().actualBoundingBoxLeft
    },Text.prototype.getRight = function () {
        return this._sx + this.getMetrics().actualBoundingBoxRight
    },Text.prototype.getTop = function () {
        return this._sy - this.getMetrics().actualBoundingBoxAscent
    },Text.prototype.getBottom = function () {
        return this._sy + this.getMetrics().actualBoundingBoxDescent
    },Utils.inheritPrototype(Line, Shape),Line.prototype.process = function () {
        var ctx = this.ctx;
        ctx.beginPath(), ctx.moveTo(this._sx, this._sy), ctx.lineTo(this._ex, this._ey)
    },Line.prototype.setOriginX = function (ox) {
        return Shape.prototype.setOriginX.call(this, ox), this._ex = this.ex - ox, this
    },Line.prototype.setOriginY = function (oy) {
        return Shape.prototype.setOriginY.call(this, oy), this._ey = this.ey - oy, this
    },Line.prototype.getEndX = function () {
        return this.ex
    },Line.prototype.setEndX = function (ex) {
        return this.ex = ex, this._ex = ex - this.ox, this
    },Line.prototype.getEndY = function () {
        return this.ey
    },Line.prototype.setEndY = function (ey) {
        return this.ey = ey, this._ey = ey - this.oy, this
    },Line.prototype.setEnd = function (ex, ey) {
        return this.setEndX(ex).setEndY(ey)
    },Utils.inheritPrototype(BezierLine, Line),BezierLine.prototype.process = function () {
        var ctx = this.ctx;
        ctx.beginPath(), ctx.moveTo(this._sx, this._sy), void 0 === this.cp1x ? ctx.lineTo(this._ex, this._ey) : void 0 === this.cp2x ? ctx.quadraticCurveTo(this._cp1x, this._cp1y, this._ex, this._ey) : ctx.bezierCurveTo(this._cp1x, this._cp1y, this._cp2x, this._cp2y, this._ex, this._ey)
    },BezierLine.prototype.setOriginX = function (ox) {
        return Line.prototype.setOriginX.call(this, ox), this._cp1x = this.cp1x - ox, this._cp2x = this.cp2x - ox, this
    },BezierLine.prototype.setOriginY = function (oy) {
        return Line.prototype.setOriginY.call(this, oy), this._cp1y = this.cp1y - oy, this._cp2y = this.cp2y - oy, this
    },BezierLine.prototype.getControlPoint1X = function () {
        return this.cp1x
    },BezierLine.prototype.setControlPoint1X = function (cp1x) {
        return this.cp1x = cp1x, this._cp1x = cp1x - this.ox, this
    },BezierLine.prototype.getControlPoint1Y = function () {
        return this.cp1y
    },BezierLine.prototype.setControlPoint1Y = function (cp1y) {
        return this.cp1y = cp1y, this._cp1y = cp1y - this.oy, this
    },BezierLine.prototype.setControlPoint1 = function (cp1x, cp1y) {
        return this.setControlPoint1X(cp1x).setControlPoint1Y(cp1y)
    },BezierLine.prototype.getControlPoint2X = function () {
        return this.cp2x
    },BezierLine.prototype.setControlPoint2X = function (cp2x) {
        return this.cp2x = cp2x, this._cp2x = cp2x - this.ox, this
    },BezierLine.prototype.getControlPoint2Y = function () {
        return this.cp2y
    },BezierLine.prototype.setControlPoint2Y = function (cp2y) {
        return this.cp2y = cp2y, this._cp2y = cp2y - this.oy, this
    },BezierLine.prototype.setControlPoint2 = function (cp2x, cp2y) {
        return this.setControlPoint2X(cp2x).setControlPoint2Y(cp2y)
    },Utils.inheritPrototype(Edge, Line),Edge.prototype.process = function () {
        var oy, r, endAngle, ctx = this.ctx, ox = this._sx, sy = this._sy, ex = this._ex, ey = this._ey,
            cx = (ox + ex) / 2, cy = (sy + ey) / 2, startAngle = ex - ox, ty = ey - sy,
            anti = (isNaN(this._ax) ? ex + startAngle : this._ax) - ex,
            angle = (isNaN(this._ay) ? ey + ty : this._ay) - ey,
            centerAngleDouble = Math.sqrt(startAngle * startAngle + ty * ty),
            ratio = this._ratio = this.el / centerAngleDouble / 2, pclx = startAngle * ratio, pcly = ty * ratio;
        this._angle = Math.atan2(ty, startAngle), ctx.beginPath(), ctx.moveTo(ox, sy), startAngle * angle - ty * anti >> 0 && ratio < .5 ? (this._anchorAngle = Math.atan2(angle, anti), angle = ox - (ox = ((r = -anti * ex - angle * ey) * ty - (oy = -startAngle * cx - ty * cy) * angle) / (endAngle = startAngle * angle - anti * ty)), anti = sy - (oy = (oy * anti - r * startAngle) / endAngle), endAngle = ty / centerAngleDouble * (r = Math.sqrt(angle * angle + anti * anti)), ty = -startAngle / centerAngleDouble * r, startAngle = Math.atan2(anti, angle), centerAngleDouble = 2 * this._angle - Math.PI, anti = !1, ((angle = this._anchorAngle - this._angle) > Math.PI || angle < 0 && angle > -Math.PI) && (endAngle *= -1, ty *= -1, centerAngleDouble += 2 * Math.PI, anti = !0), this._tx = endAngle + ox, this._ty = ty + oy, 0 == ratio ? ctx.arc(ox, oy, r, startAngle, centerAngleDouble - startAngle, anti) : (endAngle = Math.atan2(ty - pcly, endAngle - pclx), ctx.arc(ox, oy, r, startAngle, endAngle, anti), ctx.moveTo(ex, ey), ctx.arc(ox, oy, r, centerAngleDouble - startAngle, centerAngleDouble - endAngle, !anti))) : (this._anchorAngle = this._angle, this._tx = cx, this._ty = cy, 0 == ratio || .5 <= ratio || (ctx.lineTo(cx - pclx, cy - pcly), ctx.moveTo(cx + pclx, cy + pcly)), ctx.lineTo(ex, ey))
    },Edge.prototype.setOriginX = function (ox) {
        return Line.prototype.setOriginX.call(this, ox), this._ax = this.ax - ox, this
    },Edge.prototype.setOriginY = function (oy) {
        return Line.prototype.setOriginY.call(this, oy), this._ay = this.ay - oy, this
    },Edge.prototype.getAnchorX = function () {
        return this.ax
    },Edge.prototype.setAnchorX = function (ax) {
        return this.ax = ax, this._ax = ax - this.ox, this
    },Edge.prototype.getAnchorY = function () {
        return this.ay
    },Edge.prototype.setAnchorY = function (ay) {
        return this.ay = ay, this._ay = ay - this.oy, this
    },Edge.prototype.setAnchor = function (ax, ay) {
        return this.setAnchorX(ax).setAnchorY(ay)
    },Edge.prototype.getEmptyLength = function () {
        return this.el
    },Edge.prototype.setEmptyLength = function (el) {
        return this.el = el, this
    },Edge.prototype.getTargetX = function () {
        return this._tx
    },Edge.prototype.getTargetY = function () {
        return this._ty
    },Edge.prototype.getAnchorAngle = function () {
        return this._anchorAngle
    },Edge.prototype.getAngle = function () {
        return this._angle
    },Edge.prototype.ratioInRange = function () {
        return this._ratio < .5
    },Utils.inheritPrototype(Triangle, Shape),Triangle.prototype.process = function () {
        var ctx = this.ctx, pacy = this.length, cx = this._sx - pacy * this._cos, cy = this._sy - pacy * this._sin,
            pacx = pacy * this._tan * this._sin, pacy = -pacy * this._tan * this._cos;
        ctx.beginPath(), ctx.moveTo(cx + pacx, cy + pacy), ctx.lineTo(this._sx, this._sy), ctx.lineTo(cx - pacx, cy - pacy), this.closed && ctx.closePath()
    },Triangle.prototype.getLength = function () {
        return this.length
    },Triangle.prototype.setLength = function (length) {
        return this.length = length, this
    },Triangle.prototype.getAngle = function () {
        return this.angle
    },Triangle.prototype.setAngle = function (angle) {
        return angle = Math.abs(angle) % Math.PI, this.angle !== angle && (this.angle = angle, this._tan = Math.tan(angle / 2)), this
    },Utils._assign(Triangle, Ellipse, "getRotation", "setRotation"),Triangle.prototype.getClosed = function () {
        return this.closed
    },Triangle.prototype.setClosed = function (closed) {
        return this.closed = closed, this
    },Utils.inheritPrototype(Pin, Triangle),Pin.prototype.process = function () {
        var ctx = this.ctx, pacy = this.length, cx = this._sx - pacy * this._cos, cy = this._sy - pacy * this._sin,
            mac = pacy * this._tan, moc = mac * this._tan, pacx = mac * this._sin, pacy = -mac * this._cos;
        ctx.beginPath(), ctx.moveTo(cx + pacx, cy + pacy), ctx.lineTo(this._sx, this._sy), ctx.lineTo(cx - pacx, cy - pacy), this.closed && ctx.arc(cx - moc * this._cos, cy - moc * this._sin, Math.sqrt(mac * mac + moc * moc), (Math.PI - this.angle) / 2 + this.rotation, (this.angle - Math.PI) / 2 + this.rotation, !1)
    },Utils.inheritPrototype(Poly, Shape),Poly.prototype.process = function () {
        var i, ctx = this.ctx, sx = this._sx, sy = this._sy, points = this.points;
        for (ctx.beginPath(), ctx.moveTo(sx + points[0], sy + points[1]), i = 2; i < this.length; i += 2) ctx.lineTo(sx + points[i], sy + points[i + 1]);
        ctx.closePath()
    },Poly.prototype.getPoints = function () {
        return this.points
    },Poly.prototype.setPoints = function (points) {
        return this.points = points, this
    },Utils._assign(Poly, Triangle, "getLength", "setLength"),Poly.prototype.append = function (x, y) {
        return this.points.push(x, y), this._append()
    },Poly.prototype.insert = function (index, x, y) {
        return this.points.splice(2 * index, 0, x, y), this._append()
    },Poly.prototype._append = function () {
        return this.length += 2, this
    },Poly.prototype.delete = function (index) {
        return this.points.splice(2 * index, 2), this._delete()
    },Poly.prototype._delete = function () {
        return this.length -= 2, this
    },Poly.prototype.update = function (index, x, y) {
        return this.points[2 * index] = x, this.points[2 * index + 1] = y, this
    },Poly.prototype.peek = function (index, offset) {
        return this.points[2 * index + offset]
    },Utils.inheritPrototype(PolyShape, Poly),PolyShape.prototype._initPoints = function () {
        return this._processedPoints = [], this._transformedPoints = [], this
    },PolyShape.prototype._initCache = function () {
        var cache = this.cache = new Map;
        return cache.set("matrix", {}), cache.set("points", new Array(this.points.length)), cache.set("length", NaN), cache.set("_sx", NaN), cache.set("_sy", NaN), cache.set("ox", NaN), cache.set("oy", NaN), this._setCache(cache)
    },PolyShape.prototype._setCache = Utils.noop,PolyShape.prototype._useCache = function () {
        var i, p, cache = this.cache, cmatrix = cache.get("matrix"), mat = this.mat, cpoints = cache.get("points"),
            points = this.points, length = this.length, matrixChanged = !1, pointsChanged = !1, lengthChanged = !1,
            sxyChanged = !1, paramsChanged = this._paramsChanged(cache), cxyChanged = !1;
        for (mat.equals(cmatrix) || (cmatrix.skewX = mat.skewX, cmatrix.skewY = mat.skewY, cmatrix.scaleX = mat.scaleX, cmatrix.scaleY = mat.scaleY, cmatrix.angle = mat.angle, cmatrix.offsetX = mat.offsetX, cmatrix.offsetY = mat.offsetY, matrixChanged = !0), i = 0; i < points.length; i++) p = points[i], cpoints[i] !== p && (cpoints[i] = p, pointsChanged = !0);
        return cpoints.length > points.length && (cpoints.length = points.length, pointsChanged = !0), cache.get("length") !== length && (cache.set("length", length), this._processedPoints.length = length, this._transformedPoints.length = length, lengthChanged = !0), cache.get("_sx") === this._sx && cache.get("_sy") === this._sy || (cache.set("_sx", this._sx), cache.set("_sy", this._sy), sxyChanged = !0), (paramsChanged = pointsChanged || lengthChanged || sxyChanged || paramsChanged) && this._processPoints(), cache.get("ox") === this.ox && cache.get("oy") === this.oy || (cache.set("ox", this.ox), cache.set("oy", this.oy), cxyChanged = !0), !matrixChanged && !paramsChanged && !cxyChanged
    },PolyShape.prototype._paramsChanged = function () {
        return !1
    },PolyShape.prototype._setTransform = function () {
        if (this._resetTransform()._useCache()) return this;
        var i, x, y, mat = this.mat, processedPoints = this._processedPoints,
            transformedPoints = this._transformedPoints, m11 = mat.getM11(), m12 = mat.getM12(), m21 = mat.getM21(),
            m22 = mat.getM22(), m41 = mat.offsetX + this.ox, m42 = mat.offsetY + this.oy;
        if (1 !== m11 || 1 !== m22 || 0 !== m12 || 0 !== m21) for (i = 0; i < this.length; i += 2) x = processedPoints[i], y = processedPoints[i + 1], transformedPoints[i] = x * m11 + y * m21 + m41, transformedPoints[i + 1] = x * m12 + y * m22 + m42; else if (0 !== m41 || 0 !== m42) for (i = 0; i < this.length; i += 2) transformedPoints[i] = processedPoints[i] + m41, transformedPoints[i + 1] = processedPoints[i + 1] + m42; else for (i = 0; i < this.length; i += 2) transformedPoints[i] = processedPoints[i], transformedPoints[i + 1] = processedPoints[i + 1];
        return this
    },PolyShape.prototype._process = function () {
        return this.process(this._transformedPoints), this
    },PolyShape.prototype.process = Utils.noop,PolyShape.prototype._isPointIn = Utils.noop,PolyShape.prototype.isPointInPath = function (x, y) {
        return this._setTransform()._isPointInPath(x, y)
    },PolyShape.prototype.isPointInStroke = function (x, y) {
        return this._setTransform()._isPointInStroke(x, y)
    },PolyShape.prototype._isQuickInPath = function (x, y) {
        var ctx = this._setTransform().ctx, dpr = ctx._dpr;
        return this.process(this._processedPoints), ctx.isPointInPath(x * dpr, y * dpr)
    },PolyShape.prototype._isQuickInStroke = function (x, y) {
        var ctx = this._setTransform().ctx, dpr = ctx._dpr;
        return this.process(this._processedPoints), ctx.isPointInStroke(x * dpr, y * dpr)
    },PolyShape.prototype._processPoints = function () {
        for (var sx = this._sx, sy = this._sy, points = this.points, processedPoints = this._processedPoints, i = 0; i < this.length; i += 2) processedPoints[i] = sx + points[i], processedPoints[i + 1] = sy + points[i + 1];
        return this
    },PolyShape.prototype.getTransformedPoints = function () {
        return this._setTransform()._transformedPoints
    },Utils.inheritPrototype(Polyline, PolyShape),Polyline.prototype.process = function (targetPoints) {
        var ctx = this.ctx;
        ctx.beginPath(), ctx.moveTo(targetPoints[0], targetPoints[1]);
        for (var i = 2; i < this.length; i += 2) ctx.lineTo(targetPoints[i], targetPoints[i + 1])
    },Utils.inheritPrototype(Bezier, Polyline),Bezier.prototype._append = Bezier.prototype._delete = Utils.noop,Bezier.prototype._processPoints = function () {
        for (var j, x, y, v, t, sx = this._sx, sy = this._sy, points = this.points, length = this.length, processedPoints = this._processedPoints, m = points.length / 2 - 1, i = 0; i < length; i += 2) {
            for (t = i / (length - 2), j = y = x = 0; j < points.length; j += 2) v = Utils.combination(v = j / 2, m) * Math.pow(t, v) * Math.pow(1 - t, m - v), x += points[j] * v, y += points[j + 1] * v;
            processedPoints[i] = sx + x, processedPoints[i + 1] = sy + y
        }
        return this
    },Utils.inheritPrototype(Polygon, Polyline),Polygon.prototype.process = function (targetPoints) {
        Polyline.prototype.process.call(this, targetPoints), this.ctx.closePath()
    },Utils.inheritPrototype(PolyRect, Polygon),PolyRect.prototype._append = PolyRect.prototype._delete = Utils.noop,PolyRect.prototype._processPoints = function () {
        var points = this.points, processedPoints = this._processedPoints;
        return processedPoints[0] = processedPoints[6] = this._sx + points[0], processedPoints[1] = processedPoints[3] = this._sy + points[1], processedPoints[2] = processedPoints[4] = this._sx + points[2], processedPoints[5] = processedPoints[7] = this._sy + points[3], this
    },Utils.inheritPrototype(PolyArc, Polygon),PolyArc.prototype._append = PolyArc.prototype._delete = Utils.noop,PolyArc.prototype._processPoints = function () {
        var t, i, points = this.points, processedPoints = this._processedPoints,
            cos = Math.cos(4 * Math.PI / this.length), sin = Math.sin(4 * Math.PI / this.length), x = points[0],
            y = points[1], vx = points[2] - x, vy = points[3] - y;
        for (x += this._sx, y += this._sy, i = 0; i < this.length; i += 2) processedPoints[i] = x + vx, processedPoints[i + 1] = y + vy, t = vy * cos + vx * sin, vx = vx * cos - vy * sin, vy = t;
        return this
    },Utils.inheritPrototype(SuperEllipse, Polygon),SuperEllipse.prototype._setCache = function (cache) {
        return cache.set("exponent", NaN), this
    },SuperEllipse.prototype._paramsChanged = function (cache) {
        return cache.get("exponent") !== this.exponent && (cache.set("exponent", this.exponent), !0)
    },SuperEllipse.prototype._processPoints = function () {
        var i, theta, points = this.points, length = this.length, len = length / 4,
            processedPoints = this._processedPoints, exponent = this.exponent, x = points[0], y = points[1],
            vx = points[2] - x, vy = points[3] - y, distance = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2)),
            cos = vx / distance, sin = vy / distance;
        for (x += this._sx, y += this._sy, i = 0; i < len; i += 2) theta = i / len * Math.PI / 2, vx = distance * Math.pow(Math.cos(theta), 2 / exponent), vy = distance * Math.pow(Math.sin(theta), 2 / exponent), processedPoints[i] = vx * cos - vy * sin, processedPoints[i + 1] = vy * cos + vx * sin;
        for (i = len; i < length; i += 2) processedPoints[i] = -processedPoints[i - len + 1], processedPoints[i + 1] = processedPoints[i - len], processedPoints[i - len] += x, processedPoints[i - len + 1] += y;
        for (i = 3 * len; i < length; i += 2) processedPoints[i] += x, processedPoints[i + 1] += y
    },SuperEllipse.prototype._append = SuperEllipse.prototype._delete = Utils.noop,SuperEllipse.prototype.getExponent = function () {
        return this.exponent
    },SuperEllipse.prototype.setExponent = function (exponent) {
        return this.exponent = exponent, this
    },Utils.inheritPrototype(SmoothLine, PolyShape),SmoothLine.prototype._setCache = function (cache) {
        return cache.set("tension", NaN), this
    },SmoothLine.prototype._paramsChanged = function (cache) {
        return cache.get("tension") !== this.tension && (cache.set("tension", this.tension), !0)
    },SmoothLine.prototype._processPoints = function () {
        for (var o2x, o2y, cx, cy, nx, index, sx = this._sx, sy = this._sy, points = this.points, processedPoints = this._processedPoints, tension = this.tension, o1x = 0, o1y = 0, px = processedPoints[0] = sx + points[0], py = processedPoints[1] = sy + points[1], i = 2; i < points.length; i += 2) cx = sx + points[i], cy = sy + points[i + 1], nx = sx + points[i + 2], index = sy + points[i + 3], isNaN(nx) ? o2x = o2y = 0 : (o2x = (nx - px) / 6 * tension, o2y = (index - py) / 6 * tension), processedPoints[index = 3 * i - 4] = px + o1x, processedPoints[1 + index] = py + o1y, processedPoints[2 + index] = cx - o2x, processedPoints[3 + index] = cy - o2y, o1x = o2x, o1y = o2y, px = processedPoints[4 + index] = cx, py = processedPoints[5 + index] = cy
    },SmoothLine.prototype.process = function (targetPoints) {
        var ctx = this.ctx;
        ctx.beginPath(), ctx.moveTo(targetPoints[0], targetPoints[1]);
        for (var i = 2; i < this.length; i += 6) ctx.bezierCurveTo(targetPoints[i], targetPoints[i + 1], targetPoints[i + 2], targetPoints[i + 3], targetPoints[i + 4], targetPoints[i + 5])
    },SmoothLine.prototype._append = function () {
        return 0 !== this.length ? this.length += 6 : this.length = 2, this
    },SmoothLine.prototype._delete = function () {
        return 2 < this.length ? this.length -= 6 : this.length = 0, this
    },SmoothLine.prototype.getTension = function () {
        return this.tension
    },SmoothLine.prototype.setTension = function (tension) {
        return this.tension = tension, this
    },Utils.inheritPrototype(Dots, PolyShape),Dots.prototype._setCache = function (cache) {
        return cache.set("radius", NaN), this
    },Dots.prototype._paramsChanged = function (cache) {
        return cache.get("radius") !== this.radius && (cache.set("radius", this.radius), !0)
    },Dots.prototype.process = function (targetPoints) {
        var i, x, y, ctx = this.ctx, r = this.radius;
        for (ctx.beginPath(), i = 0; i < this.length; i += 2) x = targetPoints[i], y = targetPoints[i + 1], ctx.moveTo(x + r, y), ctx.arc(x, y, r, 0, 2 * Math.PI, !1)
    },Utils._assign(Dots, Arc, "getRadius", "setRadius"),Utils.inheritPrototype(FixedShape, Shape),FixedShape.prototype._preprocess = FixedShape.prototype._setTransform,FixedShape.prototype._fill = function (fillRule) {
        return this.ctx.fill(this.path, fillRule), this
    },FixedShape.prototype._stroke = function () {
        return this.ctx.stroke(this.path), this
    },FixedShape.prototype._clip = function (fillRule) {
        return this.ctx.clip(this.path, fillRule), this
    },FixedShape.prototype._isPointInPath = function (x, y) {
        var ctx = this.ctx, dpr = ctx._dpr;
        return ctx.isPointInPath(this.path, x * dpr, y * dpr)
    },FixedShape.prototype._isPointInStroke = function (x, y) {
        var ctx = this.ctx, dpr = ctx._dpr;
        return ctx.isPointInStroke(this.path, x * dpr, y * dpr)
    },FixedShape.prototype.getPath = function () {
        var path = new Path2D;
        return path.addPath(this.path, {e: -this._sx, f: -this._sy}), path
    },FixedShape.prototype.getOffsetPath = function () {
        return this.path
    },FixedShape.prototype.setPath = function (path) {
        return this.path = new Path2D, this.addPath(path), this
    },FixedShape.prototype.addPath = function (path) {
        var type = Utils._toString.call(path);
        return "[object String]" === type ? this.path.addPath(new Path2D(path), {
            e: this._sx,
            f: this._sy
        }) : "[object Path2D]" === type && this.path.addPath(path, {e: this._sx, f: this._sy}), this
    },FixedShape.prototype.addFixedShape = function (fixedShape) {
        var matrix = fixedShape.getMatrix();
        return this.path.addPath(fixedShape.getOffsetPath(), {
            a: matrix.getM11(),
            b: matrix.getM12(),
            c: matrix.getM21(),
            d: matrix.getM22(),
            e: matrix.offsetX + fixedShape.ox + this._sx,
            f: matrix.offsetY + fixedShape.oy + this._sy
        }), this
    },Utils.inheritPrototype(FixedRect, FixedShape),Utils._assign(FixedRect, Rect, "_isQuickInPath", "_isQuickInStroke", "getWidth", "getHeight", "getLeft", "getTop", "getRight", "getBottom"),FixedRect.prototype.process = function () {
        this.path.rect(this._sx, this._sy, this.width, this.height), 0 < this.width ? (this._left = this._sx, this._right = this._sx + this.width) : (this._left = this._sx + this.width, this._right = this._sx), 0 < this.height ? (this._top = this._sy, this._bottom = this._sy + this.height) : (this._top = this._sy + this.height, this._bottom = this._sy)
    },Utils.inheritPrototype(FixedArc, FixedShape),Utils._assign(FixedArc, Arc, "_isQuickInPath", "_isQuickInStroke", "getRadius", "getStartAngle", "getEndAngle", "getAnticlockwise"),FixedArc.prototype.process = function () {
        this.path.arc(this._sx, this._sy, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
    },Canvas.prototype.$isVisible = function () {
        return this._$visible
    },Canvas.prototype.$getCursor = function () {
        return this.$wrapper.style.cursor
    },Canvas.prototype.$setCursor = function (cursor) {
        return this.$wrapper.style.cursor = cursor, this
    },Canvas.prototype.$resizeAll = function (width, height) {
        var sty = this.$wrapper.style;
        return sty.width = width ? width + "px" : "100%", sty.height = height ? height + "px" : "100%", this
    },Canvas.prototype.$resize = function (width, height) {
        return this._$resize(width, height).resize(), this.draw(), this
    },Canvas.prototype._$resize = function (width, height) {
        var rect, $ = this, dpr = $.$dpr = $.$ctx._dpr = $._$dpr || devicePixelRatio || 1;
        return (isNaN(width) || isNaN(height)) && (rect = $.$wrapper.getBoundingClientRect(), isNaN(width) && (width = rect.right - rect.left), isNaN(height) && (height = rect.bottom - rect.top)), $.$canvas.style.width = ($.$width = ($.$canvas.width = Math.round(width * dpr)) / dpr) + "px", $.$canvas.style.height = ($.$height = ($.$canvas.height = Math.round(height * dpr)) / dpr) + "px", $.$ctx._stack.length = 0, $._$resetTransform()._$resetStyle()
    },Canvas.prototype.$toDataURL = function (type, quality) {
        return this.$canvas.toDataURL(type, quality)
    },Canvas.prototype.$toBlob = function (callback, type, quality) {
        return this.$canvas.toBlob(callback, type, quality), this
    },Canvas.prototype.$saveAsImage = function (filename, type, quality) {
        return Utils._a.href = this.$toDataURL(type, quality), Utils._a.download = filename, Utils._a.click(), this
    },Canvas.prototype.$clear = function () {
        return this._$resetTransform().$ctx.clearRect(0, 0, this.$width, this.$height), this
    },Canvas.prototype._$resetTransform = function () {
        var ctx = this.$ctx, dpr = ctx._dpr;
        return 1 !== dpr ? ctx.setTransform(dpr, 0, 0, dpr, 0, 0) : ctx.resetTransform(), ctx._m11 = ctx._m11i = ctx._m22 = ctx._m22i = 1, ctx._m12 = ctx._m12i = ctx._m21 = ctx._m21i = ctx._m41 = ctx._m41i = ctx._m42 = ctx._m42i = 0, this
    },Canvas.prototype._$resetStyle = function () {
        var ctx = this.$ctx;
        return ctx._alpha = Style.DEFAULT_ALPHA, ctx._compositeOperation = Style.DEFAULT_COMPOSITE_OPERATION, ctx._filter = Style.DEFAULT_FILTER, ctx._shadowBlur = ShadowStyle.DEFAULT_SHADOW_BLUR, ctx._shadowColor = ShadowStyle.DEFAULT_SHADOW_COLOR, ctx._shadowOffsetX = ShadowStyle.DEFAULT_SHADOW_OFFSET_X, ctx._shadowOffsetY = ShadowStyle.DEFAULT_SHADOW_OFFSET_Y, ctx._fillStyle = FillStrokeStyle.DEFAULT_FILL_STYLE, ctx._strokeStyle = FillStrokeStyle.DEFAULT_STROKE_STYLE, ctx._lineDash = ShapeStyle.DEFAULT_LINE_DASH, ctx._lineDashOffset = ShapeStyle.DEFAULT_LINE_DASH_OFFSET, ctx._lineWidth = ShapeStyle.DEFAULT_LINE_WIDTH, ctx._lineCap = ShapeStyle.DEFAULT_LINE_CAP, ctx._lineJoin = ShapeStyle.DEFAULT_LINE_JOIN, ctx._miterLimit = ShapeStyle.DEFAULT_MITER_LIMIT, ctx._font = TextStyle.DEFAULT_FONT, ctx._textAlign = TextStyle.DEFAULT_TEXT_ALIGN, ctx._textBaseline = TextStyle.DEFAULT_TEXT_BASELINE, ctx._direction = TextStyle.DEFAULT_DIRECTION, ctx._smoothingEnabled = ImageStyle.DEFAULT_SMOOTHING_ENABLED, ctx._smoothingQuality = ImageStyle.DEFAULT_SMOOTHING_QUALITY, this
    },["init", "resize", "update", "draw", "contextmenu", "visibilitychange"].forEach(function (method) {
        Canvas.prototype[method] = Utils.noop
    }),Canvas.prototype._$eventTypes = ["mousedown", "touchstart", "mousemove", "touchmove", "mouseup", "touchend", "touchcancel", "mouseover", "mouseout", "click", "dblclick", "wheel", "contextmenu", "focus", "blur", "focusin", "focusout", "keydown", "keyup", "keypress"],Canvas.prototype._$initListeners = function () {
        for (var $ = this, listeners = $._$listeners = {}, types = $._$eventTypes, i = 0; i < types.length; i++) {
            var type = types[i];
            !$[type] && "contextmenu" !== type || (listeners[type] = function (type) {
                return function (ev) {
                    $[type](ev)
                }
            }(type), "mouseup" === type ? listeners.mouseout = listeners[type] : "touchend" === type && (listeners.touchcancel = listeners[type]))
        }
        return $._$visibilitychange = function () {
            $._$visible && $.visibilitychange("visible" === document.visibilityState)
        }, $
    },Canvas.prototype._$addListeners = function () {
        var key, $ = this;
        for (key in $._$listeners) $.$wrapper._on(key, $._$listeners[key], {passive: !1});
        return document.addEventListener("visibilitychange", $._$visibilitychange, !1), $
    },Canvas.prototype._$removeListeners = function () {
        var key, $ = this;
        for (key in $._$listeners) $.$wrapper._off(key, $._$listeners[key], {passive: !1});
        return document.removeEventListener("visibilitychange", $._$visibilitychange, !1), $
    },Canvas.prototype.$destroy = function () {
        var key, $ = this;
        for (key in $._$removeListeners(), $.$raf.stop(), delete $.$wrapper.removeChild($.$canvas).$, 0 == --$.$wrapper._count && (Utils._resizeObserver.unobserve($.$wrapper), Utils._intersectionObserver.unobserve($.$wrapper)), $) $.hasOwnProperty(key) && delete $[key];
        return $
    },{
        Utils: Utils,
        Rgb: Rgb,
        Hsl: Hsl,
        Point: Point,
        Collision: Collision,
        Animate: Animate,
        AnimateITV: AnimateITV,
        AnimateRAF: AnimateRAF,
        Animation: $Animation,
        Shape: Shape,
        Arc: Arc,
        Sector: Sector,
        Ring: Ring,
        Ellipse: Ellipse,
        RegularPolygon: RegularPolygon,
        RegularStar: RegularStar,
        Rect: Rect,
        Grid: Grid,
        RoundRect: RoundRect,
        Image: $Image,
        ImageData: $ImageData,
        Text: Text,
        Line: Line,
        BezierLine: BezierLine,
        Edge: Edge,
        Triangle: Triangle,
        Pin: Pin,
        Poly: Poly,
        PolyShape: PolyShape,
        Polyline: Polyline,
        Bezier: Bezier,
        Polygon: Polygon,
        PolyRect: PolyRect,
        PolyArc: PolyArc,
        SuperEllipse: SuperEllipse,
        SmoothLine: SmoothLine,
        Dots: Dots,
        FixedShape: FixedShape,
        FixedRect: FixedRect,
        FixedArc: FixedArc,
        Canvas: Canvas
    }
});
