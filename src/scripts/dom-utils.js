//Element
function hasElement(config) {
  const { type, value, context = document, multiple = false } = config;
  if (!(context instanceof Node || context === document)) {
    throw new Error(
      "Invalid context. Must be a DOM element or the document object."
    );
  }
  return new Promise((resolve, reject) => {
    switch (type) {
      case "id":
        resolve(document.getElementById(value) ? value : null);
        break;
      case "class":
        const elements = context.getElementsByClassName(value);
        resolve(multiple ? elements : elements.length > 0 ? elements[0] : null);
        break;
      case "selector":
        const selectedElements = multiple
          ? context.querySelectorAll(value)
          : context.querySelector(value);
        resolve(selectedElements);
        break;
      default:
        reject(
          new Error('Invalid type. Must be "id", "class", or "selector".')
        );
    }
  });
}

hasElement({ type: "id", value: "myId" })
  .then((id) => {
    if (id) {
      //console.log('ID exists:', id);
    } else {
      //console.log('ID does not exist');
    }
  })
  .catch((error) => console.error(error));

hasElement({ type: "class", value: "myClass", context: document.body })
  .then((element) => {
    if (element) {
      //console.log('Class exists:', element);
    } else {
      // console.log('Class does not exist');
    }
  })
  .catch((error) => console.error(error));

hasElement({
  type: "class",
  value: "myClass",
  context: document.body,
  multiple: true,
})
  .then((elements) => {
    if (elements.length > 0) {
      //console.log('Classes exist:', elements);
    } else {
      //console.log('Classes do not exist');
    }
  })
  .catch((error) => console.error(error));

hasElement({ type: "selector", value: ".myClass #myElement" })
  .then((element) => {
    if (element) {
      // console.log('Selector exists:', element);
    } else {
      //  console.log('Selector does not exist');
    }
  })
  .catch((error) => console.error(error));

// Class
function hasClass(className, context = document) {
  // Check if context is a valid element before accessing getElementsByClassName
  if (!context) {
    return false;
  }

  // Use getElementsByClassName to get all elements with the specified class name
  var elements = context.getElementsByClassName(className);
  // If the length of the returned element collection is greater than 0, the class name exists
  return elements.length > 0;
}

if (hasClass("myClass")) {
  //console.log('Class exists in the document');
} else {
  // console.log('Class does not exist in the document');
}

var specificContext = document.getElementById("myContainer");
if (hasClass("myClass", specificContext)) {
  //console.log('Class exists in the specific context');
} else {
  // console.log('Class does not exist in the specific context');
}

function getScreenWidth() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}

export { hasClass, hasElement, getScreenWidth };
