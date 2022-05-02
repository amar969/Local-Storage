const scopeInfo = {
  0: "<h1>Scope :- </h1>",
  1: "The current context of execution. The context in which values and expressions are visible or can be referenced. If a variable or other expression is not in the current scope, then it is unavailable for use.",
  2: "Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.",
  3: "A function serves as a closure in JavaScript, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.",
  4: "JavaScript has 3 types of scope: <ol><li>Block scope</li> <li>Function Scope</li> <li>Global Scope</li>"
};

const hostingInfo = {
    0: "<h1>Hoisting :-</h1>",
    1: "JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code",
    2: "Hoisting allows functions to be safely used in code before they are declared.",
    3: "Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.",
    4: "Function hosting - One of the advantages of hoisting is that it lets you use a function before you declare it in your code.",
    5: "Example - console.log(name) <br /> var name = 'Amar'",
}

const constructorInfo = {
    0: "<h1>Constructor :-</h1>",
    1: "The constructor method is a special method of a class for creating and initializing an object instance of that class.",
    2: "A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.",
    3: "If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty:",
    4: "If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided:"
}

const protoInfo = {
    0: "<h1>Prototype :-</h1>",
    1: "Prototypes are the mechanism by which JavaScript objects inherit features from one another.",
    2: "Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.",
    3: "Prototypes are a powerful and very flexible feature of JavaScript, making it possible to reuse code and combine objects.",
}

const debouncingInfo = {
    0: "<h1>Debouncing</h1>",
    1: "Debouncing in JS is a practice used to improve browser performance there might be some functionality in a web page which requires time-consuming computations",
    2: "Debouncing is a programming practice used to ensure that time-consuming tasks don't fire so ofthen that it didn't effects the performance of the page",
    3: "<strong>Application - </strong> Debouncing can be applied in implemnting suggestive text where we will wait for the user to stop typing for a few seconds before suggeting the text",
    4: "Content - loading webpages like FB and Twitter where user keep on scrolling if the scroll event fired to frequently there might be performance impact this scroll event must make use of debouncing.",
    
}

//scope
localStorage.setItem("scope", JSON.stringify(scopeInfo));
let s = JSON.parse(localStorage.getItem("scope"));

let r = document.getElementById("result");
function scope1() {
  for (let i in s) {
    let d = document.createElement("ul");
    d.innerHTML = `<li>${s[i]}</li>`;
    r.append(d);
  }
}

//hositing
localStorage.setItem("hoisting", JSON.stringify(hostingInfo));
let h = JSON.parse(localStorage.getItem("hoisting"));

function hoist(){
    for(let i in h){
        let d = document.createElement("ul");
        d.innerHTML = `<li>${h[i]}</li>`
        r.append(d);
    }
    
    let v = document.createElement("video");
    v.src = './video/Hositing.mp4'
    v.type = "video/mp4";
    r.appendChild(v);    

}

//constructor
localStorage.setItem("construct", JSON.stringify(constructorInfo));
let c = JSON.parse(localStorage.getItem("construct"));

function construct(){
    for(let i in c){
        let d = document.createElement("ul");
        d.innerHTML = `<li>${c[i]}</li>`
        r.appendChild(d);
    }
}


//Prototype 
localStorage.setItem("proto", JSON.stringify(protoInfo));
let p = JSON.parse(localStorage.getItem("proto"));

function proto(){
    for(let i in p){
        let d = document.createElement("ul");
        d.innerHTML = `<li>${p[i]}</li>`
        r.appendChild(d);
    }
    let v = document.createElement("video");
    v.src = './video/Prototype.mp4'
    v.type = "video/mp4";
    r.appendChild(v);    

}


// debouncing 
localStorage.setItem("debouncing", JSON.stringify(debouncingInfo));
let e = JSON.parse(localStorage.getItem("debouncing"));
console.log(e)
function debou(){
    for(let i in e){
        let f = document.createElement("ul");
        f.innerHTML = `<li>${e[i]}</li>`

        
        r.appendChild(f);
        
    }
    let v = document.createElement("video");
        v.src = "./video/Debouncing.mp4";
        v.type = "video/mp4";
        r.appendChild(v);    
}
