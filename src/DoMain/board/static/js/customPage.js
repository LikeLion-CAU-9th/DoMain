const widgets = document.querySelectorAll(".modal-tab .list .is_on .cont button");


function borderMaking(widget) {
    widget.style.border = '3px solid #blue';
    widget.classList.add('Clicked');
    
};


for (const widget of widgets) {
    if (widget.style.border = 'none') {
        widget.addEventListener('click', e => {
            borderMaking(widget);
            
        })
    } 
};















