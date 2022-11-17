/*********   Theorie **********/

// push() / pop()
// push --> Daten rein ... (+)
// let arr = [];
// output(arr);
// arr.push("Ich");
// output(arr);
// arr.push("bin");
// output(arr);
// arr.push("Max");
// output(arr);

// output(arr[arr.length-1]);

// pop() --> Daten raus ... (-)

// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);

/*
    Aufgabe:
        Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
        einer HTML-Seite ausgibt:
        <html><head></head><body><h1></h1><p></p></body></html>
        Verwenden Sie dafür die untenstehenden Arrays
*/

const cobj = { open_o:"<", close_o:"</", close:">" }
const controls = [ "<", "</", ">" ];
const tags = [ 
    "html", "head", "head", "body",
    "h1", "h1",
    "p", "p",
    "ul", "li", "li", "li", "li", "li", "li", "ul",
    "p", "p",
    "body", "html"
];

let stack = [];

// Modul: HTML-Synthese | Test
output(getHTML());
function getHTML() {

    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) {
        if (isOpenElement(tags[i])) 
        // if(false)
        { 
            htmlStr += getElement(tags[i],"open");
        } else {
            htmlStr += getElement(tags[i],"close");
        }
    }

    return htmlStr;
}

function isOpenElement(tag) {
    
    // tag liegt nicht oben! --> neu, open
    let cond = (tag != stack[stack.length-1]); 
    
    if (cond) {  // open
        stack.push(tag);
        output(stack);
        return true;
    } else {  // close
        stack.pop();
        output(stack);
        return false;
    }
     
}

// Modul: Zusammenbau der Elements: <tagStr> --> Tests:
// output(getElement(tags[1],"open"));
// output(getElement(tags[1],"close"));
// output(getElement(tags[1]));
function getElement(tag,op) {
    switch (op) {
        case "open": 
            // return controls[0] + tag + controls[2];
            return cobj.open_o + tag + cobj.close;
        case "close":
            // return controls[1] + tag + controls[2];
            return cobj.close_o + tag + cobj.close;
        default:
          return "#!?";
    }
}

// Modul: Ausgabe | Test
//output("hi");
function output(inputData) {
    console.log(inputData);
}
