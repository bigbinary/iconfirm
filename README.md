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
