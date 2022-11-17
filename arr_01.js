/*********   Theorie push() / pop()  **********/

    // push --> Daten rein ... (+)
        // let arr = [];
        // output(arr);
        // arr.push("Ich");
        // output(arr);
        // arr.push("bin");
        // output(arr);
        // arr.push("Max");
        // output(arr);
        // arr.push("Mustermann");
        // output(arr);

    // output(arr[arr.length-1]);          // gibt den letzten Eintrag des Arrays

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

/********************************************************/
/*******                Example 01                *******/
/********************************************************/

    // Modul: globale Variablen
        const cobj = { 
            open_o: "<", 
            close_o: "</", 
            close: ">" 
        }
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
        output( getHTML() );
        function getHTML() {
            let htmlStr = "";

            for ( let i = 0; i < tags.length; i ++ ) {
                // if(false) {
                if ( isOpenElement( tags[ i ] ) ) { 
                    htmlStr += getElement( tags[ i ], "open" );
                } else {
                    htmlStr += getElement( tags[ i ], "close" );
                }
            }

            return htmlStr;
        }

        // output( isOpenElement( "head" ) );
        // output( isOpenElement( "body" ) );
        // output( isOpenElement( "body" ) );
        // output( isOpenElement( "head" ) );
        function isOpenElement( tag ) {
            let cond = ( tag != stack[ stack.length - 1 ] );    // tag liegt nicht oben! --> neu, open
            
            if ( cond ) {                                       // open
                stack.push( tag );
                // output( stack );                               // zeigt die Struktur in der Konsole
                return true;
            } else {                                            // close
                stack.pop();
                // output( stack );                               // zeigt die Struktur in der Konsole
                return false;
            }
            
        }

    // Modul: Zusammenbau der Elements: <tagStr> --> Tests:
        // output(getElement(tags[1],"open"));
        // output(getElement(tags[1],"close"));
        // output(getElement(tags[1]));
        function getElement( tag, op ) {
            switch ( op ) {
                case "open": 
                    // return controls[ 0 ] + tag + controls[ 2 ];
                    return cobj.open_o + tag + cobj.close;
                case "close":
                    // return controls[ 1 ] + tag + controls[ 2 ];
                    return cobj.close_o + tag + cobj.close;
                default:
                return "#!?";
            }
        }

/********************************************************/
/*******                  Output                  *******/
/********************************************************/
    // output
    // output( "Test" );
    function output( outputStr ) { console.log( outputStr ); }