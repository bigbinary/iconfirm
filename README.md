#iconfirm is an inline confirmation plugin based on jQuery#

# Usage #

    // using default options
    $("a.delete").iconfirm();


     // using some custom options
     $("a.delete").iconfirm({
       okLabel: "Continue",
       cancelLabel: "Do not proceed",
       initCallback: function(elem) {
         elem.parent().fadeIn();
       }
     });

# Configuration Options #

    msg             string    "Are you sure? "
    okLabel         string    Label for proceed message (default: "Continue").
    cancelLabel     string    Label for cancel message (default: "Cancel").
    separator       string    Separator between the okLabel and cancelLabel (default: " | ").
    timeout         integer   seconds before the confirmation dialogue closes automatically, 0 to 
                              disable this feature (default: 0).
    initCallback    function  function that will be invoked when user clicks on the original link.
    cleanupCallback function  function that will be invoked when user clicks on 'cancel' or the whole 
                              operation times out.
    yesCallback     function  function that will be invoked when user clicks on 'continue'.

# CSS #

To display the inline confirmation message, a <tt>span</tt> html tag is created with class <tt>iconfirm</tt>. Use this class to properly decorate the confirmation message using css.

# jQuery version #

I have tested this plugin with jQuery 1.4.2 and 1.4.3 .

# License

MIT

# Copyright

Neeraj Singh

#TODO#
* put a link to demo
* write test
* explain why return false is being used
