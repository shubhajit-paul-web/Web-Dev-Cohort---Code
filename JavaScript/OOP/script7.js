// Mini "DOM Helper" Library

class DOMHelper {
    select(selector) {
        return document.querySelector(selector);
    }

    selectAll(selector) {
        return document.querySelectorAll(selector);
    }

    addClass(element, className) {
        if (!element && !className) {
            element.classList.add(className);
        }
    }

    removeClass(element, className) {
        if (!element && !className) {
            element.classList.remove(className);
        }
    }

    setText(element, text) {
        element.innerText = text;
    }

    setHTML(element, html) {
        element.innerHtml = html;
    }

    on(element, eventName, callback) {
        element.addEventListener(eventName, callback);
    }

    remove(element) {
        element.remove();
    }

    // Bonus
    hide(element) {
        element.style.display = none;
    }

    show(element) {
        element.style.display = "";
    }
}

// Try to test

const DOMHelp = new DOMHelper();

const headingOne = DOMHelp.select(".name");

// DOMHelp.setText(headingOne, "Hey")
