
type Vector = number[];

export class Vaje {

    // Find prime numbers up to n
    primeNumbers (n: number) : number[] {
        let primes : number[] = [2];
        if (n < 2) {
            return primes;
        }
        for (let i = 2; i <= n; i++) {
            let isPrime: boolean = true;
            if (i % 2 == 0 && i != 2) {
                isPrime = false;
                continue;
            } 
            for (let j = i-1; j > 1; j--) {
                if (i % j == 0 ) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(i);
            }
        }
        return primes;
    }


    celsiusToFahrenheit (celsius: number) : number {
        return (celsius * 9/5) + 32;
    }

    fahrenheitToCelsius (fahrenheit: number) : number {
        return (fahrenheit - 32) * 5/9;
    }

    pitagoras (a : number, b : number) : number {
        return Math.sqrt(a * a + b * b);
    }

    ploscinatrikotnika (a : number, b: number, c: number) : number {
        const s = (a +b + c) / 2;
        return Math.sqrt(s * (s -a) * (s - b) * (s - c));
    }


    //
    collatz (n : number) : number[] {
        const sequence :number[] = [];
        while (n != 1) {
            sequence.push(n);
            if (n % 2 == 0) {
                n = n / 2;
            }
            else {
                n = 3 * n + 1;
            }
        }
        sequence.push(1);
        return sequence;
    }


    vrziKovanec(): string {
        return Math.random() < 0.5 ? "G" : "C";
    }



    igrajKovance() {
        let stKovancev: number = 5;
        let met : string = "";
        while (stKovancev > 0 && stKovancev < 10) {
            console.log("Stanje kovancev: " + stKovancev);
            met = this.vrziKovanec();
            if (met != "G" && met != "C")  {
                console.error("Neveljaven met" + met);
                break;
            }

            console.log("Met: " + met);
            if (met == "G") {
                stKovancev++;
            }
            else {
                stKovancev--;
            }
        }
        console.log("Konec igre. Stanje kovancev: " + stKovancev);
    }


    reverseNumber (stevilo: number) : number {
        let reversed: number = 0;
        while (stevilo > 0) {
            reversed = reversed * 10 + stevilo % 10;
            stevilo = Math.floor(stevilo / 10);
        }
        return reversed;


    }


    calculator (a : number ,b :number, operator: string) : number {
        if (a == null || b == null) {
            throw new Error("invalid input");
        } 
        if (operator == null) {
            throw new Error("invalid operator");
        }
        if (b == 0 && operator == "/") {
            throw new Error ("Division by zero.");
        }

        switch (operator) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
            default:
                throw new Error ("Invalid operator:" + operator);
        }
    }


    vsotaStevil (lista : number[]) : number {
        if (lista == null || lista.length == 0 ) {
            throw new Error("Invalid or empty list given.");
        }
        let vsota : number = 0;
        for (let i=0; i< lista.length;i++) {
            vsota += lista[i];
        }
        return vsota;
    }


    steviloZnakov (znak : string, beseda: string) : number {
        if (beseda == null || beseda.length == 0) {
            throw new Error ("Invalidni string");
        }
        if ( znak == null || znak.length == 0) {
            throw new Error ("Invalid character");
        }
        let stZnakov : number = 0;
        for (let i =0; i < beseda.length; i++) {
            if (beseda[i] == znak) {
                stZnakov++;
            }
        }
        return stZnakov;
    }


    maxElement (lista: number[]): number {
        if (lista == null || lista.length == 0) {
            throw new Error("Invalid or empty list given.");
        }
        let max : number = lista[0];
        for (let i=0;i < lista.length;i++) {
            if (lista[i] > max)  {
                max = lista[i];
            }
        }
        return max;
    }


    maxAbsolute( lista: number[]): number {
        if (lista == null || lista.length == 0) {
            throw new Error("Invalid or empty list given.");
        }
        let max  :number = Math.abs(lista[0]);
        for (let i=0; i < lista.length; i++) {
            if (Math.abs(lista[i]) > max) {
                max = Math.abs(lista[i]);
            }
        }
        return max;
    }
    

    minPozitivnoStevilo (lista: number[]): number {
        if (lista.length == 0) {
            throw new Error("Invalid or empty list given.");
        }
        let min : number = Number.MAX_VALUE;
        for (let i =0; i < lista.length; i++ ) {
            if (lista [i] > 0 && lista[i] < min ) {
                min = lista[i];
            }
        }
        return min;
    }

    najdaljsaBeseda (stavek: string): string {
        if (stavek.length == 0) {
            throw new Error("Invalid or empty string given.");
        }
        let besede : string[] = stavek.split(" ");
        let najdaljsaBeseda : string = besede[0];
        for (let beseda of besede) {
            if (beseda.length > najdaljsaBeseda.length) {
                najdaljsaBeseda = beseda;
            }
        }
        return najdaljsaBeseda;
    }


    povpTeza (teze: number[]) : number {
        if (teze.length == 0) {
            throw new Error ("Invalid or empty list given.");
        }
        let vsota : number = 0;
        for (let teza of teze) {
            vsota += teza;
        }
        return vsota /teze.length;
    }


    //najdi min in max v seznamu
    minMax (lista : number[]) : {min: number, minIndex : number, max : number, maxIndex : number} {
        if (lista == null || lista.length == 0) {
            throw new Error("Invalid or empty list given.");
        }
        let min : number = lista[0];
        let minIndex : number = 0;
        let max : number = lista[0];
        let maxIndex : number = 0;
        for (let i=1; i < lista.length; i++) {
            if (lista[i] < min) {
                min = lista[i];
                minIndex = i;
            }
            if (lista[i] > max) {
                max = lista[i];
                maxIndex = i;
            }
        }
        return {min: min,minIndex: minIndex,  max: max, maxIndex: maxIndex};
    }

    //23.naloga
    povpTezaBrezEkstremov (teze: number[]) : number {
        if (teze.length < 3) {
            throw new Error ("Prekratek seznam tež. Potrebujem vsaj 3 teže");
        }
    
        let vsota : number = 0;
        let stElementov : number = 0;

        let maxIndex : number  = this.minMax(teze).maxIndex;
        let minIndex : number = this.minMax(teze).minIndex;

        for (let i = 1; i < teze.length; i++) {
            if ( i != maxIndex && i != minIndex) {
                vsota = vsota + teze[i];
                stElementov++;          
            }
        }
        return vsota / stElementov;
    }

    // 24.naloga
    kolikoBonbonov (lista : number[]) : number {
        if (lista == null || lista.length == 0) {
            throw new Error("Invalid or empty list given.");
        }

        let stBonbonov : number = 0;
        let max : number = this.maxElement(lista);
        for (let el of lista) {
            if (el != max) {
                stBonbonov = stBonbonov + (max - el);
            }
        }
        return stBonbonov;
    }

    //25.naloga
    vsajEnoLiho (lista : number[]) : boolean {
        if (lista == null || lista.length == 0) {
            throw new Error("Invalid or empty list given.");
        }
        for (let el of lista) {
            if (el % 2 !=0) {
                return true;
            }
        }
        return false;
    }

    //26.naloga
    samaLiha (lista : number[]) : boolean {
        if (lista == null || lista.length == 0) {
            throw new Error("Invalid or empty list given.");
        }
        let vsaLiha : boolean = true;
        for (let el of lista) {
            if (el % 2 == 0) {
                vsaLiha = false;
                break;
            }
        }
        return vsaLiha;
    }

    //27.naloga
    blagajna (vrsta : string) : number {
        if (vrsta == null || vrsta.length == 0) {
            throw new Error("Invalid or empty string given.");
        }
        let maxDolzina : number = 0;
        let trenutnaDolzina : number = 0;
        for (let znak of vrsta) {
            if (znak == "+") {
                trenutnaDolzina++;
            }
            else if (znak == "-") {
                if (trenutnaDolzina > maxDolzina) {
                    maxDolzina = trenutnaDolzina;
                }
                trenutnaDolzina--;
            }
            else {
                throw new Error("Invalid character in queue:" + znak);
            }
        }
        return maxDolzina;
    }

    //28.naloga
    niPreobremenjenih (tovori : number [][], maxObremenitev : number) : boolean {
        if (tovori == null || tovori.length == 0) {
            throw new Error("invalid or empty list given.");
        }
        if (maxObremenitev <= 0) {
            throw new Error("Invalid max load given.");
        }
        for (let ladja of tovori) {
            let vsotaTovora : number = 0;
            for (let tovor of ladja) {
                vsotaTovora += tovor;
            }
            if (vsotaTovora > maxObremenitev) {
                return false;
            }
        }
        return true;
    }


    //29.naloga
    delitelji (stevilo : number) : number[] {
        if (stevilo <= 0) {
            throw new Error("Stevilo mora biti pozitivno.");
        }
        let delitelji : number[] = [];
        for (let i=1; i <= Math.sqrt(stevilo); i++) {
            if (stevilo % i == 0) {
                delitelji.push(i);
                if (i !== stevilo / i) { // ne dodajam kvadratnega korena dvakrat npr 36
                    delitelji.push(stevilo / i);
                }
            }
        }
        return delitelji.sort((a, b) => a - b); //sortiram v naracajočem vrstem redu

    }

    //30.naloga
    jePrastevilo (stevilo : number) : boolean {
        if (stevilo <= 1) {
            return false;
        }
        if (stevilo == 2) {
            return true;
        }
        let isPrime : boolean  = true;
        for (let i= 3; i<= Math.sqrt(stevilo); i=i+2 ) {
            if (stevilo % i == 0) {
                return false;
                break;
            }
        }
        return true;
    }

    //31.naloga
    vsotaDeliteljev (stevilo : number) : number {
        if (stevilo <= 0) {
            throw new Error("Stevilo mora biti pozitivno");
        }
        let delitelji : number[] = this.delitelji(stevilo);    
        let vsota : number = 0;
        for (let delitelj of delitelji) {
            if (delitelj != stevilo) {
                vsota += delitelj;
            }
        }
        return vsota;
    }

    //32.naloga
    popolnoStevilo (stevilo : number) : boolean {
        let vsotaDeliteljev = this.vsotaDeliteljev (stevilo);
        if (vsotaDeliteljev == stevilo) {
            return true;
        }
        return false;
    }

    //33.naloga
    vsaPopolnaStevila ( n : number) : number[] {
        let popolnaStevila : number [] = [];
        for (let i=1; i < n; i++) {
            if (this.popolnoStevilo(i)) {
                popolnaStevila.push(i);
            }
        }
        return popolnaStevila;
    }

   //35.naloga vsebuje 7
   postevanka7 ( n: number) : string[] {
    if (n < 7) {
        throw new Error("Mora biti >=7");
    }
    let postevanka : string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i.toString().includes("7")) {
            postevanka.push("BUM");            
        }
        else if (i % 7 == 0) {
            postevanka.push("BUUM");
        }
        else {
            postevanka.push(i.toString());
        }
    }
    return postevanka;
}


//37.naloga 
    fibonacci (n: number) : number[] {
        const sequence: number[] = [0,1]
        if (n <= 0) {
            return [];
        }
        for (let i = 2; i < n; i++) {
            sequence[i] = sequence[i - 1] + sequence[i - 2]
        }
        return sequence;
    }

    //40.naloga
    sesteteTrojke (trojke : number[][]) : boolean {
        if (trojke.length == 0 || trojke == null) {
            throw new Error("Prekratek ali napačen seznam trojk");
        }

        let tmpSum : number = 0;
        for (let i = 0; i < trojke.length; i++) {
            tmpSum = trojke[i][0] + trojke[i][1];

            if(tmpSum != trojke[i][2]) {
                return false;
            }
        }
        return true;
    }


    //41.naloga
    skalarniProdukt ( a : Vector, b : Vector ) : number {
        if (a.length != b.length) {
            throw new Error ("Vectors must be of same size");
        }
        let c : number = 0;
        for (let i = 0; i < a.length; i++) {
            c = c + (a[i] * b[i])
        }
        return c;
    }


    //42.ujemanje črk 
    ujemanjeCrk (b1 : string , b2: string) : number {
        let stUjemanj : number = 0;
        if (b1 == null || b2 == null) {
            throw new Error("Neki loss");
        }
        //najdi krajso brez Math.min
        const krajsaDolzina = b1.length <= b2.length ? b1.length : b2.length;

        for (let i =0; i < krajsaDolzina; i++ ) {
            if (b1[i].toUpperCase() == b2[i].toUpperCase()) {
                ++stUjemanj;
            }
        }
        return stUjemanj;
    }

    //43.vzored besede
    seUjemaVzorec(beseda: string, vzorec: string): boolean {
        if (beseda == null || vzorec == null) {
            throw new Error("Neveljavna beseda ali vzorec");
        }

        if (beseda.length !== vzorec.length) {
        return false;
        }

        for (let i = 0; i < beseda.length; i++) {
        // preveri če vzorec ne usreza
            if (vzorec[i] !== '.' && beseda[i] !== vzorec[i]) {
                return false;
            }
        }
        return true;
    }


    //44.prvo ujemanje 
    prvoUjemanje (besede : string[], vzorec : string) : string {
        if (besede.length == 0 || vzorec.length == 0) {
            throw new Error ("Premalo besed ali neveljaven vzorec");
        }
        let najdena : string = "";
        for (let beseda of besede) {
            if (this.seUjemaVzorec (beseda,vzorec)) {
                najdena = beseda;
                break;
            }
        }
        return najdena;
    }


    //45.naloga
    paralelniSkoki (drzava1 : number[], drzava2 : number[]) : number {
        if (drzava1.length == 0 || drzava2.length == 0) {
            throw new Error ("Neveljaven seznam skokov");
        }
        if (drzava1.length != drzava2.length) {
            throw new Error("Seznama skokov sta razlicnih dolzin.");
        }

        let d1Tocke : number = 0;
        let d2Tocke : number = 0;
        for (let i = 0; i < drzava1.length; i++ ) {
            if (drzava1[i] < drzava2[i]) {
                d2Tocke++;
            }
            else if (drzava1[i] > drzava2[i]) {
                d1Tocke++;
            }
            else {
                d1Tocke = d1Tocke + 0.5;
                d2Tocke = d2Tocke + 0.5;
            }            
        }
        return d1Tocke > d2Tocke ? 1 : d1Tocke < d2Tocke ? 2 : 0;
    } 


    //46.naloga
    indeksMax (list : number[]) : number {
        if (!list?.length) {
            throw new Error ("Seznam je prazen");
        }
        let max = list[0];
        let indeksMax = 0
        for (let i = 1; i < list.length; i++) {
            if ( list[i] > max ) {
                max = list[i];
                indeksMax = i;
            }
        }
        return indeksMax;
    }


    //48.naloga-tricky
    zamenjajTeze (osebe : string[], teze: number[]) : string[] {
        if (osebe.length == 0 || teze.length == 0) {
            throw new Error("prekratki seznami");
        }
        let novaLista : string [] = [];
        let index : number = 0;

        for (let oseba of osebe) {
            if (oseba.endsWith("a")) {
                novaLista.push(oseba);
            }
            else {
                if ( index < teze.length) {
                    novaLista.push(teze[index].toString());
                    index++;
                }
                else novaLista.push(oseba);
            }
        }
        return novaLista;
    }


    //49.naloga
    staSeznamaEnakaAliRazlicna(seznamA: number[], seznamB: number[]): number {
        if (seznamA.length !== seznamB.length) {
            return 0;
        }
        const sortiranA = seznamA.sort();
        const sortiranB = seznamB.sort();

        for (let i = 0; i < seznamA.length; i++) {
            if (seznamA[i] !== seznamB[i]) {
                return 0;
            }
        }
        return 0;
    }


    //50.naloga EMSO
    jeZenska (emso : string) : boolean {
        let zapStevilka : string = emso.substring(9,12);
        console.log(zapStevilka);
        if (Number(zapStevilka) < 500) {
            return false
        }
        return true;
    }


    //51.naloga
    preveriEmso (emso : string) : boolean {
        if (emso.length < 13) {
            return false;
        }
        let vsota1 : number = 0;
        let vsota2 : number = 0;

        for (let i = 0; i < 7; i++) {
            let factor = 7 - i;
            vsota1 = vsota1 + parseInt(emso[i],10) * factor;
        }

        for (let i = 6; i < 12 ; i++) {
            let factor = 13 - i;
            vsota2 = vsota2 + parseInt(emso[i],10) * factor;
        }

        const vsotaSkupna = vsota1 + vsota2 + parseInt(emso[12]);
        return vsotaSkupna % 11 === 0;
    }

    //52.naloga
    starostEmso ( emso:string) : boolean {
        if (emso.length < 13) {
            throw new Error("invqalid emso");
        }
        
    }



    







}