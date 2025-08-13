
type Vector = number[];

type Tecaji = Record <string, Set<string>>;

type Inventar = Record <string, number>;

type Sociogram = Record<string, Set<string> >; 


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
    starostEmso ( emso : string) : { leto : number, meseci : number, dnevi :number } {
        if (!this.preveriEmso(emso)) {
            throw new Error("napacen emso stari!");
        }
        const dan : number = parseInt (emso.substring(0,2));
        const mesec : number = parseInt (emso.substring(2,4));
        const delnoLeto : number = parseInt (emso.substring(4,7));

        //polno leto če je npr 980 potem je rojen v 1980 ,.če je 001 potem je 2001 ,manjše od 100 = 2xxx+ ,večje od 100= 19xx
        const polnoLeto = delnoLeto >= 100 ? 1000 + delnoLeto : 2000 + delnoLeto; 
        console.log ("leto = "+ polnoLeto);

        const rojDan = new Date (polnoLeto,mesec-1,dan); //mesec indeksi od 0 dalje

        const danes = new Date();
        let leto : number = danes.getFullYear() - rojDan.getFullYear();
        let meseci : number = danes.getMonth() - rojDan.getMonth();
        let dnevi : number = danes.getDay() - rojDan.getDay();

        //če so negativni dnevi
        if (dnevi < 0) {
            meseci--; 
            const prejsniMesec  =  new Date(danes.getFullYear(), danes.getMonth(), 0);
            dnevi = dnevi + prejsniMesec.getDate();
        }

        if (meseci < 0) {
            --leto;
            meseci = meseci + 12;

        }
        return {leto,meseci,dnevi};
    }

    //55.naloga
    nepadajoc (seznam : number[] ) : boolean {
        if (seznam.length == 0) {
            throw new Error("Seznam je prekratek.");
        }
        for (let i = 1; i < seznam.length; i++) {
            if (seznam[i] < seznam[i-1]) {
                return false;
            }
        }
        return true;  
    }

    //56.naloga 
    mestaCrke (beseda : string , crka : string) : number [] {
        if (beseda.length === 0 ) {
            throw new Error("Prekratka beseda");
        }
        let pojavitve : number[] = [];
        for (let i =0; i < beseda.length; i++) {
            if (beseda.toUpperCase().charAt(i) === crka.toUpperCase() ) {
                pojavitve.push(i);
            }
        }
        return pojavitve;
    }

    

    //57.naloga
    mrange(zacStevilo : number, faktor : number, dolzina : number ) : number[] {
        if (dolzina < 1 || faktor < 1 || zacStevilo < 1) {
            throw new Error("Nepravilni parametri.");
        }

        let seznam : number [] = [zacStevilo];
        let stevec = 0;
        while (stevec < dolzina) {
            let trenutniElement = seznam[stevec] * faktor;
            stevec++
            seznam.push(trenutniElement);
        }
        return seznam;
    }

    

    //58.naloga 
    sumljiveBesede (tekst : string ) : string[] {
        let besede : string [] = tekst.split(" ");
        let sumljive : string [] = [];
        for (let beseda of besede) {
            if (/[au]/i.test(beseda)) {
                sumljive.push(beseda);
            }
        }
        return sumljive;
    }


    //59.naloga
    kockarji (seznam : number [], stKockarjev : number) : number {
        let sestice : number [] = new Array(stKockarjev).fill(0);
        for (let i = 0; i < seznam.length; i++) {
            let trenutniIgralec : number =  i % stKockarjev;
            if (seznam[i] === 6) {
                sestice[trenutniIgralec]++;
            }
        }
        //vrni igralca z max sestic
        let maxSestic : number = -1
        let zmagovalec : number = 1
        for (let i =0; i < sestice.length; i++) {
            if (sestice[i] > maxSestic) {
                maxSestic = sestice[i];
                zmagovalec = i + 1;
            }      
        }
        return zmagovalec;
    }


    //60.naloga 
    krizanka ( vzorec : string, besede : string[] ) {
        if (besede.length === 0 ) { 
            throw new Error("Prekratek seznam.");
        }
        let ujemajočeBesede : string [] = [];
        for (let beseda of besede) {
            if (this.seUjemaVzorec(beseda,vzorec)) {
                ujemajočeBesede.push(beseda);
            }
        }
        return ujemajočeBesede;       
    }


    //62.naloga
    tekocePovprecje (seznam : number[]) : number[] {
        if (seznam === null || seznam.length === 0 ) {
            throw new Error("Invalidna lista");
        }

        let seznamPovprecij : number[] = [];
        let trenutnoPovprecje : number = 0;

        for ( let i = 0; i < seznam.length -3; i++) {
            let vsota : number = 0;
            for ( let k = i ; k < (i+4); k++) {
                vsota = vsota + seznam[k];
            }
            seznamPovprecij.push(vsota / 4);
        }
        return seznamPovprecij;
    }


    //63.naloga
    izstevanka(osebe: string[]): string {
        const stBesed = 13; //an ban pet podgan glupost
        
        let indeks = 0;
        while (osebe.length > 1) {
            indeks = (indeks + stBesed - 1) % osebe.length;
            osebe.splice(indeks, 1); // odstranimo izločeno osebo
        }
        return osebe[0]; // zadnja preostala oseba je zmagovalec
    }


    //98.naloga
    opravil (ime: string, tecaj: string, tecaji: Tecaji) : Tecaji {
        if (!tecaji[ime]) {
            tecaji[ime] = new Set<string>();
        }
        tecaji[ime].add(tecaj);
        return tecaji;
    }


    najvecUcen (tecaji : Tecaji) : string | undefined {
     let najIme : string = "";
     let najCount : number = 0;

     for (const ime in tecaji) {
        if (tecaji[ime].size > najCount) {
            najIme = ime;
            najCount = tecaji[ime].size;
        }
     }
     return najIme;
    }


    vsiTecaji (tecajniki : Tecaji) : Set<string> {
        let vsi = new Set<string>();
        for (let tecajnik in tecajniki) {
            let tecaji = tecajniki[tecajnik];
            for (let tecaj in tecaji) {
                vsi.add (tecaj);
            }
        }
        return vsi;
    }


    neopravljeniTecaji ( ime : string ,tecaji : Tecaji) : Set<string> {
        const vsiTecaji = this.vsiTecaji(tecaji);
        let tecajiIskanega = tecaji[ime] ?? new Set<string>();
        let neopravljeni = new Set<string>();
        
        for (let tecaj of vsiTecaji) {
            if (!tecajiIskanega.has(tecaj)) {
                neopravljeni.add(tecaj)
            }
        }
        return neopravljeni;
    }   

    //101.naloga
    zaloga(inventar : Inventar, izdelek : string ) : number {
        return inventar[izdelek] || 0
    }


    prodaj (inventar : Inventar, izdelek : string, kolicina : number ) : Inventar {
        if (izdelek == null || kolicina < 0) {
            throw new Error("invalid inventory ali kolicina < 0");
        }
        if (inventar[izdelek]!= undefined) {
            inventar[izdelek] = inventar[izdelek] - kolicina;
        }
        return inventar;
    }


    primankljaj (inventar : Inventar, narocilo : Inventar) : Inventar {
     let rezultat : Inventar = {};

     for (const izdelek in narocilo) {
        const zalogaKolicina = inventar[izdelek] || 0;
        const narocenaKolicina = narocilo[izdelek] || 0;
        if (narocenaKolicina > zalogaKolicina) {
            rezultat[izdelek] = narocenaKolicina - zalogaKolicina;
        }
     }
     return rezultat;
    }

    //106 .naloga sociogram
    prijatelji (kdo : string, sociogram : Sociogram) : Set<string> {
        const prijatelji = new Set<string>();

        for (const prijatelj in sociogram) {
            if (sociogram[prijatelj].has(kdo)) {
                prijatelji.add(prijatelj);
            }
        }
        return prijatelji;
    }


    najboljPriljubljeni (sociogram: Sociogram) :string {
        let maxIme :string = "";
        let maxCount :number = 0;
        for (const oseba in sociogram) {
            let trenutniStevec : number = this.prijatelji(oseba,sociogram).size;
            if (trenutniStevec > maxCount) {
                maxCount = trenutniStevec;
                maxIme = oseba;
            }
        }
        return maxIme;
    }


    //167.naloga
    kakoVisoko (stopnice : number[]) : number {
        if (stopnice.length <= 0 ) {
            throw new Error("Neveljaven seznam stopnic.");
        }
        let rezultat : number = 0;
        if (stopnice[0] > 20) {
            return 0;
        }

        for (let i = 1; i < stopnice.length; i++) {
            let visinaStopnice = stopnice[i] - stopnice[i-1];
            if (visinaStopnice <= 20) {
                ++rezultat;
            }
            else break;
        }
        return rezultat; // index stopnice
    }


    //168.naloga
    drugiNajvecjiElement ( seznam : number[]) : number {
        const brezDuplikatov = new Set(seznam);
        //convertaj nazaj v array
        const seznamBrezDuplikatov = [...brezDuplikatov];
        //sortiraj padajoce
        const sortiran = seznamBrezDuplikatov.sort((a,b) => b - a);
        return sortiran[1];
    }


    //169.naloga 
    collatzNajZaporedje ( a: number, b: number) {
        let zaporedje: number[] = [];
        let dolzinaMax : number = 0;

        for ( let i = a;i <= b;i++) {
            let tmpZaporedje : number[] = this.collatz(i);
            //najdi max 
            if (tmpZaporedje.length > dolzinaMax) {
                dolzinaMax = tmpZaporedje.length;
                zaporedje = tmpZaporedje;
            }
        }
        return zaporedje;
    }



    

    //61.naloga
    sosedi ( list : number[]) : number[] {
        const sosedi : number[] = [];
        if (list == null || list.length < 3) {
            throw new Error("Seznam mora vsebovati vsaj 3 elemente.");
        }
        for (let i = 0; i < list.length; i++) {
            const levi = list[(i - 1 + list.length) % list.length]; 
            const desni = list[(i + 1) % list.length];    
            sosedi.push(levi + desni);    
        }
        return sosedi;
    }


    //62.naloga
    tekocePovprecje (list : number[], n : number) : number[] {
        if (list == null || list.length < n ) {
            throw new Error("Seznam mora vsebovati vsaj " + n + " elementov.");
        }
        const povprecja : number[] = [];
        for (let i =0; i <= list.length -n ; i++) {
            let vsota : number = 0;
            for (let j = i; j < i + n; j++) {
                vsota = vsota + list[j];
            }
            povprecja.push(vsota / n);
        }
        return povprecja;
    }


    //63.naloga
    anban (imena: string[], izstevanka : string) {
        if (imena == null || imena.length == 0) {
            throw new Error ("Seznam je prazen ali prekratek.");
        }
        let index = 0;
        let zmagovalci = imena;

        const izstevaj : number = izstevanka.trim().split(/\s+/).length;
        while (zmagovalci.length > 1) {
            index = (index + izstevanka.length - 1) % zmagovalci.length;
            zmagovalci.splice(index, 1);
        }
        return zmagovalci[0]; // there can be only one -Highlander
    }


    //64.naloga
    najvecjiSkupniDelitelj(a: number, b: number): number {
        while (b !== 0) {
        [a, b] = [b, a % b];
    }
        return a;
    }


    //65.naloga
    oskodovanci (otroci: number[], stOtrok : number) : boolean {
        if (otroci == null || otroci.length == 0) {
            throw new Error("Seznam otrok je prazen ali prekratek.");
        }
        let sprejetiBonboni = new Array(stOtrok).fill(false);
        for (let otrok of otroci) {
            if (otrok < 0) {
                throw new Error("Otroci ne morjo biti negativni");
            }
            sprejetiBonboni[otrok] = true;
        }
        return sprejetiBonboni.every((dobilBonbon: boolean) => dobilBonbon);
    }


    //66.naloga
    cokolada (n: number, odlomi : string[]) : number {
        if (n <= 0 || odlomi == null || odlomi.length == 0) {
            throw new Error("Neveljaven vhod");
        }
        let indexVrsticaStolpec : string = "";
        let stVrsticStolpcev : number = 0;

        let vsotaVrstic : number = 0;
        let vsotaStolpcev : number = 0;

        for (let i = 0; i < odlomi.length; i++) {
            let trenutniElement = odlomi[i];
            const [simbol, stevilka] = (trenutniElement.match(/([^\d]+)(\d+)/) || []).slice(1); //splitaj simbol recimo "<3", "^2" na znak in stevilko
            //shrani
            indexVrsticaStolpec = simbol;
            stVrsticStolpcev = parseInt(stevilka, 10);// convertiraj v stevilko

            if (isNaN(stVrsticStolpcev) || stVrsticStolpcev <= 0) {
                throw new Error("Neveljaven odlomek: " + trenutniElement);
            }

            if (indexVrsticaStolpec === '<' || indexVrsticaStolpec === ">")  //takrat je stolpec
            {
                vsotaStolpcev = vsotaStolpcev + stVrsticStolpcev;
            }
            else {
                vsotaVrstic = vsotaVrstic + stVrsticStolpcev;
            }
        }

        const preostaliStolpci = n - vsotaStolpcev;
        const preostaleVrstice = n - vsotaVrstic;
        return (preostaleVrstice <= 0 || preostaliStolpci <= 0) ? 0 : preostaleVrstice * preostaliStolpci;  //vrni kolk kosckov je ostalo
    }



    //68.naloga
    pari (seznam: [number,number][]) : [number,number][] {
        if (seznam == null || seznam.length == 0) {
            throw new Error("Seznam je prazen ali prekratek.");
        }

        let praviPari : [number,number] [] = [];
        for (let par of seznam) {
            if (par.length != 2) {
                throw new Error("Neveljavni podatki");
            }
            let vsotaA = 0;
            let vsotaB = 0;
            vsotaA =  par[0].toString().split('').reduce((vsota, st) => vsota + Number(st), 0);
            vsotaB = par[1].toString().split('').reduce((vsota, st) => vsota + Number(st), 0);
            console.log("a = " + vsotaA + " b = " + vsotaB);
            if ( vsotaA == vsotaB && par[0].toString().length != par[1].toString().length) { //če sta vsoti enaki vendar sta dolzini razlicni
                praviPari.push(par);
            }
        }
        return praviPari;
    }

    //70.naloga
    sodostCebel (seznam : [string, number][]) : [[string,number][], [string,number][]] {
        const sodeCebele : [string,number][] = [];
        const liheCebele : [string,number][] = [];
        for (let cebela of seznam) {
            if (cebela[1] % 2 == 0) {
                sodeCebele.push(cebela);
            }
            else 
            {
                liheCebele.push(cebela);
            }
        }
        return [sodeCebele, liheCebele];
    }


    //71.naloga
    sodiLihi (seznam : number[]) : boolean {
        if (seznam == null || seznam.length == 0) {
            throw new Error ("Seznam je prazen ali prekratek.");
        }

        for (let i = 1; i < seznam.length; i++) {
            const prejsni = seznam[i -1] % 2 === 0
            const trenutni = seznam[i] % 2 === 0;;
            if (prejsni === trenutni) {
                return false;
            }
        }
        return true;
    }


    //72.naloga
    najprejLiha ( seznam : number[]) : number[] {
        if (seznam == null || seznam.length == 0) {
            throw new Error ("Seznam je prazen ali prekratek.");
        }
        let liha : number[] = [];
        let soda : number[] = [];
        for (let el of seznam) {
            if (el % 2 == 0) {
                soda.push(el);
            }
            else {
                liha.push(el);
            }
        }
        return [...liha,...soda]; 
    }


    //73.naloga
    alterniraj (seznam : number[]) : number[] {
        if (seznam == null || seznam.length == 0) {
            throw new Error ("Seznam je prazen ali prekratek."); 
        }
        
        let novi : number[] = [];
        novi.push(seznam[0]); //dodaj prvi element
        for (let i =1; i < seznam.length; i++) {
            if (seznam[i] > 0 && seznam[i-1] < 0) {
                novi.push(seznam[i]);
            }
            else if (seznam[i] < 0 && seznam[i-1] > 0) {
                novi.push(seznam[i]);
            }
            else {
                console.log("Preskocim element " + seznam[i] + " ker ne ustreza pogoju");
            }
        }
        return novi;
    }

    
    //75.naloga
    pekarna(seznam: string[]): number {
        const vzorec = ["A", "B", "O"];
        let vzorecIndeks = 0;
        let ujemanje = 0;

        for (const el of seznam) {
            if (el === vzorec[vzorecIndeks]) {
                ujemanje++;
                vzorecIndeks = (vzorecIndeks + 1) % vzorec.length;
            }
        }
        return ujemanje;
    }


    //76.naloga
    nogavice (seznam : number[]) : number[] {
        let brezPara : number[] = [];
        if (seznam == null || seznam.length == 0) {
            throw new Error("Seznam je prazen ali prekratek.");
        }
        for (let i =0; i < seznam.length; i++) {
            const trenutnaNogavica = seznam[i];
            const indeks = seznam.indexOf(trenutnaNogavica);

            console.log("indeks = " + indeks);
            if (indeks != -1 && indeks != i) {
                seznam.splice(indeks, 1); //odstrani prvi najden štumf
            }
            console.log("Seznam po odstranitvi: " + seznam);
        }
        return seznam;
    }


    //78.naloga
    pokaziCrke (beseda : string, crke : string[]) : string {
        if (beseda == null || beseda.length == 0) {
            throw new Error("Beseda je prazna ali neveljavna.");
        }
        if (crke == null || crke.length == 0) {
            throw new Error("Seznam črk je prazen ali neveljaven.");
        }

        let rezultat : string = "";
        for (let i = 0; i < beseda.length; i++) {
            
            if (crke.join('').toUpperCase().includes(beseda[i].toUpperCase())) {
                rezultat = rezultat + beseda[i].toUpperCase();;
            } else {
                rezultat += ".";
            }
        }
        return rezultat;
    }


    //79.naloga
    podobnaBeseda (besede : string[] , beseda: string) : string {
        if (besede == null || besede.length == 0) {
            throw new Error("Seznam besed je prazen ali neveljaven.");
        }
        if (beseda == null || beseda.length == 0) {
            throw new Error("Beseda je prazna ali neveljavna.");
        }

        let najdaljsa : string = "";
        let bestMatchLength : number = 0;

        for (let b of besede) {
            let unikatneCrke = new Set(b.toLowerCase());
            let stevec : number = 0;
            for (let crka of unikatneCrke) {
                if (unikatneCrke.has(crka)) {
                    stevec++;
                }
            }

            if (stevec > bestMatchLength) {
                najdaljsa = b;
                bestMatchLength = stevec;
            }
        }
        return najdaljsa;
    }


    //80.naloga
    najraznolikaBeseda (besede : string[]) : string {
        if (besede == null || besede.length ==0) {
            throw new Error("Seznam besed je prazen ali neveljaven.");
        }
        let najraznolika : string = "";
        besede.forEach((beseda) => {
            const unikatneCrke = new Set(beseda.toLowerCase());
            if (unikatneCrke.size >= najraznolika.length) {
                najraznolika = beseda;
            }
        });
        return najraznolika;
    }


    //81.naloga
    najpogostejsaBeseda ( niz : string ) : string {
        if (niz == null || niz.length == 0) {
            throw new Error("Seznam besed je prazen ali neveljaven.");
        }

        const besede = niz.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/);   
            
        const steviloPojavitev : {[key: string]: number} = {};

        let najpogostejsa : string = "";
        let maxPojavitev : number = 0;
        for (let beseda of besede) {
            steviloPojavitev[beseda] = (steviloPojavitev[beseda] || 0) + 1; 

            if (steviloPojavitev[beseda] > maxPojavitev) {
                maxPojavitev = steviloPojavitev[beseda];
                najpogostejsa = beseda;
            }
        }
        return najpogostejsa;
    }

    //81.naloga 
    najpogostejsaCrka (niz : string) : string {
        if (niz == null || niz.length == 0) {
            throw new Error("Niz je prazen ali neveljaven.");
        }
        const nizNormaliziran = niz.toLowerCase().replace(/[^\w\s]/g, "").split("");  ;
        let steviloPojavitev : {[key:string]: number} = {};
        let najpogostejsa : string = "";
        let najpogostejsaDolzina : number = 0;
        for (let crka of nizNormaliziran) {
            steviloPojavitev[crka] = (steviloPojavitev[crka] || 0) + 1; //če ne obstaja, nastavi na 0 in potem povečaj
        }

        for (let crka in steviloPojavitev) {
            if (steviloPojavitev[crka] > najpogostejsaDolzina) {
                najpogostejsa = crka;
                najpogostejsaDolzina = steviloPojavitev[crka];
            }
        }
        return najpogostejsa
    }


    //82.naloga 
    samoEnkrat (niz : string) : boolean {
        const nizNormaliziran = niz.toLowerCase().replace(/[^\w\s]/g, "").split(""); //normaliziram niz
        const steviloPojavitev : {[key: string]: number} = {};
        for (let crka of nizNormaliziran) {
            steviloPojavitev[crka] = (steviloPojavitev[crka] || 0) + 1; //če ne obstaja, nastavi na 0 in potem povečaj
        }

        for ( let crka in steviloPojavitev) {
            if (steviloPojavitev[crka] > 1) {
                return false; 
            }
        }
        return true;
    }



    



    







}