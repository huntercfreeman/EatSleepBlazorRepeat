!function (e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
    }
    n.m = e,
        n.c = t,
        n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        n.t = function (e, t) {
            if (1 & t && (e = n(e)),
                8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var o in e)
                    n.d(r, o, function (t) {
                        return e[t]
                    }
                        .bind(null, o));
            return r
        }
        ,
        n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            }
                : function () {
                    return e
                }
                ;
            return n.d(t, "a", t),
                t
        }
        ,
        n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 52)
}([function (e, t, n) {
    "use strict";
    n.r(t);
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var r = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function (e, t) {
        e.__proto__ = t
    }
        || function (e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ;
    function o(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }
    var i = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e
    }
        ;
    function s(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function s(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function a(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function u(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }
                ).then(s, a)
            }
            u((r = r.apply(e, t || [])).next())
        }
        )
    }
    function a(e, t) {
        var n, r, o, i, s = {
            label: 0,
            sent: function () {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        },
            "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                return this
            }
            ),
            i;
        function a(i) {
            return function (a) {
                return function (i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; s;)
                        try {
                            if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                    0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return s.label++ ,
                                        {
                                            value: i[1],
                                            done: !1
                                        };
                                case 5:
                                    s.label++ ,
                                        r = i[1],
                                        i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                        s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1],
                                            o = i;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2],
                                            s.ops.push(i);
                                        break
                                    }
                                    o[2] && s.ops.pop(),
                                        s.trys.pop();
                                    continue
                            }
                            i = t.call(e, s)
                        } catch (e) {
                            i = [6, e],
                                r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, a])
            }
        }
    }
    var u, c = function (e) {
        function t(t, n) {
            var r = this
                , o = this.constructor.prototype;
            return (r = e.call(this, t) || this).statusCode = n,
                r.__proto__ = o,
                r
        }
        return o(t, e),
            t
    }(Error), l = function (e) {
        function t(t) {
            var n = this.constructor;
            void 0 === t && (t = "A timeout occurred.");
            var r = this
                , o = n.prototype;
            return (r = e.call(this, t) || this).__proto__ = o,
                r
        }
        return o(t, e),
            t
    }(Error);
    !function (e) {
        e[e.Trace = 0] = "Trace",
            e[e.Debug = 1] = "Debug",
            e[e.Information = 2] = "Information",
            e[e.Warning = 3] = "Warning",
            e[e.Error = 4] = "Error",
            e[e.Critical = 5] = "Critical",
            e[e.None = 6] = "None"
    }(u || (u = {}));
    var f, h = function () {
        return function (e, t, n) {
            this.statusCode = e,
                this.statusText = t,
                this.content = n
        }
    }(), p = function () {
        function e() { }
        return e.prototype.get = function (e, t) {
            return this.send(i({}, t, {
                method: "GET",
                url: e
            }))
        }
            ,
            e.prototype.post = function (e, t) {
                return this.send(i({}, t, {
                    method: "POST",
                    url: e
                }))
            }
            ,
            e.prototype.delete = function (e, t) {
                return this.send(i({}, t, {
                    method: "DELETE",
                    url: e
                }))
            }
            ,
            e
    }(), d = function (e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.logger = t,
                n
        }
        return o(t, e),
            t.prototype.send = function (e) {
                var t = this;
                return new Promise(function (n, r) {
                    var o = new XMLHttpRequest;
                    o.open(e.method, e.url, !0),
                        o.withCredentials = !0,
                        o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                        e.headers && Object.keys(e.headers).forEach(function (t) {
                            return o.setRequestHeader(t, e.headers[t])
                        }),
                        e.responseType && (o.responseType = e.responseType),
                        e.abortSignal && (e.abortSignal.onabort = function () {
                            o.abort()
                        }
                        ),
                        e.timeout && (o.timeout = e.timeout),
                        o.onload = function () {
                            e.abortSignal && (e.abortSignal.onabort = null),
                                o.status >= 200 && o.status < 300 ? n(new h(o.status, o.statusText, o.response || o.responseText)) : r(new c(o.statusText, o.status))
                        }
                        ,
                        o.onerror = function () {
                            t.logger.log(u.Warning, "Error from HTTP request. " + o.status + ": " + o.statusText),
                                r(new c(o.statusText, o.status))
                        }
                        ,
                        o.ontimeout = function () {
                            t.logger.log(u.Warning, "Timeout from HTTP request."),
                                r(new l)
                        }
                        ,
                        o.send(e.content || "")
                }
                )
            }
            ,
            t
    }(p), g = function () {
        function e() { }
        return e.write = function (t) {
            return "" + t + e.RecordSeparator
        }
            ,
            e.parse = function (t) {
                if (t[t.length - 1] !== e.RecordSeparator)
                    throw new Error("Message is incomplete.");
                var n = t.split(e.RecordSeparator);
                return n.pop(),
                    n
            }
            ,
            e.RecordSeparatorCode = 30,
            e.RecordSeparator = String.fromCharCode(e.RecordSeparatorCode),
            e
    }(), y = function () {
        function e() { }
        return e.prototype.writeHandshakeRequest = function (e) {
            return g.write(JSON.stringify(e))
        }
            ,
            e.prototype.parseHandshakeResponse = function (e) {
                var t, n;
                if (e instanceof ArrayBuffer) {
                    var r = new Uint8Array(e);
                    if (-1 === (i = r.indexOf(g.RecordSeparatorCode)))
                        throw new Error("Message is incomplete.");
                    var o = i + 1;
                    t = String.fromCharCode.apply(null, r.slice(0, o)),
                        n = r.byteLength > o ? r.slice(o).buffer : null
                } else {
                    var i, s = e;
                    if (-1 === (i = s.indexOf(g.RecordSeparator)))
                        throw new Error("Message is incomplete.");
                    o = i + 1;
                    t = s.substring(0, o),
                        n = s.length > o ? s.substring(o) : null
                }
                var a = g.parse(t);
                return [n, JSON.parse(a[0])]
            }
            ,
            e
    }();
    !function (e) {
        e[e.Invocation = 1] = "Invocation",
            e[e.StreamItem = 2] = "StreamItem",
            e[e.Completion = 3] = "Completion",
            e[e.StreamInvocation = 4] = "StreamInvocation",
            e[e.CancelInvocation = 5] = "CancelInvocation",
            e[e.Ping = 6] = "Ping",
            e[e.Close = 7] = "Close"
    }(f || (f = {}));
    var v = function () {
        function e() { }
        return e.prototype.log = function (e, t) { }
            ,
            e.instance = new e,
            e
    }()
        , m = function () {
            function e() { }
            return e.isRequired = function (e, t) {
                if (null === e || void 0 === e)
                    throw new Error("The '" + t + "' argument is required.")
            }
                ,
                e.isIn = function (e, t, n) {
                    if (!(e in t))
                        throw new Error("Unknown " + n + " value: " + e + ".")
                }
                ,
                e
        }();
    function b(e, t) {
        var n = null;
        return e instanceof ArrayBuffer ? (n = "Binary data of length " + e.byteLength,
            t && (n += ". Content: '" + function (e) {
                var t = "";
                return new Uint8Array(e).forEach(function (e) {
                    t += "0x" + (e < 16 ? "0" : "") + e.toString(16) + " "
                }),
                    t.substr(0, t.length - 1)
            }(e) + "'")) : "string" == typeof e && (n = "String data of length " + e.length,
                t && (n += ". Content: '" + e + "'.")),
            n
    }
    function w(e, t, n, r, o, i, c) {
        return s(this, void 0, void 0, function () {
            var s, l, f, h;
            return a(this, function (a) {
                switch (a.label) {
                    case 0:
                        return [4, o()];
                    case 1:
                        return (l = a.sent()) && ((h = {}).Authorization = "Bearer " + l,
                            s = h),
                            e.log(u.Trace, "(" + t + " transport) sending data. " + b(i, c) + "."),
                            [4, n.post(r, {
                                content: i,
                                headers: s
                            })];
                    case 2:
                        return f = a.sent(),
                            e.log(u.Trace, "(" + t + " transport) request complete. Response status: " + f.statusCode + "."),
                            [2]
                }
            })
        })
    }
    var E, S, _ = function () {
        function e(e) {
            this.observers = [],
                this.cancelCallback = e
        }
        return e.prototype.next = function (e) {
            for (var t = 0, n = this.observers; t < n.length; t++) {
                n[t].next(e)
            }
        }
            ,
            e.prototype.error = function (e) {
                for (var t = 0, n = this.observers; t < n.length; t++) {
                    var r = n[t];
                    r.error && r.error(e)
                }
            }
            ,
            e.prototype.complete = function () {
                for (var e = 0, t = this.observers; e < t.length; e++) {
                    var n = t[e];
                    n.complete && n.complete()
                }
            }
            ,
            e.prototype.subscribe = function (e) {
                return this.observers.push(e),
                    new T(this, e)
            }
            ,
            e
    }(), T = function () {
        function e(e, t) {
            this.subject = e,
                this.observer = t
        }
        return e.prototype.dispose = function () {
            var e = this.subject.observers.indexOf(this.observer);
            e > -1 && this.subject.observers.splice(e, 1),
                0 === this.subject.observers.length && this.subject.cancelCallback().catch(function (e) { })
        }
            ,
            e
    }(), I = function () {
        function e(e) {
            this.minimumLogLevel = e
        }
        return e.prototype.log = function (e, t) {
            if (e >= this.minimumLogLevel)
                switch (e) {
                    case u.Critical:
                    case u.Error:
                        console.error(u[e] + ": " + t);
                        break;
                    case u.Warning:
                        console.warn(u[e] + ": " + t);
                        break;
                    case u.Information:
                        console.info(u[e] + ": " + t);
                        break;
                    default:
                        console.log(u[e] + ": " + t)
                }
        }
            ,
            e
    }(), k = 3e4, C = function () {
        function e(e, t, n) {
            var r = this;
            m.isRequired(e, "connection"),
                m.isRequired(t, "logger"),
                m.isRequired(n, "protocol"),
                this.serverTimeoutInMilliseconds = k,
                this.logger = t,
                this.protocol = n,
                this.connection = e,
                this.handshakeProtocol = new y,
                this.connection.onreceive = function (e) {
                    return r.processIncomingData(e)
                }
                ,
                this.connection.onclose = function (e) {
                    return r.connectionClosed(e)
                }
                ,
                this.callbacks = {},
                this.methods = {},
                this.closedCallbacks = [],
                this.id = 0
        }
        return e.create = function (t, n, r) {
            return new e(t, n, r)
        }
            ,
            e.prototype.start = function () {
                return s(this, void 0, void 0, function () {
                    var e;
                    return a(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = {
                                    protocol: this.protocol.name,
                                    version: this.protocol.version
                                },
                                    this.logger.log(u.Debug, "Starting HubConnection."),
                                    this.receivedHandshakeResponse = !1,
                                    [4, this.connection.start(this.protocol.transferFormat)];
                            case 1:
                                return t.sent(),
                                    this.logger.log(u.Debug, "Sending handshake request."),
                                    [4, this.connection.send(this.handshakeProtocol.writeHandshakeRequest(e))];
                            case 2:
                                return t.sent(),
                                    this.logger.log(u.Information, "Using HubProtocol '" + this.protocol.name + "'."),
                                    this.cleanupTimeout(),
                                    this.configureTimeout(),
                                    [2]
                        }
                    })
                })
            }
            ,
            e.prototype.stop = function () {
                return this.logger.log(u.Debug, "Stopping HubConnection."),
                    this.cleanupTimeout(),
                    this.connection.stop()
            }
            ,
            e.prototype.stream = function (e) {
                for (var t = this, n = [], r = 1; r < arguments.length; r++)
                    n[r - 1] = arguments[r];
                var o = this.createStreamInvocation(e, n)
                    , i = new _(function () {
                        var e = t.createCancelInvocation(o.invocationId)
                            , n = t.protocol.writeMessage(e);
                        return delete t.callbacks[o.invocationId],
                            t.connection.send(n)
                    }
                    );
                this.callbacks[o.invocationId] = function (e, t) {
                    t ? i.error(t) : e.type === f.Completion ? e.error ? i.error(new Error(e.error)) : i.complete() : i.next(e.item)
                }
                    ;
                var s = this.protocol.writeMessage(o);
                return this.connection.send(s).catch(function (e) {
                    i.error(e),
                        delete t.callbacks[o.invocationId]
                }),
                    i
            }
            ,
            e.prototype.send = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                var r = this.createInvocation(e, t, !0)
                    , o = this.protocol.writeMessage(r);
                return this.connection.send(o)
            }
            ,
            e.prototype.invoke = function (e) {
                for (var t = this, n = [], r = 1; r < arguments.length; r++)
                    n[r - 1] = arguments[r];
                var o = this.createInvocation(e, n, !1);
                return new Promise(function (e, n) {
                    t.callbacks[o.invocationId] = function (t, r) {
                        if (r)
                            n(r);
                        else if (t.type === f.Completion) {
                            var o = t;
                            o.error ? n(new Error(o.error)) : e(o.result)
                        } else
                            n(new Error("Unexpected message type: " + t.type))
                    }
                        ;
                    var r = t.protocol.writeMessage(o);
                    t.connection.send(r).catch(function (e) {
                        n(e),
                            delete t.callbacks[o.invocationId]
                    })
                }
                )
            }
            ,
            e.prototype.on = function (e, t) {
                e && t && (e = e.toLowerCase(),
                    this.methods[e] || (this.methods[e] = []),
                    -1 === this.methods[e].indexOf(t) && this.methods[e].push(t))
            }
            ,
            e.prototype.off = function (e, t) {
                if (e) {
                    e = e.toLowerCase();
                    var n = this.methods[e];
                    if (n)
                        if (t) {
                            var r = n.indexOf(t);
                            -1 !== r && (n.splice(r, 1),
                                0 === n.length && delete this.methods[e])
                        } else
                            delete this.methods[e]
                }
            }
            ,
            e.prototype.onclose = function (e) {
                e && this.closedCallbacks.push(e)
            }
            ,
            e.prototype.processIncomingData = function (e) {
                if (this.cleanupTimeout(),
                    this.receivedHandshakeResponse || (e = this.processHandshakeResponse(e),
                        this.receivedHandshakeResponse = !0),
                    e)
                    for (var t = 0, n = this.protocol.parseMessages(e, this.logger); t < n.length; t++) {
                        var r = n[t];
                        switch (r.type) {
                            case f.Invocation:
                                this.invokeClientMethod(r);
                                break;
                            case f.StreamItem:
                            case f.Completion:
                                var o = this.callbacks[r.invocationId];
                                null != o && (r.type === f.Completion && delete this.callbacks[r.invocationId],
                                    o(r));
                                break;
                            case f.Ping:
                                break;
                            case f.Close:
                                this.logger.log(u.Information, "Close message received from server."),
                                    this.connection.stop(r.error ? new Error("Server returned an error on close: " + r.error) : null);
                                break;
                            default:
                                this.logger.log(u.Warning, "Invalid message type: " + r.type)
                        }
                    }
                this.configureTimeout()
            }
            ,
            e.prototype.processHandshakeResponse = function (e) {
                var t, n, r;
                try {
                    n = (r = this.handshakeProtocol.parseHandshakeResponse(e))[0],
                        t = r[1]
                } catch (e) {
                    var o = "Error parsing handshake response: " + e;
                    this.logger.log(u.Error, o);
                    var i = new Error(o);
                    throw this.connection.stop(i),
                    i
                }
                if (t.error) {
                    o = "Server returned handshake error: " + t.error;
                    this.logger.log(u.Error, o),
                        this.connection.stop(new Error(o))
                } else
                    this.logger.log(u.Debug, "Server handshake complete.");
                return n
            }
            ,
            e.prototype.configureTimeout = function () {
                var e = this;
                this.connection.features && this.connection.features.inherentKeepAlive || (this.timeoutHandle = setTimeout(function () {
                    return e.serverTimeout()
                }, this.serverTimeoutInMilliseconds))
            }
            ,
            e.prototype.serverTimeout = function () {
                this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))
            }
            ,
            e.prototype.invokeClientMethod = function (e) {
                var t = this
                    , n = this.methods[e.target.toLowerCase()];
                if (n) {
                    if (n.forEach(function (n) {
                        return n.apply(t, e.arguments)
                    }),
                        e.invocationId) {
                        var r = "Server requested a response, which is not supported in this version of the client.";
                        this.logger.log(u.Error, r),
                            this.connection.stop(new Error(r))
                    }
                } else
                    this.logger.log(u.Warning, "No client method with the name '" + e.target + "' found.")
            }
            ,
            e.prototype.connectionClosed = function (e) {
                var t = this
                    , n = this.callbacks;
                this.callbacks = {},
                    Object.keys(n).forEach(function (t) {
                        (0,
                            n[t])(void 0, e || new Error("Invocation canceled due to connection being closed."))
                    }),
                    this.cleanupTimeout(),
                    this.closedCallbacks.forEach(function (n) {
                        return n.apply(t, [e])
                    })
            }
            ,
            e.prototype.cleanupTimeout = function () {
                this.timeoutHandle && clearTimeout(this.timeoutHandle)
            }
            ,
            e.prototype.createInvocation = function (e, t, n) {
                if (n)
                    return {
                        arguments: t,
                        target: e,
                        type: f.Invocation
                    };
                var r = this.id;
                return this.id++ ,
                    {
                        arguments: t,
                        invocationId: r.toString(),
                        target: e,
                        type: f.Invocation
                    }
            }
            ,
            e.prototype.createStreamInvocation = function (e, t) {
                var n = this.id;
                return this.id++ ,
                    {
                        arguments: t,
                        invocationId: n.toString(),
                        target: e,
                        type: f.StreamInvocation
                    }
            }
            ,
            e.prototype.createCancelInvocation = function (e) {
                return {
                    invocationId: e,
                    type: f.CancelInvocation
                }
            }
            ,
            e
    }();
    !function (e) {
        e[e.None = 0] = "None",
            e[e.WebSockets = 1] = "WebSockets",
            e[e.ServerSentEvents = 2] = "ServerSentEvents",
            e[e.LongPolling = 4] = "LongPolling"
    }(E || (E = {})),
        function (e) {
            e[e.Text = 1] = "Text",
                e[e.Binary = 2] = "Binary"
        }(S || (S = {}));
    var x = function () {
        function e() {
            this.isAborted = !1
        }
        return e.prototype.abort = function () {
            this.isAborted || (this.isAborted = !0,
                this.onabort && this.onabort())
        }
            ,
            Object.defineProperty(e.prototype, "signal", {
                get: function () {
                    return this
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "aborted", {
                get: function () {
                    return this.isAborted
                },
                enumerable: !0,
                configurable: !0
            }),
            e
    }()
        , R = 5e3
        , M = function () {
            function e(e, t, n, r, o) {
                this.httpClient = e,
                    this.accessTokenFactory = t || function () {
                        return null
                    }
                    ,
                    this.logger = n,
                    this.pollAbort = new x,
                    this.logMessageContent = r,
                    this.shutdownTimeout = o || R
            }
            return Object.defineProperty(e.prototype, "pollAborted", {
                get: function () {
                    return this.pollAbort.aborted
                },
                enumerable: !0,
                configurable: !0
            }),
                e.prototype.connect = function (e, t) {
                    return s(this, void 0, void 0, function () {
                        var n, r, o, i, s;
                        return a(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    if (m.isRequired(e, "url"),
                                        m.isRequired(t, "transferFormat"),
                                        m.isIn(t, S, "transferFormat"),
                                        this.url = e,
                                        this.logger.log(u.Trace, "(LongPolling transport) Connecting"),
                                        t === S.Binary && "string" != typeof (new XMLHttpRequest).responseType)
                                        throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                                    return n = {
                                        abortSignal: this.pollAbort.signal,
                                        headers: {},
                                        timeout: 9e4
                                    },
                                        t === S.Binary && (n.responseType = "arraybuffer"),
                                        [4, this.accessTokenFactory()];
                                case 1:
                                    return r = a.sent(),
                                        this.updateHeaderToken(n, r),
                                        i = e + "&_=" + Date.now(),
                                        this.logger.log(u.Trace, "(LongPolling transport) polling: " + i),
                                        [4, this.httpClient.get(i, n)];
                                case 2:
                                    return 200 !== (s = a.sent()).statusCode ? (this.logger.log(u.Error, "(LongPolling transport) Unexpected response code: " + s.statusCode),
                                        o = new c(s.statusText, s.statusCode),
                                        this.running = !1) : this.running = !0,
                                        this.poll(this.url, n, o),
                                        [2, Promise.resolve()]
                            }
                        })
                    })
                }
                ,
                e.prototype.updateHeaderToken = function (e, t) {
                    t ? e.headers.Authorization = "Bearer " + t : e.headers.Authorization && delete e.headers.Authorization
                }
                ,
                e.prototype.poll = function (e, t, n) {
                    return s(this, void 0, void 0, function () {
                        var r, o, i, s;
                        return a(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    a.trys.push([0, , 8, 9]),
                                        a.label = 1;
                                case 1:
                                    return this.running ? [4, this.accessTokenFactory()] : [3, 7];
                                case 2:
                                    r = a.sent(),
                                        this.updateHeaderToken(t, r),
                                        a.label = 3;
                                case 3:
                                    return a.trys.push([3, 5, , 6]),
                                        o = e + "&_=" + Date.now(),
                                        this.logger.log(u.Trace, "(LongPolling transport) polling: " + o),
                                        [4, this.httpClient.get(o, t)];
                                case 4:
                                    return 204 === (i = a.sent()).statusCode ? (this.logger.log(u.Information, "(LongPolling transport) Poll terminated by server"),
                                        this.running = !1) : 200 !== i.statusCode ? (this.logger.log(u.Error, "(LongPolling transport) Unexpected response code: " + i.statusCode),
                                            n = new c(i.statusText, i.statusCode),
                                            this.running = !1) : i.content ? (this.logger.log(u.Trace, "(LongPolling transport) data received. " + b(i.content, this.logMessageContent)),
                                                this.onreceive && this.onreceive(i.content)) : this.logger.log(u.Trace, "(LongPolling transport) Poll timed out, reissuing."),
                                        [3, 6];
                                case 5:
                                    return s = a.sent(),
                                        this.running ? s instanceof l ? this.logger.log(u.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (n = s,
                                            this.running = !1) : this.logger.log(u.Trace, "(LongPolling transport) Poll errored after shutdown: " + s.message),
                                        [3, 6];
                                case 6:
                                    return [3, 1];
                                case 7:
                                    return [3, 9];
                                case 8:
                                    return this.stopped = !0,
                                        this.shutdownTimer && clearTimeout(this.shutdownTimer),
                                        this.onclose && (this.logger.log(u.Trace, "(LongPolling transport) Firing onclose event. Error: " + (n || "<undefined>")),
                                            this.onclose(n)),
                                        this.logger.log(u.Trace, "(LongPolling transport) Transport finished."),
                                        [7];
                                case 9:
                                    return [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.send = function (e) {
                    return s(this, void 0, void 0, function () {
                        return a(this, function (t) {
                            return this.running ? [2, w(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, e, this.logMessageContent)] : [2, Promise.reject(new Error("Cannot send until the transport is connected"))]
                        })
                    })
                }
                ,
                e.prototype.stop = function () {
                    return s(this, void 0, void 0, function () {
                        var e, t, n = this;
                        return a(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, , 3, 4]),
                                        this.running = !1,
                                        this.logger.log(u.Trace, "(LongPolling transport) sending DELETE request to " + this.url + "."),
                                        e = {
                                            headers: {}
                                        },
                                        [4, this.accessTokenFactory()];
                                case 1:
                                    return t = r.sent(),
                                        this.updateHeaderToken(e, t),
                                        [4, this.httpClient.delete(this.url, e)];
                                case 2:
                                    return r.sent(),
                                        this.logger.log(u.Trace, "(LongPolling transport) DELETE request accepted."),
                                        [3, 4];
                                case 3:
                                    return this.stopped || (this.shutdownTimer = setTimeout(function () {
                                        n.logger.log(u.Warning, "(LongPolling transport) server did not terminate after DELETE request, canceling poll."),
                                            n.pollAbort.abort()
                                    }, this.shutdownTimeout)),
                                        [7];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }
                ,
                e
        }()
        , A = function () {
            function e(e, t, n, r) {
                this.httpClient = e,
                    this.accessTokenFactory = t || function () {
                        return null
                    }
                    ,
                    this.logger = n,
                    this.logMessageContent = r
            }
            return e.prototype.connect = function (e, t) {
                return s(this, void 0, void 0, function () {
                    var n, r = this;
                    return a(this, function (o) {
                        switch (o.label) {
                            case 0:
                                if (m.isRequired(e, "url"),
                                    m.isRequired(t, "transferFormat"),
                                    m.isIn(t, S, "transferFormat"),
                                    "undefined" == typeof EventSource)
                                    throw new Error("'EventSource' is not supported in your environment.");
                                return this.logger.log(u.Trace, "(SSE transport) Connecting"),
                                    [4, this.accessTokenFactory()];
                            case 1:
                                return (n = o.sent()) && (e += (e.indexOf("?") < 0 ? "?" : "&") + "access_token=" + encodeURIComponent(n)),
                                    this.url = e,
                                    [2, new Promise(function (n, o) {
                                        var i = !1;
                                        t !== S.Text && o(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                                        var s = new EventSource(e, {
                                            withCredentials: !0
                                        });
                                        try {
                                            s.onmessage = function (e) {
                                                if (r.onreceive)
                                                    try {
                                                        r.logger.log(u.Trace, "(SSE transport) data received. " + b(e.data, r.logMessageContent) + "."),
                                                            r.onreceive(e.data)
                                                    } catch (e) {
                                                        return void (r.onclose && r.onclose(e))
                                                    }
                                            }
                                                ,
                                                s.onerror = function (e) {
                                                    var t = new Error(e.message || "Error occurred");
                                                    i ? r.close(t) : o(t)
                                                }
                                                ,
                                                s.onopen = function () {
                                                    r.logger.log(u.Information, "SSE connected to " + r.url),
                                                        r.eventSource = s,
                                                        i = !0,
                                                        n()
                                                }
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }
                                    )]
                        }
                    })
                })
            }
                ,
                e.prototype.send = function (e) {
                    return s(this, void 0, void 0, function () {
                        return a(this, function (t) {
                            return this.eventSource ? [2, w(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, e, this.logMessageContent)] : [2, Promise.reject(new Error("Cannot send until the transport is connected"))]
                        })
                    })
                }
                ,
                e.prototype.stop = function () {
                    return this.close(),
                        Promise.resolve()
                }
                ,
                e.prototype.close = function (e) {
                    this.eventSource && (this.eventSource.close(),
                        this.eventSource = null,
                        this.onclose && this.onclose(e))
                }
                ,
                e
        }()
        , U = function () {
            function e(e, t, n) {
                this.logger = t,
                    this.accessTokenFactory = e || function () {
                        return null
                    }
                    ,
                    this.logMessageContent = n
            }
            return e.prototype.connect = function (e, t) {
                return s(this, void 0, void 0, function () {
                    var n, r = this;
                    return a(this, function (o) {
                        switch (o.label) {
                            case 0:
                                if (m.isRequired(e, "url"),
                                    m.isRequired(t, "transferFormat"),
                                    m.isIn(t, S, "transferFormat"),
                                    "undefined" == typeof WebSocket)
                                    throw new Error("'WebSocket' is not supported in your environment.");
                                return this.logger.log(u.Trace, "(WebSockets transport) Connecting"),
                                    [4, this.accessTokenFactory()];
                            case 1:
                                return (n = o.sent()) && (e += (e.indexOf("?") < 0 ? "?" : "&") + "access_token=" + encodeURIComponent(n)),
                                    [2, new Promise(function (n, o) {
                                        e = e.replace(/^http/, "ws");
                                        var i = new WebSocket(e);
                                        t === S.Binary && (i.binaryType = "arraybuffer"),
                                            i.onopen = function (t) {
                                                r.logger.log(u.Information, "WebSocket connected to " + e),
                                                    r.webSocket = i,
                                                    n()
                                            }
                                            ,
                                            i.onerror = function (e) {
                                                o(e.error)
                                            }
                                            ,
                                            i.onmessage = function (e) {
                                                r.logger.log(u.Trace, "(WebSockets transport) data received. " + b(e.data, r.logMessageContent) + "."),
                                                    r.onreceive && r.onreceive(e.data)
                                            }
                                            ,
                                            i.onclose = function (e) {
                                                r.logger.log(u.Trace, "(WebSockets transport) socket closed."),
                                                    r.onclose && (!1 === e.wasClean || 1e3 !== e.code ? r.onclose(new Error("Websocket closed with status code: " + e.code + " (" + e.reason + ")")) : r.onclose())
                                            }
                                    }
                                    )]
                        }
                    })
                })
            }
                ,
                e.prototype.send = function (e) {
                    return this.webSocket && this.webSocket.readyState === WebSocket.OPEN ? (this.logger.log(u.Trace, "(WebSockets transport) sending data. " + b(e, this.logMessageContent) + "."),
                        this.webSocket.send(e),
                        Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state")
                }
                ,
                e.prototype.stop = function () {
                    return this.webSocket && (this.webSocket.close(),
                        this.webSocket = null),
                        Promise.resolve()
                }
                ,
                e
        }()
        , P = function () {
            function e(e, t) {
                var n;
                void 0 === t && (t = {}),
                    this.features = {},
                    m.isRequired(e, "url"),
                    this.logger = void 0 === (n = t.logger) ? new I(u.Information) : null === n ? v.instance : n.log ? n : new I(n),
                    this.baseUrl = this.resolveUrl(e),
                    (t = t || {}).accessTokenFactory = t.accessTokenFactory || function () {
                        return null
                    }
                    ,
                    t.logMessageContent = t.logMessageContent || !1,
                    this.httpClient = t.httpClient || new d(this.logger),
                    this.connectionState = 2,
                    this.options = t
            }
            return e.prototype.start = function (e) {
                return e = e || S.Binary,
                    m.isIn(e, S, "transferFormat"),
                    this.logger.log(u.Debug, "Starting connection with transfer format '" + S[e] + "'."),
                    2 !== this.connectionState ? Promise.reject(new Error("Cannot start a connection that is not in the 'Disconnected' state.")) : (this.connectionState = 0,
                        this.startPromise = this.startInternal(e),
                        this.startPromise)
            }
                ,
                e.prototype.send = function (e) {
                    if (1 !== this.connectionState)
                        throw new Error("Cannot send data if the connection is not in the 'Connected' State.");
                    return this.transport.send(e)
                }
                ,
                e.prototype.stop = function (e) {
                    return s(this, void 0, void 0, function () {
                        return a(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    this.connectionState = 2,
                                        t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]),
                                        [4, this.startPromise];
                                case 2:
                                    return t.sent(),
                                        [3, 4];
                                case 3:
                                    return t.sent(),
                                        [3, 4];
                                case 4:
                                    return this.transport ? (this.stopError = e,
                                        [4, this.transport.stop()]) : [3, 6];
                                case 5:
                                    t.sent(),
                                        this.transport = null,
                                        t.label = 6;
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.startInternal = function (e) {
                    return s(this, void 0, void 0, function () {
                        var t, n, r, o, i, s, c, l = this;
                        return a(this, function (f) {
                            switch (f.label) {
                                case 0:
                                    t = this.baseUrl,
                                        this.accessTokenFactory = this.options.accessTokenFactory,
                                        f.label = 1;
                                case 1:
                                    return f.trys.push([1, 12, , 13]),
                                        this.options.skipNegotiation ? this.options.transport !== E.WebSockets ? [3, 3] : (this.transport = this.constructTransport(E.WebSockets),
                                            [4, this.transport.connect(t, e)]) : [3, 5];
                                case 2:
                                    return f.sent(),
                                        [3, 4];
                                case 3:
                                    throw Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                                case 4:
                                    return [3, 11];
                                case 5:
                                    n = null,
                                        r = 0,
                                        o = function () {
                                            var e;
                                            return a(this, function (o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return [4, i.getNegotiationResponse(t)];
                                                    case 1:
                                                        return n = o.sent(),
                                                            2 === i.connectionState ? [2, {
                                                                value: void 0
                                                            }] : (n.url && (t = n.url),
                                                                n.accessToken && (e = n.accessToken,
                                                                    i.accessTokenFactory = function () {
                                                                        return e
                                                                    }
                                                                ),
                                                                r++ ,
                                                                [2])
                                                }
                                            })
                                        }
                                        ,
                                        i = this,
                                        f.label = 6;
                                case 6:
                                    return [5, o()];
                                case 7:
                                    if ("object" == typeof (s = f.sent()))
                                        return [2, s.value];
                                    f.label = 8;
                                case 8:
                                    if (n.url && r < 100)
                                        return [3, 6];
                                    f.label = 9;
                                case 9:
                                    if (100 === r && n.url)
                                        throw Error("Negotiate redirection limit exceeded.");
                                    return [4, this.createTransport(t, this.options.transport, n, e)];
                                case 10:
                                    f.sent(),
                                        f.label = 11;
                                case 11:
                                    return this.transport instanceof M && (this.features.inherentKeepAlive = !0),
                                        this.transport.onreceive = this.onreceive,
                                        this.transport.onclose = function (e) {
                                            return l.stopConnection(e)
                                        }
                                        ,
                                        this.changeState(0, 1),
                                        [3, 13];
                                case 12:
                                    throw c = f.sent(),
                                    this.logger.log(u.Error, "Failed to start the connection: " + c),
                                    this.connectionState = 2,
                                    this.transport = null,
                                    c;
                                case 13:
                                    return [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.getNegotiationResponse = function (e) {
                    return s(this, void 0, void 0, function () {
                        var t, n, r, o, i, s;
                        return a(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.accessTokenFactory()];
                                case 1:
                                    (t = a.sent()) && ((s = {}).Authorization = "Bearer " + t,
                                        n = s),
                                        r = this.resolveNegotiateUrl(e),
                                        this.logger.log(u.Debug, "Sending negotiation request: " + r),
                                        a.label = 2;
                                case 2:
                                    return a.trys.push([2, 4, , 5]),
                                        [4, this.httpClient.post(r, {
                                            content: "",
                                            headers: n
                                        })];
                                case 3:
                                    if (200 !== (o = a.sent()).statusCode)
                                        throw Error("Unexpected status code returned from negotiate " + o.statusCode);
                                    return [2, JSON.parse(o.content)];
                                case 4:
                                    throw i = a.sent(),
                                    this.logger.log(u.Error, "Failed to complete negotiation with the server: " + i),
                                    i;
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.createConnectUrl = function (e, t) {
                    return e + (-1 === e.indexOf("?") ? "?" : "&") + "id=" + t
                }
                ,
                e.prototype.createTransport = function (e, t, n, r) {
                    return s(this, void 0, void 0, function () {
                        var o, i, s, c, l, f, h;
                        return a(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return o = this.createConnectUrl(e, n.connectionId),
                                        this.isITransport(t) ? (this.logger.log(u.Debug, "Connection was provided an instance of ITransport, using that directly."),
                                            this.transport = t,
                                            [4, this.transport.connect(o, r)]) : [3, 2];
                                case 1:
                                    return a.sent(),
                                        this.changeState(0, 1),
                                        [2];
                                case 2:
                                    i = n.availableTransports,
                                        s = 0,
                                        c = i,
                                        a.label = 3;
                                case 3:
                                    return s < c.length ? (l = c[s],
                                        this.connectionState = 0,
                                        "number" != typeof (f = this.resolveTransport(l, t, r)) ? [3, 8] : (this.transport = this.constructTransport(f),
                                            null !== n.connectionId ? [3, 5] : [4, this.getNegotiationResponse(e)])) : [3, 9];
                                case 4:
                                    n = a.sent(),
                                        o = this.createConnectUrl(e, n.connectionId),
                                        a.label = 5;
                                case 5:
                                    return a.trys.push([5, 7, , 8]),
                                        [4, this.transport.connect(o, r)];
                                case 6:
                                    return a.sent(),
                                        this.changeState(0, 1),
                                        [2];
                                case 7:
                                    return h = a.sent(),
                                        this.logger.log(u.Error, "Failed to start the transport '" + E[f] + "': " + h),
                                        this.connectionState = 2,
                                        n.connectionId = null,
                                        [3, 8];
                                case 8:
                                    return s++ ,
                                        [3, 3];
                                case 9:
                                    throw new Error("Unable to initialize any of the available transports.")
                            }
                        })
                    })
                }
                ,
                e.prototype.constructTransport = function (e) {
                    switch (e) {
                        case E.WebSockets:
                            return new U(this.accessTokenFactory, this.logger, this.options.logMessageContent);
                        case E.ServerSentEvents:
                            return new A(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent);
                        case E.LongPolling:
                            return new M(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent);
                        default:
                            throw new Error("Unknown transport: " + e + ".")
                    }
                }
                ,
                e.prototype.resolveTransport = function (e, t, n) {
                    var r = E[e.transport];
                    if (null === r || void 0 === r)
                        this.logger.log(u.Debug, "Skipping transport '" + e.transport + "' because it is not supported by this client.");
                    else {
                        var o = e.transferFormats.map(function (e) {
                            return S[e]
                        });
                        if (function (e, t) {
                            return !e || 0 != (t & e)
                        }(t, r))
                            if (o.indexOf(n) >= 0) {
                                if (!(r === E.WebSockets && "undefined" == typeof WebSocket || r === E.ServerSentEvents && "undefined" == typeof EventSource))
                                    return this.logger.log(u.Debug, "Selecting transport '" + E[r] + "'"),
                                        r;
                                this.logger.log(u.Debug, "Skipping transport '" + E[r] + "' because it is not supported in your environment.'")
                            } else
                                this.logger.log(u.Debug, "Skipping transport '" + E[r] + "' because it does not support the requested transfer format '" + S[n] + "'.");
                        else
                            this.logger.log(u.Debug, "Skipping transport '" + E[r] + "' because it was disabled by the client.")
                    }
                    return null
                }
                ,
                e.prototype.isITransport = function (e) {
                    return e && "object" == typeof e && "connect" in e
                }
                ,
                e.prototype.changeState = function (e, t) {
                    return this.connectionState === e && (this.connectionState = t,
                        !0)
                }
                ,
                e.prototype.stopConnection = function (e) {
                    return s(this, void 0, void 0, function () {
                        return a(this, function (t) {
                            return this.transport = null,
                                (e = this.stopError || e) ? this.logger.log(u.Error, "Connection disconnected with error '" + e + "'.") : this.logger.log(u.Information, "Connection disconnected."),
                                this.connectionState = 2,
                                this.onclose && this.onclose(e),
                                [2]
                        })
                    })
                }
                ,
                e.prototype.resolveUrl = function (e) {
                    if (0 === e.lastIndexOf("https://", 0) || 0 === e.lastIndexOf("http://", 0))
                        return e;
                    if ("undefined" == typeof window || !window || !window.document)
                        throw new Error("Cannot resolve '" + e + "'.");
                    var t = window.document.createElement("a");
                    return t.href = e,
                        this.logger.log(u.Information, "Normalizing '" + e + "' to '" + t.href + "'."),
                        t.href
                }
                ,
                e.prototype.resolveNegotiateUrl = function (e) {
                    var t = e.indexOf("?")
                        , n = e.substring(0, -1 === t ? e.length : t);
                    return "/" !== n[n.length - 1] && (n += "/"),
                        n += "negotiate",
                        n += -1 === t ? "" : e.substring(t)
                }
                ,
                e
        }();
    var B = "json"
        , O = function () {
            function e() {
                this.name = B,
                    this.version = 1,
                    this.transferFormat = S.Text
            }
            return e.prototype.parseMessages = function (e, t) {
                if ("string" != typeof e)
                    throw new Error("Invalid input for JSON hub protocol. Expected a string.");
                if (!e)
                    return [];
                null === t && (t = v.instance);
                for (var n = [], r = 0, o = g.parse(e); r < o.length; r++) {
                    var i = o[r]
                        , s = JSON.parse(i);
                    if ("number" != typeof s.type)
                        throw new Error("Invalid payload.");
                    switch (s.type) {
                        case f.Invocation:
                            this.isInvocationMessage(s);
                            break;
                        case f.StreamItem:
                            this.isStreamItemMessage(s);
                            break;
                        case f.Completion:
                            this.isCompletionMessage(s);
                            break;
                        case f.Ping:
                        case f.Close:
                            break;
                        default:
                            t.log(u.Information, "Unknown message type '" + s.type + "' ignored.");
                            continue
                    }
                    n.push(s)
                }
                return n
            }
                ,
                e.prototype.writeMessage = function (e) {
                    return g.write(JSON.stringify(e))
                }
                ,
                e.prototype.isInvocationMessage = function (e) {
                    this.assertNotEmptyString(e.target, "Invalid payload for Invocation message."),
                        void 0 !== e.invocationId && this.assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.")
                }
                ,
                e.prototype.isStreamItemMessage = function (e) {
                    if (this.assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."),
                        void 0 === e.item)
                        throw new Error("Invalid payload for StreamItem message.")
                }
                ,
                e.prototype.isCompletionMessage = function (e) {
                    if (e.result && e.error)
                        throw new Error("Invalid payload for Completion message.");
                    !e.result && e.error && this.assertNotEmptyString(e.error, "Invalid payload for Completion message."),
                        this.assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.")
                }
                ,
                e.prototype.assertNotEmptyString = function (e, t) {
                    if ("string" != typeof e || "" === e)
                        throw new Error(t)
                }
                ,
                e
        }()
        , L = function () {
            function e() { }
            return e.prototype.configureLogging = function (e) {
                return m.isRequired(e, "logging"),
                    void 0 !== e.log ? this.logger = e : this.logger = new I(e),
                    this
            }
                ,
                e.prototype.withUrl = function (e, t) {
                    return m.isRequired(e, "url"),
                        this.url = e,
                        this.httpConnectionOptions = "object" == typeof t ? t : {
                            transport: t
                        },
                        this
                }
                ,
                e.prototype.withHubProtocol = function (e) {
                    return m.isRequired(e, "protocol"),
                        this.protocol = e,
                        this
                }
                ,
                e.prototype.build = function () {
                    var e = this.httpConnectionOptions || {};
                    if (void 0 === e.logger && (e.logger = this.logger),
                        !this.url)
                        throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
                    var t = new P(this.url, e);
                    return C.create(t, this.logger || v.instance, this.protocol || new O)
                }
                ,
                e
        }();
    n.d(t, "VERSION", function () {
        return D
    }),
        n.d(t, "HttpError", function () {
            return c
        }),
        n.d(t, "TimeoutError", function () {
            return l
        }),
        n.d(t, "DefaultHttpClient", function () {
            return d
        }),
        n.d(t, "HttpClient", function () {
            return p
        }),
        n.d(t, "HttpResponse", function () {
            return h
        }),
        n.d(t, "HubConnection", function () {
            return C
        }),
        n.d(t, "HubConnectionBuilder", function () {
            return L
        }),
        n.d(t, "MessageType", function () {
            return f
        }),
        n.d(t, "LogLevel", function () {
            return u
        }),
        n.d(t, "HttpTransportType", function () {
            return E
        }),
        n.d(t, "TransferFormat", function () {
            return S
        }),
        n.d(t, "NullLogger", function () {
            return v
        }),
        n.d(t, "JsonHubProtocol", function () {
            return O
        });
    var D = "1.0.0"
}
    , function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
                eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }
    , function (e, t) {
        "function" == typeof Object.create ? e.exports = function (e, t) {
            e.super_ = t,
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
        }
            : e.exports = function (e, t) {
                e.super_ = t;
                var n = function () { };
                n.prototype = t.prototype,
                    e.prototype = new n,
                    e.prototype.constructor = e
            }
    }
    , function (e, t, n) {
        var r = n(12)
            , o = r.Buffer;
        function i(e, t) {
            for (var n in e)
                t[n] = e[n]
        }
        function s(e, t, n) {
            return o(e, t, n)
        }
        o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = r : (i(r, t),
            t.Buffer = s),
            i(o, s),
            s.from = function (e, t, n) {
                if ("number" == typeof e)
                    throw new TypeError("Argument must not be a number");
                return o(e, t, n)
            }
            ,
            s.alloc = function (e, t, n) {
                if ("number" != typeof e)
                    throw new TypeError("Argument must be a number");
                var r = o(e);
                return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0),
                    r
            }
            ,
            s.allocUnsafe = function (e) {
                if ("number" != typeof e)
                    throw new TypeError("Argument must be a number");
                return o(e)
            }
            ,
            s.allocUnsafeSlow = function (e) {
                if ("number" != typeof e)
                    throw new TypeError("Argument must be a number");
                return r.SlowBuffer(e)
            }
    }
    , function (e, t, n) {
        "use strict";
        var r = n(9)
            , o = Object.keys || function (e) {
                var t = [];
                for (var n in e)
                    t.push(n);
                return t
            }
            ;
        e.exports = f;
        var i = n(5);
        i.inherits = n(2);
        var s = n(32)
            , a = n(28);
        i.inherits(f, s);
        for (var u = o(a.prototype), c = 0; c < u.length; c++) {
            var l = u[c];
            f.prototype[l] || (f.prototype[l] = a.prototype[l])
        }
        function f(e) {
            if (!(this instanceof f))
                return new f(e);
            s.call(this, e),
                a.call(this, e),
                e && !1 === e.readable && (this.readable = !1),
                e && !1 === e.writable && (this.writable = !1),
                this.allowHalfOpen = !0,
                e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
                this.once("end", h)
        }
        function h() {
            this.allowHalfOpen || this._writableState.ended || r.nextTick(p, this)
        }
        function p(e) {
            e.end()
        }
        Object.defineProperty(f.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
                return this._writableState.highWaterMark
            }
        }),
            Object.defineProperty(f.prototype, "destroyed", {
                get: function () {
                    return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                },
                set: function (e) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
                        this._writableState.destroyed = e)
                }
            }),
            f.prototype._destroy = function (e, t) {
                this.push(null),
                    this.end(),
                    r.nextTick(t, e)
            }
    }
    , function (e, t, n) {
        (function (e) {
            function n(e) {
                return Object.prototype.toString.call(e)
            }
            t.isArray = function (e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e)
            }
                ,
                t.isBoolean = function (e) {
                    return "boolean" == typeof e
                }
                ,
                t.isNull = function (e) {
                    return null === e
                }
                ,
                t.isNullOrUndefined = function (e) {
                    return null == e
                }
                ,
                t.isNumber = function (e) {
                    return "number" == typeof e
                }
                ,
                t.isString = function (e) {
                    return "string" == typeof e
                }
                ,
                t.isSymbol = function (e) {
                    return "symbol" == typeof e
                }
                ,
                t.isUndefined = function (e) {
                    return void 0 === e
                }
                ,
                t.isRegExp = function (e) {
                    return "[object RegExp]" === n(e)
                }
                ,
                t.isObject = function (e) {
                    return "object" == typeof e && null !== e
                }
                ,
                t.isDate = function (e) {
                    return "[object Date]" === n(e)
                }
                ,
                t.isError = function (e) {
                    return "[object Error]" === n(e) || e instanceof Error
                }
                ,
                t.isFunction = function (e) {
                    return "function" == typeof e
                }
                ,
                t.isPrimitive = function (e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
                }
                ,
                t.isBuffer = e.isBuffer
        }
        ).call(this, n(12).Buffer)
    }
    , function (e, t) {
        var n, r, o = e.exports = {};
        function i() {
            throw new Error("setTimeout has not been defined")
        }
        function s() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout)
                return n = setTimeout,
                    setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                r = s
            }
        }();
        var u, c = [], l = !1, f = -1;
        function h() {
            l && u && (l = !1,
                u.length ? c = u.concat(c) : f = -1,
                c.length && p())
        }
        function p() {
            if (!l) {
                var e = a(h);
                l = !0;
                for (var t = c.length; t;) {
                    for (u = c,
                        c = []; ++f < t;)
                        u && u[f].run();
                    f = -1,
                        t = c.length
                }
                u = null,
                    l = !1,
                    function (e) {
                        if (r === clearTimeout)
                            return clearTimeout(e);
                        if ((r === s || !r) && clearTimeout)
                            return r = clearTimeout,
                                clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(e)
            }
        }
        function d(e, t) {
            this.fun = e,
                this.array = t
        }
        function g() { }
        o.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            c.push(new d(e, t)),
                1 !== c.length || l || a(p)
        }
            ,
            d.prototype.run = function () {
                this.fun.apply(null, this.array)
            }
            ,
            o.title = "browser",
            o.browser = !0,
            o.env = {},
            o.argv = [],
            o.version = "",
            o.versions = {},
            o.on = g,
            o.addListener = g,
            o.once = g,
            o.off = g,
            o.removeListener = g,
            o.removeAllListeners = g,
            o.emit = g,
            o.prependListener = g,
            o.prependOnceListener = g,
            o.listeners = function (e) {
                return []
            }
            ,
            o.binding = function (e) {
                throw new Error("process.binding is not supported")
            }
            ,
            o.cwd = function () {
                return "/"
            }
            ,
            o.chdir = function (e) {
                throw new Error("process.chdir is not supported")
            }
            ,
            o.umask = function () {
                return 0
            }
    }
    , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(22)
            , o = {};
        t.attachRootComponentToElement = function (e, t, n) {
            var i = document.querySelector(t);
            //if (!i)
            //    throw new Error("Could not find any element matching selector '" + t + "'.");
            if (i) {
                var s = o[e];
                s || (s = o[e] = new r.BrowserRenderer(e)),
                    s.attachRootComponentToElement(n, i)
            }
        }
            ,
            t.renderBatch = function (e, t) {
                var n = o[e];
                if (!n)
                    throw new Error("There is no browser renderer with ID " + e + ".");
                for (var r = t.arrayRangeReader, i = t.updatedComponents(), s = r.values(i), a = r.count(i), u = t.referenceFrames(), c = r.values(u), l = t.diffReader, f = 0; f < a; f++) {
                    var h = t.updatedComponentsEntry(s, f)
                        , p = l.componentId(h)
                        , d = l.edits(h);
                    n.updateComponent(t, p, d, c)
                }
                var g = t.disposedComponentIds()
                    , y = r.values(g)
                    , v = r.count(g);
                for (f = 0; f < v; f++)
                    p = t.disposedComponentIdsEntry(y, f),
                        n.disposeComponent(p);
                var m = t.disposedEventHandlerIds()
                    , b = r.values(m)
                    , w = r.count(m);
                for (f = 0; f < w; f++) {
                    var E = t.disposedEventHandlerIdsEntry(b, f);
                    n.disposeEventHandler(E)
                }
            }
    }
    , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.setPlatform = function (e) {
                return t.platform = e,
                    t.platform
            }
    }
    , function (e, t, n) {
        "use strict";
        (function (t) {
            !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
                nextTick: function (e, n, r, o) {
                    if ("function" != typeof e)
                        throw new TypeError('"callback" argument must be a function');
                    var i, s, a = arguments.length;
                    switch (a) {
                        case 0:
                        case 1:
                            return t.nextTick(e);
                        case 2:
                            return t.nextTick(function () {
                                e.call(null, n)
                            });
                        case 3:
                            return t.nextTick(function () {
                                e.call(null, n, r)
                            });
                        case 4:
                            return t.nextTick(function () {
                                e.call(null, n, r, o)
                            });
                        default:
                            for (i = new Array(a - 1),
                                s = 0; s < i.length;)
                                i[s++] = arguments[s];
                            return t.nextTick(function () {
                                e.apply(null, i)
                            })
                    }
                }
            } : e.exports = t
        }
        ).call(this, n(6))
    }
    , function (e, t, n) {
        var r = n(33).Duplex
            , o = n(14)
            , i = n(3).Buffer
            , s = i.alloc(1);
        function a(e) {
            if (!(this instanceof a))
                return new a(e);
            if (this._bufs = [],
                this.length = 0,
                "function" == typeof e) {
                this._callback = e;
                var t = function (e) {
                    this._callback && (this._callback(e),
                        this._callback = null)
                }
                    .bind(this);
                this.on("pipe", function (e) {
                    e.on("error", t)
                }),
                    this.on("unpipe", function (e) {
                        e.removeListener("error", t)
                    })
            } else
                this.append(e);
            r.call(this)
        }
        o.inherits(a, r),
            a.prototype._offset = function (e) {
                var t, n = 0, r = 0;
                if (0 === e)
                    return [0, 0];
                for (; r < this._bufs.length; r++) {
                    if (e < (t = n + this._bufs[r].length) || r == this._bufs.length - 1)
                        return [r, e - n];
                    n = t
                }
            }
            ,
            a.prototype.append = function (e) {
                var t = 0;
                if (i.isBuffer(e))
                    this._appendBuffer(e);
                else if (Array.isArray(e))
                    for (; t < e.length; t++)
                        this.append(e[t]);
                else if (e instanceof a)
                    for (; t < e._bufs.length; t++)
                        this.append(e._bufs[t]);
                else
                    null != e && ("number" == typeof e && (e = e.toString()),
                        this._appendBuffer(i.from(e)));
                return this
            }
            ,
            a.prototype._appendBuffer = function (e) {
                this._bufs.push(e),
                    this.length += e.length
            }
            ,
            a.prototype._write = function (e, t, n) {
                this._appendBuffer(e),
                    "function" == typeof n && n()
            }
            ,
            a.prototype._read = function (e) {
                if (!this.length)
                    return this.push(null);
                e = Math.min(e, this.length),
                    this.push(this.slice(0, e)),
                    this.consume(e)
            }
            ,
            a.prototype.end = function (e) {
                r.prototype.end.call(this, e),
                    this._callback && (this._callback(null, this.slice()),
                        this._callback = null)
            }
            ,
            a.prototype.get = function (e) {
                return this.copy(s, 0, e, e + 1),
                    s[0]
            }
            ,
            a.prototype.slice = function (e, t) {
                return "number" == typeof e && e < 0 && (e += this.length),
                    "number" == typeof t && t < 0 && (t += this.length),
                    this.copy(null, 0, e, t)
            }
            ,
            a.prototype.copy = function (e, t, n, r) {
                if (("number" != typeof n || n < 0) && (n = 0),
                    ("number" != typeof r || r > this.length) && (r = this.length),
                    n >= this.length)
                    return e || i.alloc(0);
                if (r <= 0)
                    return e || i.alloc(0);
                var o, s, a = !!e, u = this._offset(n), c = r - n, l = c, f = a && t || 0, h = u[1];
                if (0 === n && r == this.length) {
                    if (!a)
                        return 1 === this._bufs.length ? this._bufs[0] : i.concat(this._bufs, this.length);
                    for (s = 0; s < this._bufs.length; s++)
                        this._bufs[s].copy(e, f),
                            f += this._bufs[s].length;
                    return e
                }
                if (l <= this._bufs[u[0]].length - h)
                    return a ? this._bufs[u[0]].copy(e, t, h, h + l) : this._bufs[u[0]].slice(h, h + l);
                for (a || (e = i.allocUnsafe(c)),
                    s = u[0]; s < this._bufs.length; s++) {
                    if (!(l > (o = this._bufs[s].length - h))) {
                        this._bufs[s].copy(e, f, h, h + l);
                        break
                    }
                    this._bufs[s].copy(e, f, h),
                        f += o,
                        l -= o,
                        h && (h = 0)
                }
                return e
            }
            ,
            a.prototype.shallowSlice = function (e, t) {
                e = e || 0,
                    t = t || this.length,
                    e < 0 && (e += this.length),
                    t < 0 && (t += this.length);
                var n = this._offset(e)
                    , r = this._offset(t)
                    , o = this._bufs.slice(n[0], r[0] + 1);
                return 0 == r[1] ? o.pop() : o[o.length - 1] = o[o.length - 1].slice(0, r[1]),
                    0 != n[1] && (o[0] = o[0].slice(n[1])),
                    new a(o)
            }
            ,
            a.prototype.toString = function (e, t, n) {
                return this.slice(t, n).toString(e)
            }
            ,
            a.prototype.consume = function (e) {
                for (; this._bufs.length;) {
                    if (!(e >= this._bufs[0].length)) {
                        this._bufs[0] = this._bufs[0].slice(e),
                            this.length -= e;
                        break
                    }
                    e -= this._bufs[0].length,
                        this.length -= this._bufs[0].length,
                        this._bufs.shift()
                }
                return this
            }
            ,
            a.prototype.duplicate = function () {
                for (var e = 0, t = new a; e < this._bufs.length; e++)
                    t.append(this._bufs[e]);
                return t
            }
            ,
            a.prototype.destroy = function () {
                this._bufs.length = 0,
                    this.length = 0,
                    this.push(null)
            }
            ,
            function () {
                var e = {
                    readDoubleBE: 8,
                    readDoubleLE: 8,
                    readFloatBE: 4,
                    readFloatLE: 4,
                    readInt32BE: 4,
                    readInt32LE: 4,
                    readUInt32BE: 4,
                    readUInt32LE: 4,
                    readInt16BE: 2,
                    readInt16LE: 2,
                    readUInt16BE: 2,
                    readUInt16LE: 2,
                    readInt8: 1,
                    readUInt8: 1,
                    readIntBE: null,
                    readIntLE: null,
                    readUIntBE: null,
                    readUIntLE: null
                };
                for (var t in e)
                    !function (t) {
                        a.prototype[t] = null === e[t] ? function (e, n) {
                            return this.slice(e, e + n)[t](0, n)
                        }
                            : function (n) {
                                return this.slice(n, n + e[t])[t](0)
                            }
                    }(t)
            }(),
            e.exports = a
    }
    , function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function s(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function a(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function u(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }
                    ).then(s, a)
                }
                u((r = r.apply(e, t || [])).next())
            }
            )
        }
            , o = this && this.__generator || function (e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }
                    ),
                    i;
                function a(i) {
                    return function (a) {
                        return function (i) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; s;)
                                try {
                                    if (n = 1,
                                        r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                        return o;
                                    switch (r = 0,
                                    o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++ ,
                                                {
                                                    value: i[1],
                                                    done: !1
                                                };
                                        case 5:
                                            s.label++ ,
                                                r = i[1],
                                                i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(),
                                                s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1],
                                                    o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2],
                                                    s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(),
                                                s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e],
                                        r = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, s = !1, a = null;
        function u(e, t) {
            var n = f(e);
            !t && h(n) ? c(n) : location.href = e
        }
        function c(e) {
            history.pushState(null, "", e),
                l()
        }
        function l() {
            return r(this, void 0, void 0, function () {
                return o(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return a ? [4, DotNet.invokeMethodAsync(a.assemblyName, a.functionName, location.href)] : [3, 2];
                        case 1:
                            e.sent(),
                                e.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }
        function f(e) {
            return (i = i || document.createElement("a")).href = e,
                i.href
        }
        function h(e) {
            var t, n = (t = document.baseURI).substr(0, t.lastIndexOf("/") + 1);
            return e.startsWith(n)
        }
        t.internalFunctions = {
            enableNavigationInterception: function (e, t) {
                if (s || void 0 === e || void 0 === t)
                    return;
                a = {
                    assemblyName: e,
                    functionName: t
                },
                    s = !0,
                    document.addEventListener("click", function (e) {
                        var t = function e(t, n) {
                            return t ? t.tagName === n ? t : e(t.parentElement, n) : null
                        }(e.target, "A");
                        if (t && t.hasAttribute("href") && 0 === e.button) {
                            var n = t.getAttribute("href")
                                , r = f(n)
                                , o = t.getAttribute("target")
                                , i = !o || "_self" === o;
                            h(r) && !function (e) {
                                return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey
                            }(e) && i && (e.preventDefault(),
                                c(r))
                        }
                    }),
                    window.addEventListener("popstate", l)
            },
            navigateTo: u,
            getBaseURI: function () {
                return document.baseURI
            },
            getLocationHref: function () {
                return location.href
            }
        },
            t.navigateTo = u
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
            var r = n(51)
                , o = n(50)
                , i = n(34);
            function s() {
                return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function a(e, t) {
                if (s() < t)
                    throw new RangeError("Invalid typed array length");
                return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)),
                    e.length = t),
                    e
            }
            function u(e, t, n) {
                if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
                    return new u(e, t, n);
                if ("number" == typeof e) {
                    if ("string" == typeof t)
                        throw new Error("If encoding is specified then the first argument must be a string");
                    return f(this, e)
                }
                return c(this, e, t, n)
            }
            function c(e, t, n, r) {
                if ("number" == typeof t)
                    throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
                    if (t.byteLength,
                        n < 0 || t.byteLength < n)
                        throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (r || 0))
                        throw new RangeError("'length' is out of bounds");
                    t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                    u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = h(e, t);
                    return e
                }(e, t, n, r) : "string" == typeof t ? function (e, t, n) {
                    "string" == typeof n && "" !== n || (n = "utf8");
                    if (!u.isEncoding(n))
                        throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | d(t, n)
                        , o = (e = a(e, r)).write(t, n);
                    o !== r && (e = e.slice(0, o));
                    return e
                }(e, t, n) : function (e, t) {
                    if (u.isBuffer(t)) {
                        var n = 0 | p(t.length);
                        return 0 === (e = a(e, n)).length ? e : (t.copy(e, 0, 0, n),
                            e)
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t)
                            return "number" != typeof t.length || (r = t.length) != r ? a(e, 0) : h(e, t);
                        if ("Buffer" === t.type && i(t.data))
                            return h(e, t.data)
                    }
                    var r;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }
            function l(e) {
                if ("number" != typeof e)
                    throw new TypeError('"size" argument must be a number');
                if (e < 0)
                    throw new RangeError('"size" argument must not be negative')
            }
            function f(e, t) {
                if (l(t),
                    e = a(e, t < 0 ? 0 : 0 | p(t)),
                    !u.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < t; ++n)
                        e[n] = 0;
                return e
            }
            function h(e, t) {
                var n = t.length < 0 ? 0 : 0 | p(t.length);
                e = a(e, n);
                for (var r = 0; r < n; r += 1)
                    e[r] = 255 & t[r];
                return e
            }
            function p(e) {
                if (e >= s())
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                return 0 | e
            }
            function d(e, t) {
                if (u.isBuffer(e))
                    return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                    return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n)
                    return 0;
                for (var r = !1; ;)
                    switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return F(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return H(e).length;
                        default:
                            if (r)
                                return F(e).length;
                            t = ("" + t).toLowerCase(),
                                r = !0
                    }
            }
            function g(e, t, n) {
                var r = e[t];
                e[t] = e[n],
                    e[n] = r
            }
            function y(e, t, n, r, o) {
                if (0 === e.length)
                    return -1;
                if ("string" == typeof n ? (r = n,
                    n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                    n = +n,
                    isNaN(n) && (n = o ? 0 : e.length - 1),
                    n < 0 && (n = e.length + n),
                    n >= e.length) {
                    if (o)
                        return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!o)
                        return -1;
                    n = 0
                }
                if ("string" == typeof t && (t = u.from(t, r)),
                    u.isBuffer(t))
                    return 0 === t.length ? -1 : v(e, t, n, r, o);
                if ("number" == typeof t)
                    return t &= 255,
                        u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, r, o);
                throw new TypeError("val must be string, number or Buffer")
            }
            function v(e, t, n, r, o) {
                var i, s = 1, a = e.length, u = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2)
                        return -1;
                    s = 2,
                        a /= 2,
                        u /= 2,
                        n /= 2
                }
                function c(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (o) {
                    var l = -1;
                    for (i = n; i < a; i++)
                        if (c(e, i) === c(t, -1 === l ? 0 : i - l)) {
                            if (-1 === l && (l = i),
                                i - l + 1 === u)
                                return l * s
                        } else
                            -1 !== l && (i -= i - l),
                                l = -1
                } else
                    for (n + u > a && (n = a - u),
                        i = n; i >= 0; i--) {
                        for (var f = !0, h = 0; h < u; h++)
                            if (c(e, i + h) !== c(t, h)) {
                                f = !1;
                                break
                            }
                        if (f)
                            return i
                    }
                return -1
            }
            function m(e, t, n, r) {
                n = Number(n) || 0;
                var o = e.length - n;
                r ? (r = Number(r)) > o && (r = o) : r = o;
                var i = t.length;
                if (i % 2 != 0)
                    throw new TypeError("Invalid hex string");
                r > i / 2 && (r = i / 2);
                for (var s = 0; s < r; ++s) {
                    var a = parseInt(t.substr(2 * s, 2), 16);
                    if (isNaN(a))
                        return s;
                    e[n + s] = a
                }
                return s
            }
            function b(e, t, n, r) {
                return q(F(t, e.length - n), e, n, r)
            }
            function w(e, t, n, r) {
                return q(function (e) {
                    for (var t = [], n = 0; n < e.length; ++n)
                        t.push(255 & e.charCodeAt(n));
                    return t
                }(t), e, n, r)
            }
            function E(e, t, n, r) {
                return w(e, t, n, r)
            }
            function S(e, t, n, r) {
                return q(H(t), e, n, r)
            }
            function _(e, t, n, r) {
                return q(function (e, t) {
                    for (var n, r, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
                        n = e.charCodeAt(s),
                            r = n >> 8,
                            o = n % 256,
                            i.push(o),
                            i.push(r);
                    return i
                }(t, e.length - n), e, n, r)
            }
            function T(e, t, n) {
                return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
            }
            function I(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], o = t; o < n;) {
                    var i, s, a, u, c = e[o], l = null, f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (o + f <= n)
                        switch (f) {
                            case 1:
                                c < 128 && (l = c);
                                break;
                            case 2:
                                128 == (192 & (i = e[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (l = u);
                                break;
                            case 3:
                                i = e[o + 1],
                                    s = e[o + 2],
                                    128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                                break;
                            case 4:
                                i = e[o + 1],
                                    s = e[o + 2],
                                    a = e[o + 3],
                                    128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                        }
                    null === l ? (l = 65533,
                        f = 1) : l > 65535 && (l -= 65536,
                            r.push(l >>> 10 & 1023 | 55296),
                            l = 56320 | 1023 & l),
                        r.push(l),
                        o += f
                }
                return function (e) {
                    var t = e.length;
                    if (t <= k)
                        return String.fromCharCode.apply(String, e);
                    var n = ""
                        , r = 0;
                    for (; r < t;)
                        n += String.fromCharCode.apply(String, e.slice(r, r += k));
                    return n
                }(r)
            }
            t.Buffer = u,
                t.SlowBuffer = function (e) {
                    +e != e && (e = 0);
                    return u.alloc(+e)
                }
                ,
                t.INSPECT_MAX_BYTES = 50,
                u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
                    try {
                        var e = new Uint8Array(1);
                        return e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function () {
                                return 42
                            }
                        },
                            42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    } catch (e) {
                        return !1
                    }
                }(),
                t.kMaxLength = s(),
                u.poolSize = 8192,
                u._augment = function (e) {
                    return e.__proto__ = u.prototype,
                        e
                }
                ,
                u.from = function (e, t, n) {
                    return c(null, e, t, n)
                }
                ,
                u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype,
                    u.__proto__ = Uint8Array,
                    "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                        value: null,
                        configurable: !0
                    })),
                u.alloc = function (e, t, n) {
                    return function (e, t, n, r) {
                        return l(t),
                            t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof r ? a(e, t).fill(n, r) : a(e, t).fill(n) : a(e, t)
                    }(null, e, t, n)
                }
                ,
                u.allocUnsafe = function (e) {
                    return f(null, e)
                }
                ,
                u.allocUnsafeSlow = function (e) {
                    return f(null, e)
                }
                ,
                u.isBuffer = function (e) {
                    return !(null == e || !e._isBuffer)
                }
                ,
                u.compare = function (e, t) {
                    if (!u.isBuffer(e) || !u.isBuffer(t))
                        throw new TypeError("Arguments must be Buffers");
                    if (e === t)
                        return 0;
                    for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
                        if (e[o] !== t[o]) {
                            n = e[o],
                                r = t[o];
                            break
                        }
                    return n < r ? -1 : r < n ? 1 : 0
                }
                ,
                u.isEncoding = function (e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }
                ,
                u.concat = function (e, t) {
                    if (!i(e))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length)
                        return u.alloc(0);
                    var n;
                    if (void 0 === t)
                        for (t = 0,
                            n = 0; n < e.length; ++n)
                            t += e[n].length;
                    var r = u.allocUnsafe(t)
                        , o = 0;
                    for (n = 0; n < e.length; ++n) {
                        var s = e[n];
                        if (!u.isBuffer(s))
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        s.copy(r, o),
                            o += s.length
                    }
                    return r
                }
                ,
                u.byteLength = d,
                u.prototype._isBuffer = !0,
                u.prototype.swap16 = function () {
                    var e = this.length;
                    if (e % 2 != 0)
                        throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2)
                        g(this, t, t + 1);
                    return this
                }
                ,
                u.prototype.swap32 = function () {
                    var e = this.length;
                    if (e % 4 != 0)
                        throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4)
                        g(this, t, t + 3),
                            g(this, t + 1, t + 2);
                    return this
                }
                ,
                u.prototype.swap64 = function () {
                    var e = this.length;
                    if (e % 8 != 0)
                        throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8)
                        g(this, t, t + 7),
                            g(this, t + 1, t + 6),
                            g(this, t + 2, t + 5),
                            g(this, t + 3, t + 4);
                    return this
                }
                ,
                u.prototype.toString = function () {
                    var e = 0 | this.length;
                    return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : function (e, t, n) {
                        var r = !1;
                        if ((void 0 === t || t < 0) && (t = 0),
                            t > this.length)
                            return "";
                        if ((void 0 === n || n > this.length) && (n = this.length),
                            n <= 0)
                            return "";
                        if ((n >>>= 0) <= (t >>>= 0))
                            return "";
                        for (e || (e = "utf8"); ;)
                            switch (e) {
                                case "hex":
                                    return R(this, t, n);
                                case "utf8":
                                case "utf-8":
                                    return I(this, t, n);
                                case "ascii":
                                    return C(this, t, n);
                                case "latin1":
                                case "binary":
                                    return x(this, t, n);
                                case "base64":
                                    return T(this, t, n);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return M(this, t, n);
                                default:
                                    if (r)
                                        throw new TypeError("Unknown encoding: " + e);
                                    e = (e + "").toLowerCase(),
                                        r = !0
                            }
                    }
                        .apply(this, arguments)
                }
                ,
                u.prototype.equals = function (e) {
                    if (!u.isBuffer(e))
                        throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === u.compare(this, e)
                }
                ,
                u.prototype.inspect = function () {
                    var e = ""
                        , n = t.INSPECT_MAX_BYTES;
                    return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
                        this.length > n && (e += " ... ")),
                        "<Buffer " + e + ">"
                }
                ,
                u.prototype.compare = function (e, t, n, r, o) {
                    if (!u.isBuffer(e))
                        throw new TypeError("Argument must be a Buffer");
                    if (void 0 === t && (t = 0),
                        void 0 === n && (n = e ? e.length : 0),
                        void 0 === r && (r = 0),
                        void 0 === o && (o = this.length),
                        t < 0 || n > e.length || r < 0 || o > this.length)
                        throw new RangeError("out of range index");
                    if (r >= o && t >= n)
                        return 0;
                    if (r >= o)
                        return -1;
                    if (t >= n)
                        return 1;
                    if (t >>>= 0,
                        n >>>= 0,
                        r >>>= 0,
                        o >>>= 0,
                        this === e)
                        return 0;
                    for (var i = o - r, s = n - t, a = Math.min(i, s), c = this.slice(r, o), l = e.slice(t, n), f = 0; f < a; ++f)
                        if (c[f] !== l[f]) {
                            i = c[f],
                                s = l[f];
                            break
                        }
                    return i < s ? -1 : s < i ? 1 : 0
                }
                ,
                u.prototype.includes = function (e, t, n) {
                    return -1 !== this.indexOf(e, t, n)
                }
                ,
                u.prototype.indexOf = function (e, t, n) {
                    return y(this, e, t, n, !0)
                }
                ,
                u.prototype.lastIndexOf = function (e, t, n) {
                    return y(this, e, t, n, !1)
                }
                ,
                u.prototype.write = function (e, t, n, r) {
                    if (void 0 === t)
                        r = "utf8",
                            n = this.length,
                            t = 0;
                    else if (void 0 === n && "string" == typeof t)
                        r = t,
                            n = this.length,
                            t = 0;
                    else {
                        if (!isFinite(t))
                            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t |= 0,
                            isFinite(n) ? (n |= 0,
                                void 0 === r && (r = "utf8")) : (r = n,
                                    n = void 0)
                    }
                    var o = this.length - t;
                    if ((void 0 === n || n > o) && (n = o),
                        e.length > 0 && (n < 0 || t < 0) || t > this.length)
                        throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    for (var i = !1; ;)
                        switch (r) {
                            case "hex":
                                return m(this, e, t, n);
                            case "utf8":
                            case "utf-8":
                                return b(this, e, t, n);
                            case "ascii":
                                return w(this, e, t, n);
                            case "latin1":
                            case "binary":
                                return E(this, e, t, n);
                            case "base64":
                                return S(this, e, t, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return _(this, e, t, n);
                            default:
                                if (i)
                                    throw new TypeError("Unknown encoding: " + r);
                                r = ("" + r).toLowerCase(),
                                    i = !0
                        }
                }
                ,
                u.prototype.toJSON = function () {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }
                ;
            var k = 4096;
            function C(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o)
                    r += String.fromCharCode(127 & e[o]);
                return r
            }
            function x(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o)
                    r += String.fromCharCode(e[o]);
                return r
            }
            function R(e, t, n) {
                var r = e.length;
                (!t || t < 0) && (t = 0),
                    (!n || n < 0 || n > r) && (n = r);
                for (var o = "", i = t; i < n; ++i)
                    o += j(e[i]);
                return o
            }
            function M(e, t, n) {
                for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2)
                    o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                return o
            }
            function A(e, t, n) {
                if (e % 1 != 0 || e < 0)
                    throw new RangeError("offset is not uint");
                if (e + t > n)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function U(e, t, n, r, o, i) {
                if (!u.isBuffer(e))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < i)
                    throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length)
                    throw new RangeError("Index out of range")
            }
            function P(e, t, n, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o)
                    e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
            }
            function B(e, t, n, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o)
                    e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255
            }
            function O(e, t, n, r, o, i) {
                if (n + r > e.length)
                    throw new RangeError("Index out of range");
                if (n < 0)
                    throw new RangeError("Index out of range")
            }
            function L(e, t, n, r, i) {
                return i || O(e, 0, n, 4),
                    o.write(e, t, n, r, 23, 4),
                    n + 4
            }
            function D(e, t, n, r, i) {
                return i || O(e, 0, n, 8),
                    o.write(e, t, n, r, 52, 8),
                    n + 8
            }
            u.prototype.slice = function (e, t) {
                var n, r = this.length;
                if (e = ~~e,
                    t = void 0 === t ? r : ~~t,
                    e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                    t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                    t < e && (t = e),
                    u.TYPED_ARRAY_SUPPORT)
                    (n = this.subarray(e, t)).__proto__ = u.prototype;
                else {
                    var o = t - e;
                    n = new u(o, void 0);
                    for (var i = 0; i < o; ++i)
                        n[i] = this[i + e]
                }
                return n
            }
                ,
                u.prototype.readUIntLE = function (e, t, n) {
                    e |= 0,
                        t |= 0,
                        n || A(e, t, this.length);
                    for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);)
                        r += this[e + i] * o;
                    return r
                }
                ,
                u.prototype.readUIntBE = function (e, t, n) {
                    e |= 0,
                        t |= 0,
                        n || A(e, t, this.length);
                    for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);)
                        r += this[e + --t] * o;
                    return r
                }
                ,
                u.prototype.readUInt8 = function (e, t) {
                    return t || A(e, 1, this.length),
                        this[e]
                }
                ,
                u.prototype.readUInt16LE = function (e, t) {
                    return t || A(e, 2, this.length),
                        this[e] | this[e + 1] << 8
                }
                ,
                u.prototype.readUInt16BE = function (e, t) {
                    return t || A(e, 2, this.length),
                        this[e] << 8 | this[e + 1]
                }
                ,
                u.prototype.readUInt32LE = function (e, t) {
                    return t || A(e, 4, this.length),
                        (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }
                ,
                u.prototype.readUInt32BE = function (e, t) {
                    return t || A(e, 4, this.length),
                        16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }
                ,
                u.prototype.readIntLE = function (e, t, n) {
                    e |= 0,
                        t |= 0,
                        n || A(e, t, this.length);
                    for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);)
                        r += this[e + i] * o;
                    return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)),
                        r
                }
                ,
                u.prototype.readIntBE = function (e, t, n) {
                    e |= 0,
                        t |= 0,
                        n || A(e, t, this.length);
                    for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);)
                        i += this[e + --r] * o;
                    return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)),
                        i
                }
                ,
                u.prototype.readInt8 = function (e, t) {
                    return t || A(e, 1, this.length),
                        128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }
                ,
                u.prototype.readInt16LE = function (e, t) {
                    t || A(e, 2, this.length);
                    var n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }
                ,
                u.prototype.readInt16BE = function (e, t) {
                    t || A(e, 2, this.length);
                    var n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }
                ,
                u.prototype.readInt32LE = function (e, t) {
                    return t || A(e, 4, this.length),
                        this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }
                ,
                u.prototype.readInt32BE = function (e, t) {
                    return t || A(e, 4, this.length),
                        this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }
                ,
                u.prototype.readFloatLE = function (e, t) {
                    return t || A(e, 4, this.length),
                        o.read(this, e, !0, 23, 4)
                }
                ,
                u.prototype.readFloatBE = function (e, t) {
                    return t || A(e, 4, this.length),
                        o.read(this, e, !1, 23, 4)
                }
                ,
                u.prototype.readDoubleLE = function (e, t) {
                    return t || A(e, 8, this.length),
                        o.read(this, e, !0, 52, 8)
                }
                ,
                u.prototype.readDoubleBE = function (e, t) {
                    return t || A(e, 8, this.length),
                        o.read(this, e, !1, 52, 8)
                }
                ,
                u.prototype.writeUIntLE = function (e, t, n, r) {
                    (e = +e,
                        t |= 0,
                        n |= 0,
                        r) || U(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = 1
                        , i = 0;
                    for (this[t] = 255 & e; ++i < n && (o *= 256);)
                        this[t + i] = e / o & 255;
                    return t + n
                }
                ,
                u.prototype.writeUIntBE = function (e, t, n, r) {
                    (e = +e,
                        t |= 0,
                        n |= 0,
                        r) || U(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = n - 1
                        , i = 1;
                    for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);)
                        this[t + o] = e / i & 255;
                    return t + n
                }
                ,
                u.prototype.writeUInt8 = function (e, t, n) {
                    return e = +e,
                        t |= 0,
                        n || U(this, e, t, 1, 255, 0),
                        u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                        this[t] = 255 & e,
                        t + 1
                }
                ,
                u.prototype.writeUInt16LE = function (e, t, n) {
                    return e = +e,
                        t |= 0,
                        n || U(this, e, t, 2, 65535, 0),
                        u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                            this[t + 1] = e >>> 8) : P(this, e, t, !0),
                        t + 2
                }
                ,
                u.prototype.writeUInt16BE = function (e, t, n) {
                    return e = +e,
                        t |= 0,
                        n || U(this, e, t, 2, 65535, 0),
                        u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                            this[t + 1] = 255 & e) : P(this, e, t, !1),
                        t + 2
                }
                ,
                u.prototype.writeUInt32LE = function (e, t, n) {
                    return e = +e,
                        t |= 0,
                        n || U(this, e, t, 4, 4294967295, 0),
                        u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
                            this[t + 2] = e >>> 16,
                            this[t + 1] = e >>> 8,
                            this[t] = 255 & e) : B(this, e, t, !0),
                        t + 4
                }
                ,
                u.prototype.writeUInt32BE = function (e, t, n) {
                    return e = +e,
                        t |= 0,
                        n || U(this, e, t, 4, 4294967295, 0),
                        u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                            this[t + 1] = e >>> 16,
                            this[t + 2] = e >>> 8,
                            this[t + 3] = 255 & e) : B(this, e, t, !1),
                        t + 4
                }
                ,
                u.prototype.writeIntLE = function (e, t, n, r) {
                    if (e = +e,
                        t |= 0,
                        !r) {
                        var o = Math.pow(2, 8 * n - 1);
                        U(this, e, t, n, o - 1, -o)
                    }
                    var i = 0
                        , s = 1
                        , a = 0;
                    for (this[t] = 255 & e; ++i < n && (s *= 256);)
                        e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1),
                            this[t + i] = (e / s >> 0) - a & 255;
                    return t + n
                }
                ,
                u.prototype.writeIntBE = function (e, t, n, r) {
                    if (e = +e,
                        t |= 0,
                        !r) {
                        var o = Math.pow(2, 8 * n - 1);
                        U(this, e, t, n, o - 1, -o)
                    }
                    var i = n - 1
                        , s = 1
                        , a = 0;
                    for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);)
                        e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1),
                            this[t + i] = (e / s >> 0) - a & 255;
                    return t + n
                }
                ,
                u.prototype.writeInt8 = function (e, t, n) {
                    return e = +e,
                        t |= 0,
                        n || U(this, e, t, 1, 127, -128),
                        u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                        e < 0 && (e = 255 + e + 1),
                        this[t] = 255 & e,
                        t + 1
                }
                ,
                u.prototype.writeInt16LE = function (e, t, n) {
                    return e = +e,
                        t |= 0,
                        n || U(this, e, t, 2, 32767, -32768),
                        u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                            this[t + 1] = e >>> 8) : P(this, e, t, !0),
                        t + 2
                }
                ,
                u.prototype.writeInt16BE = function (e, t, n) {
                    return e = +e,
                        t |= 0,
                        n || U(this, e, t, 2, 32767, -32768),
                        u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                            this[t + 1] = 255 & e) : P(this, e, t, !1),
                        t + 2
                }
                ,
                u.prototype.writeInt32LE = function (e, t, n) {
                    return e = +e,
                        t |= 0,
                        n || U(this, e, t, 4, 2147483647, -2147483648),
                        u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                            this[t + 1] = e >>> 8,
                            this[t + 2] = e >>> 16,
                            this[t + 3] = e >>> 24) : B(this, e, t, !0),
                        t + 4
                }
                ,
                u.prototype.writeInt32BE = function (e, t, n) {
                    return e = +e,
                        t |= 0,
                        n || U(this, e, t, 4, 2147483647, -2147483648),
                        e < 0 && (e = 4294967295 + e + 1),
                        u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                            this[t + 1] = e >>> 16,
                            this[t + 2] = e >>> 8,
                            this[t + 3] = 255 & e) : B(this, e, t, !1),
                        t + 4
                }
                ,
                u.prototype.writeFloatLE = function (e, t, n) {
                    return L(this, e, t, !0, n)
                }
                ,
                u.prototype.writeFloatBE = function (e, t, n) {
                    return L(this, e, t, !1, n)
                }
                ,
                u.prototype.writeDoubleLE = function (e, t, n) {
                    return D(this, e, t, !0, n)
                }
                ,
                u.prototype.writeDoubleBE = function (e, t, n) {
                    return D(this, e, t, !1, n)
                }
                ,
                u.prototype.copy = function (e, t, n, r) {
                    if (n || (n = 0),
                        r || 0 === r || (r = this.length),
                        t >= e.length && (t = e.length),
                        t || (t = 0),
                        r > 0 && r < n && (r = n),
                        r === n)
                        return 0;
                    if (0 === e.length || 0 === this.length)
                        return 0;
                    if (t < 0)
                        throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length)
                        throw new RangeError("sourceStart out of bounds");
                    if (r < 0)
                        throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length),
                        e.length - t < r - n && (r = e.length - t + n);
                    var o, i = r - n;
                    if (this === e && n < t && t < r)
                        for (o = i - 1; o >= 0; --o)
                            e[o + t] = this[o + n];
                    else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                        for (o = 0; o < i; ++o)
                            e[o + t] = this[o + n];
                    else
                        Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
                    return i
                }
                ,
                u.prototype.fill = function (e, t, n, r) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (r = t,
                            t = 0,
                            n = this.length) : "string" == typeof n && (r = n,
                                n = this.length),
                            1 === e.length) {
                            var o = e.charCodeAt(0);
                            o < 256 && (e = o)
                        }
                        if (void 0 !== r && "string" != typeof r)
                            throw new TypeError("encoding must be a string");
                        if ("string" == typeof r && !u.isEncoding(r))
                            throw new TypeError("Unknown encoding: " + r)
                    } else
                        "number" == typeof e && (e &= 255);
                    if (t < 0 || this.length < t || this.length < n)
                        throw new RangeError("Out of range index");
                    if (n <= t)
                        return this;
                    var i;
                    if (t >>>= 0,
                        n = void 0 === n ? this.length : n >>> 0,
                        e || (e = 0),
                        "number" == typeof e)
                        for (i = t; i < n; ++i)
                            this[i] = e;
                    else {
                        var s = u.isBuffer(e) ? e : F(new u(e, r).toString())
                            , a = s.length;
                        for (i = 0; i < n - t; ++i)
                            this[i + t] = s[i % a]
                    }
                    return this
                }
                ;
            var N = /[^+\/0-9A-Za-z-_]/g;
            function j(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }
            function F(e, t) {
                var n;
                t = t || 1 / 0;
                for (var r = e.length, o = null, i = [], s = 0; s < r; ++s) {
                    if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                        if (!o) {
                            if (n > 56319) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === r) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && i.push(239, 191, 189),
                                o = n;
                            continue
                        }
                        n = 65536 + (o - 55296 << 10 | n - 56320)
                    } else
                        o && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null,
                        n < 128) {
                        if ((t -= 1) < 0)
                            break;
                        i.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0)
                            break;
                        i.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0)
                            break;
                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112))
                            throw new Error("Invalid code point");
                        if ((t -= 4) < 0)
                            break;
                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return i
            }
            function H(e) {
                return r.toByteArray(function (e) {
                    if ((e = function (e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(N, "")).length < 2)
                        return "";
                    for (; e.length % 4 != 0;)
                        e += "=";
                    return e
                }(e))
            }
            function q(e, t, n, r) {
                for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o)
                    t[o + n] = e[o];
                return o
            }
        }
        ).call(this, n(1))
    }
    , function (e, t, n) {
        "use strict";
        var r = n(3).Buffer
            , o = n(49)
            , i = n(10)
            , s = n(40)
            , a = n(39)
            , u = n(38);
        e.exports = function (e) {
            var t = []
                , n = [];
            return {
                encode: u(t, (e = e || {
                    forceFloat64: !1,
                    compatibilityMode: !1,
                    disableTimestampEncoding: !1
                }).forceFloat64, e.compatibilityMode, e.disableTimestampEncoding),
                decode: a(n),
                register: function (e, t, n, s) {
                    return o(t, "must have a constructor"),
                        o(n, "must have an encode function"),
                        o(e >= 0, "must have a non-negative type"),
                        o(s, "must have a decode function"),
                        this.registerEncoder(function (e) {
                            return e instanceof t
                        }, function (t) {
                            var o = i()
                                , s = r.allocUnsafe(1);
                            return s.writeInt8(e, 0),
                                o.append(s),
                                o.append(n(t)),
                                o
                        }),
                        this.registerDecoder(e, s),
                        this
                },
                registerEncoder: function (e, n) {
                    return o(e, "must have an encode function"),
                        o(n, "must have an encode function"),
                        t.push({
                            check: e,
                            encode: n
                        }),
                        this
                },
                registerDecoder: function (e, t) {
                    return o(e >= 0, "must have a non-negative type"),
                        o(t, "must have a decode function"),
                        n.push({
                            type: e,
                            decode: t
                        }),
                        this
                },
                encoder: s.encoder,
                decoder: s.decoder,
                buffer: !0,
                type: "msgpack5",
                IncompleteBufferError: a.IncompleteBufferError
            }
        }
    }
    , function (e, t, n) {
        (function (e, r) {
            var o = /%[sdj%]/g;
            t.format = function (e) {
                if (!v(e)) {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t.push(a(arguments[n]));
                    return t.join(" ")
                }
                n = 1;
                for (var r = arguments, i = r.length, s = String(e).replace(o, function (e) {
                    if ("%%" === e)
                        return "%";
                    if (n >= i)
                        return e;
                    switch (e) {
                        case "%s":
                            return String(r[n++]);
                        case "%d":
                            return Number(r[n++]);
                        case "%j":
                            try {
                                return JSON.stringify(r[n++])
                            } catch (e) {
                                return "[Circular]"
                            }
                        default:
                            return e
                    }
                }), u = r[n]; n < i; u = r[++n])
                    g(u) || !w(u) ? s += " " + u : s += " " + a(u);
                return s
            }
                ,
                t.deprecate = function (n, o) {
                    if (m(e.process))
                        return function () {
                            return t.deprecate(n, o).apply(this, arguments)
                        }
                            ;
                    if (!0 === r.noDeprecation)
                        return n;
                    var i = !1;
                    return function () {
                        if (!i) {
                            if (r.throwDeprecation)
                                throw new Error(o);
                            r.traceDeprecation ? console.trace(o) : console.error(o),
                                i = !0
                        }
                        return n.apply(this, arguments)
                    }
                }
                ;
            var i, s = {};
            function a(e, n) {
                var r = {
                    seen: [],
                    stylize: c
                };
                return arguments.length >= 3 && (r.depth = arguments[2]),
                    arguments.length >= 4 && (r.colors = arguments[3]),
                    d(n) ? r.showHidden = n : n && t._extend(r, n),
                    m(r.showHidden) && (r.showHidden = !1),
                    m(r.depth) && (r.depth = 2),
                    m(r.colors) && (r.colors = !1),
                    m(r.customInspect) && (r.customInspect = !0),
                    r.colors && (r.stylize = u),
                    l(r, e, r.depth)
            }
            function u(e, t) {
                var n = a.styles[t];
                return n ? "[" + a.colors[n][0] + "m" + e + "[" + a.colors[n][1] + "m" : e
            }
            function c(e, t) {
                return e
            }
            function l(e, n, r) {
                if (e.customInspect && n && _(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                    var o = n.inspect(r, e);
                    return v(o) || (o = l(e, o, r)),
                        o
                }
                var i = function (e, t) {
                    if (m(t))
                        return e.stylize("undefined", "undefined");
                    if (v(t)) {
                        var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(n, "string")
                    }
                    if (y(t))
                        return e.stylize("" + t, "number");
                    if (d(t))
                        return e.stylize("" + t, "boolean");
                    if (g(t))
                        return e.stylize("null", "null")
                }(e, n);
                if (i)
                    return i;
                var s = Object.keys(n)
                    , a = function (e) {
                        var t = {};
                        return e.forEach(function (e, n) {
                            t[e] = !0
                        }),
                            t
                    }(s);
                if (e.showHidden && (s = Object.getOwnPropertyNames(n)),
                    S(n) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))
                    return f(n);
                if (0 === s.length) {
                    if (_(n)) {
                        var u = n.name ? ": " + n.name : "";
                        return e.stylize("[Function" + u + "]", "special")
                    }
                    if (b(n))
                        return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                    if (E(n))
                        return e.stylize(Date.prototype.toString.call(n), "date");
                    if (S(n))
                        return f(n)
                }
                var c, w = "", T = !1, I = ["{", "}"];
                (p(n) && (T = !0,
                    I = ["[", "]"]),
                    _(n)) && (w = " [Function" + (n.name ? ": " + n.name : "") + "]");
                return b(n) && (w = " " + RegExp.prototype.toString.call(n)),
                    E(n) && (w = " " + Date.prototype.toUTCString.call(n)),
                    S(n) && (w = " " + f(n)),
                    0 !== s.length || T && 0 != n.length ? r < 0 ? b(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n),
                        c = T ? function (e, t, n, r, o) {
                            for (var i = [], s = 0, a = t.length; s < a; ++s)
                                C(t, String(s)) ? i.push(h(e, t, n, r, String(s), !0)) : i.push("");
                            return o.forEach(function (o) {
                                o.match(/^\d+$/) || i.push(h(e, t, n, r, o, !0))
                            }),
                                i
                        }(e, n, r, a, s) : s.map(function (t) {
                            return h(e, n, r, a, t, T)
                        }),
                        e.seen.pop(),
                        function (e, t, n) {
                            if (e.reduce(function (e, t) {
                                return 0,
                                    t.indexOf("\n") >= 0 && 0,
                                    e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                            }, 0) > 60)
                                return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
                            return n[0] + t + " " + e.join(", ") + " " + n[1]
                        }(c, w, I)) : I[0] + w + I[1]
            }
            function f(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }
            function h(e, t, n, r, o, i) {
                var s, a, u;
                if ((u = Object.getOwnPropertyDescriptor(t, o) || {
                    value: t[o]
                }).get ? a = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (a = e.stylize("[Setter]", "special")),
                    C(r, o) || (s = "[" + o + "]"),
                    a || (e.seen.indexOf(u.value) < 0 ? (a = g(n) ? l(e, u.value, null) : l(e, u.value, n - 1)).indexOf("\n") > -1 && (a = i ? a.split("\n").map(function (e) {
                        return "  " + e
                    }).join("\n").substr(2) : "\n" + a.split("\n").map(function (e) {
                        return "   " + e
                    }).join("\n")) : a = e.stylize("[Circular]", "special")),
                    m(s)) {
                    if (i && o.match(/^\d+$/))
                        return a;
                    (s = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2),
                        s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"),
                            s = e.stylize(s, "string"))
                }
                return s + ": " + a
            }
            function p(e) {
                return Array.isArray(e)
            }
            function d(e) {
                return "boolean" == typeof e
            }
            function g(e) {
                return null === e
            }
            function y(e) {
                return "number" == typeof e
            }
            function v(e) {
                return "string" == typeof e
            }
            function m(e) {
                return void 0 === e
            }
            function b(e) {
                return w(e) && "[object RegExp]" === T(e)
            }
            function w(e) {
                return "object" == typeof e && null !== e
            }
            function E(e) {
                return w(e) && "[object Date]" === T(e)
            }
            function S(e) {
                return w(e) && ("[object Error]" === T(e) || e instanceof Error)
            }
            function _(e) {
                return "function" == typeof e
            }
            function T(e) {
                return Object.prototype.toString.call(e)
            }
            function I(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }
            t.debuglog = function (e) {
                if (m(i) && (i = r.env.NODE_DEBUG || ""),
                    e = e.toUpperCase(),
                    !s[e])
                    if (new RegExp("\\b" + e + "\\b", "i").test(i)) {
                        var n = r.pid;
                        s[e] = function () {
                            var r = t.format.apply(t, arguments);
                            console.error("%s %d: %s", e, n, r)
                        }
                    } else
                        s[e] = function () { }
                            ;
                return s[e]
            }
                ,
                t.inspect = a,
                a.colors = {
                    bold: [1, 22],
                    italic: [3, 23],
                    underline: [4, 24],
                    inverse: [7, 27],
                    white: [37, 39],
                    grey: [90, 39],
                    black: [30, 39],
                    blue: [34, 39],
                    cyan: [36, 39],
                    green: [32, 39],
                    magenta: [35, 39],
                    red: [31, 39],
                    yellow: [33, 39]
                },
                a.styles = {
                    special: "cyan",
                    number: "yellow",
                    boolean: "yellow",
                    undefined: "grey",
                    null: "bold",
                    string: "green",
                    date: "magenta",
                    regexp: "red"
                },
                t.isArray = p,
                t.isBoolean = d,
                t.isNull = g,
                t.isNullOrUndefined = function (e) {
                    return null == e
                }
                ,
                t.isNumber = y,
                t.isString = v,
                t.isSymbol = function (e) {
                    return "symbol" == typeof e
                }
                ,
                t.isUndefined = m,
                t.isRegExp = b,
                t.isObject = w,
                t.isDate = E,
                t.isError = S,
                t.isFunction = _,
                t.isPrimitive = function (e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
                }
                ,
                t.isBuffer = n(48);
            var k = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            function C(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            t.log = function () {
                var e, n;
                console.log("%s - %s", (e = new Date,
                    n = [I(e.getHours()), I(e.getMinutes()), I(e.getSeconds())].join(":"),
                    [e.getDate(), k[e.getMonth()], n].join(" ")), t.format.apply(t, arguments))
            }
                ,
                t.inherits = n(2),
                t._extend = function (e, t) {
                    if (!t || !w(t))
                        return e;
                    for (var n = Object.keys(t), r = n.length; r--;)
                        e[n[r]] = t[n[r]];
                    return e
                }
        }
        ).call(this, n(1), n(6))
    }
    , function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function s(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function a(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function u(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }
                    ).then(s, a)
                }
                u((r = r.apply(e, t || [])).next())
            }
            )
        }
            , o = this && this.__generator || function (e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }
                    ),
                    i;
                function a(i) {
                    return function (a) {
                        return function (i) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; s;)
                                try {
                                    if (n = 1,
                                        r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                        return o;
                                    switch (r = 0,
                                    o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++ ,
                                                {
                                                    value: i[1],
                                                    done: !1
                                                };
                                        case 5:
                                            s.label++ ,
                                                r = i[1],
                                                i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(),
                                                s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1],
                                                    o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2],
                                                    s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(),
                                                s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e],
                                        r = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            }
            ;
        function i(e) {
            return new Promise(function (t, n) {
                e.onload = t,
                    e.onerror = n,
                    document.head.appendChild(e)
            }
            )
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.fetchBootConfigAsync = function () {
                return r(this, void 0, void 0, function () {
                    return o(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, fetch("/_framework/blazor.boot.json", {
                                    method: "Get",
                                    credentials: "include"
                                })];
                            case 1:
                                return [2, e.sent().json()]
                        }
                    })
                })
            }
            ,
            t.loadEmbeddedResourcesAsync = function (e) {
                var t = e.cssReferences.map(function (e) {
                    var t = document.createElement("link");
                    return t.rel = "stylesheet",
                        t.href = e,
                        i(t)
                })
                    , n = e.jsReferences.map(function (e) {
                        var t = document.createElement("script");
                        return t.src = e,
                            i(t)
                    });
                return Promise.all(t.concat(n))
            }
    }
    , , function (e, t, n) {
        "use strict";
        function r(e) {
            return "_bl_" + e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.applyCaptureIdToElement = function (e, t) {
                e.setAttribute(r(t), "")
            }
            ;
        DotNet.attachReviver(function (e, t) {
            return t && "object" == typeof t && t.hasOwnProperty("_blazorElementRef") && "string" == typeof t._blazorElementRef ? (n = t._blazorElementRef,
                o = "[" + r(n) + "]",
                document.querySelector(o)) : t;
            var n, o
        })
    }
    , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = u("_blazorLogicalChildren")
            , o = u("_blazorLogicalParent");
        function i(e, t, n) {
            var i = e;
            if (e instanceof Comment && (a(i) && a(i).length > 0))
                throw new Error("Not implemented: inserting non-empty logical container");
            if (s(i))
                throw new Error("Not implemented: moving existing logical children");
            var u = a(t);
            if (n < u.length) {
                var c = u[n];
                c.parentNode.insertBefore(e, c),
                    u.splice(n, 0, i)
            } else
                !function e(t, n) {
                    if (n instanceof Element)
                        n.appendChild(t);
                    else {
                        if (!(n instanceof Comment))
                            throw new Error("Cannot append node because the parent is not a valid logical element. Parent: " + n);
                        var r = (i = a(s(o = n)),
                            u = Array.prototype.indexOf.call(i, o),
                            i[u + 1] || null);
                        r ? r.parentNode.insertBefore(t, r) : e(t, s(n))
                    }
                    var o, i, u
                }(e, t),
                    u.push(i);
            i[o] = t,
                r in i || (i[r] = [])
        }
        function s(e) {
            return e[o] || null
        }
        function a(e) {
            return e[r]
        }
        function u(e) {
            return "function" == typeof Symbol ? Symbol() : e
        }
        t.toLogicalElement = function (e, t) {
            if (e.childNodes.length > 0 && !t)
                throw new Error("New logical elements must start empty, or allowExistingContents must be true");
            return e[r] = [],
                e
        }
            ,
            t.createAndInsertLogicalContainer = function (e, t) {
                var n = document.createComment("!");
                return i(n, e, t),
                    n
            }
            ,
            t.insertLogicalChild = i,
            t.removeLogicalChild = function e(t, n) {
                var r = a(t).splice(n, 1)[0];
                if (r instanceof Comment)
                    for (var o = a(r); o.length > 0;)
                        e(r, 0);
                var i = r;
                i.parentNode.removeChild(i)
            }
            ,
            t.getLogicalParent = s,
            t.getLogicalChild = function (e, t) {
                return a(e)[t]
            }
            ,
            t.isSvgElement = function (e) {
                return "http://www.w3.org/2000/svg" === function (e) {
                    if (e instanceof Element)
                        return e;
                    if (e instanceof Comment)
                        return e.parentNode;
                    throw new Error("Not a valid logical element")
                }(e).namespaceURI
            }
    }
    , function (e, t, n) {
        "use strict";
        var r = this && this.__assign || Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function () {
            function e(e, t) {
                this.type = e,
                    this.data = t
            }
            return e.fromDOMEvent = function (t) {
                var n = t.target;
                switch (t.type) {
                    case "input":
                    case "change":
                        var o = function (e) {
                            return e && "INPUT" === e.tagName && "checkbox" === e.getAttribute("type")
                        }(n) ? !!n.checked : n.value;
                        return new e("change", {
                            type: t.type,
                            value: o
                        });
                    case "copy":
                    case "cut":
                    case "paste":
                        return new e("clipboard", {
                            type: t.type
                        });
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        return new e("drag", function (e) {
                            return {
                                type: e.type,
                                detail: e.detail,
                                dataTransfer: e.dataTransfer,
                                screenX: e.screenX,
                                screenY: e.screenY,
                                clientX: e.clientX,
                                clientY: e.clientY,
                                button: e.button,
                                buttons: e.buttons,
                                ctrlKey: e.ctrlKey,
                                shiftKey: e.shiftKey,
                                altKey: e.altKey,
                                metaKey: e.metaKey
                            }
                        }(t));
                    case "focus":
                    case "blur":
                    case "focusin":
                    case "focusout":
                        return new e("focus", {
                            type: t.type
                        });
                    case "keydown":
                    case "keyup":
                    case "keypress":
                        return new e("keyboard", function (e) {
                            return {
                                type: e.type,
                                key: e.key,
                                code: e.code,
                                location: e.location,
                                repeat: e.repeat,
                                ctrlKey: e.ctrlKey,
                                shiftKey: e.shiftKey,
                                altKey: e.altKey,
                                metaKey: e.metaKey
                            }
                        }(t));
                    case "contextmenu":
                    case "click":
                    case "mouseover":
                    case "mouseout":
                    case "mousemove":
                    case "mousedown":
                    case "mouseup":
                    case "dblclick":
                        return new e("mouse", i(t));
                    case "error":
                        return new e("error", function (e) {
                            return {
                                type: e.type,
                                message: e.message,
                                filename: e.filename,
                                lineno: e.lineno,
                                colno: e.colno
                            }
                        }(t));
                    case "loadstart":
                    case "timeout":
                    case "abort":
                    case "load":
                    case "loadend":
                    case "progress":
                        return new e("progress", function (e) {
                            return {
                                type: e.type,
                                lengthComputable: e.lengthComputable,
                                loaded: e.loaded,
                                total: e.total
                            }
                        }(t));
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchenter":
                    case "touchleave":
                    case "touchstart":
                        return new e("touch", function (e) {
                            function t(e) {
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    t.push({
                                        identifier: r.identifier,
                                        clientX: r.clientX,
                                        clientY: r.clientY,
                                        screenX: r.screenX,
                                        screenY: r.screenY,
                                        pageX: r.pageX,
                                        pageY: r.pageY
                                    })
                                }
                                return t
                            }
                            return {
                                type: e.type,
                                detail: e.detail,
                                touches: t(e.touches),
                                targetTouches: t(e.targetTouches),
                                changedTouches: t(e.changedTouches),
                                ctrlKey: e.ctrlKey,
                                shiftKey: e.shiftKey,
                                altKey: e.altKey,
                                metaKey: e.metaKey
                            }
                        }(t));
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointerenter":
                    case "pointerleave":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        return new e("pointer", function (e) {
                            return r({}, i(e), {
                                pointerId: e.pointerId,
                                width: e.width,
                                height: e.height,
                                pressure: e.pressure,
                                tiltX: e.tiltX,
                                tiltY: e.tiltY,
                                pointerType: e.pointerType,
                                isPrimary: e.isPrimary
                            })
                        }(t));
                    case "wheel":
                    case "mousewheel":
                        return new e("wheel", function (e) {
                            return r({}, i(e), {
                                deltaX: e.deltaX,
                                deltaY: e.deltaY,
                                deltaZ: e.deltaZ,
                                deltaMode: e.deltaMode
                            })
                        }(t));
                    default:
                        return new e("unknown", {
                            type: t.type
                        })
                }
            }
                ,
                e
        }();
        function i(e) {
            return {
                type: e.type,
                detail: e.detail,
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY,
                button: e.button,
                buttons: e.buttons,
                ctrlKey: e.ctrlKey,
                shiftKey: e.shiftKey,
                altKey: e.altKey,
                metaKey: e.metaKey
            }
        }
        t.EventForDotNet = o
    }
    , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = n(19), i = (r = {},
            ["abort", "blur", "change", "error", "focus", "load", "loadend", "loadstart", "mouseenter", "mouseleave", "progress", "reset", "scroll", "submit", "unload", "DOMNodeInsertedIntoDocument", "DOMNodeRemovedFromDocument"].forEach(function (e) {
                r[e] = !0
            }),
            r), s = function () {
                function e(t) {
                    this.onEvent = t;
                    var n = ++e.nextEventDelegatorId;
                    this.eventsCollectionKey = "_blazorEvents_" + n,
                        this.eventInfoStore = new a(this.onGlobalEvent.bind(this))
                }
                return e.prototype.setListener = function (e, t, n) {
                    var r = e[this.eventsCollectionKey];
                    if (r || (r = e[this.eventsCollectionKey] = {}),
                        r.hasOwnProperty(t)) {
                        var o = r[t];
                        this.eventInfoStore.update(o.eventHandlerId, n)
                    } else {
                        var i = {
                            element: e,
                            eventName: t,
                            eventHandlerId: n
                        };
                        this.eventInfoStore.add(i),
                            r[t] = i
                    }
                }
                    ,
                    e.prototype.removeListener = function (e) {
                        var t = this.eventInfoStore.remove(e);
                        if (t) {
                            var n = t.element;
                            if (n.hasOwnProperty(this.eventsCollectionKey)) {
                                var r = n[this.eventsCollectionKey];
                                delete r[t.eventName],
                                    0 === Object.getOwnPropertyNames(r).length && delete n[this.eventsCollectionKey]
                            }
                        }
                    }
                    ,
                    e.prototype.onGlobalEvent = function (e) {
                        if (e.target instanceof Element)
                            for (var t = e.target, n = null, r = i.hasOwnProperty(e.type); t;) {
                                if (t.hasOwnProperty(this.eventsCollectionKey)) {
                                    var s = t[this.eventsCollectionKey];
                                    if (s.hasOwnProperty(e.type)) {
                                        n || (n = o.EventForDotNet.fromDOMEvent(e));
                                        var a = s[e.type];
                                        this.onEvent(e, a.eventHandlerId, n)
                                    }
                                }
                                t = r ? null : t.parentElement
                            }
                    }
                    ,
                    e.nextEventDelegatorId = 0,
                    e
            }();
        t.EventDelegator = s;
        var a = function () {
            function e(e) {
                this.globalListener = e,
                    this.infosByEventHandlerId = {},
                    this.countByEventName = {}
            }
            return e.prototype.add = function (e) {
                if (this.infosByEventHandlerId[e.eventHandlerId])
                    throw new Error("Event " + e.eventHandlerId + " is already tracked");
                this.infosByEventHandlerId[e.eventHandlerId] = e;
                var t = e.eventName;
                if (this.countByEventName.hasOwnProperty(t))
                    this.countByEventName[t]++;
                else {
                    this.countByEventName[t] = 1;
                    var n = i.hasOwnProperty(t);
                    document.addEventListener(t, this.globalListener, n)
                }
            }
                ,
                e.prototype.update = function (e, t) {
                    if (this.infosByEventHandlerId.hasOwnProperty(t))
                        throw new Error("Event " + t + " is already tracked");
                    var n = this.infosByEventHandlerId[e];
                    delete this.infosByEventHandlerId[e],
                        n.eventHandlerId = t,
                        this.infosByEventHandlerId[t] = n
                }
                ,
                e.prototype.remove = function (e) {
                    var t = this.infosByEventHandlerId[e];
                    if (t) {
                        delete this.infosByEventHandlerId[e];
                        var n = t.eventName;
                        0 == --this.countByEventName[n] && (delete this.countByEventName[n],
                            document.removeEventListener(n, this.globalListener))
                    }
                    return t
                }
                ,
                e
        }()
    }
    , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            function (e) {
                e[e.prependFrame = 1] = "prependFrame",
                    e[e.removeFrame = 2] = "removeFrame",
                    e[e.setAttribute = 3] = "setAttribute",
                    e[e.removeAttribute = 4] = "removeAttribute",
                    e[e.updateText = 5] = "updateText",
                    e[e.stepIn = 6] = "stepIn",
                    e[e.stepOut = 7] = "stepOut",
                    e[e.updateMarkup = 8] = "updateMarkup"
            }(t.EditType || (t.EditType = {})),
            function (e) {
                e[e.element = 1] = "element",
                    e[e.text = 2] = "text",
                    e[e.attribute = 3] = "attribute",
                    e[e.component = 4] = "component",
                    e[e.region = 5] = "region",
                    e[e.elementReferenceCapture = 6] = "elementReferenceCapture",
                    e[e.markup = 8] = "markup"
            }(t.FrameType || (t.FrameType = {}))
    }
    , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(21)
            , o = n(20)
            , i = n(18)
            , s = n(17)
            , a = document.createElement("template")
            , u = document.createElementNS("http://www.w3.org/2000/svg", "g")
            , c = {
                submit: !0
            }
            , l = {}
            , f = function () {
                function e(e) {
                    var t = this;
                    this.browserRendererId = e,
                        this.childComponentLocations = {},
                        this.eventDelegator = new o.EventDelegator(function (e, n, r) {
                            !function (e, t, n, r) {
                                c[e.type] && e.preventDefault();
                                var o = {
                                    browserRendererId: t,
                                    eventHandlerId: n,
                                    eventArgsType: r.type
                                };
                                DotNet.invokeMethodAsync("Microsoft.AspNetCore.Components.Browser", "DispatchEvent", o, JSON.stringify(r.data))
                            }(e, t.browserRendererId, n, r)
                        }
                        )
                }
                return e.prototype.attachRootComponentToElement = function (e, t) {
                    this.attachComponentToElement(e, i.toLogicalElement(t, !0)),
                        l[e] = t
                }
                    ,
                    e.prototype.updateComponent = function (e, t, n, r) {
                        var o = this.childComponentLocations[t];
                        //if (!o)
                        //    throw new Error("No element is currently associated with component " + t);
                        if (o) {
                            var i = l[t];
                            i && (delete l[t],
                                function (e) {
                                    var t;
                                    for (; t = e.firstChild;)
                                        e.removeChild(t)
                                }(i)),
                                this.applyEdits(e, o, 0, n, r)
                        }
                    }
                    ,
                    e.prototype.disposeComponent = function (e) {
                        delete this.childComponentLocations[e]
                    }
                    ,
                    e.prototype.disposeEventHandler = function (e) {
                        this.eventDelegator.removeListener(e)
                    }
                    ,
                    e.prototype.attachComponentToElement = function (e, t) {
                        this.childComponentLocations[e] = t
                    }
                    ,
                    e.prototype.applyEdits = function (e, t, n, o, s) {
                        for (var a = 0, u = n, c = e.arraySegmentReader, l = e.editReader, f = e.frameReader, h = c.values(o), p = c.offset(o), d = p + c.count(o), g = p; g < d; g++) {
                            var y = e.diffReader.editsEntry(h, g)
                                , v = l.editType(y);
                            switch (v) {
                                case r.EditType.prependFrame:
                                    var m = l.newTreeIndex(y)
                                        , b = e.referenceFramesEntry(s, m)
                                        , w = l.siblingIndex(y);
                                    this.insertFrame(e, t, u + w, s, b, m);
                                    break;
                                case r.EditType.removeFrame:
                                    w = l.siblingIndex(y);
                                    i.removeLogicalChild(t, u + w);
                                    break;
                                case r.EditType.setAttribute:
                                    m = l.newTreeIndex(y),
                                        b = e.referenceFramesEntry(s, m),
                                        w = l.siblingIndex(y);
                                    if (!((E = i.getLogicalChild(t, u + w)) instanceof Element))
                                        throw new Error("Cannot set attribute on non-element child");
                                    this.applyAttribute(e, E, b);
                                    break;
                                case r.EditType.removeAttribute:
                                    var E;
                                    w = l.siblingIndex(y);
                                    if (!((E = i.getLogicalChild(t, u + w)) instanceof HTMLElement))
                                        throw new Error("Cannot remove attribute from non-element child");
                                    var S = l.removedAttributeName(y);
                                    this.tryApplySpecialProperty(e, E, S, null) || E.removeAttribute(S);
                                    break;
                                case r.EditType.updateText:
                                    m = l.newTreeIndex(y),
                                        b = e.referenceFramesEntry(s, m),
                                        w = l.siblingIndex(y);
                                    var _ = i.getLogicalChild(t, u + w);
                                    if (!(_ instanceof Text))
                                        throw new Error("Cannot set text content on non-text child");
                                    _.textContent = f.textContent(b);
                                    break;
                                case r.EditType.updateMarkup:
                                    m = l.newTreeIndex(y),
                                        b = e.referenceFramesEntry(s, m),
                                        w = l.siblingIndex(y);
                                    i.removeLogicalChild(t, u + w),
                                        this.insertMarkup(e, t, u + w, b);
                                    break;
                                case r.EditType.stepIn:
                                    w = l.siblingIndex(y);
                                    t = i.getLogicalChild(t, u + w),
                                        a++ ,
                                        u = 0;
                                    break;
                                case r.EditType.stepOut:
                                    t = i.getLogicalParent(t),
                                        u = 0 === --a ? n : 0;
                                    break;
                                default:
                                    throw new Error("Unknown edit type: " + v)
                            }
                        }
                    }
                    ,
                    e.prototype.insertFrame = function (e, t, n, o, i, a) {
                        var u = e.frameReader
                            , c = u.frameType(i);
                        switch (c) {
                            case r.FrameType.element:
                                return this.insertElement(e, t, n, o, i, a),
                                    1;
                            case r.FrameType.text:
                                return this.insertText(e, t, n, i),
                                    1;
                            case r.FrameType.attribute:
                                throw new Error("Attribute frames should only be present as leading children of element frames.");
                            case r.FrameType.component:
                                return this.insertComponent(e, t, n, i),
                                    1;
                            case r.FrameType.region:
                                return this.insertFrameRange(e, t, n, o, a + 1, a + u.subtreeLength(i));
                            case r.FrameType.elementReferenceCapture:
                                if (t instanceof Element)
                                    return s.applyCaptureIdToElement(t, u.elementReferenceCaptureId(i)),
                                        0;
                                throw new Error("Reference capture frames can only be children of element frames.");
                            case r.FrameType.markup:
                                return this.insertMarkup(e, t, n, i),
                                    1;
                            default:
                                throw new Error("Unknown frame type: " + c)
                        }
                    }
                    ,
                    e.prototype.insertElement = function (e, t, n, o, s, a) {
                        var u = e.frameReader
                            , c = u.elementName(s)
                            , l = "svg" === c || i.isSvgElement(t) ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c)
                            , f = i.toLogicalElement(l);
                        i.insertLogicalChild(l, t, n);
                        for (var h = a + u.subtreeLength(s), p = a + 1; p < h; p++) {
                            var d = e.referenceFramesEntry(o, p);
                            if (u.frameType(d) !== r.FrameType.attribute) {
                                this.insertFrameRange(e, f, 0, o, p, h);
                                break
                            }
                            this.applyAttribute(e, l, d)
                        }
                    }
                    ,
                    e.prototype.insertComponent = function (e, t, n, r) {
                        var o = i.createAndInsertLogicalContainer(t, n)
                            , s = e.frameReader.componentId(r);
                        this.attachComponentToElement(s, o)
                    }
                    ,
                    e.prototype.insertText = function (e, t, n, r) {
                        var o = e.frameReader.textContent(r)
                            , s = document.createTextNode(o);
                        i.insertLogicalChild(s, t, n)
                    }
                    ,
                    e.prototype.insertMarkup = function (e, t, n, r) {
                        for (var o, s = i.createAndInsertLogicalContainer(t, n), c = e.frameReader.markupContent(r), l = (o = c,
                            i.isSvgElement(t) ? (u.innerHTML = o || " ",
                                u) : (a.innerHTML = o || " ",
                                    a.content)), f = 0; l.firstChild;)
                            i.insertLogicalChild(l.firstChild, s, f++)
                    }
                    ,
                    e.prototype.applyAttribute = function (e, t, n) {
                        var r = e.frameReader
                            , o = r.attributeName(n)
                            , i = (this.browserRendererId,
                                r.attributeEventHandlerId(n));
                        if (i) {
                            var s = o.substring(0, 2)
                                , a = o.substring(2);
                            if ("on" !== s || !a)
                                throw new Error("Attribute has nonzero event handler ID, but attribute name '" + o + "' does not start with 'on'.");
                            this.eventDelegator.setListener(t, a, i)
                        } else
                            this.tryApplySpecialProperty(e, t, o, n) || t.setAttribute(o, r.attributeValue(n))
                    }
                    ,
                    e.prototype.tryApplySpecialProperty = function (e, t, n, r) {
                        switch (n) {
                            case "value":
                                return this.tryApplyValueProperty(e, t, r);
                            case "checked":
                                return this.tryApplyCheckedProperty(e, t, r);
                            default:
                                return !1
                        }
                    }
                    ,
                    e.prototype.tryApplyValueProperty = function (e, t, n) {
                        var r = e.frameReader;
                        switch (t.tagName) {
                            case "INPUT":
                            case "SELECT":
                            case "TEXTAREA":
                                var o = n ? r.attributeValue(n) : null;
                                return t.value = o,
                                    "SELECT" === t.tagName && (t._blazorSelectValue = o),
                                    !0;
                            case "OPTION":
                                (o = n ? r.attributeValue(n) : null) ? t.setAttribute("value", o) : t.removeAttribute("value");
                                var i = t.parentElement;
                                return i && "_blazorSelectValue" in i && i._blazorSelectValue === o && (this.tryApplyValueProperty(e, i, n),
                                    delete i._blazorSelectValue),
                                    !0;
                            default:
                                return !1
                        }
                    }
                    ,
                    e.prototype.tryApplyCheckedProperty = function (e, t, n) {
                        if ("INPUT" === t.tagName) {
                            var r = n ? e.frameReader.attributeValue(n) : null;
                            return t.checked = null !== r,
                                !0
                        }
                        return !1
                    }
                    ,
                    e.prototype.insertFrameRange = function (e, t, n, r, o, i) {
                        for (var s = n, a = o; a < i; a++) {
                            var u = e.referenceFramesEntry(r, a);
                            n += this.insertFrame(e, t, n, r, u, a),
                                a += h(e, u)
                        }
                        return n - s
                    }
                    ,
                    e
            }();
        function h(e, t) {
            var n = e.frameReader;
            switch (n.frameType(t)) {
                case r.FrameType.component:
                case r.FrameType.element:
                case r.FrameType.region:
                    return n.subtreeLength(t) - 1;
                default:
                    return 0
            }
        }
        t.BrowserRenderer = f
    }
    , function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function s(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function a(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function u(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }
                    ).then(s, a)
                }
                u((r = r.apply(e, t || [])).next())
            }
            )
        }
            , o = this && this.__generator || function (e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }
                    ),
                    i;
                function a(i) {
                    return function (a) {
                        return function (i) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; s;)
                                try {
                                    if (n = 1,
                                        r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                        return o;
                                    switch (r = 0,
                                    o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++ ,
                                                {
                                                    value: i[1],
                                                    done: !1
                                                };
                                        case 5:
                                            s.label++ ,
                                                r = i[1],
                                                i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(),
                                                s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1],
                                                    o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2],
                                                    s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(),
                                                s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e],
                                        r = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, s, a = n(8), u = "Microsoft.AspNetCore.Blazor", c = u + ".Http", l = "WebAssemblyHttpMessageHandler";
        function f(e, t, n, r) {
            i || (i = a.platform.findMethod(u, c, l, "ReceiveResponse")),
                a.platform.callMethod(i, null, [a.platform.toDotNetString(e.toString()), t, n, r])
        }
        t.internalFunctions = {
            sendAsync: function (e, t, n) {
                return r(this, void 0, void 0, function () {
                    var r, i, h, p, d;
                    return o(this, function (o) {
                        switch (o.label) {
                            case 0:
                                h = JSON.parse(a.platform.toJavaScriptString(n)),
                                    p = Object.assign(h.requestInit, h.requestInitOverrides),
                                    t && (p.body = a.platform.toUint8Array(t)),
                                    o.label = 1;
                            case 1:
                                return o.trys.push([1, 4, , 5]),
                                    [4, fetch(h.requestUri, p)];
                            case 2:
                                return [4, (r = o.sent()).arrayBuffer()];
                            case 3:
                                return i = o.sent(),
                                    [3, 5];
                            case 4:
                                return d = o.sent(),
                                    function (e, t) {
                                        f(e, null, null, a.platform.toDotNetString(t))
                                    }(e, d.toString()),
                                    [2];
                            case 5:
                                return function (e, t, n) {
                                    var r = {
                                        statusCode: t.status,
                                        statusText: t.statusText,
                                        headers: []
                                    };
                                    t.headers.forEach(function (e, t) {
                                        r.headers.push([t, e])
                                    }),
                                        s || (s = a.platform.findMethod(u, c, l, "AllocateArray"));
                                    var o = a.platform.callMethod(s, null, [a.platform.toDotNetString(n.byteLength.toString())]);
                                    a.platform.toUint8Array(o).set(new Uint8Array(n)),
                                        f(e, a.platform.toDotNetString(JSON.stringify(r)), o, null)
                                }(e, r, i),
                                    [2]
                        }
                    })
                })
            }
        }
    }
    , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(11)
            , o = n(23)
            , i = n(7);
        window.Blazor = {
            navigateTo: r.navigateTo,
            _internal: {
                attachRootComponentToElement: i.attachRootComponentToElement,
                http: o.internalFunctions,
                uriHelper: r.internalFunctions
            }
        }
    }
    , function (e, t, n) {
        "use strict";
        var r;
        !function (e) {
            window.DotNet = e;
            var t = []
                , n = {}
                , r = {}
                , o = 1
                , i = null;
            function s(e) {
                t.push(e)
            }
            function a(e, t) {
                for (var n = [], r = 2; r < arguments.length; r++)
                    n[r - 2] = arguments[r];
                return c(e, t, null, n)
            }
            function u(e, t, n, r) {
                var o = l();
                if (o.invokeDotNetFromJS) {
                    var i = JSON.stringify(r, y)
                        , s = o.invokeDotNetFromJS(e, t, n, i);
                    return s ? h(s) : null
                }
                throw new Error("The current dispatcher does not support synchronous calls from JS to .NET. Use invokeMethodAsync instead.")
            }
            function c(e, t, r, i) {
                var s = o++
                    , a = new Promise(function (e, t) {
                        n[s] = {
                            resolve: e,
                            reject: t
                        }
                    }
                    );
                try {
                    var u = JSON.stringify(i, y);
                    l().beginInvokeDotNetFromJS(s, e, t, r, u)
                } catch (e) {
                    f(s, !1, e)
                }
                return a
            }
            function l() {
                if (null !== i)
                    return i;
                throw new Error("No .NET call dispatcher has been set.")
            }
            function f(e, t, r) {
                if (!n.hasOwnProperty(e))
                    throw new Error("There is no pending async call with ID " + e + ".");
                var o = n[e];
                delete n[e],
                    t ? o.resolve(r) : o.reject(r)
            }
            function h(e) {
                return e ? JSON.parse(e, function (e, n) {
                    return t.reduce(function (t, n) {
                        return n(e, t)
                    }, n)
                }) : null
            }
            function p(e) {
                if (r.hasOwnProperty(e))
                    return r[e];
                var t = window
                    , n = "window";
                if (e.split(".").forEach(function (e) {
                    if (!(e in t))
                        throw new Error("Could not find '" + e + "' in '" + n + "'.");
                    t = t[e],
                        n += "." + e
                }),
                    t instanceof Function)
                    return t;
                throw new Error("The value '" + n + "' is not a function.")
            }
            e.attachDispatcher = function (e) {
                i = e
            }
                ,
                e.attachReviver = s,
                e.invokeMethod = function (e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++)
                        n[r - 2] = arguments[r];
                    return u(e, t, null, n)
                }
                ,
                e.invokeMethodAsync = a,
                e.jsCallDispatcher = {
                    findJSFunction: p,
                    invokeJSFromDotNet: function (e, t) {
                        var n = p(e).apply(null, h(t));
                        return null === n || void 0 === n ? null : JSON.stringify(n, y)
                    },
                    beginInvokeJSFromDotNet: function (e, t, n) {
                        var r = new Promise(function (e) {
                            e(p(t).apply(null, h(n)))
                        }
                        );
                        e && r.then(function (t) {
                            return l().beginInvokeDotNetFromJS(0, "Microsoft.JSInterop", "DotNetDispatcher.EndInvoke", null, JSON.stringify([e, !0, t], y))
                        }, function (t) {
                            return l().beginInvokeDotNetFromJS(0, "Microsoft.JSInterop", "DotNetDispatcher.EndInvoke", null, JSON.stringify([e, !1, function (e) {
                                return e instanceof Error ? e.message + "\n" + e.stack : e ? e.toString() : "null"
                            }(t)]))
                        })
                    },
                    endInvokeDotNetFromJS: function (e, t, n) {
                        var r = t ? n : new Error(n);
                        f(parseInt(e), t, r)
                    }
                };
            var d = function () {
                function e(e) {
                    this._id = e
                }
                return e.prototype.invokeMethod = function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                    return u(null, e, this._id, t)
                }
                    ,
                    e.prototype.invokeMethodAsync = function (e) {
                        for (var t = [], n = 1; n < arguments.length; n++)
                            t[n - 1] = arguments[n];
                        return c(null, e, this._id, t)
                    }
                    ,
                    e.prototype.dispose = function () {
                        a("Microsoft.JSInterop", "DotNetDispatcher.ReleaseDotNetObject", this._id).catch(function (e) {
                            return console.error(e)
                        })
                    }
                    ,
                    e.prototype.serializeAsArg = function () {
                        return "__dotNetObject:" + this._id
                    }
                    ,
                    e
            }()
                , g = /^__dotNetObject\:(\d+)$/;
            function y(e, t) {
                return t instanceof d ? t.serializeAsArg() : t
            }
            s(function (e, t) {
                if ("string" == typeof t) {
                    var n = t.match(g);
                    if (n)
                        return new d(parseInt(n[1]))
                }
                return t
            })
        }(r || (r = {}))
    }
    , function (e, t, n) {
        "use strict";
        e.exports = i;
        var r = n(4)
            , o = n(5);
        function i(e) {
            if (!(this instanceof i))
                return new i(e);
            r.call(this, e),
                this._transformState = {
                    afterTransform: function (e, t) {
                        var n = this._transformState;
                        n.transforming = !1;
                        var r = n.writecb;
                        if (!r)
                            return this.emit("error", new Error("write callback called multiple times"));
                        n.writechunk = null,
                            n.writecb = null,
                            null != t && this.push(t),
                            r(e);
                        var o = this._readableState;
                        o.reading = !1,
                            (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
                    }
                        .bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                },
                this._readableState.needReadable = !0,
                this._readableState.sync = !1,
                e && ("function" == typeof e.transform && (this._transform = e.transform),
                    "function" == typeof e.flush && (this._flush = e.flush)),
                this.on("prefinish", s)
        }
        function s() {
            var e = this;
            "function" == typeof this._flush ? this._flush(function (t, n) {
                a(e, t, n)
            }) : a(this, null, null)
        }
        function a(e, t, n) {
            if (t)
                return e.emit("error", t);
            if (null != n && e.push(n),
                e._writableState.length)
                throw new Error("Calling transform done when ws.length != 0");
            if (e._transformState.transforming)
                throw new Error("Calling transform done when still transforming");
            return e.push(null)
        }
        o.inherits = n(2),
            o.inherits(i, r),
            i.prototype.push = function (e, t) {
                return this._transformState.needTransform = !1,
                    r.prototype.push.call(this, e, t)
            }
            ,
            i.prototype._transform = function (e, t, n) {
                throw new Error("_transform() is not implemented")
            }
            ,
            i.prototype._write = function (e, t, n) {
                var r = this._transformState;
                if (r.writecb = n,
                    r.writechunk = e,
                    r.writeencoding = t,
                    !r.transforming) {
                    var o = this._readableState;
                    (r.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
                }
            }
            ,
            i.prototype._read = function (e) {
                var t = this._transformState;
                null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0,
                    this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
            }
            ,
            i.prototype._destroy = function (e, t) {
                var n = this;
                r.prototype._destroy.call(this, e, function (e) {
                    t(e),
                        n.emit("close")
                })
            }
    }
    , function (e, t, n) {
        "use strict";
        var r = n(3).Buffer
            , o = r.isEncoding || function (e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            }
            ;
        function i(e) {
            var t;
            switch (this.encoding = function (e) {
                var t = function (e) {
                    if (!e)
                        return "utf8";
                    for (var t; ;)
                        switch (e) {
                            case "utf8":
                            case "utf-8":
                                return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return "utf16le";
                            case "latin1":
                            case "binary":
                                return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                                return e;
                            default:
                                if (t)
                                    return;
                                e = ("" + e).toLowerCase(),
                                    t = !0
                        }
                }(e);
                if ("string" != typeof t && (r.isEncoding === o || !o(e)))
                    throw new Error("Unknown encoding: " + e);
                return t || e
            }(e),
            this.encoding) {
                case "utf16le":
                    this.text = u,
                        this.end = c,
                        t = 4;
                    break;
                case "utf8":
                    this.fillLast = a,
                        t = 4;
                    break;
                case "base64":
                    this.text = l,
                        this.end = f,
                        t = 3;
                    break;
                default:
                    return this.write = h,
                        void (this.end = p)
            }
            this.lastNeed = 0,
                this.lastTotal = 0,
                this.lastChar = r.allocUnsafe(t)
        }
        function s(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
        }
        function a(e) {
            var t = this.lastTotal - this.lastNeed
                , n = function (e, t, n) {
                    if (128 != (192 & t[0]))
                        return e.lastNeed = 0,
                            "�";
                    if (e.lastNeed > 1 && t.length > 1) {
                        if (128 != (192 & t[1]))
                            return e.lastNeed = 1,
                                "�";
                        if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                            return e.lastNeed = 2,
                                "�"
                    }
                }(this, e);
            return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
                    void (this.lastNeed -= e.length))
        }
        function u(e, t) {
            if ((e.length - t) % 2 == 0) {
                var n = e.toString("utf16le", t);
                if (n) {
                    var r = n.charCodeAt(n.length - 1);
                    if (r >= 55296 && r <= 56319)
                        return this.lastNeed = 2,
                            this.lastTotal = 4,
                            this.lastChar[0] = e[e.length - 2],
                            this.lastChar[1] = e[e.length - 1],
                            n.slice(0, -1)
                }
                return n
            }
            return this.lastNeed = 1,
                this.lastTotal = 2,
                this.lastChar[0] = e[e.length - 1],
                e.toString("utf16le", t, e.length - 1)
        }
        function c(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var n = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, n)
            }
            return t
        }
        function l(e, t) {
            var n = (e.length - t) % 3;
            return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n,
                this.lastTotal = 3,
                1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
                    this.lastChar[1] = e[e.length - 1]),
                e.toString("base64", t, e.length - n))
        }
        function f(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }
        function h(e) {
            return e.toString(this.encoding)
        }
        function p(e) {
            return e && e.length ? this.write(e) : ""
        }
        t.StringDecoder = i,
            i.prototype.write = function (e) {
                if (0 === e.length)
                    return "";
                var t, n;
                if (this.lastNeed) {
                    if (void 0 === (t = this.fillLast(e)))
                        return "";
                    n = this.lastNeed,
                        this.lastNeed = 0
                } else
                    n = 0;
                return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
            }
            ,
            i.prototype.end = function (e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + "�" : t
            }
            ,
            i.prototype.text = function (e, t) {
                var n = function (e, t, n) {
                    var r = t.length - 1;
                    if (r < n)
                        return 0;
                    var o = s(t[r]);
                    if (o >= 0)
                        return o > 0 && (e.lastNeed = o - 1),
                            o;
                    if (--r < n || -2 === o)
                        return 0;
                    if ((o = s(t[r])) >= 0)
                        return o > 0 && (e.lastNeed = o - 2),
                            o;
                    if (--r < n || -2 === o)
                        return 0;
                    if ((o = s(t[r])) >= 0)
                        return o > 0 && (2 === o ? o = 0 : e.lastNeed = o - 3),
                            o;
                    return 0
                }(this, e, t);
                if (!this.lastNeed)
                    return e.toString("utf8", t);
                this.lastTotal = n;
                var r = e.length - (n - this.lastNeed);
                return e.copy(this.lastChar, 0, r),
                    e.toString("utf8", t, r)
            }
            ,
            i.prototype.fillLast = function (e) {
                if (this.lastNeed <= e.length)
                    return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
                        this.lastChar.toString(this.encoding, 0, this.lastTotal);
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
                    this.lastNeed -= e.length
            }
    }
    , function (e, t, n) {
        "use strict";
        (function (t, r, o) {
            var i = n(9);
            function s(e) {
                var t = this;
                this.next = null,
                    this.entry = null,
                    this.finish = function () {
                        !function (e, t, n) {
                            var r = e.entry;
                            e.entry = null;
                            for (; r;) {
                                var o = r.callback;
                                t.pendingcb-- ,
                                    o(n),
                                    r = r.next
                            }
                            t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                        }(t, e)
                    }
            }
            e.exports = m;
            var a, u = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? r : i.nextTick;
            m.WritableState = v;
            var c = n(5);
            c.inherits = n(2);
            var l = {
                deprecate: n(42)
            }
                , f = n(30)
                , h = n(3).Buffer
                , p = o.Uint8Array || function () { }
                ;
            var d, g = n(29);
            function y() { }
            function v(e, t) {
                a = a || n(4),
                    e = e || {};
                var r = t instanceof a;
                this.objectMode = !!e.objectMode,
                    r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
                var o = e.highWaterMark
                    , c = e.writableHighWaterMark
                    , l = this.objectMode ? 16 : 16384;
                this.highWaterMark = o || 0 === o ? o : r && (c || 0 === c) ? c : l,
                    this.highWaterMark = Math.floor(this.highWaterMark),
                    this.finalCalled = !1,
                    this.needDrain = !1,
                    this.ending = !1,
                    this.ended = !1,
                    this.finished = !1,
                    this.destroyed = !1;
                var f = !1 === e.decodeStrings;
                this.decodeStrings = !f,
                    this.defaultEncoding = e.defaultEncoding || "utf8",
                    this.length = 0,
                    this.writing = !1,
                    this.corked = 0,
                    this.sync = !0,
                    this.bufferProcessing = !1,
                    this.onwrite = function (e) {
                        !function (e, t) {
                            var n = e._writableState
                                , r = n.sync
                                , o = n.writecb;
                            if (function (e) {
                                e.writing = !1,
                                    e.writecb = null,
                                    e.length -= e.writelen,
                                    e.writelen = 0
                            }(n),
                                t)
                                !function (e, t, n, r, o) {
                                    --t.pendingcb,
                                        n ? (i.nextTick(o, r),
                                            i.nextTick(T, e, t),
                                            e._writableState.errorEmitted = !0,
                                            e.emit("error", r)) : (o(r),
                                                e._writableState.errorEmitted = !0,
                                                e.emit("error", r),
                                                T(e, t))
                                }(e, n, r, t, o);
                            else {
                                var s = S(n);
                                s || n.corked || n.bufferProcessing || !n.bufferedRequest || E(e, n),
                                    r ? u(w, e, n, s, o) : w(e, n, s, o)
                            }
                        }(t, e)
                    }
                    ,
                    this.writecb = null,
                    this.writelen = 0,
                    this.bufferedRequest = null,
                    this.lastBufferedRequest = null,
                    this.pendingcb = 0,
                    this.prefinished = !1,
                    this.errorEmitted = !1,
                    this.bufferedRequestCount = 0,
                    this.corkedRequestsFree = new s(this)
            }
            function m(e) {
                if (a = a || n(4),
                    !(d.call(m, this) || this instanceof a))
                    return new m(e);
                this._writableState = new v(e, this),
                    this.writable = !0,
                    e && ("function" == typeof e.write && (this._write = e.write),
                        "function" == typeof e.writev && (this._writev = e.writev),
                        "function" == typeof e.destroy && (this._destroy = e.destroy),
                        "function" == typeof e.final && (this._final = e.final)),
                    f.call(this)
            }
            function b(e, t, n, r, o, i, s) {
                t.writelen = r,
                    t.writecb = s,
                    t.writing = !0,
                    t.sync = !0,
                    n ? e._writev(o, t.onwrite) : e._write(o, i, t.onwrite),
                    t.sync = !1
            }
            function w(e, t, n, r) {
                n || function (e, t) {
                    0 === t.length && t.needDrain && (t.needDrain = !1,
                        e.emit("drain"))
                }(e, t),
                    t.pendingcb-- ,
                    r(),
                    T(e, t)
            }
            function E(e, t) {
                t.bufferProcessing = !0;
                var n = t.bufferedRequest;
                if (e._writev && n && n.next) {
                    var r = t.bufferedRequestCount
                        , o = new Array(r)
                        , i = t.corkedRequestsFree;
                    i.entry = n;
                    for (var a = 0, u = !0; n;)
                        o[a] = n,
                            n.isBuf || (u = !1),
                            n = n.next,
                            a += 1;
                    o.allBuffers = u,
                        b(e, t, !0, t.length, o, "", i.finish),
                        t.pendingcb++ ,
                        t.lastBufferedRequest = null,
                        i.next ? (t.corkedRequestsFree = i.next,
                            i.next = null) : t.corkedRequestsFree = new s(t),
                        t.bufferedRequestCount = 0
                } else {
                    for (; n;) {
                        var c = n.chunk
                            , l = n.encoding
                            , f = n.callback;
                        if (b(e, t, !1, t.objectMode ? 1 : c.length, c, l, f),
                            n = n.next,
                            t.bufferedRequestCount-- ,
                            t.writing)
                            break
                    }
                    null === n && (t.lastBufferedRequest = null)
                }
                t.bufferedRequest = n,
                    t.bufferProcessing = !1
            }
            function S(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }
            function _(e, t) {
                e._final(function (n) {
                    t.pendingcb-- ,
                        n && e.emit("error", n),
                        t.prefinished = !0,
                        e.emit("prefinish"),
                        T(e, t)
                })
            }
            function T(e, t) {
                var n = S(t);
                return n && (!function (e, t) {
                    t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++ ,
                        t.finalCalled = !0,
                        i.nextTick(_, e, t)) : (t.prefinished = !0,
                            e.emit("prefinish")))
                }(e, t),
                    0 === t.pendingcb && (t.finished = !0,
                        e.emit("finish"))),
                    n
            }
            c.inherits(m, f),
                v.prototype.getBuffer = function () {
                    for (var e = this.bufferedRequest, t = []; e;)
                        t.push(e),
                            e = e.next;
                    return t
                }
                ,
                function () {
                    try {
                        Object.defineProperty(v.prototype, "buffer", {
                            get: l.deprecate(function () {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) { }
                }(),
                "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (d = Function.prototype[Symbol.hasInstance],
                    Object.defineProperty(m, Symbol.hasInstance, {
                        value: function (e) {
                            return !!d.call(this, e) || this === m && (e && e._writableState instanceof v)
                        }
                    })) : d = function (e) {
                        return e instanceof this
                    }
                ,
                m.prototype.pipe = function () {
                    this.emit("error", new Error("Cannot pipe, not readable"))
                }
                ,
                m.prototype.write = function (e, t, n) {
                    var r, o = this._writableState, s = !1, a = !o.objectMode && (r = e,
                        h.isBuffer(r) || r instanceof p);
                    return a && !h.isBuffer(e) && (e = function (e) {
                        return h.from(e)
                    }(e)),
                        "function" == typeof t && (n = t,
                            t = null),
                        a ? t = "buffer" : t || (t = o.defaultEncoding),
                        "function" != typeof n && (n = y),
                        o.ended ? function (e, t) {
                            var n = new Error("write after end");
                            e.emit("error", n),
                                i.nextTick(t, n)
                        }(this, n) : (a || function (e, t, n, r) {
                            var o = !0
                                , s = !1;
                            return null === n ? s = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || t.objectMode || (s = new TypeError("Invalid non-string/buffer chunk")),
                                s && (e.emit("error", s),
                                    i.nextTick(r, s),
                                    o = !1),
                                o
                        }(this, o, e, n)) && (o.pendingcb++ ,
                            s = function (e, t, n, r, o, i) {
                                if (!n) {
                                    var s = function (e, t, n) {
                                        e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = h.from(t, n));
                                        return t
                                    }(t, r, o);
                                    r !== s && (n = !0,
                                        o = "buffer",
                                        r = s)
                                }
                                var a = t.objectMode ? 1 : r.length;
                                t.length += a;
                                var u = t.length < t.highWaterMark;
                                u || (t.needDrain = !0);
                                if (t.writing || t.corked) {
                                    var c = t.lastBufferedRequest;
                                    t.lastBufferedRequest = {
                                        chunk: r,
                                        encoding: o,
                                        isBuf: n,
                                        callback: i,
                                        next: null
                                    },
                                        c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                                        t.bufferedRequestCount += 1
                                } else
                                    b(e, t, !1, a, r, o, i);
                                return u
                            }(this, o, a, e, t, n)),
                        s
                }
                ,
                m.prototype.cork = function () {
                    this._writableState.corked++
                }
                ,
                m.prototype.uncork = function () {
                    var e = this._writableState;
                    e.corked && (e.corked-- ,
                        e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || E(this, e))
                }
                ,
                m.prototype.setDefaultEncoding = function (e) {
                    if ("string" == typeof e && (e = e.toLowerCase()),
                        !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                        throw new TypeError("Unknown encoding: " + e);
                    return this._writableState.defaultEncoding = e,
                        this
                }
                ,
                Object.defineProperty(m.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function () {
                        return this._writableState.highWaterMark
                    }
                }),
                m.prototype._write = function (e, t, n) {
                    n(new Error("_write() is not implemented"))
                }
                ,
                m.prototype._writev = null,
                m.prototype.end = function (e, t, n) {
                    var r = this._writableState;
                    "function" == typeof e ? (n = e,
                        e = null,
                        t = null) : "function" == typeof t && (n = t,
                            t = null),
                        null !== e && void 0 !== e && this.write(e, t),
                        r.corked && (r.corked = 1,
                            this.uncork()),
                        r.ending || r.finished || function (e, t, n) {
                            t.ending = !0,
                                T(e, t),
                                n && (t.finished ? i.nextTick(n) : e.once("finish", n));
                            t.ended = !0,
                                e.writable = !1
                        }(this, r, n)
                }
                ,
                Object.defineProperty(m.prototype, "destroyed", {
                    get: function () {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function (e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }),
                m.prototype.destroy = g.destroy,
                m.prototype._undestroy = g.undestroy,
                m.prototype._destroy = function (e, t) {
                    this.end(),
                        t(e)
                }
        }
        ).call(this, n(6), n(44).setImmediate, n(1))
    }
    , function (e, t, n) {
        "use strict";
        var r = n(9);
        function o(e, t) {
            e.emit("error", t)
        }
        e.exports = {
            destroy: function (e, t) {
                var n = this
                    , i = this._readableState && this._readableState.destroyed
                    , s = this._writableState && this._writableState.destroyed;
                return i || s ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || r.nextTick(o, this, e),
                    this) : (this._readableState && (this._readableState.destroyed = !0),
                        this._writableState && (this._writableState.destroyed = !0),
                        this._destroy(e || null, function (e) {
                            !t && e ? (r.nextTick(o, n, e),
                                n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e)
                        }),
                        this)
            },
            undestroy: function () {
                this._readableState && (this._readableState.destroyed = !1,
                    this._readableState.reading = !1,
                    this._readableState.ended = !1,
                    this._readableState.endEmitted = !1),
                    this._writableState && (this._writableState.destroyed = !1,
                        this._writableState.ended = !1,
                        this._writableState.ending = !1,
                        this._writableState.finished = !1,
                        this._writableState.errorEmitted = !1)
            }
        }
    }
    , function (e, t, n) {
        e.exports = n(31).EventEmitter
    }
    , function (e, t) {
        function n() {
            this._events = this._events || {},
                this._maxListeners = this._maxListeners || void 0
        }
        function r(e) {
            return "function" == typeof e
        }
        function o(e) {
            return "object" == typeof e && null !== e
        }
        function i(e) {
            return void 0 === e
        }
        e.exports = n,
            n.EventEmitter = n,
            n.prototype._events = void 0,
            n.prototype._maxListeners = void 0,
            n.defaultMaxListeners = 10,
            n.prototype.setMaxListeners = function (e) {
                if ("number" != typeof e || e < 0 || isNaN(e))
                    throw TypeError("n must be a positive number");
                return this._maxListeners = e,
                    this
            }
            ,
            n.prototype.emit = function (e) {
                var t, n, s, a, u, c;
                if (this._events || (this._events = {}),
                    "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                    if ((t = arguments[1]) instanceof Error)
                        throw t;
                    var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw l.context = t,
                    l
                }
                if (i(n = this._events[e]))
                    return !1;
                if (r(n))
                    switch (arguments.length) {
                        case 1:
                            n.call(this);
                            break;
                        case 2:
                            n.call(this, arguments[1]);
                            break;
                        case 3:
                            n.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            a = Array.prototype.slice.call(arguments, 1),
                                n.apply(this, a)
                    }
                else if (o(n))
                    for (a = Array.prototype.slice.call(arguments, 1),
                        s = (c = n.slice()).length,
                        u = 0; u < s; u++)
                        c[u].apply(this, a);
                return !0
            }
            ,
            n.prototype.addListener = function (e, t) {
                var s;
                if (!r(t))
                    throw TypeError("listener must be a function");
                return this._events || (this._events = {}),
                    this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t),
                    this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
                    o(this._events[e]) && !this._events[e].warned && (s = i(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[e].length > s && (this._events[e].warned = !0,
                        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
                        "function" == typeof console.trace && console.trace()),
                    this
            }
            ,
            n.prototype.on = n.prototype.addListener,
            n.prototype.once = function (e, t) {
                if (!r(t))
                    throw TypeError("listener must be a function");
                var n = !1;
                function o() {
                    this.removeListener(e, o),
                        n || (n = !0,
                            t.apply(this, arguments))
                }
                return o.listener = t,
                    this.on(e, o),
                    this
            }
            ,
            n.prototype.removeListener = function (e, t) {
                var n, i, s, a;
                if (!r(t))
                    throw TypeError("listener must be a function");
                if (!this._events || !this._events[e])
                    return this;
                if (s = (n = this._events[e]).length,
                    i = -1,
                    n === t || r(n.listener) && n.listener === t)
                    delete this._events[e],
                        this._events.removeListener && this.emit("removeListener", e, t);
                else if (o(n)) {
                    for (a = s; a-- > 0;)
                        if (n[a] === t || n[a].listener && n[a].listener === t) {
                            i = a;
                            break
                        }
                    if (i < 0)
                        return this;
                    1 === n.length ? (n.length = 0,
                        delete this._events[e]) : n.splice(i, 1),
                        this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }
            ,
            n.prototype.removeAllListeners = function (e) {
                var t, n;
                if (!this._events)
                    return this;
                if (!this._events.removeListener)
                    return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
                        this;
                if (0 === arguments.length) {
                    for (t in this._events)
                        "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"),
                        this._events = {},
                        this
                }
                if (r(n = this._events[e]))
                    this.removeListener(e, n);
                else if (n)
                    for (; n.length;)
                        this.removeListener(e, n[n.length - 1]);
                return delete this._events[e],
                    this
            }
            ,
            n.prototype.listeners = function (e) {
                return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }
            ,
            n.prototype.listenerCount = function (e) {
                if (this._events) {
                    var t = this._events[e];
                    if (r(t))
                        return 1;
                    if (t)
                        return t.length
                }
                return 0
            }
            ,
            n.listenerCount = function (e, t) {
                return e.listenerCount(t)
            }
    }
    , function (e, t, n) {
        "use strict";
        (function (t, r) {
            var o = n(9);
            e.exports = b;
            var i, s = n(34);
            b.ReadableState = m;
            n(31).EventEmitter;
            var a = function (e, t) {
                return e.listeners(t).length
            }
                , u = n(30)
                , c = n(3).Buffer
                , l = t.Uint8Array || function () { }
                ;
            var f = n(5);
            f.inherits = n(2);
            var h = n(47)
                , p = void 0;
            p = h && h.debuglog ? h.debuglog("stream") : function () { }
                ;
            var d, g = n(46), y = n(29);
            f.inherits(b, u);
            var v = ["error", "close", "destroy", "pause", "resume"];
            function m(e, t) {
                i = i || n(4),
                    e = e || {};
                var r = t instanceof i;
                this.objectMode = !!e.objectMode,
                    r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
                var o = e.highWaterMark
                    , s = e.readableHighWaterMark
                    , a = this.objectMode ? 16 : 16384;
                this.highWaterMark = o || 0 === o ? o : r && (s || 0 === s) ? s : a,
                    this.highWaterMark = Math.floor(this.highWaterMark),
                    this.buffer = new g,
                    this.length = 0,
                    this.pipes = null,
                    this.pipesCount = 0,
                    this.flowing = null,
                    this.ended = !1,
                    this.endEmitted = !1,
                    this.reading = !1,
                    this.sync = !0,
                    this.needReadable = !1,
                    this.emittedReadable = !1,
                    this.readableListening = !1,
                    this.resumeScheduled = !1,
                    this.destroyed = !1,
                    this.defaultEncoding = e.defaultEncoding || "utf8",
                    this.awaitDrain = 0,
                    this.readingMore = !1,
                    this.decoder = null,
                    this.encoding = null,
                    e.encoding && (d || (d = n(27).StringDecoder),
                        this.decoder = new d(e.encoding),
                        this.encoding = e.encoding)
            }
            function b(e) {
                if (i = i || n(4),
                    !(this instanceof b))
                    return new b(e);
                this._readableState = new m(e, this),
                    this.readable = !0,
                    e && ("function" == typeof e.read && (this._read = e.read),
                        "function" == typeof e.destroy && (this._destroy = e.destroy)),
                    u.call(this)
            }
            function w(e, t, n, r, o) {
                var i, s = e._readableState;
                null === t ? (s.reading = !1,
                    function (e, t) {
                        if (t.ended)
                            return;
                        if (t.decoder) {
                            var n = t.decoder.end();
                            n && n.length && (t.buffer.push(n),
                                t.length += t.objectMode ? 1 : n.length)
                        }
                        t.ended = !0,
                            T(e)
                    }(e, s)) : (o || (i = function (e, t) {
                        var n;
                        r = t,
                            c.isBuffer(r) || r instanceof l || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));
                        var r;
                        return n
                    }(s, t)),
                        i ? e.emit("error", i) : s.objectMode || t && t.length > 0 ? ("string" == typeof t || s.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function (e) {
                            return c.from(e)
                        }(t)),
                            r ? s.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : E(e, s, t, !0) : s.ended ? e.emit("error", new Error("stream.push() after EOF")) : (s.reading = !1,
                                s.decoder && !n ? (t = s.decoder.write(t),
                                    s.objectMode || 0 !== t.length ? E(e, s, t, !1) : k(e, s)) : E(e, s, t, !1))) : r || (s.reading = !1));
                return function (e) {
                    return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
                }(s)
            }
            function E(e, t, n, r) {
                t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n),
                    e.read(0)) : (t.length += t.objectMode ? 1 : n.length,
                        r ? t.buffer.unshift(n) : t.buffer.push(n),
                        t.needReadable && T(e)),
                    k(e, t)
            }
            Object.defineProperty(b.prototype, "destroyed", {
                get: function () {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function (e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            }),
                b.prototype.destroy = y.destroy,
                b.prototype._undestroy = y.undestroy,
                b.prototype._destroy = function (e, t) {
                    this.push(null),
                        t(e)
                }
                ,
                b.prototype.push = function (e, t) {
                    var n, r = this._readableState;
                    return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = c.from(e, t),
                        t = ""),
                        n = !0),
                        w(this, e, t, !1, n)
                }
                ,
                b.prototype.unshift = function (e) {
                    return w(this, e, null, !0, !1)
                }
                ,
                b.prototype.isPaused = function () {
                    return !1 === this._readableState.flowing
                }
                ,
                b.prototype.setEncoding = function (e) {
                    return d || (d = n(27).StringDecoder),
                        this._readableState.decoder = new d(e),
                        this._readableState.encoding = e,
                        this
                }
                ;
            var S = 8388608;
            function _(e, t) {
                return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
                    return e >= S ? e = S : (e-- ,
                        e |= e >>> 1,
                        e |= e >>> 2,
                        e |= e >>> 4,
                        e |= e >>> 8,
                        e |= e >>> 16,
                        e++),
                        e
                }(e)),
                    e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
                        0))
            }
            function T(e) {
                var t = e._readableState;
                t.needReadable = !1,
                    t.emittedReadable || (p("emitReadable", t.flowing),
                        t.emittedReadable = !0,
                        t.sync ? o.nextTick(I, e) : I(e))
            }
            function I(e) {
                p("emit readable"),
                    e.emit("readable"),
                    M(e)
            }
            function k(e, t) {
                t.readingMore || (t.readingMore = !0,
                    o.nextTick(C, e, t))
            }
            function C(e, t) {
                for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (p("maybeReadMore read 0"),
                    e.read(0),
                    n !== t.length);)
                    n = t.length;
                t.readingMore = !1
            }
            function x(e) {
                p("readable nexttick read 0"),
                    e.read(0)
            }
            function R(e, t) {
                t.reading || (p("resume read 0"),
                    e.read(0)),
                    t.resumeScheduled = !1,
                    t.awaitDrain = 0,
                    e.emit("resume"),
                    M(e),
                    t.flowing && !t.reading && e.read(0)
            }
            function M(e) {
                var t = e._readableState;
                for (p("flow", t.flowing); t.flowing && null !== e.read();)
                    ;
            }
            function A(e, t) {
                return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length),
                    t.buffer.clear()) : n = function (e, t, n) {
                        var r;
                        e < t.head.data.length ? (r = t.head.data.slice(0, e),
                            t.head.data = t.head.data.slice(e)) : r = e === t.head.data.length ? t.shift() : n ? function (e, t) {
                                var n = t.head
                                    , r = 1
                                    , o = n.data;
                                e -= o.length;
                                for (; n = n.next;) {
                                    var i = n.data
                                        , s = e > i.length ? i.length : e;
                                    if (s === i.length ? o += i : o += i.slice(0, e),
                                        0 === (e -= s)) {
                                        s === i.length ? (++r,
                                            n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n,
                                                n.data = i.slice(s));
                                        break
                                    }
                                    ++r
                                }
                                return t.length -= r,
                                    o
                            }(e, t) : function (e, t) {
                                var n = c.allocUnsafe(e)
                                    , r = t.head
                                    , o = 1;
                                r.data.copy(n),
                                    e -= r.data.length;
                                for (; r = r.next;) {
                                    var i = r.data
                                        , s = e > i.length ? i.length : e;
                                    if (i.copy(n, n.length - e, 0, s),
                                        0 === (e -= s)) {
                                        s === i.length ? (++o,
                                            r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r,
                                                r.data = i.slice(s));
                                        break
                                    }
                                    ++o
                                }
                                return t.length -= o,
                                    n
                            }(e, t);
                        return r
                    }(e, t.buffer, t.decoder),
                    n);
                var n
            }
            function U(e) {
                var t = e._readableState;
                if (t.length > 0)
                    throw new Error('"endReadable()" called on non-empty stream');
                t.endEmitted || (t.ended = !0,
                    o.nextTick(P, t, e))
            }
            function P(e, t) {
                e.endEmitted || 0 !== e.length || (e.endEmitted = !0,
                    t.readable = !1,
                    t.emit("end"))
            }
            function B(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }
            b.prototype.read = function (e) {
                p("read", e),
                    e = parseInt(e, 10);
                var t = this._readableState
                    , n = e;
                if (0 !== e && (t.emittedReadable = !1),
                    0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
                    return p("read: emitReadable", t.length, t.ended),
                        0 === t.length && t.ended ? U(this) : T(this),
                        null;
                if (0 === (e = _(e, t)) && t.ended)
                    return 0 === t.length && U(this),
                        null;
                var r, o = t.needReadable;
                return p("need readable", o),
                    (0 === t.length || t.length - e < t.highWaterMark) && p("length less than watermark", o = !0),
                    t.ended || t.reading ? p("reading or ended", o = !1) : o && (p("do read"),
                        t.reading = !0,
                        t.sync = !0,
                        0 === t.length && (t.needReadable = !0),
                        this._read(t.highWaterMark),
                        t.sync = !1,
                        t.reading || (e = _(n, t))),
                    null === (r = e > 0 ? A(e, t) : null) ? (t.needReadable = !0,
                        e = 0) : t.length -= e,
                    0 === t.length && (t.ended || (t.needReadable = !0),
                        n !== e && t.ended && U(this)),
                    null !== r && this.emit("data", r),
                    r
            }
                ,
                b.prototype._read = function (e) {
                    this.emit("error", new Error("_read() is not implemented"))
                }
                ,
                b.prototype.pipe = function (e, t) {
                    var n = this
                        , i = this._readableState;
                    switch (i.pipesCount) {
                        case 0:
                            i.pipes = e;
                            break;
                        case 1:
                            i.pipes = [i.pipes, e];
                            break;
                        default:
                            i.pipes.push(e)
                    }
                    i.pipesCount += 1,
                        p("pipe count=%d opts=%j", i.pipesCount, t);
                    var u = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? l : b;
                    function c(t, r) {
                        p("onunpipe"),
                            t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0,
                                p("cleanup"),
                                e.removeListener("close", v),
                                e.removeListener("finish", m),
                                e.removeListener("drain", f),
                                e.removeListener("error", y),
                                e.removeListener("unpipe", c),
                                n.removeListener("end", l),
                                n.removeListener("end", b),
                                n.removeListener("data", g),
                                h = !0,
                                !i.awaitDrain || e._writableState && !e._writableState.needDrain || f())
                    }
                    function l() {
                        p("onend"),
                            e.end()
                    }
                    i.endEmitted ? o.nextTick(u) : n.once("end", u),
                        e.on("unpipe", c);
                    var f = function (e) {
                        return function () {
                            var t = e._readableState;
                            p("pipeOnDrain", t.awaitDrain),
                                t.awaitDrain && t.awaitDrain-- ,
                                0 === t.awaitDrain && a(e, "data") && (t.flowing = !0,
                                    M(e))
                        }
                    }(n);
                    e.on("drain", f);
                    var h = !1;
                    var d = !1;
                    function g(t) {
                        p("ondata"),
                            d = !1,
                            !1 !== e.write(t) || d || ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== B(i.pipes, e)) && !h && (p("false write response, pause", n._readableState.awaitDrain),
                                n._readableState.awaitDrain++ ,
                                d = !0),
                                n.pause())
                    }
                    function y(t) {
                        p("onerror", t),
                            b(),
                            e.removeListener("error", y),
                            0 === a(e, "error") && e.emit("error", t)
                    }
                    function v() {
                        e.removeListener("finish", m),
                            b()
                    }
                    function m() {
                        p("onfinish"),
                            e.removeListener("close", v),
                            b()
                    }
                    function b() {
                        p("unpipe"),
                            n.unpipe(e)
                    }
                    return n.on("data", g),
                        function (e, t, n) {
                            if ("function" == typeof e.prependListener)
                                return e.prependListener(t, n);
                            e._events && e._events[t] ? s(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
                        }(e, "error", y),
                        e.once("close", v),
                        e.once("finish", m),
                        e.emit("pipe", n),
                        i.flowing || (p("pipe resume"),
                            n.resume()),
                        e
                }
                ,
                b.prototype.unpipe = function (e) {
                    var t = this._readableState
                        , n = {
                            hasUnpiped: !1
                        };
                    if (0 === t.pipesCount)
                        return this;
                    if (1 === t.pipesCount)
                        return e && e !== t.pipes ? this : (e || (e = t.pipes),
                            t.pipes = null,
                            t.pipesCount = 0,
                            t.flowing = !1,
                            e && e.emit("unpipe", this, n),
                            this);
                    if (!e) {
                        var r = t.pipes
                            , o = t.pipesCount;
                        t.pipes = null,
                            t.pipesCount = 0,
                            t.flowing = !1;
                        for (var i = 0; i < o; i++)
                            r[i].emit("unpipe", this, n);
                        return this
                    }
                    var s = B(t.pipes, e);
                    return -1 === s ? this : (t.pipes.splice(s, 1),
                        t.pipesCount -= 1,
                        1 === t.pipesCount && (t.pipes = t.pipes[0]),
                        e.emit("unpipe", this, n),
                        this)
                }
                ,
                b.prototype.on = function (e, t) {
                    var n = u.prototype.on.call(this, e, t);
                    if ("data" === e)
                        !1 !== this._readableState.flowing && this.resume();
                    else if ("readable" === e) {
                        var r = this._readableState;
                        r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0,
                            r.emittedReadable = !1,
                            r.reading ? r.length && T(this) : o.nextTick(x, this))
                    }
                    return n
                }
                ,
                b.prototype.addListener = b.prototype.on,
                b.prototype.resume = function () {
                    var e = this._readableState;
                    return e.flowing || (p("resume"),
                        e.flowing = !0,
                        function (e, t) {
                            t.resumeScheduled || (t.resumeScheduled = !0,
                                o.nextTick(R, e, t))
                        }(this, e)),
                        this
                }
                ,
                b.prototype.pause = function () {
                    return p("call pause flowing=%j", this._readableState.flowing),
                        !1 !== this._readableState.flowing && (p("pause"),
                            this._readableState.flowing = !1,
                            this.emit("pause")),
                        this
                }
                ,
                b.prototype.wrap = function (e) {
                    var t = this
                        , n = this._readableState
                        , r = !1;
                    for (var o in e.on("end", function () {
                        if (p("wrapped end"),
                            n.decoder && !n.ended) {
                            var e = n.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }),
                        e.on("data", function (o) {
                            (p("wrapped data"),
                                n.decoder && (o = n.decoder.write(o)),
                                !n.objectMode || null !== o && void 0 !== o) && ((n.objectMode || o && o.length) && (t.push(o) || (r = !0,
                                    e.pause())))
                        }),
                        e)
                        void 0 === this[o] && "function" == typeof e[o] && (this[o] = function (t) {
                            return function () {
                                return e[t].apply(e, arguments)
                            }
                        }(o));
                    for (var i = 0; i < v.length; i++)
                        e.on(v[i], this.emit.bind(this, v[i]));
                    return this._read = function (t) {
                        p("wrapped _read", t),
                            r && (r = !1,
                                e.resume())
                    }
                        ,
                        this
                }
                ,
                Object.defineProperty(b.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function () {
                        return this._readableState.highWaterMark
                    }
                }),
                b._fromList = A
        }
        ).call(this, n(1), n(6))
    }
    , function (e, t, n) {
        (t = e.exports = n(32)).Stream = t,
            t.Readable = t,
            t.Writable = n(28),
            t.Duplex = n(4),
            t.Transform = n(26),
            t.PassThrough = n(41)
    }
    , function (e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function (e) {
            return "[object Array]" == n.call(e)
        }
    }
    , function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(12)
            , o = n(13)
            , i = n(0)
            , s = function () {
                function e() { }
                return e.write = function (e) {
                    var t = e.byteLength || e.length
                        , n = [];
                    do {
                        var r = 127 & t;
                        (t >>= 7) > 0 && (r |= 128),
                            n.push(r)
                    } while (t > 0); t = e.byteLength || e.length;
                    var o = new Uint8Array(n.length + t);
                    return o.set(n, 0),
                        o.set(e, n.length),
                        o.buffer
                }
                    ,
                    e.parse = function (e) {
                        for (var t = [], n = new Uint8Array(e), r = [0, 7, 14, 21, 28], o = 0; o < e.byteLength;) {
                            var i = 0
                                , s = 0
                                , a = void 0;
                            do {
                                s |= (127 & (a = n[o + i])) << r[i],
                                    i++
                            } while (i < Math.min(5, e.byteLength - o) && 0 != (128 & a)); if (0 != (128 & a) && i < 5)
                                throw new Error("Cannot read message size.");
                            if (5 === i && a > 7)
                                throw new Error("Messages bigger than 2GB are not supported.");
                            if (!(n.byteLength >= o + i + s))
                                throw new Error("Incomplete message.");
                            t.push(n.slice ? n.slice(o + i, o + i + s) : n.subarray(o + i, o + i + s)),
                                o = o + i + s
                        }
                        return t
                    }
                    ,
                    e
            }()
            , a = function () {
                function e() {
                    this.name = "messagepack",
                        this.version = 1,
                        this.transferFormat = i.TransferFormat.Binary
                }
                return e.prototype.parseMessages = function (e, t) {
                    var n = this;
                    if (!(e instanceof ArrayBuffer))
                        throw new Error("Invalid input for MessagePack hub protocol. Expected an ArrayBuffer.");
                    return null === t && (t = i.NullLogger.instance),
                        s.parse(e).map(function (e) {
                            return n.parseMessage(e, t)
                        })
                }
                    ,
                    e.prototype.writeMessage = function (e) {
                        switch (e.type) {
                            case i.MessageType.Invocation:
                                return this.writeInvocation(e);
                            case i.MessageType.StreamInvocation:
                                return this.writeStreamInvocation(e);
                            case i.MessageType.StreamItem:
                            case i.MessageType.Completion:
                                throw new Error("Writing messages of type '" + e.type + "' is not supported.");
                            default:
                                throw new Error("Invalid message type.")
                        }
                    }
                    ,
                    e.prototype.parseMessage = function (e, t) {
                        if (0 === e.length)
                            throw new Error("Invalid payload.");
                        var n = o().decode(new r.Buffer(e));
                        if (0 === n.length || !(n instanceof Array))
                            throw new Error("Invalid payload.");
                        var s = n[0];
                        switch (s) {
                            case i.MessageType.Invocation:
                                return this.createInvocationMessage(this.readHeaders(n), n);
                            case i.MessageType.StreamItem:
                                return this.createStreamItemMessage(this.readHeaders(n), n);
                            case i.MessageType.Completion:
                                return this.createCompletionMessage(this.readHeaders(n), n);
                            case i.MessageType.Ping:
                                return this.createPingMessage(n);
                            case i.MessageType.Close:
                                return this.createCloseMessage(n);
                            default:
                                return t.log(i.LogLevel.Information, "Unknown message type '" + s + "' ignored."),
                                    null
                        }
                    }
                    ,
                    e.prototype.createCloseMessage = function (e) {
                        if (e.length < 2)
                            throw new Error("Invalid payload for Close message.");
                        return {
                            error: e[1],
                            type: i.MessageType.Close
                        }
                    }
                    ,
                    e.prototype.createPingMessage = function (e) {
                        if (e.length < 1)
                            throw new Error("Invalid payload for Ping message.");
                        return {
                            type: i.MessageType.Ping
                        }
                    }
                    ,
                    e.prototype.createInvocationMessage = function (e, t) {
                        if (t.length < 5)
                            throw new Error("Invalid payload for Invocation message.");
                        var n = t[2];
                        return n ? {
                            arguments: t[4],
                            headers: e,
                            invocationId: n,
                            target: t[3],
                            type: i.MessageType.Invocation
                        } : {
                                arguments: t[4],
                                headers: e,
                                target: t[3],
                                type: i.MessageType.Invocation
                            }
                    }
                    ,
                    e.prototype.createStreamItemMessage = function (e, t) {
                        if (t.length < 4)
                            throw new Error("Invalid payload for StreamItem message.");
                        return {
                            headers: e,
                            invocationId: t[2],
                            item: t[3],
                            type: i.MessageType.StreamItem
                        }
                    }
                    ,
                    e.prototype.createCompletionMessage = function (e, t) {
                        if (t.length < 4)
                            throw new Error("Invalid payload for Completion message.");
                        var n = t[3];
                        if (2 !== n && t.length < 5)
                            throw new Error("Invalid payload for Completion message.");
                        var r = {
                            error: null,
                            headers: e,
                            invocationId: t[2],
                            result: null,
                            type: i.MessageType.Completion
                        };
                        switch (n) {
                            case 1:
                                r.error = t[4];
                                break;
                            case 3:
                                r.result = t[4]
                        }
                        return r
                    }
                    ,
                    e.prototype.writeInvocation = function (e) {
                        var t = o().encode([i.MessageType.Invocation, e.headers || {}, e.invocationId || null, e.target, e.arguments]);
                        return s.write(t.slice())
                    }
                    ,
                    e.prototype.writeStreamInvocation = function (e) {
                        var t = o().encode([i.MessageType.StreamInvocation, e.headers || {}, e.invocationId, e.target, e.arguments]);
                        return s.write(t.slice())
                    }
                    ,
                    e.prototype.readHeaders = function (e) {
                        var t = e[1];
                        if ("object" != typeof t)
                            throw new Error("Invalid headers.");
                        return t
                    }
                    ,
                    e
            }();
        n.d(t, "VERSION", function () {
            return u
        }),
            n.d(t, "MessagePackHubProtocol", function () {
                return a
            });
        var u = "1.0.2"
    }
    , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof TextDecoder ? new TextDecoder("utf-8") : null;
        t.decodeUtf8 = r ? r.decode.bind(r) : /*!
Logic in decodeImpl is derived from fast-text-encoding
https://github.com/samthor/fast-text-encoding

License for fast-text-encoding: Apache 2.0
https://github.com/samthor/fast-text-encoding/blob/master/LICENSE
*/
            function (e) {
                var t = 0
                    , n = e.length
                    , r = []
                    , o = [];
                for (; t < n;) {
                    var i = e[t++];
                    if (0 === i)
                        break;
                    if (0 == (128 & i))
                        r.push(i);
                    else if (192 == (224 & i)) {
                        var s = 63 & e[t++];
                        r.push((31 & i) << 6 | s)
                    } else if (224 == (240 & i)) {
                        var s = 63 & e[t++]
                            , a = 63 & e[t++];
                        r.push((31 & i) << 12 | s << 6 | a)
                    } else if (240 == (248 & i)) {
                        var s = 63 & e[t++]
                            , a = 63 & e[t++]
                            , u = 63 & e[t++]
                            , c = (7 & i) << 18 | s << 12 | a << 6 | u;
                        c > 65535 && (c -= 65536,
                            r.push(c >>> 10 & 1023 | 55296),
                            c = 56320 | 1023 & c),
                            r.push(c)
                    }
                    r.length > 1024 && (o.push(String.fromCharCode.apply(null, r)),
                        r.length = 0)
                }
                return o.push(String.fromCharCode.apply(null, r)),
                    o.join("")
            }
    }
    , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(36)
            , o = function () {
                function e(e) {
                    this.batchData = e;
                    var t = new u(e);
                    this.arrayRangeReader = new c(e),
                        this.arraySegmentReader = new l(e),
                        this.diffReader = new i(e),
                        this.editReader = new s(e, t),
                        this.frameReader = new a(e, t)
                }
                return e.prototype.updatedComponents = function () {
                    return f(this.batchData, this.batchData.length - 20)
                }
                    ,
                    e.prototype.referenceFrames = function () {
                        return f(this.batchData, this.batchData.length - 16)
                    }
                    ,
                    e.prototype.disposedComponentIds = function () {
                        return f(this.batchData, this.batchData.length - 12)
                    }
                    ,
                    e.prototype.disposedEventHandlerIds = function () {
                        return f(this.batchData, this.batchData.length - 8)
                    }
                    ,
                    e.prototype.updatedComponentsEntry = function (e, t) {
                        var n = e + 4 * t;
                        return f(this.batchData, n)
                    }
                    ,
                    e.prototype.referenceFramesEntry = function (e, t) {
                        return e + 16 * t
                    }
                    ,
                    e.prototype.disposedComponentIdsEntry = function (e, t) {
                        var n = e + 4 * t;
                        return f(this.batchData, n)
                    }
                    ,
                    e.prototype.disposedEventHandlerIdsEntry = function (e, t) {
                        var n = e + 4 * t;
                        return f(this.batchData, n)
                    }
                    ,
                    e
            }();
        t.OutOfProcessRenderBatch = o;
        var i = function () {
            function e(e) {
                this.batchDataUint8 = e
            }
            return e.prototype.componentId = function (e) {
                return f(this.batchDataUint8, e)
            }
                ,
                e.prototype.edits = function (e) {
                    return e + 4
                }
                ,
                e.prototype.editsEntry = function (e, t) {
                    return e + 16 * t
                }
                ,
                e
        }()
            , s = function () {
                function e(e, t) {
                    this.batchDataUint8 = e,
                        this.stringReader = t
                }
                return e.prototype.editType = function (e) {
                    return f(this.batchDataUint8, e)
                }
                    ,
                    e.prototype.siblingIndex = function (e) {
                        return f(this.batchDataUint8, e + 4)
                    }
                    ,
                    e.prototype.newTreeIndex = function (e) {
                        return f(this.batchDataUint8, e + 8)
                    }
                    ,
                    e.prototype.removedAttributeName = function (e) {
                        var t = f(this.batchDataUint8, e + 12);
                        return this.stringReader.readString(t)
                    }
                    ,
                    e
            }()
            , a = function () {
                function e(e, t) {
                    this.batchDataUint8 = e,
                        this.stringReader = t
                }
                return e.prototype.frameType = function (e) {
                    return f(this.batchDataUint8, e)
                }
                    ,
                    e.prototype.subtreeLength = function (e) {
                        return f(this.batchDataUint8, e + 4)
                    }
                    ,
                    e.prototype.elementReferenceCaptureId = function (e) {
                        var t = f(this.batchDataUint8, e + 4);
                        return this.stringReader.readString(t)
                    }
                    ,
                    e.prototype.componentId = function (e) {
                        return f(this.batchDataUint8, e + 8)
                    }
                    ,
                    e.prototype.elementName = function (e) {
                        var t = f(this.batchDataUint8, e + 8);
                        return this.stringReader.readString(t)
                    }
                    ,
                    e.prototype.textContent = function (e) {
                        var t = f(this.batchDataUint8, e + 4);
                        return this.stringReader.readString(t)
                    }
                    ,
                    e.prototype.markupContent = function (e) {
                        var t = f(this.batchDataUint8, e + 4);
                        return this.stringReader.readString(t)
                    }
                    ,
                    e.prototype.attributeName = function (e) {
                        var t = f(this.batchDataUint8, e + 4);
                        return this.stringReader.readString(t)
                    }
                    ,
                    e.prototype.attributeValue = function (e) {
                        var t = f(this.batchDataUint8, e + 8);
                        return this.stringReader.readString(t)
                    }
                    ,
                    e.prototype.attributeEventHandlerId = function (e) {
                        return f(this.batchDataUint8, e + 12)
                    }
                    ,
                    e
            }()
            , u = function () {
                function e(e) {
                    this.batchDataUint8 = e,
                        this.stringTableStartIndex = f(e, e.length - 4)
                }
                return e.prototype.readString = function (e) {
                    if (-1 === e)
                        return null;
                    var t, n = f(this.batchDataUint8, this.stringTableStartIndex + 4 * e), o = function (e, t) {
                        for (var n = 0, r = 0, o = 0; o < 4; o++) {
                            var i = e[t + o];
                            if (n |= (127 & i) << r,
                                i < 128)
                                break;
                            r += 7
                        }
                        return n
                    }(this.batchDataUint8, n), i = n + ((t = o) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : 4), s = new Uint8Array(this.batchDataUint8.buffer, this.batchDataUint8.byteOffset + i, o);
                    return r.decodeUtf8(s)
                }
                    ,
                    e
            }()
            , c = function () {
                function e(e) {
                    this.batchDataUint8 = e
                }
                return e.prototype.count = function (e) {
                    return f(this.batchDataUint8, e)
                }
                    ,
                    e.prototype.values = function (e) {
                        return e + 4
                    }
                    ,
                    e
            }()
            , l = function () {
                function e(e) {
                    this.batchDataUint8 = e
                }
                return e.prototype.offset = function (e) {
                    return 0
                }
                    ,
                    e.prototype.count = function (e) {
                        return f(this.batchDataUint8, e)
                    }
                    ,
                    e.prototype.values = function (e) {
                        return e + 4
                    }
                    ,
                    e
            }();
        function f(e, t) {
            return e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24
        }
    }
    , function (e, t, n) {
        "use strict";
        var r = n(3).Buffer
            , o = n(10);
        function i(e, t) {
            var n, o = !0;
            return Math.fround && (o = Math.fround(e) !== e),
                t && (o = !0),
                o ? ((n = r.allocUnsafe(9))[0] = 203,
                    n.writeDoubleBE(e, 1)) : ((n = r.allocUnsafe(5))[0] = 202,
                        n.writeFloatBE(e, 1)),
                n
        }
        e.exports = function (e, t, n, s) {
            function a(u, c) {
                var l, f;
                if (void 0 === u)
                    throw new Error("undefined is not encodable in msgpack!");
                if (null === u)
                    (l = r.allocUnsafe(1))[0] = 192;
                else if (!0 === u)
                    (l = r.allocUnsafe(1))[0] = 195;
                else if (!1 === u)
                    (l = r.allocUnsafe(1))[0] = 194;
                else if ("string" == typeof u)
                    (f = r.byteLength(u)) < 32 ? ((l = r.allocUnsafe(1 + f))[0] = 160 | f,
                        f > 0 && l.write(u, 1)) : f <= 255 && !n ? ((l = r.allocUnsafe(2 + f))[0] = 217,
                            l[1] = f,
                            l.write(u, 2)) : f <= 65535 ? ((l = r.allocUnsafe(3 + f))[0] = 218,
                                l.writeUInt16BE(f, 1),
                                l.write(u, 3)) : ((l = r.allocUnsafe(5 + f))[0] = 219,
                                    l.writeUInt32BE(f, 1),
                                    l.write(u, 5));
                else if (u && (u.readUInt32LE || u instanceof Uint8Array))
                    u instanceof Uint8Array && (u = r.from(u)),
                        u.length <= 255 ? ((l = r.allocUnsafe(2))[0] = 196,
                            l[1] = u.length) : u.length <= 65535 ? ((l = r.allocUnsafe(3))[0] = 197,
                                l.writeUInt16BE(u.length, 1)) : ((l = r.allocUnsafe(5))[0] = 198,
                                    l.writeUInt32BE(u.length, 1)),
                        l = o([l, u]);
                else if (Array.isArray(u))
                    u.length < 16 ? (l = r.allocUnsafe(1))[0] = 144 | u.length : u.length < 65536 ? ((l = r.allocUnsafe(3))[0] = 220,
                        l.writeUInt16BE(u.length, 1)) : ((l = r.allocUnsafe(5))[0] = 221,
                            l.writeUInt32BE(u.length, 1)),
                        l = u.reduce(function (e, t) {
                            return e.append(a(t, !0)),
                                e
                        }, o().append(l));
                else {
                    if (!s && "function" == typeof u.getDate)
                        return function (e) {
                            var t, n = 1 * e, i = Math.floor(n / 1e3), s = 1e6 * (n - 1e3 * i);
                            if (s || i > 4294967295) {
                                (t = r.allocUnsafe(10))[0] = 215,
                                    t[1] = -1;
                                var a = 4 * s
                                    , u = i / Math.pow(2, 32)
                                    , c = a + u & 4294967295
                                    , l = 4294967295 & i;
                                t.writeInt32BE(c, 2),
                                    t.writeInt32BE(l, 6)
                            } else
                                (t = r.allocUnsafe(6))[0] = 214,
                                    t[1] = -1,
                                    t.writeUInt32BE(Math.floor(n / 1e3), 2);
                            return o().append(t)
                        }(u);
                    if ("object" == typeof u)
                        l = function (t) {
                            var n, i, s = -1, a = [];
                            for (n = 0; n < e.length; n++)
                                if (e[n].check(t)) {
                                    i = e[n].encode(t);
                                    break
                                }
                            if (!i)
                                return null;
                            1 == (s = i.length - 1) ? a.push(212) : 2 === s ? a.push(213) : 4 === s ? a.push(214) : 8 === s ? a.push(215) : 16 === s ? a.push(216) : s < 256 ? (a.push(199),
                                a.push(s)) : s < 65536 ? (a.push(200),
                                    a.push(s >> 8),
                                    a.push(255 & s)) : (a.push(201),
                                        a.push(s >> 24),
                                        a.push(s >> 16 & 255),
                                        a.push(s >> 8 & 255),
                                        a.push(255 & s));
                            return o().append(r.from(a)).append(i)
                        }(u) || function (e) {
                            var t, n, i = [], s = 0;
                            for (t in e)
                                e.hasOwnProperty(t) && void 0 !== e[t] && "function" != typeof e[t] && (++s,
                                    i.push(a(t, !0)),
                                    i.push(a(e[t], !0)));
                            s < 16 ? (n = r.allocUnsafe(1))[0] = 128 | s : s < 65535 ? ((n = r.allocUnsafe(3))[0] = 222,
                                n.writeUInt16BE(s, 1)) : ((n = r.allocUnsafe(5))[0] = 223,
                                    n.writeUInt32BE(s, 1));
                            return i.unshift(n),
                                i.reduce(function (e, t) {
                                    return e.append(t)
                                }, o())
                        }(u);
                    else if ("number" == typeof u) {
                        if (u % 1 != 0)
                            return i(u, t);
                        if (u >= 0)
                            if (u < 128)
                                (l = r.allocUnsafe(1))[0] = u;
                            else if (u < 256)
                                (l = r.allocUnsafe(2))[0] = 204,
                                    l[1] = u;
                            else if (u < 65536)
                                (l = r.allocUnsafe(3))[0] = 205,
                                    l.writeUInt16BE(u, 1);
                            else if (u <= 4294967295)
                                (l = r.allocUnsafe(5))[0] = 206,
                                    l.writeUInt32BE(u, 1);
                            else {
                                if (!(u <= 9007199254740991))
                                    return i(u, !0);
                                (l = r.allocUnsafe(9))[0] = 207,
                                    function (e, t) {
                                        for (var n = 7; n >= 0; n--)
                                            e[n + 1] = 255 & t,
                                                t /= 256
                                    }(l, u)
                            }
                        else if (u >= -32)
                            (l = r.allocUnsafe(1))[0] = 256 + u;
                        else if (u >= -128)
                            (l = r.allocUnsafe(2))[0] = 208,
                                l.writeInt8(u, 1);
                        else if (u >= -32768)
                            (l = r.allocUnsafe(3))[0] = 209,
                                l.writeInt16BE(u, 1);
                        else if (u > -214748365)
                            (l = r.allocUnsafe(5))[0] = 210,
                                l.writeInt32BE(u, 1);
                        else {
                            if (!(u >= -9007199254740991))
                                return i(u, !0);
                            (l = r.allocUnsafe(9))[0] = 211,
                                function (e, t, n) {
                                    var r = n < 0;
                                    r && (n = Math.abs(n));
                                    var o = n % 4294967296
                                        , i = n / 4294967296;
                                    if (e.writeUInt32BE(Math.floor(i), t + 0),
                                        e.writeUInt32BE(o, t + 4),
                                        r)
                                        for (var s = 1, a = t + 7; a >= t; a--) {
                                            var u = (255 ^ e[a]) + s;
                                            e[a] = 255 & u,
                                                s = u >> 8
                                        }
                                }(l, 1, u)
                        }
                    }
                }
                if (!l)
                    throw new Error("not implemented yet");
                return c ? l : l.slice()
            }
            return a
        }
    }
    , function (e, t, n) {
        "use strict";
        var r = n(10);
        function o(e) {
            Error.call(this),
                Error.captureStackTrace && Error.captureStackTrace(this, this.constructor),
                this.name = this.constructor.name,
                this.message = e || "unable to decode"
        }
        n(14).inherits(o, Error),
            e.exports = function (e) {
                return function (e) {
                    e instanceof r || (e = r().append(e));
                    var t = i(e);
                    if (t)
                        return e.consume(t.bytesConsumed),
                            t.value;
                    throw new o
                }
                    ;
                function t(e, t, n) {
                    return t >= n + e
                }
                function n(e, t) {
                    return {
                        value: e,
                        bytesConsumed: t
                    }
                }
                function i(e, r) {
                    r = void 0 === r ? 0 : r;
                    var o = e.length - r;
                    if (o <= 0)
                        return null;
                    var i, l, f, h = e.readUInt8(r), p = 0;
                    if (!function (e, t) {
                        var n = function (e) {
                            switch (e) {
                                case 196:
                                    return 2;
                                case 197:
                                    return 3;
                                case 198:
                                    return 5;
                                case 199:
                                    return 3;
                                case 200:
                                    return 4;
                                case 201:
                                    return 6;
                                case 202:
                                    return 5;
                                case 203:
                                    return 9;
                                case 204:
                                    return 2;
                                case 205:
                                    return 3;
                                case 206:
                                    return 5;
                                case 207:
                                    return 9;
                                case 208:
                                    return 2;
                                case 209:
                                    return 3;
                                case 210:
                                    return 5;
                                case 211:
                                    return 9;
                                case 212:
                                    return 3;
                                case 213:
                                    return 4;
                                case 214:
                                    return 6;
                                case 215:
                                    return 10;
                                case 216:
                                    return 18;
                                case 217:
                                    return 2;
                                case 218:
                                    return 3;
                                case 219:
                                    return 5;
                                case 222:
                                    return 3;
                                default:
                                    return -1
                            }
                        }(e);
                        return !(-1 !== n && t < n)
                    }(h, o))
                        return null;
                    switch (h) {
                        case 192:
                            return n(null, 1);
                        case 194:
                            return n(!1, 1);
                        case 195:
                            return n(!0, 1);
                        case 204:
                            return n(p = e.readUInt8(r + 1), 2);
                        case 205:
                            return n(p = e.readUInt16BE(r + 1), 3);
                        case 206:
                            return n(p = e.readUInt32BE(r + 1), 5);
                        case 207:
                            for (f = 7; f >= 0; f--)
                                p += e.readUInt8(r + f + 1) * Math.pow(2, 8 * (7 - f));
                            return n(p, 9);
                        case 208:
                            return n(p = e.readInt8(r + 1), 2);
                        case 209:
                            return n(p = e.readInt16BE(r + 1), 3);
                        case 210:
                            return n(p = e.readInt32BE(r + 1), 5);
                        case 211:
                            return n(p = function (e, t) {
                                var n = 128 == (128 & e[t]);
                                if (n)
                                    for (var r = 1, o = t + 7; o >= t; o--) {
                                        var i = (255 ^ e[o]) + r;
                                        e[o] = 255 & i,
                                            r = i >> 8
                                    }
                                var s = e.readUInt32BE(t + 0)
                                    , a = e.readUInt32BE(t + 4);
                                return (4294967296 * s + a) * (n ? -1 : 1)
                            }(e.slice(r + 1, r + 9), 0), 9);
                        case 202:
                            return n(p = e.readFloatBE(r + 1), 5);
                        case 203:
                            return n(p = e.readDoubleBE(r + 1), 9);
                        case 217:
                            return t(i = e.readUInt8(r + 1), o, 2) ? n(p = e.toString("utf8", r + 2, r + 2 + i), 2 + i) : null;
                        case 218:
                            return t(i = e.readUInt16BE(r + 1), o, 3) ? n(p = e.toString("utf8", r + 3, r + 3 + i), 3 + i) : null;
                        case 219:
                            return t(i = e.readUInt32BE(r + 1), o, 5) ? n(p = e.toString("utf8", r + 5, r + 5 + i), 5 + i) : null;
                        case 196:
                            return t(i = e.readUInt8(r + 1), o, 2) ? n(p = e.slice(r + 2, r + 2 + i), 2 + i) : null;
                        case 197:
                            return t(i = e.readUInt16BE(r + 1), o, 3) ? n(p = e.slice(r + 3, r + 3 + i), 3 + i) : null;
                        case 198:
                            return t(i = e.readUInt32BE(r + 1), o, 5) ? n(p = e.slice(r + 5, r + 5 + i), 5 + i) : null;
                        case 220:
                            return o < 3 ? null : s(e, r, i = e.readUInt16BE(r + 1), 3);
                        case 221:
                            return o < 5 ? null : s(e, r, i = e.readUInt32BE(r + 1), 5);
                        case 222:
                            return a(e, r, i = e.readUInt16BE(r + 1), 3);
                        case 223:
                            return a(e, r, i = e.readUInt32BE(r + 1), 5);
                        case 212:
                            return u(e, r, 1);
                        case 213:
                            return u(e, r, 2);
                        case 214:
                            return u(e, r, 4);
                        case 215:
                            return u(e, r, 8);
                        case 216:
                            return u(e, r, 16);
                        case 199:
                            return i = e.readUInt8(r + 1),
                                l = e.readUInt8(r + 2),
                                t(i, o, 3) ? c(e, r, l, i, 3) : null;
                        case 200:
                            return i = e.readUInt16BE(r + 1),
                                l = e.readUInt8(r + 3),
                                t(i, o, 4) ? c(e, r, l, i, 4) : null;
                        case 201:
                            return i = e.readUInt32BE(r + 1),
                                l = e.readUInt8(r + 5),
                                t(i, o, 6) ? c(e, r, l, i, 6) : null
                    }
                    if (144 == (240 & h))
                        return s(e, r, i = 15 & h, 1);
                    if (128 == (240 & h))
                        return a(e, r, i = 15 & h, 1);
                    if (160 == (224 & h))
                        return t(i = 31 & h, o, 1) ? n(p = e.toString("utf8", r + 1, r + i + 1), i + 1) : null;
                    if (h >= 224)
                        return n(p = h - 256, 1);
                    if (h < 128)
                        return n(h, 1);
                    throw new Error("not implemented yet")
                }
                function s(e, t, r, o) {
                    var s, a = [], u = 0;
                    for (t += o,
                        s = 0; s < r; s++) {
                        var c = i(e, t);
                        if (!c)
                            return null;
                        a.push(c.value),
                            t += c.bytesConsumed,
                            u += c.bytesConsumed
                    }
                    return n(a, o + u)
                }
                function a(e, t, r, o) {
                    var s, a = {}, u = 0;
                    for (t += o,
                        s = 0; s < r; s++) {
                        var c = i(e, t);
                        if (!c)
                            return null;
                        var l = i(e, t += c.bytesConsumed);
                        if (!l)
                            return null;
                        a[c.value] = l.value,
                            t += l.bytesConsumed,
                            u += c.bytesConsumed + l.bytesConsumed
                    }
                    return n(a, o + u)
                }
                function u(e, t, n) {
                    return c(e, t, e.readInt8(t + 1), n, 2)
                }
                function c(t, r, o, i, s) {
                    var a, u;
                    if (r += s,
                        o < 0)
                        switch (o) {
                            case -1:
                                return function (e, t, r) {
                                    var o, i = 0;
                                    switch (t) {
                                        case 4:
                                            o = e.readUInt32BE(0);
                                            break;
                                        case 8:
                                            var s = e.readUInt32BE(0)
                                                , a = e.readUInt32BE(4);
                                            i = s / 4,
                                                o = (3 & s) * Math.pow(2, 32) + a;
                                            break;
                                        case 12:
                                            throw new Error("timestamp 96 is not yet implemented")
                                    }
                                    var u = 1e3 * o + Math.round(i / 1e6);
                                    return n(new Date(u), t + r)
                                }(u = t.slice(r, r + i), i, s)
                        }
                    for (a = 0; a < e.length; a++) {
                        if (o === e[a].type)
                            return u = t.slice(r, r + i),
                                n(e[a].decode(u), s + i)
                    }
                    throw new Error("unable to find ext type " + o)
                }
            }
            ,
            e.exports.IncompleteBufferError = o
    }
    , function (e, t, n) {
        "use strict";
        var r = n(33).Transform
            , o = n(2)
            , i = n(10);
        function s(e) {
            (e = e || {}).objectMode = !0,
                e.highWaterMark = 16,
                r.call(this, e),
                this._msgpack = e.msgpack
        }
        function a(e) {
            if (!(this instanceof a))
                return (e = e || {}).msgpack = this,
                    new a(e);
            s.call(this, e),
                this._wrap = "wrap" in e && e.wrap
        }
        function u(e) {
            if (!(this instanceof u))
                return (e = e || {}).msgpack = this,
                    new u(e);
            s.call(this, e),
                this._chunks = i(),
                this._wrap = "wrap" in e && e.wrap
        }
        o(s, r),
            o(a, s),
            a.prototype._transform = function (e, t, n) {
                var r = null;
                try {
                    r = this._msgpack.encode(this._wrap ? e.value : e).slice(0)
                } catch (e) {
                    return this.emit("error", e),
                        n()
                }
                this.push(r),
                    n()
            }
            ,
            o(u, s),
            u.prototype._transform = function (e, t, n) {
                e && this._chunks.append(e);
                try {
                    var r = this._msgpack.decode(this._chunks);
                    this._wrap && (r = {
                        value: r
                    }),
                        this.push(r)
                } catch (e) {
                    return void (e instanceof this._msgpack.IncompleteBufferError ? n() : this.emit("error", e))
                }
                this._chunks.length > 0 ? this._transform(null, t, n) : n()
            }
            ,
            e.exports.decoder = u,
            e.exports.encoder = a
    }
    , function (e, t, n) {
        "use strict";
        e.exports = i;
        var r = n(26)
            , o = n(5);
        function i(e) {
            if (!(this instanceof i))
                return new i(e);
            r.call(this, e)
        }
        o.inherits = n(2),
            o.inherits(i, r),
            i.prototype._transform = function (e, t, n) {
                n(null, e)
            }
    }
    , function (e, t, n) {
        (function (t) {
            function n(e) {
                try {
                    if (!t.localStorage)
                        return !1
                } catch (e) {
                    return !1
                }
                var n = t.localStorage[e];
                return null != n && "true" === String(n).toLowerCase()
            }
            e.exports = function (e, t) {
                if (n("noDeprecation"))
                    return e;
                var r = !1;
                return function () {
                    if (!r) {
                        if (n("throwDeprecation"))
                            throw new Error(t);
                        n("traceDeprecation") ? console.trace(t) : console.warn(t),
                            r = !0
                    }
                    return e.apply(this, arguments)
                }
            }
        }
        ).call(this, n(1))
    }
    , function (e, t, n) {
        (function (e, t) {
            !function (e, n) {
                "use strict";
                if (!e.setImmediate) {
                    var r, o, i, s, a, u = 1, c = {}, l = !1, f = e.document, h = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    h = h && h.setTimeout ? h : e,
                        "[object process]" === {}.toString.call(e.process) ? r = function (e) {
                            t.nextTick(function () {
                                d(e)
                            })
                        }
                            : !function () {
                                if (e.postMessage && !e.importScripts) {
                                    var t = !0
                                        , n = e.onmessage;
                                    return e.onmessage = function () {
                                        t = !1
                                    }
                                        ,
                                        e.postMessage("", "*"),
                                        e.onmessage = n,
                                        t
                                }
                            }() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function (e) {
                                d(e.data)
                            }
                                ,
                                r = function (e) {
                                    i.port2.postMessage(e)
                                }
                            ) : f && "onreadystatechange" in f.createElement("script") ? (o = f.documentElement,
                                r = function (e) {
                                    var t = f.createElement("script");
                                    t.onreadystatechange = function () {
                                        d(e),
                                            t.onreadystatechange = null,
                                            o.removeChild(t),
                                            t = null
                                    }
                                        ,
                                        o.appendChild(t)
                                }
                            ) : r = function (e) {
                                setTimeout(d, 0, e)
                            }
                                : (s = "setImmediate$" + Math.random() + "$",
                                    a = function (t) {
                                        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && d(+t.data.slice(s.length))
                                    }
                                    ,
                                    e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a),
                                    r = function (t) {
                                        e.postMessage(s + t, "*")
                                    }
                                ),
                        h.setImmediate = function (e) {
                            "function" != typeof e && (e = new Function("" + e));
                            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                                t[n] = arguments[n + 1];
                            var o = {
                                callback: e,
                                args: t
                            };
                            return c[u] = o,
                                r(u),
                                u++
                        }
                        ,
                        h.clearImmediate = p
                }
                function p(e) {
                    delete c[e]
                }
                function d(e) {
                    if (l)
                        setTimeout(d, 0, e);
                    else {
                        var t = c[e];
                        if (t) {
                            l = !0;
                            try {
                                !function (e) {
                                    var t = e.callback
                                        , r = e.args;
                                    switch (r.length) {
                                        case 0:
                                            t();
                                            break;
                                        case 1:
                                            t(r[0]);
                                            break;
                                        case 2:
                                            t(r[0], r[1]);
                                            break;
                                        case 3:
                                            t(r[0], r[1], r[2]);
                                            break;
                                        default:
                                            t.apply(n, r)
                                    }
                                }(t)
                            } finally {
                                p(e),
                                    l = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }
        ).call(this, n(1), n(6))
    }
    , function (e, t, n) {
        (function (e) {
            var r = void 0 !== e && e || "undefined" != typeof self && self || window
                , o = Function.prototype.apply;
            function i(e, t) {
                this._id = e,
                    this._clearFn = t
            }
            t.setTimeout = function () {
                return new i(o.call(setTimeout, r, arguments), clearTimeout)
            }
                ,
                t.setInterval = function () {
                    return new i(o.call(setInterval, r, arguments), clearInterval)
                }
                ,
                t.clearTimeout = t.clearInterval = function (e) {
                    e && e.close()
                }
                ,
                i.prototype.unref = i.prototype.ref = function () { }
                ,
                i.prototype.close = function () {
                    this._clearFn.call(r, this._id)
                }
                ,
                t.enroll = function (e, t) {
                    clearTimeout(e._idleTimeoutId),
                        e._idleTimeout = t
                }
                ,
                t.unenroll = function (e) {
                    clearTimeout(e._idleTimeoutId),
                        e._idleTimeout = -1
                }
                ,
                t._unrefActive = t.active = function (e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    t >= 0 && (e._idleTimeoutId = setTimeout(function () {
                        e._onTimeout && e._onTimeout()
                    }, t))
                }
                ,
                n(43),
                t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
                t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }
        ).call(this, n(1))
    }
    , function (e, t) { }
    , function (e, t, n) {
        "use strict";
        var r = n(3).Buffer
            , o = n(45);
        e.exports = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    this.head = null,
                    this.tail = null,
                    this.length = 0
            }
            return e.prototype.push = function (e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t,
                    this.tail = t,
                    ++this.length
            }
                ,
                e.prototype.unshift = function (e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t),
                        this.head = t,
                        ++this.length
                }
                ,
                e.prototype.shift = function () {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                            --this.length,
                            e
                    }
                }
                ,
                e.prototype.clear = function () {
                    this.head = this.tail = null,
                        this.length = 0
                }
                ,
                e.prototype.join = function (e) {
                    if (0 === this.length)
                        return "";
                    for (var t = this.head, n = "" + t.data; t = t.next;)
                        n += e + t.data;
                    return n
                }
                ,
                e.prototype.concat = function (e) {
                    if (0 === this.length)
                        return r.alloc(0);
                    if (1 === this.length)
                        return this.head.data;
                    for (var t, n, o, i = r.allocUnsafe(e >>> 0), s = this.head, a = 0; s;)
                        t = s.data,
                            n = i,
                            o = a,
                            t.copy(n, o),
                            a += s.data.length,
                            s = s.next;
                    return i
                }
                ,
                e
        }(),
            o && o.inspect && o.inspect.custom && (e.exports.prototype[o.inspect.custom] = function () {
                var e = o.inspect({
                    length: this.length
                });
                return this.constructor.name + " " + e
            }
            )
    }
    , function (e, t) { }
    , function (e, t) {
        e.exports = function (e) {
            return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
        }
    }
    , function (e, t, n) {
        "use strict";
        (function (t) {
            /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
            function r(e, t) {
                if (e === t)
                    return 0;
                for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
                    if (e[o] !== t[o]) {
                        n = e[o],
                            r = t[o];
                        break
                    }
                return n < r ? -1 : r < n ? 1 : 0
            }
            function o(e) {
                return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer)
            }
            var i = n(14)
                , s = Object.prototype.hasOwnProperty
                , a = Array.prototype.slice
                , u = "foo" === function () { }
                    .name;
            function c(e) {
                return Object.prototype.toString.call(e)
            }
            function l(e) {
                return !o(e) && ("function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer))))
            }
            var f = e.exports = v
                , h = /\s*function\s+([^\(\s]*)\s*/;
            function p(e) {
                if (i.isFunction(e)) {
                    if (u)
                        return e.name;
                    var t = e.toString().match(h);
                    return t && t[1]
                }
            }
            function d(e, t) {
                return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e
            }
            function g(e) {
                if (u || !i.isFunction(e))
                    return i.inspect(e);
                var t = p(e);
                return "[Function" + (t ? ": " + t : "") + "]"
            }
            function y(e, t, n, r, o) {
                throw new f.AssertionError({
                    message: n,
                    actual: e,
                    expected: t,
                    operator: r,
                    stackStartFunction: o
                })
            }
            function v(e, t) {
                e || y(e, !0, t, "==", f.ok)
            }
            function m(e, t, n, s) {
                if (e === t)
                    return !0;
                if (o(e) && o(t))
                    return 0 === r(e, t);
                if (i.isDate(e) && i.isDate(t))
                    return e.getTime() === t.getTime();
                if (i.isRegExp(e) && i.isRegExp(t))
                    return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
                if (null !== e && "object" == typeof e || null !== t && "object" == typeof t) {
                    if (l(e) && l(t) && c(e) === c(t) && !(e instanceof Float32Array || e instanceof Float64Array))
                        return 0 === r(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
                    if (o(e) !== o(t))
                        return !1;
                    var u = (s = s || {
                        actual: [],
                        expected: []
                    }).actual.indexOf(e);
                    return -1 !== u && u === s.expected.indexOf(t) || (s.actual.push(e),
                        s.expected.push(t),
                        function (e, t, n, r) {
                            if (null === e || void 0 === e || null === t || void 0 === t)
                                return !1;
                            if (i.isPrimitive(e) || i.isPrimitive(t))
                                return e === t;
                            if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
                                return !1;
                            var o = b(e)
                                , s = b(t);
                            if (o && !s || !o && s)
                                return !1;
                            if (o)
                                return e = a.call(e),
                                    t = a.call(t),
                                    m(e, t, n);
                            var u, c, l = S(e), f = S(t);
                            if (l.length !== f.length)
                                return !1;
                            for (l.sort(),
                                f.sort(),
                                c = l.length - 1; c >= 0; c--)
                                if (l[c] !== f[c])
                                    return !1;
                            for (c = l.length - 1; c >= 0; c--)
                                if (u = l[c],
                                    !m(e[u], t[u], n, r))
                                    return !1;
                            return !0
                        }(e, t, n, s))
                }
                return n ? e === t : e == t
            }
            function b(e) {
                return "[object Arguments]" == Object.prototype.toString.call(e)
            }
            function w(e, t) {
                if (!e || !t)
                    return !1;
                if ("[object RegExp]" == Object.prototype.toString.call(t))
                    return t.test(e);
                try {
                    if (e instanceof t)
                        return !0
                } catch (e) { }
                return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
            }
            function E(e, t, n, r) {
                var o;
                if ("function" != typeof t)
                    throw new TypeError('"block" argument must be a function');
                "string" == typeof n && (r = n,
                    n = null),
                    o = function (e) {
                        var t;
                        try {
                            e()
                        } catch (e) {
                            t = e
                        }
                        return t
                    }(t),
                    r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."),
                    e && !o && y(o, n, "Missing expected exception" + r);
                var s = "string" == typeof r
                    , a = !e && i.isError(o)
                    , u = !e && o && !n;
                if ((a && s && w(o, n) || u) && y(o, n, "Got unwanted exception" + r),
                    e && o && n && !w(o, n) || !e && o)
                    throw o
            }
            f.AssertionError = function (e) {
                var t;
                this.name = "AssertionError",
                    this.actual = e.actual,
                    this.expected = e.expected,
                    this.operator = e.operator,
                    e.message ? (this.message = e.message,
                        this.generatedMessage = !1) : (this.message = d(g((t = this).actual), 128) + " " + t.operator + " " + d(g(t.expected), 128),
                            this.generatedMessage = !0);
                var n = e.stackStartFunction || y;
                if (Error.captureStackTrace)
                    Error.captureStackTrace(this, n);
                else {
                    var r = new Error;
                    if (r.stack) {
                        var o = r.stack
                            , i = p(n)
                            , s = o.indexOf("\n" + i);
                        if (s >= 0) {
                            var a = o.indexOf("\n", s + 1);
                            o = o.substring(a + 1)
                        }
                        this.stack = o
                    }
                }
            }
                ,
                i.inherits(f.AssertionError, Error),
                f.fail = y,
                f.ok = v,
                f.equal = function (e, t, n) {
                    e != t && y(e, t, n, "==", f.equal)
                }
                ,
                f.notEqual = function (e, t, n) {
                    e == t && y(e, t, n, "!=", f.notEqual)
                }
                ,
                f.deepEqual = function (e, t, n) {
                    m(e, t, !1) || y(e, t, n, "deepEqual", f.deepEqual)
                }
                ,
                f.deepStrictEqual = function (e, t, n) {
                    m(e, t, !0) || y(e, t, n, "deepStrictEqual", f.deepStrictEqual)
                }
                ,
                f.notDeepEqual = function (e, t, n) {
                    m(e, t, !1) && y(e, t, n, "notDeepEqual", f.notDeepEqual)
                }
                ,
                f.notDeepStrictEqual = function e(t, n, r) {
                    m(t, n, !0) && y(t, n, r, "notDeepStrictEqual", e)
                }
                ,
                f.strictEqual = function (e, t, n) {
                    e !== t && y(e, t, n, "===", f.strictEqual)
                }
                ,
                f.notStrictEqual = function (e, t, n) {
                    e === t && y(e, t, n, "!==", f.notStrictEqual)
                }
                ,
                f.throws = function (e, t, n) {
                    E(!0, e, t, n)
                }
                ,
                f.doesNotThrow = function (e, t, n) {
                    E(!1, e, t, n)
                }
                ,
                f.ifError = function (e) {
                    if (e)
                        throw e
                }
                ;
            var S = Object.keys || function (e) {
                var t = [];
                for (var n in e)
                    s.call(e, n) && t.push(n);
                return t
            }
        }
        ).call(this, n(1))
    }
    , function (e, t) {
        t.read = function (e, t, n, r, o) {
            var i, s, a = 8 * o - r - 1, u = (1 << a) - 1, c = u >> 1, l = -7, f = n ? o - 1 : 0, h = n ? -1 : 1, p = e[t + f];
            for (f += h,
                i = p & (1 << -l) - 1,
                p >>= -l,
                l += a; l > 0; i = 256 * i + e[t + f],
                f += h,
                l -= 8)
                ;
            for (s = i & (1 << -l) - 1,
                i >>= -l,
                l += r; l > 0; s = 256 * s + e[t + f],
                f += h,
                l -= 8)
                ;
            if (0 === i)
                i = 1 - c;
            else {
                if (i === u)
                    return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, r),
                    i -= c
            }
            return (p ? -1 : 1) * s * Math.pow(2, i - r)
        }
            ,
            t.write = function (e, t, n, r, o, i) {
                var s, a, u, c = 8 * i - o - 1, l = (1 << c) - 1, f = l >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : i - 1, d = r ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t),
                    isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
                        s = l) : (s = Math.floor(Math.log(t) / Math.LN2),
                            t * (u = Math.pow(2, -s)) < 1 && (s-- ,
                                u *= 2),
                            (t += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (s++ ,
                                u /= 2),
                            s + f >= l ? (a = 0,
                                s = l) : s + f >= 1 ? (a = (t * u - 1) * Math.pow(2, o),
                                    s += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, o),
                                        s = 0)); o >= 8; e[n + p] = 255 & a,
                                        p += d,
                                        a /= 256,
                    o -= 8)
                    ;
                for (s = s << o | a,
                    c += o; c > 0; e[n + p] = 255 & s,
                    p += d,
                    s /= 256,
                    c -= 8)
                    ;
                e[n + p - d] |= 128 * g
            }
    }
    , function (e, t, n) {
        "use strict";
        t.byteLength = function (e) {
            var t = c(e)
                , n = t[0]
                , r = t[1];
            return 3 * (n + r) / 4 - r
        }
            ,
            t.toByteArray = function (e) {
                for (var t, n = c(e), r = n[0], s = n[1], a = new i(function (e, t, n) {
                    return 3 * (t + n) / 4 - n
                }(0, r, s)), u = 0, l = s > 0 ? r - 4 : r, f = 0; f < l; f += 4)
                    t = o[e.charCodeAt(f)] << 18 | o[e.charCodeAt(f + 1)] << 12 | o[e.charCodeAt(f + 2)] << 6 | o[e.charCodeAt(f + 3)],
                        a[u++] = t >> 16 & 255,
                        a[u++] = t >> 8 & 255,
                        a[u++] = 255 & t;
                2 === s && (t = o[e.charCodeAt(f)] << 2 | o[e.charCodeAt(f + 1)] >> 4,
                    a[u++] = 255 & t);
                1 === s && (t = o[e.charCodeAt(f)] << 10 | o[e.charCodeAt(f + 1)] << 4 | o[e.charCodeAt(f + 2)] >> 2,
                    a[u++] = t >> 8 & 255,
                    a[u++] = 255 & t);
                return a
            }
            ,
            t.fromByteArray = function (e) {
                for (var t, n = e.length, o = n % 3, i = [], s = 0, a = n - o; s < a; s += 16383)
                    i.push(l(e, s, s + 16383 > a ? a : s + 16383));
                1 === o ? (t = e[n - 1],
                    i.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1],
                        i.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
                return i.join("")
            }
            ;
        for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a)
            r[a] = s[a],
                o[s.charCodeAt(a)] = a;
        function c(e) {
            var t = e.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t),
                [n, n === t ? 0 : 4 - n % 4]
        }
        function l(e, t, n) {
            for (var o, i, s = [], a = t; a < n; a += 3)
                o = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]),
                    s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
            return s.join("")
        }
        o["-".charCodeAt(0)] = 62,
            o["_".charCodeAt(0)] = 63
    }
    , function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
                function s(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function a(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function u(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }
                    ).then(s, a)
                }
                u((r = r.apply(e, t || [])).next())
            }
            )
        }
            , o = this && this.__generator || function (e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }
                    ),
                    i;
                function a(i) {
                    return function (a) {
                        return function (i) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; s;)
                                try {
                                    if (n = 1,
                                        r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                        return o;
                                    switch (r = 0,
                                    o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++ ,
                                                {
                                                    value: i[1],
                                                    done: !1
                                                };
                                        case 5:
                                            s.label++ ,
                                                r = i[1],
                                                i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(),
                                                s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1],
                                                    o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2],
                                                    s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(),
                                                s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e],
                                        r = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            n(25),
            n(24);
        var i, s = n(0), a = n(35), u = n(37), c = n(11), l = n(7), f = n(15);
        function h(e) {
            console.error(e),
                i && i.stop()
        }
        !function () {
            var e = this
                , t = f.fetchBootConfigAsync().then(function (e) {
                    return f.loadEmbeddedResourcesAsync(e)
                });
            (i = (new s.HubConnectionBuilder).withUrl("/_blazor").withHubProtocol(new a.MessagePackHubProtocol).configureLogging(s.LogLevel.Information).build()).on("JS.BeginInvokeJS", DotNet.jsCallDispatcher.beginInvokeJSFromDotNet),
                i.on("JS.RenderBatch", function (e, t, n) {
                    try {
                        l.renderBatch(e, new u.OutOfProcessRenderBatch(n)),
                            i.send("OnRenderCompleted", t, null)
                    } catch (e) {
                        throw i.send("OnRenderCompleted", t, e.toString()),
                        e
                    }
                }),
                i.on("JS.Error", h),
                i.start().then(function () {
                    return r(e, void 0, void 0, function () {
                        return o(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return DotNet.attachDispatcher({
                                        beginInvokeDotNetFromJS: function (e, t, n, r, o) {
                                            i.send("BeginInvokeDotNetFromJS", e ? e.toString() : null, t, n, r || 0, o)
                                        }
                                    }),
                                        [4, t];
                                case 1:
                                    return e.sent(),
                                        i.send("StartCircuit", c.internalFunctions.getLocationHref(), c.internalFunctions.getBaseURI()),
                                        [2]
                            }
                        })
                    })
                }).catch(h),
                window.Blazor.onServerConnectionClose = i.onclose.bind(i)
        }()
    }
]);
