!function(url) {
    var arr = {};
    function _init(three) { // 100% honest -- no idea how anything here works or why i have to pass 3 through as a parameter and not simply as a hardcoded value.
        return url[three].call(undefined, _init, undefined, _init)
    }
    _init.iframe = url,
    _init.params = arr,
    _init(3)
}({
    "parent": function() {
        function classAsFunction(func, t) {
            if (!(func instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function initProperties(functions, function_attrs) {
            for (var n = 0; n < function_attrs.length; n++) {
                var i = function_attrs[n];
                Object.defineProperty(functions, i.key, i)
            }
        }
        window.FakeWindow = function() { // once again, no clue what this func does
            function mgr() {
                classAsFunction(this, mgr),
                this.selectors = [],
                window.addEventListener("message", this.onMessage.bind(this))
            }
            var e_func, functions;
            return e_func = mgr,
            (functions = [{
                key: "onMessage",
                value: function(e) {
                    ("pageLoaded" === e.data.action && this.updateLoader(true, e.data.type),
                    "setTitle" === e.data.action && $(".window-site-name").html(e.data.data.title),
                    "pageUnload" === e.data.action && this.updateLoader(false))
                }
            }, {
                key: "bind",
                value: function(domContent) { // basically just a listener for specific content
                    var t = this;
                    document.addEventListener("DOMContentLoaded", (function() {
                        t.onDomLoad(domContent)
                    }
                    ))
                }
            }, {
                key: "updateLoader", // TODO re-implement the "loading" flash.
                value: function() {
                    $(".window-header-logo").addClass("window-loaded"),
                    $(".window-site-name").html(windowUrl)
                }
            }, {
                key: "onDomLoad",
                value: function(domContent) {
                    var params = this;
                    this.selectors = domContent,
                    this.selectors.forEach((function(e) {
                        [].forEach.call(document.querySelectorAll(e), (function() {
                            document.getElementById("win").addEventListener("click", (function(e) { // checks the button for a click.
                                return params.window()
                            }
                            ), false)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "init",
                value: function() { // just the cleanest way to initialize a window.
                    var initializing = this;
                    document.addEventListener("DOMContentLoaded", (function() {
                        initializing.initWindow()
                    }
                    ))
                }
            }, {
                key: "initWindow", // creates the window
                value: function() {
                    var omnibox = document.createElement("span"); // this isn't the omnibox so idk why i called this variable that
                    omnibox.innerHTML = '<style>\n                .frameOverlay {\n                    height: 100%;\n                    width: 100%;\n                    background: rgba(34, 34, 34, 0);\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    display: none;\n\n                }\n                </style>\n                \n                \n                \n                <link rel="stylesheet" type="text/css" href="./css1.css">\n                <link rel="stylesheet" type="text/css" href="./css2.css">\n                <link rel="stylesheet" type="text/css" href="./thisisnotjquery.min.css">\n\n                <div style="text-align: initial; width:0px; height:0px; position:absolute; overflow:hidden; z-index:-1; background: url(' + windowUrl + '/favicon.ico) no-repeat -9999px -9999px;"> </div>\n                <div class="ui-widget-content ui-draggable ui-draggable-handle" id="new-window" style="overflow: hidden;width: 852.75px; height: 676.8px; left: 145px; top: 25px; display: none;">\n                    <div class="frameOverlay"></div>\n                    <div class="window-header">\n                        <div class="window-header-logo"></div>\n                        <div class="window-header-label"><span class="window-site-name">' + windowUrl + '</span> - <span id="browser-name">Google Chrome</span></div>\n                        <div class="window-header-actions">\n                            <div class="icon_a"><i class="flaticon--custom-1 flaticon-minus-symbol window-header-close"></i></div>\n                            <div class="icon_a"><i class="flaticon--custom-1 flaticon-multi-tab"></i></div>\n                            <div class="icon_a"><i class="flaticon--custom-1 flaticon-cancel window-header-close"></i></div>\n                        </div>\n                    </div>\n                    <div class="window-body">\n                        <div class="window-body-addressbar">\n                            <div class="addressbar-secure domain-name"></div>\n                            <div class="addressbar-address" id="page-url-div" style="border: 0px solid #ddd;padding: 0px;margin: 0;box-sizing: border-box;">\n\n                            </div>\n                        </div>\n                        <iframe class="window-body-data-1"></iframe>\n                    </div>\n                </div>', // TODO: -remove hardcoding of url, -implement an actual minimize function, -implement an actual maximize function
                    document.body.appendChild(omnibox),
                    this.windowNode = document.getElementById("new-window")
                }
            }, {
                key: "window", // writes the data to the window including the iframe and such.
                value: function() {
                    $(".window-site-name").html("Untitled")
                    var browser = "", width = 1050, height = 650;
                    (browser = "Google Chrome", // there used to be a check here for the browser you used, but i removed it because all it did was if it WASN'T google chrome, it would open a (real) new window
                    $("#browser-name").text(browser),
                    $("#new-window").css({
                        width: width,
                        height: height,
                        display: "block"
                    }),
                    $("#new-window").draggable({
                        containment: "window",
                        iframeFix: true,
                        start: function() {
                            $(".frameOverlay").fadeIn("fast")
                        },
                        stop: function() {
                            $(".frameOverlay").fadeOut("fast")
                        }
                    }),
                    $("#new-window").resizable({ // TODO see if there's a way to increase the radius of these handles because i think they're currently 1px
                        handles: "n, e, s, w",
                        start: function() {
                            $(".frameOverlay").fadeIn("fast")
                        },
                        stop: function() {
                            $(".frameOverlay").fadeOut("fast")
                        }
                    }),
                    $("#new-window").resizable("option", "minWidth", 600),
                    $("#new-window").resizable("option", "minHeight", 400),
                    $(".window-header-close").click(this.closeFakeWindow),
                    $(".window-body-data-1").prop("src", windowUrl), // this is just the iframe it puts on the url
                    $("#page-url-div").html('\n                <span>\n                    <span class="domain-name">' + domain + '</span>' + domain_params + '\n                </span>\n            '),
                    this.updateLoader(false))
                }
            }, {
                key: "closeFakeWindow",
                value: function() {
                    $(".window-header-close").off("click"),
                    $("#new-window").css({
                        display: "none"
                    }),
                    $(".window-body-data-1").html("").prop("src", "") // TODO give this function a parameter for it to not wipe the data in the dom, so that you can re-open the window thus "minimizing" it.
                }
            }]) && initProperties(e_func.prototype, functions),
            undefined && initProperties(e_func, undefined),
            mgr
        }()
    },
    3: function(array, t, func) {
        array.exports = func("parent")
    }
});
