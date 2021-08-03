const widgetButtonsClicked = document.querySelectorAll(".widget-frame Clicked");

function borderRemoving(e) {
    e.style.border = "none";
    e.classList.remove('Clicked');
};

for (const widgetClicked of widgetButtonsClicked) {
    if (button.classList.contains('Clicked')) {
            borderRemoving(widgetClicked);
        }
    }