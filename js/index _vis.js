'use strict'

function main() {

    data();


}

function detectar(valor) {
    var result = "";

    if (valor == "verde") {
        result = "0--verde --- print --- variable detectada";
    } else if (valor == "morado") {
        result = " 1--morado --- for --- variable detectada";
    } else if (valor == "azul") {
        result = " 2--azul --- if --- variable";
    } else if (valor == "lila") {
        result = " 3--lila --- else --- variable";
    } else if (valor == "cafe") {
        result = " 4--cafe --- try --- variable";
    } else if (valor == "coral") {
        result = " 5--coral --- catch --- variable";
    } else if (valor == "mostaza") {
        result = " 6--mostaza --- while --- variable";
    } else if (valor == "negro") {
        result = " 7--negro --- do --- variable";
    } else if (valor == "blanco") {
        result = " 8--blanco --- pii --- variable";
    } else if (valor == "escarlata") {
        result = " 9--escarlata --- char --- variable";
    } else if (valor == "carmin") {
        result = " 10--carmin --- int --- variable";
    } else if (valor == "jade") {
        result = " 11--jade --- boolean --- variable";
    } else if (valor == "magenta") {
        result = " 12--magenta --- float --- variable";
    } else if (valor == "fucsia") {
        result = " 13--fucsia --- long --- variable";
    } else if (valor == "rosa") {
        result = " 14--rosa --- String --- variable";
    } else if (valor == "cian") {
        result = " 15--cian --- case --- variable";
    } else if (valor == "turquesa") {
        result = " 16--turqueza --- break --- variable";
    } else if (valor == "ambar") {
        result = " 17--ambar --- short --- variable";
    } else if (valor == "violeta") {
        result = " 18--violeta --- byte --- variable";
    } else if (valor == "purpura") {
        result = " 19--purpura --- import --- variable";
    } else if (valor == ">=") {
        result = " 20-->= - Operador Relacional";
    } else if (valor == "<=") {
        result = " 21--<= - Operador Relacional";
    } else if (valor == ">") {
        result = " 22--> - Operador Relacional";
    } else if (valor == "<") {
        result = " 23--< - Operador Relacional";
    } else if (valor == "=") {
        result = " 24--= - Operador Relacional";
    } else if (valor == "<>") {
        result = " 25--<> - Operador Relacional";
    } else if (valor == "{") {
        result = " 26--{ - Operador Relacional";
    } else if (valor == "}") {
        result = " 27--} - Operador Relacional";
    } else if (valor == "[") {
        result = " 28--[ - Operador Relacional";
    } else if (valor == "]") {
        result = " 29--] - Operador Relacional";
    } else if (valor == "(") {
        result = " 30--( - Operador Relacional";
    } else if (valor == ")") {
        result = " 31--)- Operador Relacional";
    } else if (valor == ";") {
        result = " 32--; - Operador Relacional";
    } else if (valor == "..") {
        result = " 33-- .. - Operador Relacional";
    } else if (valor == ",") {
        result = " 34--, - Operador Relacional";
    } else if (valor == "+") {
        result = " 35--+ - Operador Aritmetico";
    } else if (valor == "-") {
        result = " 36 -- '-' - Operador Aritmetico";
    } else if (valor == "*") {
        result = " 37-- * - Operador Aritmetico";
    } else if (valor == "/") {
        result = " 38-- / - Operador Aritmetico";
    }

    return result;

}

var myMap = new Map();
var contMap = 0;
var data2 = "";
var x2 = 0;
var nc = "";
var nc2 = "";
var nc3 = "";

function data() {

    var linebreak = document.createElement("br");
    var valor = "";


    valor = document.querySelector(".caja").value;
    data2 = valor.split(/[^Z-z*-Z1-9'-{|}]+/);
    // var view = document.querySelector(".caja2").value;



    // Control de declaracion de variables

    for (var x = 0; x <= data2.length; x++) {

        if (data2[x] == ("verde") || data2[x] == ("morado") || data2[x] == ("azul") || data2[x] == ("lila") ||
            data2[x] == ("cafe") || data2[x] == ("coral") || data2[x] == ("carmin") || data2[x] == ("mostaza") ||
            data2[x] == ("negro") || data2[x] == ("blanco") || data2[x] == ("escarlata") || data2[x] == ("jade") ||
            data2[x] == ("majenta") || data2[x] == ("fucsia") || data2[x] == ("rosa") || data2[x] == ("cian") ||
            data2[x] == ("turqueza") || data2[x] == ("purpura") || data2[x] == ("ambar") || data2[x] == ("violeta")) {


            if (data2[x] == "escarlata") {

                // escarlata palabra para declarar char 
                if (data2[x + 2] == "=" || data2[x + 2] == ";") {
                    nc = data2[x + 1].substring(0, data2[x + 1].length);
                    // capturamos si es = 0 si es ; 
                    // si es = se esta asignando valor 
                    // si es ; se esta declarando la variable sin valor

                    document.getElementById('info').append(nc);
                    document.getElementById('info').append(document.createElement('br'));
                    nc2 = data2[x + 2].substring(0, data2[x + 1].length);

                    if (nc2 == "=") {
                        // capturamos el valor que se le asigno
                        nc3 = data2[x + 3].substring(0, data2[x + 1].length);

                        document.getElementById('var').append(nc3);
                        document.getElementById('var').append(document.createElement('br'));
                        // nc3 capturamos y enviaremos a una area donde se muestren
                        // la variables declaradas y su valor

                    } else if (nc2 == ";") {

                        document.getElementById('var').append("NI");
                        document.getElementById('var').append(document.createElement('br'));

                    }


                    localStorage.setItem(x2, JSON.stringify(nc));

                    x2++;
                }

            } else if (data2[x] == "carmin") {
                // carmin palabra para declarar int

                if (data2[x + 2] == "=" || data2[x + 2] == ";") {
                    nc = data2[x + 1].substring(0, data2[x + 1].length);
                    // capturamos si es = 0 si es ; 
                    // si es = se esta asignando valor 
                    // si es ; se esta declarando la variable sin valor

                    document.getElementById('info').append(nc);
                    document.getElementById('info').append(document.createElement('br'));
                    nc2 = data2[x + 2].substring(0, data2[x + 1].length);

                    if (nc2 == "=") {
                        // capturamos el valor que se le asigno
                        nc3 = data2[x + 3].substring(0, data2[x + 1].length);

                        document.getElementById('var').append(nc3);
                        document.getElementById('var').append(document.createElement('br'));
                        // nc3 capturamos y enviaremos a una area donde se muestren
                        // la variables declaradas y su valor

                    } else if (nc2 == ";") {

                        document.getElementById('var').append("NI");
                        document.getElementById('var').append(document.createElement('br'));

                    }


                    localStorage.setItem(x2, JSON.stringify(nc));

                    x2++;
                }


            } else if (data2[x] == "jade") {

                // jade palabra para declarar valores boolean
                if (data2[x + 2] == "=" || data2[x + 2] == ";") {
                    nc = data2[x + 1].substring(0, data2[x + 1].length);
                    // capturamos si es = 0 si es ; 
                    // si es = se esta asignando valor 
                    // si es ; se esta declarando la variable sin valor

                    document.getElementById('info').append(nc);
                    document.getElementById('info').append(document.createElement('br'));
                    nc2 = data2[x + 2].substring(0, data2[x + 1].length);

                    if (nc2 == "=") {
                        // capturamos el valor que se le asigno
                        nc3 = data2[x + 3].substring(0, data2[x + 1].length);

                        document.getElementById('var').append(nc3);
                        document.getElementById('var').append(document.createElement('br'));
                        // nc3 capturamos y enviaremos a una area donde se muestren
                        // la variables declaradas y su valor

                    } else if (nc2 == ";") {

                        document.getElementById('var').append("NI");
                        document.getElementById('var').append(document.createElement('br'));

                    }


                    localStorage.setItem(x2, JSON.stringify(nc));

                    x2++;
                }


            } else if (data2[x] == "rosa") {

                // rosa palabra para declarar valores String
                if (data2[x + 2] == "=" || data2[x + 2] == ";") {
                    nc = data2[x + 1].substring(0, data2[x + 1].length);
                    // capturamos si es = 0 si es ; 
                    // si es = se esta asignando valor 
                    // si es ; se esta declarando la variable sin valor

                    document.getElementById('info').append(nc);
                    document.getElementById('info').append(document.createElement('br'));
                    nc2 = data2[x + 2].substring(0, data2[x + 1].length);

                    if (nc2 == "=") {
                        // capturamos el valor que se le asigno
                        nc3 = data2[x + 3].substring(0, data2[x + 1].length);

                        document.getElementById('var').append(nc3);
                        document.getElementById('var').append(document.createElement('br'));
                        // nc3 capturamos y enviaremos a una area donde se muestren
                        // la variables declaradas y su valor

                    } else if (nc2 == ";") {

                        document.getElementById('var').append("NI");
                        document.getElementById('var').append(document.createElement('br'));

                    }


                    localStorage.setItem(x2, JSON.stringify(nc));

                    x2++;
                }



            } else if (data2[x] == "ambar") {

                // ambar palabra para declarar valores short
                if (data2[x + 2] == "=" || data2[x + 2] == ";") {

                    var nc = data2[x + 1].substring(0, data2[x + 1].length);
                    localStorage.setItem(x2, JSON.stringify(nc));

                    x2++;
                }

            } else if (data2[x] == "violeta") {

                // violeta palabra para declarar valores byte
                if (data2[x + 2] == "=" || data2[x + 2] == ";") {

                    var nc = data2[x + 1].substring(0, data2[x + 1].length);

                    localStorage.setItem(x2, JSON.stringify(nc));

                    x2++;
                }

            }

        }

    }


    for (var x = 0; x <= data2.length; x++) {
        if (data2[x] == ("verde") || data2[x] == ("morado") || data2[x] == ("azul") || data2[x] == ("lila") ||
            data2[x] == ("cafe") || data2[x] == ("coral") || data2[x] == ("carmin") || data2[x] == ("mostaza") ||
            data2[x] == ("negro") || data2[x] == ("blanco") || data2[x] == ("escarlata") || data2[x] == ("jade") ||
            data2[x] == ("majenta") || data2[x] == ("fucsia") || data2[x] == ("rosa") || data2[x] == ("cian") ||
            data2[x] == ("turqueza") || data2[x] == ("purpura") || data2[x] == ("ambar") || data2[x] == ("violeta") ||
            data2[x] == "+" || data2[x] == "+" || data2[x] == "*" || data2[x] == ">=" || data2[x] == "-" ||
            data2[x] == "(" || data2[x] == ")" || data2[x] == "{" || data2[x] == "}" ||
            data2[x] == "=" || data2[x] == "/" || data2[x] == ":=" || data2[x] == "," ||
            data2[x] == ".." || data2[x] == "<>" || data2[x] == "<=" || data2[x] == "String" ||
            data2[x] == ">" || data2[x] == "<" || data2[x] == "[" || data2[x] == "]" || data2[x] == "*" || data2[x] == ">=" || data2[x] == "-" ||
            data2[x] == "(" || data2[x] == ")" || data2[x] == "{" || data2[x] == "}" ||
            data2[x] == "=" || data2[x] == "/" || data2[x] == ":=" || data2[x] == "," ||
            data2[x] == ".." || data2[x] == "<>" || data2[x] == "<=" || data2[x] == "String" ||
            data2[x] == ">" || data2[x] == "<" || data2[x] == "[" || data2[x] == "]" || data2[x] == ";"
        ) {


            document.getElementById("caj").append(detectar(data2[x]));
            document.getElementById('caj').append(document.createElement('br'));
            localStorage.setItem(x2, JSON.stringify(data2[x]));

            x2++;


        }
    }





    //control de errores
    for (var x = 0; x <= data2.length; x++) {

        if (data2[x] == "Morado" || data2[x] == "MOrado" || data2[x] == "MORado" || data2[x] == "MORAdo" ||
            data2[x] == "MORADo" || data2[x] == "MORADO" || data2[x] == "Morado" || data2[x] == "mOrado" ||
            data2[x] == "morAdo" || data2[x] == "moraDo" || data2[x] == "moRado" || data2[x] == "moradO") {

            myMap.set(contMap, "Error 0 : variable morado");
            console.log(myMap(x));
            contMap++;


            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {

                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (data2[x] == "Verde" || data2[x] == "VErde" || data2[x] == "VERde" || data2[x] == "VERDe" ||
            data2[x] == "VERDE" || data2[x] == "vErde" || data2[x] == "veRde" || data2[x] == "veRde" ||
            data2[x] == "verDe" || data2[x] == "verdE") {

            //agregando datos al hashmap

            myMap.set(contMap, "Error 1 : variable verde");
            contMap++;

            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (data2[x] == "Azul" || data2[x] == "aZul" || data2[x] == "VazUl" || data2[x] == "azuL" || data2[x] == "AZul" || data2[x] == "AZUl" ||
            data2[x] == "AZUL") {
            myMap.set(contMap, "Error 2 : variable azul");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }

        } else if (data2[x] == "Lila" || data2[x] == "LIla" || data2[x] == "LILa" || data2[x] == "LILA" ||
            data2[x] == "lIla" || data2[x] == "liLa" || data2[x] == "lilA") {
            myMap.set(contMap, "Error 3 : variable lila");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (data2[x] == "Cafe" || data2[x] == "CAfe" || data2[x] == "CAFe" || data2[x] == "CAFE" ||
            data2[x] == "cAfe" || data2[x] == "caFe" || data2[x] == "cafE") {
            myMap.set(contMap, "Error 4 : variable cafe");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (data2[x] == "Coral" || data2[x] == "COral" || data2[x] == "CORal" || data2[x] == "CORAl" || data2[x] == "CORAL" ||
            data2[x] == "cOral" || data2[x] == "coRal" || data2[x] == "corAl" || data2[x] == "coraL") {
            myMap.set(contMap, "Error 5 : variable coral");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (data2[x] == "Mostaza" || data2[x] == "MOstaza" || data2[x] == "MOStaza" || data2[x] == "MOSTaza" ||
            data2[x] == "MOSTAza" || data2[x] == "MOSTAZa" || data2[x] == "MOSTAzA" ||
            data2[x] == "mOstaza" || data2[x] == "moStaza" || data2[x] == "mosTaza" || data2[x] == "mostAza" || data2[x] == "mostaZa" ||
            data2[x] == "mostazA") {
            myMap.set(contMap, "Error 6 : variable mostaza");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }

        } else if (data2[x] == "Negro" || data2[x] == "NEgro" || data2[x] == "NEGro" || data2[x] == "NEGRo" ||
            data2[x] == "NEGRO" || data2[x] == "nEgro" || data2[x] == "neGro" || data2[x] == "negRo" || data2[x] == "negrO") {
            myMap.set(contMap, "Error 7 : variable negro");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }

        } else if (data2[x] == "Escarlata" || data2[x] == "EScarlata" || data2[x] == "ESCarlata" || data2[x] == "ESCArlata" ||
            data2[x] == "ESCARlata" || data2[x] == "ESCARLata" || data2[x] == "ESCARLAta" || data2[x] == "ESCARLATa" || data2[x] == "ESCARLATA" ||
            data2[x] == "eScarlata" || data2[x] == "esCarlata" || data2[x] == "escArlata" || data2[x] == "escaRlata" || data2[x] == "escarLata" ||
            data2[x] == "escarLata" || data2[x] == "escarlAta" || data2[x] == "escarlaTa" || data2[x] == "escarlatA") {
            myMap.set(contMap, "Error 8 : variable escarlata");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );

            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (
            data2[x] == "Blanco" || data2[x] == "BLanco" || data2[x] == "BLAnco" || data2[x] == "BLANco" ||
            data2[x] == "BLANCo" || data2[x] == "BLANCO" || data2[x] == "blancO" ||
            data2[x] == "bLanco" || data2[x] == "blAnco" || data2[x] == "blaNco" || data2[x] == "blanCo" ||
            data2[x] == "Blanco" || data2[x] == "BLanco" || data2[x] == "BLAnco" || data2[x] == "BLANco" ||
            data2[x] == "BLANCo" || data2[x] == "BLANCO" || data2[x] == "blancO" ||
            data2[x] == "bLanco" || data2[x] == "blAnco" || data2[x] == "blaNco" || data2[x] == "blanCo") {
            myMap.set(contMap, "Error 9 : variable blanco");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (
            data2[x] == "Carmin" || data2[x] == "CArmin" || data2[x] == "CARmin" || data2[x] == "CARMin" ||
            data2[x] == "CARMIn" || data2[x] == "CARMIN" || data2[x] == "cArmin" ||
            data2[x] == "caRmin" || data2[x] == "carMin" || data2[x] == "carmIn" || data2[x] == "carmiN") {
            myMap.set(contMap, "Error 10 : variable carmin");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }

        } else if (
            data2[x] == "Jade" || data2[x] == "JAde" || data2[x] == "JADe" || data2[x] == "JADE" ||
            data2[x] == "jAde" || data2[x] == "jaDe" || data2[x] == "jadE") {
            myMap.set(contMap, "Error 11 : variable jade");
            contMap++;

            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (
            data2[x] == "Magenta" || data2[x] == "MAgenta" || data2[x] == "MAGenta" || data2[x] == "MAGEnta" ||
            data2[x] == "MAGENta" || data2[x] == "MAGENTa" || data2[x] == "MAGENTA") {
            myMap.set(contMap, "Error 12 : variable magenta");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }

        } else if (
            data2[x] == "Fucsia" || data2[x] == "FUcsia" || data2[x] == "FUCsia" || data2[x] == "FUCSia" ||
            data2[x] == "FUCSIa" || data2[x] == "FUCSIA" || data2[x] == "fUcsia" || data2[x] == "fuCsia" || data2[x] == "fucSia" ||
            data2[x] == "fucsIa" || data2[x] == "fucsiA") {
            myMap.set(contMap, "Error 13 : variable fucsia");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (
            data2[x] == "Rosa" || data2[x] == "ROsa" || data2[x] == "ROSa" || data2[x] == "ROSA" ||
            data2[x] == "rOsa" || data2[x] == "roSa" || data2[x] == "rosA") {
            myMap.set(contMap, "Error 14 : variable rosa");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (
            data2[x] == "Rosa" || data2[x] == "ROsa" || data2[x] == "ROSa" || data2[x] == "ROSA" ||
            data2[x] == "rOsa" || data2[x] == "roSa" || data2[x] == "rosA") {
            myMap.set(contMap, "Error 15 : variable rosa");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (
            data2[x] == "Turquesa" || data2[x] == "TUrquesa" || data2[x] == "TURquesa" || data2[x] == "TURQuesa" ||
            data2[x] == "TURQUesa" || data2[x] == "TURQUEsa" || data2[x] == "TURQUESa" || data2[x] == "TURQUESA" ||
            data2[x] == "tUrquesa" || data2[x] == "tuRquesa" || data2[x] == "turQuesa" || data2[x] == "turqUesa" ||
            data2[x] == "turquEsa" || data2[x] == "turqueSa" || data2[x] == "turquesA") {
            myMap.set(contMap, "Error 16 : variable turquesa");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (data2[x] == "Ambar" || data2[x] == "AMbar" || data2[x] == "AMBar" || data2[x] == "AMBAr" ||
            data2[x] == "AMBAR" || data2[x] == "aMbar" || data2[x] == "amBar" || data2[x] == "aMbar" ||
            data2[x] == "amBar" || data2[x] == "ambAr" || data2[x] == "ambaR") {
            myMap.set(contMap, "Error 17 : variable ambar");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (
            data2[x] == "Violeta" || data2[x] == "VIoleta" || data2[x] == "VIOleta" || data2[x] == "VIOLeta" ||
            data2[x] == "VIOLEta" || data2[x] == "VIOLETa" || data2[x] == "VIOLETA" || data2[x] == "vIoleta" ||
            data2[x] == "viOleta") {
            myMap.set(contMap, "Error 18 : variable violeta");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }


        } else if (
            data2[x] == "Purpura" || data2[x] == "PUrpura" || data2[x] == "PURpura" || data2[x] == "PURPura" ||
            data2[x] == "PURPUra" || data2[x] == "PURPURa" || data2[x] == "PURPURA" || data2[x] == "pUrpura" || data2[x] == "puRpura" ||
            data2[x] == "purPura" || data2[x] == "purpUra" || data2[x] == "purpuRa" || data2[x] == "purpurA") {
            myMap.set(contMap, "Error 19 : variable purpura");
            contMap++;
            var info = prompt("Se encontro este error:" + errores(data2[x]) + "\n" +
                "Desea continua?" + "\n" +
                "Si: Continuara" + "\n" +
                "No: Borrara todo", );
            if (info == "No" || info == "no") {
                x2 = 0;
                nc = "";
                nc2 = "";
                nc3 = "";

                window.localStorage.clear();
                document.getElementById("caj").innerHTML = "";
                document.getElementById("info").innerHTML = "";
                document.getElementById("var").innerHTML = "";
                reset();
            }

        }

        for (var y = 0; y <= myMap.size - 1; y++) {

            console.log(myMap.get(y));
        }



    }




}


function mostrarOcultar(id) {
    var elemento = document.getElementById(id);
    if (!elemento) {
        return true;
    }
    if (elemento.style.display == "none") {
        elemento.style.display = "block"
    } else {
        elemento.style.display = "none"
    };
    return true;
};

function errores(carga) {
    var result = "";

    if (carga == "Morado" || carga == "MOrado" || carga == "MORado" || carga == "MORAdo" || carga == "MORADo" || carga == "MORADO" ||
        carga == "Morado" || carga == "mOrado" || carga == "morAdo" || carga == "moraDo" || carga == "moRado" || carga == "moradO") {
        result = "0 -- Error en la escritura var: morado"

    } else if (carga == "Verde" || carga == "VErde" || carga == "VERde" || carga == "VERDe" || carga == "VERDE" ||
        carga == "vErde" || carga == "veRde" || carga == "veRde" || carga == "verDe" || carga == "verdE") {
        result = "1 -- Error en la escritura var: verde"

    } else if (carga == "Azul" || carga == "aZul" || carga == "VazUl" || carga == "azuL" ||
        carga == "AZul" || carga == "AZUl" || carga == "AZUL") {
        result = "2 -- Error en la escritura de la PR: azul"

    } else if (carga == "Lila" || carga == "LIla" || carga == "LILa" || carga == "LILA" ||
        carga == "lIla" || carga == "liLa" || carga == "lilA") {

        result = "3 -- Error en la escritura de la PR: lila"

    } else if (carga == "Cafe" || carga == "CAfe" || carga == "CAFe" || carga == "CAFE" ||
        carga == "cAfe" || carga == "caFe" || carga == "cafE") {

        result = "4 -- Error en la escritura de la PR: cafe"

    } else if (carga == "Coral" || carga == "COral" || carga == "CORal" || carga == "CORAl" || carga == "CORAL" ||
        carga == "cOral" || carga == "coRal" || carga == "corAl" || carga == "coraL") {

        result = "5 -- Error en la escritura de la PR: coral"

    } else if (carga == "Mostaza" || carga == "MOstaza" || carga == "MOStaza" || carga == "MOSTaza" ||
        carga == "MOSTAza" || carga == "MOSTAZa" || carga == "MOSTAzA" ||
        carga == "mOstaza" || carga == "moStaza" || carga == "mosTaza" || carga == "mostAza" || carga == "mostaZa" ||
        carga == "mostazA") {

        result = "6 -- Error en la escritura de la PR: mostaza"

    } else if (carga == "Negro" || carga == "NEgro" || carga == "NEGro" || carga == "NEGRo" ||
        carga == "NEGRO" ||
        carga == "nEgro" || carga == "neGro" || carga == "negRo" || carga == "negrO") {

        result = "7 -- Error en la escritura de la PR: negro"

    } else if (carga == "Escarlata" || carga == "EScarlata" || carga == "ESCarlata" || carga == "ESCArlata" ||
        carga == "ESCARlata" || carga == "ESCARLata" || carga == "ESCARLAta" || carga == "ESCARLATa" || carga == "ESCARLATA" ||
        carga == "eScarlata" || carga == "esCarlata" || carga == "escArlata" || carga == "escaRlata" || carga == "escarLata" ||
        carga == "escarLata" || carga == "escarlAta" || carga == "escarlaTa" || carga == "escarlatA") {

        result = "8 -- Error en la escritura de la PR: escarlata"

    } else if (carga == "Blanco" || carga == "BLanco" || carga == "BLAnco" || carga == "BLANco" ||
        carga == "BLANCo" || carga == "BLANCO" || carga == "blancO" ||
        carga == "bLanco" || carga == "blAnco" || carga == "blaNco" || carga == "blanCo") {

        result = "9 -- Error en la escritura de la PR: blanco"

    } else if (carga == "Carmin" || carga == "CArmin" || carga == "CARmin" || carga == "CARMin" ||
        carga == "CARMIn" || carga == "CARMIN" || carga == "cArmin" ||
        carga == "caRmin" || carga == "carMin" || carga == "carmIn" || carga == "carmiN") {

        result = "10 -- Error en la escritura de la PR: carmin"

    } else if (carga == "Jade" || carga == "JAde" || carga == "JADe" || carga == "JADE" ||
        carga == "jAde" || carga == "jaDe" || carga == "jadE") {

        result = "11 -- Error en la escritura de la PR: jade"

    } else if (carga == "Magenta" || carga == "MAgenta" || carga == "MAGenta" || carga == "MAGEnta" ||
        carga == "MAGENta" || carga == "MAGENTa" || carga == "MAGENTA") {

        result = "12 -- Error en la escritura de la PR: magenta"

    } else if (carga == "Fucsia" || carga == "FUcsia" || carga == "FUCsia" || carga == "FUCSia" ||
        carga == "FUCSIa" || carga == "FUCSIA" || carga == "fUcsia" || carga == "fuCsia" || carga == "fucSia" ||
        carga == "fucsIa" || carga == "fucsiA") {

        result = "13 -- Error en la escritura de la PR: fucsia"

    } else if (carga == "Rosa" || carga == "ROsa" || carga == "ROSa" || carga == "ROSA" ||
        carga == "rOsa" || carga == "roSa" || carga == "rosA") {

        result = "14 -- Error en la escritura de la PR: rosa"

    } else if (carga == "Turquesa" || carga == "TUrquesa" || carga == "TURquesa" || carga == "TURQuesa" ||
        carga == "TURQUesa" || carga == "TURQUEsa" || carga == "TURQUESa" || carga == "TURQUESA" ||
        carga == "tUrquesa" || carga == "tuRquesa" || carga == "turQuesa" || carga == "turqUesa" ||
        carga == "turquEsa" || carga == "turqueSa" || carga == "turquesA") {

        result = "15 -- Error en la escritura de la PR: turquesa"

    } else if (carga == "Ambar" || carga == "AMbar" || carga == "AMBar" || carga == "AMBAr" ||
        carga == "AMBAR" || carga == "aMbar" || carga == "amBar" || carga == "aMbar" || carga == "amBar" ||
        carga == "ambAr" || carga == "ambaR") {

        result = "16 -- Error en la escritura de la PR: ambar"

    } else if (carga == "Violeta" || carga == "VIoleta" || carga == "VIOleta" || carga == "VIOLeta" ||
        carga == "VIOLEta" || carga == "VIOLETa" || carga == "VIOLETA" || carga == "vIoleta" || carga == "viOleta") {

        result = "17 -- Error en la escritura de la PR: violeta"

    } else if (carga == "Purpura" || carga == "PUrpura" || carga == "PURpura" || carga == "PURPura" ||
        carga == "PURPUra" || carga == "PURPURa" || carga == "PURPURA" || carga == "pUrpura" || carga == "puRpura" ||
        carga == "purPura" || carga == "purpUra" || carga == "purpuRa" || carga == "purpurA") {

        result = "18 -- Error en la escritura de la PR: purpura"

    } else if (carga == "Cian" || carga == "CIan" || carga == "CIAn" || carga == "CAIAN" ||
        carga == "cIan" || carga == "ciAn" || carga == "ciaN") {

        result = "19 -- Error en la escritura de la PR: cian"


    }
    return result;
}






//reset text area
function reset() {
    var ta = document.getElementById('ta');
    if (!ta.value || ta.value != ta.defaultValue && confirm('Are you sure?')) {
        ta.value = ta.defaultValue;
    }
}



var network;

function get() {
    var localstorageleght = JSON.parse(localStorage.length);


    console.log(localstorageleght);

    var container;
    var exportArea;


    function init() {
        container = document.getElementById('network');
        exportArea = document.getElementById('input_output');


        draw();
    }




    function addConnections(elem, index) {
        // need to replace this with a tree of the network, then get child direct children of the element
        elem.connections = network.getConnectedNodes(index);
    }



    function draw() {
        // create a network of nodes
        var data = getScaleFreeNetwork(localstorageleght); //getScaleFreeNetwork(1);
        network = new vis.Network(container, data, {
            manipulation: {
                enabled: true
            }
        });

    }

    function getNodeData(data) {
        var networkNodes = [];
        data.forEach(function(elem, index, array) {
            networkNodes.push({
                id: elem.id,
                label: elem.id,
                x: elem.x,
                y: elem.y
            });
        });

        return new vis.DataSet(networkNodes);
    }

    function getNodeById(data, id) {

        for (var n = 0; n < data.length; n++) {
            if (data[n].id == id) { // double equals since id can be numeric or string
                return data[n];
            }
        };

        throw 'Can not find id \'' + id + '\' in data';
    }

    function getEdgeData(data) {
        var networkEdges = [];

        data.forEach(function(node) {
            // add the connection
            node.connections.forEach(function(connId, cIndex, conns) {
                networkEdges.push({
                    from: node.id,
                    to: connId
                });
                let cNode = getNodeById(data, connId);

                var elementConnections = cNode.connections;

                // remove the connection from the other node to prevent duplicate connections
                var duplicateIndex = elementConnections.findIndex(function(connection) {
                    return connection == node.id; // double equals since id can be numeric or string
                });


                if (duplicateIndex != -1) {
                    elementConnections.splice(duplicateIndex, 1);
                };
            });
        });

        return new vis.DataSet(networkEdges);
    }

    function objectToArray(obj) {
        return Object.keys(obj).map(function(key) {
            obj[key].id = key;

            return obj[key];
        });
    }

    function resizeExportArea() {
        exportArea.style.height = (1 + exportArea.scrollHeight) + "px";

    }

    init();
}

//reset textvie

function destroyNetwork() {
    x2 = 0;
    nc = "";
    nc2 = "";
    nc3 = "";

    network.destroy();
    window.localStorage.clear();
    document.getElementById("caj").innerHTML = "";
    document.getElementById("info").innerHTML = "";
    document.getElementById("var").innerHTML = "";
    reset();
}