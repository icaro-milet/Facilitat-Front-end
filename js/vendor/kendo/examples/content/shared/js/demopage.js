var sidebar = {
    resize: function () {
        var element = $(".kd-sidebar").eq(0),
            subNav = $('.kd-sub-nav'),
            scrollTop = $(document).scrollTop(),
            webinarBarHeight = $("#webinar-banner:visible").outerHeight() || 0,
            navHeight = $("#js-tlrk-nav").outerHeight(),
            subNavHeight = subNav.outerHeight(),
            isMobileSidebar = $(window).width() < 1240,
            isIE = /(msie\s|trident.*? rv:)([\w.]+)/i.test(window.navigator.userAgent),
            height, top;

        if (element.length) {
            height = isMobileSidebar ?  $('.kd-demo-content .container').outerHeight() + 64
                : $('html').outerHeight() - navHeight - subNavHeight - (scrollTop >= webinarBarHeight ? 0 : webinarBarHeight);

            top = navHeight + subNavHeight + (scrollTop >= webinarBarHeight ? 0 : webinarBarHeight - scrollTop);

            element.css("top", isMobileSidebar ? "" : top);
            element.height(height);
        }

        if (isIE && scrollTop >= webinarBarHeight ) {
            subNav.addClass("kd-sub-nav-sticky");
        } else {
            subNav.removeClass("kd-sub-nav-sticky");
        }
    },

    closeActiveDropDowns: function () {
        var sidebar = $(".kd-sidebar").eq(0),
            ddlWrapper = $('.tabstrip .dropdown-wrapper'),
            dllPopup = $('.tabstrip .dropdown');

        if (sidebar.hasClass("expanded")) {
            ddlWrapper.removeClass("active");
            dllPopup.removeClass("active");
        }
    },

    toggle: function (ev) {
        ev.stopPropagation();
        var element = $(".kd-sidebar").eq(0);

        if (element.length) {
            element.height($('.kd-demo-content .container').outerHeight() +  64);

            element.toggleClass("expanded");

            sidebar.closeActiveDropDowns();
        }
    },

    scrollToWidget: function () {
        var sidebar = $(".kd-sidebar").eq(0),
            activeWidget = sidebar.find("li.selected.level-1").eq(0);

        if (activeWidget.length && sidebar.length) {
            sidebar.scrollTop(activeWidget.position().top);
        }
    },

    expand: function (anchor) {
        if (!anchor.hasClass("kd-group-link")) {
            return;
        }
        anchor.addClass("kd-link-bolded");
        let span = anchor.find("span").first();
        span.removeClass("k-i-arrow-chevron-right");
        span.addClass("k-i-arrow-chevron-down");
        anchor.next().show();
    },

    collapse: function (anchor) {
        if (!anchor.hasClass("kd-group-link")) {
            return;
        }
        anchor.removeClass("kd-link-bolded");
        let span = anchor.find("span").first();
        span.removeClass("k-i-arrow-chevron-down");
        span.addClass("k-i-arrow-chevron-right");

        anchor.next().hide();
    },

    toggleGroup: function (ev) {
        var anchor = $(this);

        if (anchor.hasClass("kd-group-link")) {
            ev.preventDefault();

            anchor.toggleClass("kd-link-bolded");
            let span = anchor.find("span").first();
            if (anchor.hasClass("kd-link-bolded")) {
                span.removeClass("k-i-arrow-chevron-right");
                span.addClass("k-i-arrow-chevron-down");

            } else {
                span.removeClass("k-i-arrow-chevron-down");
                span.addClass("k-i-arrow-chevron-right");
            }
            anchor.next().toggle();
        }
    },

    handleKeyNavigation: function () {
        var el = $(".kd-sidebar-container.root");
        var that = this;

        el.on("keydown", "a", function (e) {
            const keys = kendo.keys;
            const key = e.keyCode;
            const current = $(e.currentTarget);
            let li = current.closest("li");
            let next = null;

            if (key == keys.DOWN) {
                next = li.next();
                let isExpanded = current.find(".k-i-arrow-chevron-down").length;

                if (!isExpanded) {
                    const link = next.find("a:visible").first();
                    if (link.length) {
                        link.focus();
                    } else {
                        while (!next.length) {
                            if (li.hasClass("level-1")) {
                                next = li.next();
                                break;
                            }
                            li = li.parents("li").first();
                            next = li.next();
                        }
                        if (next.length) {
                            next.find("a").first().focus();
                        }
                    }

                } else if (isExpanded) {
                    let list = li.find(".kd-list:visible").first();
                    if (list.length) {
                        list.find("a").first().focus();
                    }
                }
                e.preventDefault();
            } else if (key == keys.UP) {
                next = li.prev();

                if (next.length) {
                    next.find("a").focus();
                } else {
                    while (li.length && !li.prev().length) {
                        if (li.hasClass("level-1")) {
                            break;
                        }
                        li = li.parents("li").first();
                    }
                    if (li.length) {
                        li.find("a").first().focus();
                    }
                }
                e.preventDefault();
            } else if (key == keys.LEFT) {
                that.collapse(current);
            } else if (key == keys.RIGHT) {
                that.expand(current);
            }
        });
    },

    init: function() {
        this.resize();

        $(".kd-side-nav-toggle").click(this.toggle);
        $("a.kd-group-link").click(this.toggleGroup);
        this.scrollToWidget();
        this.handleKeyNavigation();
    }
};

$(document).ready(function () {
    sidebar.init();

    $(".kd-breadcrumb-nav .active").click(function(ev) {
        ev.preventDefault();
    });
});

$(document).on("click", function (ev) {
    ev.stopPropagation();
    var sidebar = $(".kd-sidebar");

    if (sidebar.is(":visible") && !sidebar.is(ev.target) && sidebar.has(ev.target).length === 0) {
        sidebar.toggleClass("expanded");
    }
});

$(window).on("resize scroll", sidebar.resize);