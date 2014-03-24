//MetTile v1.2
//11/21/2013
function InitMenu()
{
    $("#menuOne").click(function ()
    {
        AnimateScroll(431, $("#divOne"))
    });
    $("#menuTwo").click(function ()
    {
        AnimateScroll(645, $("#divTwo"))
    });
    $("#menuThree").click(function ()
    {
        AnimateScroll(855, $("#divThree"))
    });
    $("#menuFour").click(function ()
    {
        AnimateScroll(1065, $("#divFour"))
    });
    $("#menuFive").click(function ()
    {
        AnimateScroll(1275, $("#divFive"))
    });
    $("#menuSix").click(function ()
    {
        AnimateScroll(1485, $("#divSix"))
    });
    $("#menuSeven").click(function ()
    {
        AnimateScroll(1695, $("#divSeven"))
    });
    $("#menuEight").click(function ()
    {
        AnimateScroll(1905, $("#divEight"))
    });
    $("#menuNine").click(function ()
    {
        AnimateScroll(2115, $("#divNine"))
    });
    $("#menuTen").click(function ()
    {
        AnimateScroll(2325, $("#divTen"))
    })
}

function AnimateScroll(e, t)
{
    $("body,html").animate({
        scrollTop: e
    }, 500, function ()
    {
        $(t).animate({
            opacity: ".01"
        }, 200, function ()
        {
            $(t).animate({
                opacity: "1"
            }, 200)
        })
    })
}

function InitTopSender()
{
    $(window).scroll(function ()
    {
        if ($(this).scrollTop() > 100)
        {
            $("#back-top").fadeIn()
        } else
        {
            $("#back-top").fadeOut()
        }
    });
    $("#back-top a").click(function ()
    {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false
    })
}

function InitTab()
{
    $(".tab-html").click(function ()
    {
        $(this).parent().children("a").removeClass("tab-active");
        $(this).addClass("tab-active");
        $(this).parent().children("img").hide();
        $(this).parent().find(".content-html").show()
    });
    $(".tab-js").click(function ()
    {
        $(this).parent().children("a").removeClass("tab-active");
        $(this).addClass("tab-active");
        $(this).parent().children("img").hide();
        $(this).parent().find(".content-js").show()
    })
}

function InitFacebook()
{
    (function (e, t, n)
    {
        var r, i = e.getElementsByTagName(t)[0];
        if (e.getElementById(n)) return;
        r = e.createElement(t);
        r.id = n;
        r.src = "http://connect.facebook.net/en_US/all.js#xfbml=1";
        i.parentNode.insertBefore(r, i)
    })(document, "script", "facebook-jssdk")
} (function (e)
{
    e.fn.MetTileOne = function (t)
    {
        var n = e.extend({
            viewArea: "100%"
        }, t);
        var r = e(this).children("img").attr("src");
        e(this).css("background-image", "url('" + r + "')");
        e(this).css("overflow", "hidden");
        e(this).children("img").remove();
        e(this).children("div").addClass("tile-one-text-area");
        var i = e(this).children("div").css("marginTop");
        var s = 0;
        n.viewArea = parseInt(n.viewArea.replace("%", ""));
        s = parseInt(e(this).height()) - parseInt(e(this).height()) * n.viewArea / 100;
        e(this).children("div").css("marginTop", "0px");
        e(this).children("div").animate({
            marginTop: i
        }, 800);
        e(this).hover(function ()
        {
            e(this).children("div").stop().animate({
                marginTop: s
            }, 500)
        }, function ()
        {
            e(this).children("div").stop().animate({
                marginTop: i
            }, 500)
        })
    };
    e.fn.MetTileTwo = function (t)
    {
        var n = e.extend({
            viewArea: "100%"
        }, t);
        var r = 0;
        e(this).css("overflow", "hidden");
        e(this).children("img").addClass("tile-two-img");
        e(this).children("div").addClass("tile-two-text-area");
        var i = e(this).children("img").css("marginTop");
        n.viewArea = 100 - parseInt(n.viewArea.replace("%", ""));
        r = parseInt(e(this).height()) * n.viewArea / 100 - parseInt(e(this).height()) - parseInt(e(this).children("img").css("marginBottom"));
        e(this).hover(function ()
        {
            e(this).children("img").stop().animate({
                marginTop: r
            }, 500)
        }, function ()
        {
            e(this).children("img").stop().animate({
                marginTop: i
            }, 500)
        })
    };
    e.fn.MetTileThree = function (t)
    {
        var n = e.extend({
            speed: 50
        }, t);
        e(this).css("overflow", "hidden");
        e(this).children("img").addClass("tile-three-img");
        e(this).children("p").wrap("<div class='tile-three-text-area'></div>");
        var r = n.speed;
        var i = e(this).width();
        var s = e(this).width();
        var o = e(this);
        e(o).children("div").css("width", s * 2);
        e(o).children("div").children("p").css("marginLeft", s);
        var u = -1;
        var a = 0;
        setInterval(function ()
        {
            var t = parseInt(e(o).children("div").children("p").css("width"));
            if (u == t)
            {
                a++;
                if (a == i * 2 + 20)
                {
                    e(o).children("div").children("p").css("marginLeft", i);
                    s = i;
                    a = 0
                }
            } else
            {
                u = t;
                a = 0
            } --s;
            e(o).children("div").children("p").animate({
                marginLeft: s
            }, r)
        }, r)
    };
    e.fn.MetTileFour = function (t)
    {
        function a()
        {
            u = setInterval(function ()
            {
                e(i).children().children(":nth-child(1)").stop().animate({
                    marginTop: s
                }, 800, function ()
                {
                    e(this).appendTo(e(this).parent()).show().css("marginTop", "0px")
                })
            }, n.timeInterval)
        }

        function f()
        {
            u = setInterval(function ()
            {
                e(i).children().children(":nth-child(1)").stop().animate({
                    marginLeft: o
                }, 800, function ()
                {
                    e(this).appendTo(e(this).parent()).show().css("marginLeft", "0px")
                })
            }, n.timeInterval)
        }
        var n = e.extend({
            type: "horizontal",
            timeInterval: 5e3,
            navigation: false,
            navigationColor: "white"
        }, t);
        e(this).css("overflow", "hidden");
        e(this).children().addClass("tile-four-img");
        var r = e(this).children().length;
        e(this).children().wrapAll("<div></div>");
        var i = e(this);
        var s = -e(i).height();
        var o = -e(i).width();
        var u;
        if (n.type == "horizontal")
        {
            e(this).children("div").css("height", r * 100 + "%");
            e(this).children("div").css("width", "100%");
            if (n.navigation)
            {
                e(this).append("<a href='javascript:void(0);' class='icon up-icon-" + n.navigationColor.toLowerCase() + "'></a>");
                e(this).append("<a href='javascript:void(0);' class='icon down-icon-" + n.navigationColor.toLowerCase() + "'></a>")
            }
            a()
        } else
        {
            e(this).children("div").css("height", "100%");
            e(this).children("div").css("width", r * 100 + "%");
            if (n.navigation)
            {
                e(this).append("<a href='javascript:void(0);' class='icon left-icon-" + n.navigationColor.toLowerCase() + "'></a>");
                e(this).append("<a href='javascript:void(0);' class='icon right-icon-" + n.navigationColor.toLowerCase() + "'></a>")
            }
            f()
        }
        e(this).find(".left-icon-" + n.navigationColor.toLowerCase()).click(function ()
        {
            clearInterval(u);
            e(i).children().children(":last").css("marginLeft", o).prependTo(e(i).children("div"));
            e(i).children().children(":nth-child(1)").stop().animate({
                marginLeft: 0
            }, 500);
            f()
        });
        e(this).find(".right-icon-" + n.navigationColor.toLowerCase()).click(function ()
        {
            clearInterval(u);
            e(i).children().children(":nth-child(1)").animate({
                marginLeft: o
            }, 500, function ()
            {
                e(this).appendTo(e(this).parent()).show().css("marginLeft", "0px")
            });
            f()
        });
        e(this).find(".up-icon-" + n.navigationColor.toLowerCase()).click(function ()
        {
            clearInterval(u);
            e(i).children().children(":last").css("marginTop", s).prependTo(e(i).children("div"));
            e(i).children().children(":nth-child(1)").stop().animate({
                marginTop: 0
            }, 500);
            a()
        });
        e(this).find(".down-icon-" + n.navigationColor.toLowerCase()).click(function ()
        {
            clearInterval(u);
            e(i).children().children(":nth-child(1)").animate({
                marginTop: s
            }, 500, function ()
            {
                e(this).appendTo(e(this).parent()).show().css("marginTop", "0px")
            });
            a()
        })
    };
    e.fn.MetTileFive = function (t)
    {
        var n = e.extend({
            timeInterval: 5e3
        }, t);
        e(this).css("overflow", "hidden");
        e(this).children("div").addClass("tile-five-text-area");
        var r = e(this);
        var i = -e(this).height();
        setInterval(function ()
        {
            e(r).children(":nth-child(1)").stop().animate({
                marginTop: i
            }, 800, function ()
            {
                e(this).appendTo(e(this).parent()).show().css("marginTop", "0px");
            })
        }, n.timeInterval)
    };
    e.fn.MetTileSix = function (t)
    {
        var n = e.extend({
            topStyle: "border"
        }, t);
        var r;
        if (n.topStyle == "border") r = "top-border";
        else r = "top-shadow";
        e(this).css("overflow", "hidden");
        e(this).children("div").addClass("tile-six-text-area");
        e(this).children("div").addClass(r);
        var i = e(this).height();
        var s = e(this).children().length;
        var o = parseInt(i / s);
        var u = 0;
        var a = e(this);
        var f = 500;
        e(this).children().each(function ()
        {
            e(this).css("top", u);
            u += o
        });
        e(this).children().hover(function ()
        {
            e(this).prevAll().stop().animate({
                top: -i
            }, f);
            e(this).stop().animate({
                top: 0
            }, f);
            e(this).nextAll().stop().animate({
                top: i
            }, f);
            e(a).children().removeClass(r)
        }, function ()
        {
            u = 0;
            e(a).children().each(function ()
            {
                e(this).stop().animate({
                    top: u
                }, f);
                u += o
            });
            e(a).children().addClass(r)
        })
    };
    e.fn.MetTileSeven = function (t)
    {
        var n = e.extend({
            viewArea: "100%"
        }, t);
        var r = e(this).children("img").attr("src");
        e(this).css("background-image", "url('" + r + "')");
        e(this).css("overflow", "hidden");
        e(this).children("img").remove();
        e(this).children("div").addClass("tile-seven-text-area");
        var i = e(this).children("div").css("marginTop");
        var s = 0;
        n.viewArea = parseInt(n.viewArea.replace("%", ""));
        s = parseInt(e(this).height()) * n.viewArea / 100 - parseInt(e(this).height());
        e(this).children("div").css("marginTop", "0px");
        e(this).children("div").animate({
            marginTop: i
        }, 800);
        e(this).hover(function ()
        {
            e(this).children("div").stop().animate({
                marginTop: s
            }, 500, function ()
            {
                e(this).children("a").first().fadeIn(100, function t()
                {
                    e(this).next().fadeIn(100, t)
                })
            })
        }, function ()
        {
            e(this).children("div").stop().animate({
                marginTop: i
            }, 500, function ()
            {
                e(this).children("a").hide()
            })
        })
    };
    e.fn.MetTileEight = function (t)
    {
        function o()
        {
            if (n.autoAnimation)
            {
                s = setInterval(function ()
                {
                    e(i).children("div").children("img").stop().animate({
                        marginLeft: "-30px"
                    }, 200, function ()
                    {
                        e(this).stop().animate({
                            marginLeft: "0px"
                        }, 600)
                    })
                }, 1e3)
            }
        }
        var n = e.extend({
            autoAnimation: true
        }, t);
        var r = 0;
        e(this).css("overflow", "hidden");
        e(this).children("img").addClass("tile-eight-img");
        e(this).children("div").addClass("tile-eight-text-area");
        e(this).children().wrapAll("<div></div>");
        e(this).children("div").css("height", "100%");
        e(this).children("div").css("width", "200%");
        var i = e(this);
        var s;
        o();
        e(this).hover(function ()
        {
            clearInterval(s);
            e(this).children("div").children("img").stop().animate({
                marginLeft: -e(i).width()
            }, 500)
        }, function ()
        {
            o();
            e(this).children("div").children("img").stop().animate({
                marginLeft: 0
            }, 500)
        })
    };
    e.fn.MetTileNine = function (t)
    {
        var n = e.extend({
            opacity: .15
        }, t);
        var r = e(this);
        var i = "tile-nine-inner " + e(r).children("div").attr("class");
        e(r).children("div").attr("class", i);
        e(r).children("div").children().each(function ()
        {
            e(this).hide()
        });
        e(r).mouseenter(function ()
        {
            e(this).children("img").stop().animate({
                opacity: n.opacity
            }, 500, function ()
            {
                e(r).children("div").children().first().stop().fadeIn(function t()
                {
                    e(this).next().stop().fadeIn(t)
                })
            })
        });
        e(r).mouseleave(function ()
        {
            e(r).children("div").children().each(function ()
            {
                e(this).stop().fadeOut(200)
            });
            e(this).children("img").stop().animate({
                opacity: 1
            }, 500)
        })
    };
    e.fn.MetTileTen = function (t)
    {
        var n = e.extend({
            opacity: .3,
            timeInterval: 5e3
        }, t);
        var r = e(this);
        e(r).children().addClass("tile-ten-inner");
        e(r).children().wrapAll("<div></div>");
        e(r).children().children().animate({
            opacity: n.opacity
        }, 0, function ()
        {
            e(r).children().children().eq(1).animate({
                opacity: 1
            }, 0)
        });
        var i = e(r).children().children().eq(0).outerHeight(true) + parseInt(e(r).children().children().eq(1).css("marginTop").replace("px", "")) - e(r).height() / 2 + e(r).children().children().eq(1).height() / 2;
        e(r).children().animate({
            marginTop: -i
        }, 100);
        setInterval(function ()
        {
            i = e(r).children().children().eq(1).outerHeight(true) + parseInt(e(r).children().children().eq(2).css("marginTop").replace("px", "")) - e(r).height() / 2 + e(r).children().children().eq(2).height() / 2;
            e(r).children().animate({
                marginTop: -i
            });
            e(r).children().children().first().slideUp(function ()
            {
                e(this).appendTo(e(r).children()).show()
            });
            e(r).children().children().eq(1).animate({
                opacity: n.opacity
            }, 500);
            e(r).children().children().eq(2).animate({
                opacity: 1
            }, 500)
        }, n.timeInterval)
    }
})(jQuery);
$(document).ready(function ()
{
    InitMenu();
    InitTopSender();
    InitTab();
    InitFacebook();
    if ($(".wrap-it").length == 0) $(".container_24").remove();
    $("#MetTileOne").MetTileOne({
        viewArea: "100%"
    });
    $("#MetTileOneSmall").MetTileOne({
        viewArea: "45%"
    });
    $("#MetTileTwo").MetTileTwo({
        viewArea: "51%"
    });
    $("#MetTileTwoSmall").MetTileTwo({
        viewArea: "100%"
    });
    $("#MetTileThree").MetTileThree({
        speed: 50
    });
    $("#MetTileThreeSmall").MetTileThree({
        speed: 70
    });
    $("#MetTileFour").MetTileFour({
        type: "vertical",
        timeInterval: 5e3,
        navigation: true,
        navigationColor: "white"
    });
    $("#MetTileFourSmall").MetTileFour({
        timeInterval: 2e3
    });
    $("#MetTileFive").MetTileFive({
        timeInterval: 6e3
    });
    $("#MetTileFiveSmall").MetTileFive({
        timeInterval: 3e3
    });
    $("#MetTileSix").MetTileSix({
        topStyle: "border"
    });
    $("#MetTileSixSmall").MetTileSix({
        topStyle: "shadow"
    });
    $("#MetTileSeven").MetTileSeven({
        viewArea: "100%"
    });
    $("#MetTileSevenSmall").MetTileSeven({
        viewArea: "75%"
    });
    $("#MetTileEight").MetTileEight({
        autoAnimation: true
    });
    $("#MetTileEightSmall").MetTileEight({
        autoAnimation: false
    });
    $("#MetTileNine").MetTileNine({
        opacity: .15
    });
    $("#MetTileNineSmall").MetTileNine({
        opacity: .1
    });
    $("#MetTileTen").MetTileTen({
        opacity: .3,
        timeInterval: 5e3
    });
    $("#MetTileTenSmall").MetTileTen({
        opacity: .3,
        timeInterval: 3e3
    })
})