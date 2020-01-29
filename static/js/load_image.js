function ScreenDimension() {
    let myWidth = 0,
        myHeight = 0;
    if (typeof(window.innerWidth) == 'number') {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    return { "height": myHeight, "width": myWidth };
}

function ViewDeviceAlpha() {
    let device = '';
    if (typeof DeviceAlpha === 'function') {
        device = DeviceAlpha();
    } else {
        let dim = ScreenDimension();
        if (dim.width <= 767) {
            device = 'm';
        } else if (dim.width <= 1023) {
            device = 't';
        }
    }
    return device;
}

function inView(elem, nearThreshold) {
    var viewportHeight = getViewportHeight();
    var scrollTop = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    var elemTop = elem.offset().top;
    var elemHeight = elem.height();
    nearThreshold = nearThreshold || 0;
    return (scrollTop + viewportHeight + nearThreshold) > (elemTop + elemHeight);
}

function getViewportHeight() {
    if (window.innerHeight) {
        return window.innerHeight;
    } else if (document.body && document.body.offsetHeight) {
        return document.body.offsetHeight;
    } else {
        return 0;
    }
}


function ImageLazyLoader() {
    var imageLoader = MakeImageVisible;
    var bgImageLoader = MakeBgImageVisible;
    ImageAsyncLoaderOpen();
    BgImageAsyncLoaderOpen();
    MakeImageVisible();
    MakeBgImageVisible();

    function ImageAsyncLoaderOpen() {
        window.addEventListener("scroll", imageLoader);
        document.addEventListener('touchmove', imageLoader, { passive: true });
    }

    function ImageAsyncLoaderclose() {
        window.removeEventListener("scroll", imageLoader);
        document.removeEventListener('touchmove', imageLoader, { passive: true });
    }

    function BgImageAsyncLoaderOpen() {
        window.addEventListener("scroll", bgImageLoader);
        document.addEventListener('touchmove', bgImageLoader, { passive: true });
    }

    function BgImageAsyncLoaderclose() {
        window.removeEventListener("scroll", bgImageLoader);
        document.removeEventListener('touchmove', bgImageLoader, { passive: true });
    }

    function MakeImageVisible() {
        $('img[data-cimage]').not('.visProceed').each(function() {
            let $this = $(this);
            //if ($this.is(':visible')) {
            ViewImage($this);
            //}
        });
        if ($('img[data-cimage]').length === $('img.visProceed').length)
            ImageAsyncLoaderclose();
    }

    function MakeBgImageVisible() {
        $('[data-backgroundimage="image"]').not('.BgImgProceed').each(function() {
            let $this = $(this);
            //if ($this.is(':visible')) {
            ViewBgImage($this);
            //}

        });
        if ($('[data-backgroundimage="image"]').length === $('.BgImgProceed').length)
            BgImageAsyncLoaderclose();
    }

    function ViewImage($this) {
        if (inView($this, 1000)) {
            let imageSrc = $this.attr('data-cimage');
            if (imageSrc != "undefined") {
                $this.attr('src', ReplaceSrc(imageSrc));
            }
            $this.addClass('visProceed');
        }
    }

    function ViewBgImage($this) {
        if (inView($this, 1000)) {
            let imageSrc = $this.attr('data-cimage');
            if (imageSrc != "undefined") {
                $this.css('background-image', ReplaceSrc(imageSrc));
                $this.addClass('BgImgProceed');
            }
        }
    }

    function ReplaceSrc($imageSrc) {
        var DeviceAlphaValue = ViewDeviceAlpha();
        switch (DeviceAlphaValue) {
            case "m":
                return $imageSrc.replace('/MediaThumb/orginal', '/MediaThumb/medium').replace('/MediaThumb/large', '/MediaThumb/medium'); //.replace('/MediaThumb/medium', '');
            case "t":
                return $imageSrc.replace('/MediaThumb/orginal', '/MediaThumb/large').replace('/MediaThumb/large', '/MediaThumb/medium');
            case "":
                return $imageSrc;
        }
    }

}

function ScreenDimension() {
    let myWidth = 0,
        myHeight = 0;
    if (typeof(window.innerWidth) == 'number') {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    return { "height": myHeight, "width": myWidth };
}

function ViewDeviceAlpha() {
    let device = '';
    if (typeof DeviceAlpha === 'function') {
        device = DeviceAlpha();
    } else {
        let dim = ScreenDimension();
        if (dim.width <= 767) {
            device = 'm';
        } else if (dim.width <= 1023) {
            device = 't';
        }
    }
    return device;
}

function inView(elem, nearThreshold) {
    var viewportHeight = getViewportHeight();
    var scrollTop = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    var elemTop = elem.offset().top;
    var elemHeight = elem.height();
    nearThreshold = nearThreshold || 0;
    return (scrollTop + viewportHeight + nearThreshold) > (elemTop + elemHeight);
}

function getViewportHeight() {
    if (window.innerHeight) {
        return window.innerHeight;
    } else if (document.body && document.body.offsetHeight) {
        return document.body.offsetHeight;
    } else {
        return 0;
    }
}


function ImageLazyLoader() {
    var imageLoader = MakeImageVisible;
    var bgImageLoader = MakeBgImageVisible;
    ImageAsyncLoaderOpen();
    BgImageAsyncLoaderOpen();
    MakeImageVisible();
    MakeBgImageVisible();

    function ImageAsyncLoaderOpen() {
        window.addEventListener("scroll", imageLoader);
        document.addEventListener('touchmove', imageLoader, { passive: true });
    }

    function ImageAsyncLoaderclose() {
        window.removeEventListener("scroll", imageLoader);
        document.removeEventListener('touchmove', imageLoader, { passive: true });
    }

    function BgImageAsyncLoaderOpen() {
        window.addEventListener("scroll", bgImageLoader);
        document.addEventListener('touchmove', bgImageLoader, { passive: true });
    }

    function BgImageAsyncLoaderclose() {
        window.removeEventListener("scroll", bgImageLoader);
        document.removeEventListener('touchmove', bgImageLoader, { passive: true });
    }

    function MakeImageVisible() {
        $('img[data-cimage]').not('.visProceed').each(function() {
            let $this = $(this);
            //if ($this.is(':visible')) {
            ViewImage($this);
            //}
        });
        if ($('img[data-cimage]').length === $('img.visProceed').length)
            ImageAsyncLoaderclose();
    }

    function MakeBgImageVisible() {
        $('[data-backgroundimage="image"]').not('.BgImgProceed').each(function() {
            let $this = $(this);
            //if ($this.is(':visible')) {
            ViewBgImage($this);
            //}

        });
        if ($('[data-backgroundimage="image"]').length === $('.BgImgProceed').length)
            BgImageAsyncLoaderclose();
    }

    function ViewImage($this) {
        if (inView($this, 1000)) {
            let imageSrc = 'https://easybuilder.contentder.com' + $this.attr('data-cimage');
            if (imageSrc != "undefined") {
                $this.attr('src', ReplaceSrc(imageSrc));
            }
            $this.addClass('visProceed');
        }
    }

    function ViewBgImage($this) {
        if (inView($this, 1000)) {
            let imageSrc = 'https://easybuilder.contentder.com' + $this.attr('data-cimage');
            if (imageSrc != "undefined") {
                $this.css('background-image', ReplaceSrc(imageSrc));
                $this.addClass('BgImgProceed');
            }
        }
    }

    function ReplaceSrc($imageSrc) {
        var DeviceAlphaValue = ViewDeviceAlpha();
        switch (DeviceAlphaValue) {
            case "m":
                return $imageSrc.replace('/MediaThumb/orginal', '/MediaThumb/medium').replace('/MediaThumb/large', '/MediaThumb/medium'); //.replace('/MediaThumb/medium', '');
            case "t":
                return $imageSrc.replace('/MediaThumb/orginal', '/MediaThumb/large').replace('/MediaThumb/large', '/MediaThumb/medium');
            case "":
                return $imageSrc;
        }
    }

}


ImageLazyLoader();