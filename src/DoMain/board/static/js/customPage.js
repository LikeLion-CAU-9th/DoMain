const widgets = document.querySelectorAll(".widget-frame");


function borderMaking(widget) {
    widget.style.border = '3px solid #ffffff';
    widget.classList.add('Clicked');
    
};

function borderRemoving(event) {
    event.preventDefault();
    event.style.border
}

for (const widget of widgets) {
    if (widget.style.border = 'none') {
        widget.addEventListener('click', e => {
            borderMaking(widget);
            
        })
    } 
};













