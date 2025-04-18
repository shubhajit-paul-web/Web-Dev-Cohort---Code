// parent elements
const fruitesList = document.querySelector(".fruites-list");
const delItemUl = document.querySelector(".del-items");
const btn = document.querySelector("button");

// How to delete element directly without parent
// element.remove() or node.remove() -> it will remove the element from document object

btn.addEventListener("click", function() {
    let childNode = fruitesList.children[0];

    let deletedElement = childNode.parentNode.removeChild(childNode);

    delItemUl.append(deletedElement)

    if (fruitesList.children.length === 0) {
        btn.disabled = true;
    }
});