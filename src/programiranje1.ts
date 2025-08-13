 import { Vaje } from './Vaje';
 import { Oseba } from './Oseba';


 const vaje = new Vaje();

 type Sociogram = Record<string, Set<string> >;


 console.log(vaje.fibonacci(44));
 console.log ("Prvih 100 praštevil= " + vaje.primeNumbers(100));
 console.log(vaje.pitagoras(3,4));
 console.log(vaje.collatz(12));
 console.log ("Length of the Collatz sequence is " + vaje.collatz(12).length);

console.log(vaje.igrajKovance());

console.log("Kalkulator :" + vaje.calculator(10,4,"-"));

let lista :number[] = [10,20,30,40,50];
console.log("Vsota števil = " + vaje.vsotaStevil(lista));

let beseda :string = "Practice makes perfect young grasshopper";
let crka: string = "a";
console.log("Stevilo črk " + crka + " = "+ vaje.steviloZnakov(crka,beseda));

console.log("Max element = " + vaje.maxElement(lista));

let abslist : number [] = [-10,5,33,0,-32,-67];

console.log ("Max absolute = " + vaje.maxAbsolute(abslist));

console.log("Min pozitivno število = " + vaje.minPozitivnoStevilo(abslist));

console.log("Average teža = " + vaje.povpTeza([70,80,90,100,110]));

console.log ("Povrečna teža brez skrajnežev = " + vaje.povpTezaBrezEkstremov([80,100,100,100,200]));

console.log("Bonboni = " + vaje.kolikoBonbonov([6,7,8,9,10]));
console.log("Liha ali ne = " + vaje.vsajEnoLiho([2,4,6,8,10,50]));

console.log("Dolzina vrste na blagajni = " + vaje.blagajna("++--+++-+++-++--++-+"));

console.log("delitelji števila " + 100 + " = " + vaje.delitelji(28));

console.log("Vsota deliteljev " + vaje.vsotaDeliteljev(28));
console.log("popolno število " + vaje.popolnoStevilo(28));

console.log("Vsa popolna števila manjša od n so = " + vaje.vsaPopolnaStevila(10000));

console.log("poštevanka 7 " + vaje.postevanka7(45));

let testOsebe = [
  new Oseba("Robi", 1.76, 89, 0),
  new Oseba("Bojan", 1.95, 80, 0),
  new Oseba("Mirko",1.55,110,0)
];
const indexi = Oseba.indeksTelesneTeze(testOsebe);
for (let i =0; i < testOsebe.length; i++) {
    console.log("Oseba " + indexi[i].ime + " ima index = " + indexi[i].index.toFixed(2));  
}

let trojke = [[2,3,5],[3,3,6],[5,5,11],[1,2,3]]
if (vaje.sesteteTrojke(trojke)) {
    console.log("Trojke so validne");
}
else console.log("Trojke so neveljavne");

type Vector = number[];
let a: Vector = [1,2,3];
let b : Vector = [1,2,3];
console.log("Skalarni produkt = " + vaje.skalarniProdukt(a,b));


console.log ("st ujemanj crk = "+ vaje.ujemanjeCrk("Klobasa", "klibosa"));
console.log("Se vzorec ujema?" + vaje.seUjemaVzorec("MLEKO","ML..O"));

let besede : string [] = ["RAP","TRAP","DREK","GOVNO"];
console.log("Prvo ujemanje =" + vaje.prvoUjemanje(besede, "..E."));

let drzava1 : number[] = [100,130,145,165];
let drzava2 : number[] = [110,120,145,150];
console.log ("Zmagovalka je = " + vaje.paralelniSkoki(drzava1,drzava2));

console.log("Indeks max = " + vaje.indeksMax([5,1,4,8,5,8,8,8]));

let imena: string [] = ["Marija","Emil","Eva","Drek","Klobasa","Mirko","Radirko"];
let teze : number [] = [50,60,70];
console.log("Zamenjana teze :" + vaje.zamenjajTeze(imena,teze));


console.log("Je zenska " + vaje.jeZenska("0801980506667"));
console.log("preveri emso = " + vaje.preveriEmso("0907985505456"));
const starost = vaje.starostEmso('0801980500317')
console.log("Za emso starost je =" + starost.leto + " let " + starost.meseci + " mesecev " + starost.dnevi + " dni.");

console.log("Nepadajoč ? = " + vaje.nepadajoc([2,3,4,5]));

console.log("Mesta crke  "+ vaje.mestaCrke("KLOBaSA", "A"));

console.log("Seznam mrange = " + vaje.mrange(2,2,10));
console.log("Sumpljive besede = " + vaje.sumljiveBesede("Sumljiva beseda drek uta ruta toto"));
console.log("Best kockar na svetu = " + vaje.kockarji([1,2,4,6,4,4,4,4,2,3,1,6], 4));

console.log("Ujemajoče besede : " + vaje.krizanka("m.r.",["mark","mast","miro","mara"]));

console.log("tekoce povprecje " + vaje.tekocePovprecje([2,2,2,2,4]))

const inventar = {
    'sir': 8,
    'kruh': 15,
    'makovka': 10,
    'pasja radost': 2,
    'pašteta': 10,
    'mortadela': 4,
    'klobasa': 7
};

console.log("Zaloga sira = " +vaje.zaloga(inventar, "sir"));

const zaloga = vaje.prodaj(inventar,"sir",2);
console.log(zaloga);

const narocilo = {
    'pašteta': 11,
    'klobasa': 9,
    'pivo': 1
};
console.log(vaje.primankljaj(inventar, narocilo));


const sociogram: Sociogram = {
    "Ana": new Set<string>(["Berta"]),
    "Berta": new Set<string>(["Ana", "Cilka", "Ema"]),
    "Cilka": new Set<string>(),
    "Dani": new Set<string>(["Berta"]),
    "Ema": new Set<string>(["Ana", "Berta"]),
    "Fanči": new Set<string>(["Cilka", "Dani"])
};

console.log(Array.from(vaje.prijatelji("Berta", sociogram)) ); 
console.log("Najbolj priljubjena je = "+ vaje.najboljPriljubljeni(sociogram));

const stopnice : number[] = [10, 20, 25, 45, 50, 71, 98, 110]; //index vrne
const vrednostStopnice : number = stopnice[vaje.kakoVisoko(stopnice)];
console.log("Robot pride do stopnice z vrednostjo " + vrednostStopnice  );

console.log("Drug najveji element = " + vaje.drugiNajvecjiElement([5, 1, 4, 8, 2, 3, 8]));
console.log("Collatz naj zaporedje dolzine " + vaje.collatzNajZaporedje(1,5).length + " with values " + vaje.collatzNajZaporedje(1,10000) ); 