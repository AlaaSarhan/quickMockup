function createSidebarElement(type,canvas, jquery) {

    var $ = jQuery;

    var sidebarElement= $("<div>")
        .text(type)
        .draggable({
            stop: function (event) {
                //TODO: implement event handler for this event
                canvas.fireEvent("newElementDrop",event) 
            },
            revert: true,
            helper: "clone"
        });
    //if dropped, check if put on top of canvas
    //if yes, call a functions on canvas to create element 
    // at drop coordinates (function to be implemented)
    return sidebarElement;
}


export default createSidebarElement