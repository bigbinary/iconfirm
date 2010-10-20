#iconfirm is an inline confirmation plugin based on jQuery#

# Usage #

    // using default options
    $("a.delete").iconfirm();


     // using some custom options
     $("a.delete").iconfirm({
       confirm: "<a href='#' class='confirm-yes'>Yes</a>",
       cancel: "<a href='#' class='confirm-no'>No</a>",
       separator: " : ",
       initCallback: function(action) {
         action.parent().fadeIn();
       }
     });

# Configuration Options #

    msg             string    "Are you sure? "
    confirm         string    HTML code for the confirm action (default: "<a href='#'>Confirm</a>")
    cancel          string    HTML code for the cancel action (default: "<a href='#'>Cancel</a>")
    separator       string    the HTML for the separator between the confirm and the cancel actions (default: " | ")
    timeout         integer   seconds before the confirmation dialogue closes automatically, 0 to 
                              disable this feature (default: 0)
    initCallback    function  function that will be invoked when user clicks on the original link.
    cleanupCallback function  function that will be invoked when user clicks on 'cancel' or the whole 
                              operation times out.
