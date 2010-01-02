/**
 * If set to true debug messages will be posted in the selected mode
 */
var DEBUG_showNotification = false;
var DEBUG_errorConsole = true;
var DEBUG_showDiv = true;

/**
 * The separator that separates two comments
 */
var DEBUG_separator = " || ";

var DEBUG_divId = "DEBUG_div";
var DEBUG_bgColor = "#000";
var DEBUG_color = "#fff";
var DEBUG_fontSize = "0.5em";
var DEBUG_padding = "0.5em";

function debug(message){
    // show message in error console
    // TODO: may add firebug console
    if(DEBUG_errorConsole){
        if(window.opera)
            window.opera.postError(message);
    }

    // show message as widget notification
    if(DEBUG_showNotification){
        widget.showNotification(message);
    }

    // show message in div
    if(DEBUG_showDiv){
        var debugDiv = document.getElementById(DEBUG_divId);

        // check if the element has already been created
        if(debugDiv == null || debugDiv === undefined){
            // create the div
            debugDiv = document.createElement("div");
            debugDiv.innerHTML = "";
            debugDiv.id = DEBUG_divId;

            // apply the style
            var style = debugDiv.style;
            style.backgroundColor = DEBUG_bgColor;
            style.color = DEBUG_color;
            style.fontSize = DEBUG_fontSize;
            style.padding = DEBUG_padding;
            style.position = "absolute";
            style.bottom = "0px";
            style.display = "none";
            style.zIndex = "9999999";

            // append it to the DOM
            
            document.body.appendChild(debugDiv);

            // make the div disappear when beeing clicked
            debugDiv.onclick = function(event){
                event.target.style.display = "none";
            };
            
        }
        debugDiv.innerHTML = debugDiv.innerHTML + message + DEBUG_separator;
        debugDiv.style.display = "block";
    }
}