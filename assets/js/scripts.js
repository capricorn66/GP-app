// jQuery JavaScript Library v3.4.1
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

function tagglePass(elem) {
    const $this = $(elem);
    const thisType = $this.attr('type');

    if (thisType === 'password') {
        $this.attr('type', 'text');
        $this.next();
        $('.icon-eye-slash', $this.next()).removeClass('d-none');
        $('.icon-eye', $this.next()).addClass('d-none');
    }
    else if (thisType === 'text') {
        $this.attr('type', 'password');
        $('.icon-eye-slash', $this.next()).addClass('d-none');
        $('.icon-eye', $this.next()).removeClass('d-none');
    }
}

window.tagglePass = tagglePass;

$(document).ready( function() {

});
