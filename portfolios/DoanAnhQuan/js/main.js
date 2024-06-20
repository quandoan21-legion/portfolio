function activeNavButton(content) {
    let aElements = document.getElementsByClassName('nav-item')
    clearActiveNavClassName(aElements);
    for (let i = 0; i < aElements.length; i++) {
        if (aElements[i].innerText === content) {
            aElements[i].classList.add('active');
        }
    }
}

function clearActiveNavClassName(aElements) {
    for (let i = 0; i < aElements.length; i++) {
        aElements[i].classList.remove('active');
    }
}

function dropDownMenu() {
    let aElements = document.getElementsByClassName('nav-item');
    let displayVal = aElements[1].style.display;
    let iconElement = document.getElementsByTagName('i');
    for (let i = 1; i < aElements.length; i++) {
        if (displayVal === 'none') {
            aElements[i].style.display = 'block';
            iconElement[0].classList.remove('fa-bar');
            iconElement[0].classList.add('fa-x');

        } else {
            aElements[i].style.display = 'none';
            iconElement[0].classList.remove('fa-x');
            iconElement[0].classList.add('fa-bar');
        }
    }
}
