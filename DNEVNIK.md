# Evidencija aktivnosti
## 27.01.2023.
Pocetak | Kraj
------- | ----
14:30   | 17:15
### Kratki opis promjena
Uz male izmjene, nakon argumentiranja prvotne ideje projektnog zadatka na predavanjima, definirani su zahtjevi aplikacije. 

## 04.02.2023.
Pocetak | Kraj
------- | ----
16:25   | xx:xx
### Kratki opis promjena
Početak rada na prototip verziji aplikacije.



## 30.03.2023.
Pocetak | Kraj
------- | ----
14:55   | 21:20
### Implementirano dodavanje NOVE poslovnice unutar STORE-a, putem forme, te povratak na Početnu stranicu drawer navigacije
Sada ćemo dodati formu za otvaranje nove poslovnice, i EDIT opciju, uređivanje postojeće poslovnice.Kreiramo novu 
komponentu pod nazivom FormaPoslovnica.js, koja će nam služiti za EDIT i za dodavanje postojeće poslovnice.Ovdje kao 
props imamo poslovnicu, koja može, ali i ne mora biti proslijeđena u našu komponentu. Ako je poslovnica proslijeđena u 
našu komponentu, onda znamo da je riječ o EDIT opciji, uređivanju postojeće poslovnice, a ako ona nije definirana, to znači
da mi želimo otvoriti, dodati novu poslovnicu. FormaPoslovnica će nam biti prikazana unutar ekrana Otvori poslovnicu.Dakle, 
idemo na OtvoriPoslovnicuScreen.js, te dodajemo komponentu koju smo exportali kao FormaPoslovnica, te za početak ne dodajemo
prop poslovnica, jer dodajemo novu poslovnicu. Zatim ćemo malo oblikovati komponentu FormaPoslovnica.js. 

Dodali smo Text komponentu koja služi kao labela te korisniku prikazuje kako treba unijeti naziv poslovnice. Zatim, kako bi
korisnik unio taj naziv, treba nam TextInput komponenta, za koju će nam trebati useState HOOK, kako bismo koristili 
naziv poslovnice koju korisnik unese unutar textInput komponente.Dodali smo na isti način polja za unos email-a i lokacije
(koristeći useState). 
Onda, nakon provjere u modelu Poslovnice, ondosno u konstruktoru, provjerila sam, nedostaje li mi još nešto, osim id-a vidim 
da tu imam artikle i zaradu, ali kako smo definirali da artiklu mogu biti [] i zarada ima defaultnu vrijednost 0, pa to ne 
trebamo ni proslijediti kada radimo novu poslovnicu. Još nam nedostaje 1 gumb, za submitanje te forme. Znači, imamo gumb, na 
pritisak kojeg se poziva funkcija SubmitForm, gdje mi implamentiramo kreiranje nove poslovnice kao const poslovnica, pomoću
konstruktora modela Poslovnice, kojeg smo rpethodno definirali. Tu imamo i title svojstvo, koje ovisi o tome je li ovo forma 
za DODAVANJE nove forme ili za EDIT postojeće forme. Pa sam definirala jednu novu boolean varijablu, koja provjerava, 
ako smo imali kao ulazni parametar poslovnicu, ta poslovnica postoji, ona nije undefined i varijabla jeDodavanje je meni 
sada false, ne želimo dodati novu poslovnicu, nego EDIT-irati postojeću. A inače, varijabla jeDodavanje je true, i DODAJEMO 
novu poslovnicu. S tim da unutar funkcije SubmitForm kao next_id koristimo useSelector, odnosno state, na način da iz redux 
store-a uzimamo vrijednost next_id-a te ćemo istu koristiti za kreiranje novog id-a unutar konstruktora kada radimo novu
poslovnicu. Mi bi sada trebali kreiranu poslovnicu DODATI u naš REDUX STORE. To radimo pomoću funkcije dispatch, koju dobijemo
pomoću useDispatch() HOOK-a. Dispatch funkciji šaljemo poslovnicaAction koji prima TIP i PODATKE(provjerimo u 
STORES-poslovnicaAction), TIP će nam biti POSLOVNICA_ACTION.ADD_POSLOVNICA(ADD_POSLOVNICA: "poslovnica/add"--> 
ovdje smo to vidjeli), a podaci će nam biti upravo ova poslovnica, koju smo već kreirali pomoću ključne riječi new, 
OBJEKTNO-ORIJENTIRANI pristup. Nakon unosa nove poslovnice, da vidimo što smo ovime dobili, unijela sam naziv: Test,
Email: test@test.com te lokaciju Split, klikom na "DODAJ", pozvala se funkcija submitForm, napravili smo novu poslovnicu, 
DISPATCH-ali smo ju u REDUX STORE, "otpremili" smo ju, te smo pomoću navigation.navigate('TabPocetna'), vratili se na 
početnu stranicu DRAWER navigacije, gdje smo prije imali "DrawerPocetna"(koristeći Navigation HOOK, iz redux store-a). 
Naime, kada smo došli do linije sa DISPATCH, kada koristimo funkciju dispatch, sve odlazi na poslovnicaReducer, slijedi 
provjera tipa. Mi smo poslali tip POSLOVNICA_ACTION. ADD_POSLOVNICA(1.case), i napravili smo INICIJALNI STORE ove 
poslovnice, odnosno kreirali smo NOVI OBJEKT koji sadrži postojeće poslovnice, te smo pomoću spread operatora na kraj 
niza postojećih poslovnica dodali novu, onu koju smo proslijedili u ovaj action.payload, te smo dodatno, nakon toga NEXT_ID 
varijablu našeg state-a povećali za 1(koristeći increment). Sada vidimo kako nam se unutar Stack navigatora sa popisom poslovnica 
pojavila i nova poslovnica, Test. 

## 01.04.2023.
Pocetak | Kraj
------- | ----
15:25   | 18:00
### Omogućeno EDIT-iranje postojeće poslovnice unutar FormaPoslovnica i povratak na DetaljiPoslovnice
Kada ponovno idemo na Početna-->Otvori poslovnicu, vidimo da su nam inputi ostali unutra, nije se RESET-irala forma, na početno 
stanje, pa ćemo dodati funkciju resetForme, koja će samo sve ove vrijednosti: naziv, email i lokaciju koje smo postavili 
promijeniti na ''. A pozivati ćemo ju nakon što smo odradili "otpremu" ili tzv. dispatch nove poslovnice. Dakle, mi smo ovdje 
koristeći model Poslovnice, odnosno konstruktora klase Poslovnica, definiranog unutar modela, inicijaliziramo jednu novu
poslovnicu, na vrijednosti koje su poslane kao parametri. Nakon toga, poslali smo te parametre, u obliku konstruktora klase na 
STORE, odnosno naš GLOBAL STATE MANAGEMENT, nakon čega resetiramoFormu, kako bismo idući put ponovno mogli unijeti nove 
parametre. A sada ćemo napraviti EDIT odnosno UPDATE poslovnice. Idemo na Poslovnicu 1--> Detalji Poslovnice, vidimo kako 
tu nemamo trenutno ništa. Vidimo da imamo Detalji Poslovnice: 0, gdje nam 0 predstavlja početni ID poslovnice. Sada samo moramo 
biti sigurni da smo to proslijedili ekranu Uredi poslovnicu, kako bi znali koju točno poslovnicu uređujemo. Idemo na 
DetaljiPoslovniceScreen, da vidimo jesmo li kod navigacije na UrediPoslovnicu proslijedili ID poslovnice, vidimo da nismo, a u
dokumentaciji vidimo da sve postale parametre koji nam trebaju, šaljemo kao destruktrurirano objekt, odnosno drugi parametar
funkciji navigate, što znači da, kada kliknemao na botun "Uredi Poslovnicu", mi mu dodatno moramo proslijediti id_poslovnice, 
kao parametar rute. Sada idemo na UrediPoslovnicuScreen, dodat' ćemo ID poslovnice, koji nam je sada ovdje dostupan, a 
dohvatili smo ga preko route.params(jer smo ga iz DetaljiPoslovniceScreen poslali putem parametara funkcije navigate). Sada samo
trebamo dohvatiti tu poslovnicu, kako bi ju mogli dodati u našu formu. Iskiristit' ćemo ponovno formu formaPoslovnica, kojoj
kao parametar šaljemo poslovnicu koju moramo dohvatiti iz Redux store-a. A to radimo pomoću useSelector HOOK-a, odnosno state-a,
gdje unutar SLICE poslovnice, odnosno unutar njegove liste poslovnica tražimo poslovnicu a našim id-em, koristeći find metodu. 
Za svaku poslovnicu iz te liste, provjeravamo je li njen ID jednak našem ID-u poslovnice, jer u tom slučaju. pronašli smo 
poslovnicu koja nam treba. Znači, došli smo na Uredi Poslovnicu, pronašli smo poslovnicu unutar STORE-a, prolsijedili smo ju 
formi formaPoslovnica, i automatski su nam se sva polja ovdje popuni, a naš botun je sada Preimenovan u UREDI, jer
smo to definirali unutar formaPoslovnica forme. 

Ponovno smo u FormaPoslovnica, gdje dispatch radimo ovisno o akciji unutar poslovnicaAction. Zato ćemo dodati uvjet,
if(jeDodavanje) gdje radimo provjeru, ako je riječ o dodavanju nove poslovnice, dispatch, "otpremu" radimo pomoću 
akcije POSLOVNICA_ACTION.ADD_POSLOVNICA, a ako jeDodavanje===false, riječ je o update opciji, gdje imamo updatePoslovnica,
odnosno dohvaćamo postojeću poslovnicu, ne treba nam next_id, te također radimo otpremu, dispatch, u ovom slučaju koristeći 
akciju POSLOVNICA_ACTION.UPDATE_POSLOVNICA.Ako je riječ o dodavanju nove poslovnice u store, navigiramo se natrag na 
TabPocetna, a ako je riječ o UPDATE opciji, radimo navigaciju na 1 stranicu natrag, odnosno na DetaljiPoslovnice, odnosno 
na tu istu poslovnicu.

## 04.04.2023.
Pocetak | Kraj
------- | ----
17:55   | 20:18
### Početno oblikovanje prethodno kreiranog dijela aplikacije - STYLING
Dodali smo file konstante.js, u kojem definiramo boje koje ćemo koristiti za komponente u ekranima aplikacije. Zatim, u 
folder components dodajemo komponentu Screen.js, koja će samo okružiti(wrapp-ati) cijeli ovaj naš navigation screen sa View 
komponentom i nekim style-om(flex:1->biti će rastegnuta preko cijelog ekrana, imati će boju pozadine kao i sve ostale komponente, 
imati će padding-margine sa svih strana). Kao props joj šaljemo children svojstvo, odnosno sve unutar Screen komponente 
će biti prikazano ovdje. To koristimo kada idemo na primjerice, PopisPoslovnica ekran, gdje smo do sada imali običnu View 
komponentu, koju ćemo sada zamijenti Screen komponentom, što znači da sada kada prikazujemo sve poslovnice, imamo finu pozadinu 
boje antiquewhite, umjesto obične bijele pozadine, budući da smo to i definirali u Screen komponenti, a primjećujemo i padding. 
Nama je ovdje ListaPoslovnica onaj children, odnosno prop od screen komponente. Zatim ćemo dodati komponentu Okvir.js, koja
će nam služiti da fino oblikujemo našu listu poslovnica, odnosno radimo svijetloplavi okvir, komponentu jako sličnu onoj Screen,
prima children i ima neki View element koji okružuje wrap-a taj children, i samo imamo malo pripaziti na stil, dodati ćemo
borderRadius, imamo padding, marginu, backgroundColor... A ovu komponentu okvir ćemo sada koristiti u ListiPoslovnica, 
a dodati ćemo i komponentu TekstNaslov, kako bismo fino oblikovali naslov svake poslovnice, odnosno njen naziv. 
Komponenta TekstNaslov je dosta slična Screen i Okvir, samo ona sada umjesto View ima Text react redux componentu, jer prima 
samo tekst i ima nekakav stil, da nam to malo bolje izgleda. Zatim ćemo dodati još jednu komponentu, BotunTekst, gdje koristimo 
TouchableOpacity komponentu. Sada, unutar ListePoslovnica, kada koristimo BotunTekst umjesto Button, nemamo više title property
gdje smo definirali što želimo da nam bude vidljivo na pozadini botuna, ali sada nam je to malo drugačije, taj tekst nam mora 
biti children od BotunTekst komponente. 
Zatim sam dodala još jednu komponentu TekstLabel, gdje također imam tekst oblikovan stilom, kao i do sada, i unutar imam
render od children, a koristim ju unutar FormaPoslovnica, gdje umjesto običnog teksta koristim TekstLabel komponentu. 
Za TekstInput, i dalje koristimo istu komponentu, samo sam dodala oblikovanje u obliku stilova koje smo definirali na dnu 
forme. Na dnu forme isto tako nemamo običan Button, nego BotunTekst komponentu, da nam i taj botun bude oblikovan kao i ostali. 
Samo ovdje opet umjesto title property-a imamo children, dakle, umjesto title={jeDodavanje ? "Dodaj" : "Uredi", koristimo
<BotunTekst onPress={submitForm} >{jeDodavanje ? "Dodaj" : "Uredi"}</BotunTekst>. Zatim smo promjene dodali ostalim ekranima,
najprije DetaljiPoslovnice, po uzoru na OtvoriPoslovnicu, PopisPoslovnica i UrediPoslovnicuScreen. Također, sam 
stilizirala i početnu stranicu, PocetnaScreen, gdje kao i prethodno, umjesto View koristimo Screen komponentu. 

## 05.04.2023.
Pocetak | Kraj
------- | ----
16:45   | 18:50
### Implementirana forma za narudžbu novog artikla, te je artikal otpremljen na STORE
Kreirali smo Formu za naručivanje novog artikla, na način da smo najprije dodali novu komponentu pod nazivom FormaArtikal.js. 
Forma nam je jako slična FormaPoslovnica komponenti. Zatim, nakon definiranja FormeArtikla, prebacili smo ju na Screen pod
nazivom NaruciArtikalScreen.js gdje smo View najprije zamijenili Screen komponentom. Odlaskom na Početna->Naruči Artikal vidimo
konačni izgled forme, po uzoru na Forma Poslovnica, i to nam je u redu. Klikom na Dodaj izvršiti će se submitForme, gdje 
umjesto novaPoslovnica imamo noviArtikal, i dolje, umjesto updatePoslovnica imamo updateArtikal. Kako smo rekli da ne možemo
update-ati artikal, jeDodavanje kao kontrolna varijabla nam ovdje uopće ne treba, jer nemamo update, samo imamo DODAVANJE. 
HOOK useState će nam uvijek biti "", inicijalno, i za naziv, nabavnu, prodajnu cijenu i količinu. Reset forme nam ostaje kao i 
kod FormaPoslovnica-e, samo kod SubmitForme više nam ne treba if-else, nemamo mogućnost EDIT-iranja, već uvijek imamo samo
akciju ADD_ARTIKAL, i radimo DISPATCH na global state management, STORE, pomoću akcije ADD_ARTIKAL, te na kraju idemo na 
TabPocetna. Unesemo 1 novi artikal tipa: Ruž za usne, 100,300,5. Te smo se vratili na TabPočetna.

## 06.04.2023. 
Pocetak | Kraj
------- | ----
07:15   | 08:55
### Unutar Pocetna-Poslovnice-Pregled skladišta jedne poslovnice izlistana LISTA ARTIKALA"
Zatim smo dodali same artikle, odlaskom na Poslovnice-Pregled skladišta. To smo implementirali unutar PregledSkladistScreen, 
gdje smo najprije konfigurirali screen, slično kao i prethodne screen-ove. Dakle, umjesto View komponente sada imamo Screen.
Zatim smo umjesto Button ubacili BotunTekst komponentu, tako da umjesto title koristimo children svojstvo. Zatim smo unutar
skladišta dobili fino uređene botune Prodaj i Prebaci artikal koji nam trebaju za svaki artikal u pojedinoj poslovnici. 
Najprije, da bi mogli doći do tih artikla, trebao nam je ID poslovnice. Primjetili smo kako mi do PregledSkladista dolazimo
pomocu navigation.navigate iz popisa poslovnica, pa sam najprije pronašla gdje koristim botun Skladište. Kada sam vidjela
da ga koristim unutar komponente ListaPoslovnica, gdje primjećujem kako mi prilikom navigiranja na 'PregledSkladista', tom 
screen-u šaljemo kao root parametar id, jer smo naveli: <BotunTekst onPress={()=>navigation.navigate('PregledSkladista', 
{id_poslovnice: poslovnica.id})} >Pregled skladišta</BotunTekst>. Zatim sam po uzoru na dohvat ID-a iz DetaljiPoslovniceScreen,
ID dohvatila i ovdje(const id_poslovnice=route.params), unutar PregledSkladistaScreen. Zatim je unutar PregledSkladistaScreen
trebalo "izvući" listu tih artikala, a to radimo pomoću redux-a, odnosno useSelector HOOK-a, gdje koristimo state, odnosno
njego slice Poslovnica, definiran unutar store-a, točnije unutar combineReducers, funkcije Redux-a, koja nam omogućuje 
kombiniranje više reducera u jedan root reducer, kako bismo pomoću createStore mogli kreirati naš GSM(global state management).
Zato sam ovdje pomoću funkcije find pokušala pronaći id poslovnice koji odgovara id-u kojeg smo mi ovdje dobili iz 
ListePoslovnica. Dakle, nama artikli unutar PregledSkladista ekranu predstavljaju listu artikala te poslovnice. Zatim sam 
kreirala novi dokument, ListaArtikala, po uzoru na ListaPoslovnica, ali ovdje mi ne dohvaćamo artikle kao i tamo poslovnice,
vec smo mi poslovnice dobili kao prop, i samo ćemo ih proslijediti u Listu Artikala, tako da su nama data artikli, 
keyextractor nam je artikal = artikal.naziv,(jer nam artikal nema id). Tu radimo render svakog pojedinog artikla, komponente
Artikal definirane iznad u file-u ListaArtikala.js, gdje nam je artikal taj item, samo sam još stilizirala komponentu Artikal, 
po uzoru na Poslovnica komponentu. Okvir nam ostaje, želim zadržati oblikovanje unutar box-a kao i unutar poslovnica 
komponente, a kao botune sam ovdje prebacila 2 botuna definirana unutar PregledSkladištaScreen komponente, Prodaj i 
Prebaci artikal. Za akcije Prodaj artikal i Prebaci artikal, nama je trebao i podatak iz koje poslovnice je to došlo, te sam
kao prop unutar Liste artikala dodala i polje id_poslovnice, kako bismo znali iz koje poslovnice je nama artikl stigao, do 
sada to nismo mogli, te ćemo id_poslovnice proslijediti našoj komponenti artikal. Još sam i unutar komponente artikal napravila 
malu izmjenu. Dakle, navigation funkciji, osim stranice na koju navigiramo, rute, kao argumente sam dodala i sam artikal i 
id_poslovnice, za oba botuna, Prodaj i Prebaci artikal. Zatim sam samo unutar PregledSkladištaScreen komponente linkali ovu
Listu artikala, te nakon pokretanja sada primjećujemo kako unutar PregledSkladista ekrana vidimo artikle poslovnice definirane
unutar ArtikliData dokumenta, i za svaki od njih imamo mogućnost Prodaje i Prebacivanja artikla.

## 06.04.2023.
Pocetak | Kraj
------- | ----
09:00   | 09:46
### Omogućeno DODAVANJE novog artikla u konkretnu poslovnicu pomoću PICKER komponente(FORMA NoviArtikal) te pregled artikla unutar skladište poslovnice
 Primjetila sam jedan propust, unutar forme Naruci Artikal, ja nisam definirala u koju poslovnicu ide konkretno taj moj artikal, 
a to nam je ujedno i najzanimljiviji dio, pa sam to naknadno implementirala. Najprije sam dodala novi library 
- @react-native-picker/picker, React Native komponentu iz liste komponenti, koja nam omogućuje univerzalno sučelje 
za odabir stavki iz liste opcija. Zapravo, ona nam zamjenjuje zadanu picker komponentu u React Native-u, koja ima 
ograničenja na iOS-u i Androidu. Unutar FormaArtikal, dispatch funkciji uz akciju ADD_ARTIKAL, mi proslijeđujemo ne
samo noviArtikal, nego će nam artikal biti taj noviArtikal, te id_poslovnice, kojeg ćemo dobiti iz PICKER komponente. 
Ovdje, kako bismo mogli pratiti ID poslovnice, unutar FormaArtikal komponente, dodala sam jedan useState hook, const [idPoslovnice, 
postaviIdPoslovnice]=useState(''); ali, trebaju nam i poslovnice pa smo njih dohvatili preko useState hook-a, kao
const poslovnice=useSelector(state=>state.poslovnica.poslovnice). Zatim smo kao id_poslovnice, iniocijalno staviti id 0-te 
poslovnice, odnosno useState(poslovnice[0].id), te nakon resetiranja forme ga također vraćamo na 1. poslovnicu. Zatim,dolje 
unutar Picker komponente trebali smo renderirati poslovice iz naše liste poslovnica, a to nam je najlakše postići pomoću map 
funckije, gdje nam x prodstsvlja svaku poslovnicu, te renderiramo Picker.Item kojem šaljemo kao prop label, odnosno
naziv naše poslovnice, i value, kao id naše poslovnice, te kao key imamo id poslovnice. Zatim, u reduceru, gdje imamo
akciju POSLOVNICA_ACTION.ADD_ARTIKAL, gdje kod provjere ne gledamo je li nam x.id razlicit od action.payload.id, nego od
action.payload.id_poslovnice, jer smo tako definirali prethodno.

## 06.04.2023.
Pocetak | Kraj
------- | ----
10:00   | 11:15
### Omogućeno ZATVARANJE postojeće poslovnice unutar ekrana ZatvoriPoslovnicuScreen
Cilj je bio omogućiti funkciju zatvaranja poslovnice, dakle, kada kliknemo na Poslovnice-Zatvori poslovnicu, trebao bi nam 
se prikazati nekakv confirmation screen s upitom želimo li zaista zatvoriti poslovnicu ili ne, te button-i, koji ukoliko
smo kliknuli DA, omogućuju zatvaranje poslovnice te povratak na popis poslovnica, bez ove, ili ako smo kliknuli NE, imamo 
samo povratak na popis poslovnica. Koristimo ZatvoriPoslovnicuScreen komponentu. Tu smo najprije View komponentu zamijenili
komponentom Screen, te smo kao route parametar, proslijedili poslovnicu. Mi Zatvori Poslovnicu botun koristimo u Popis 
Poslovnica ekranu, odnosno tu koristimo komponentu Lista poslovnica, gdje navigiramo na ekran Zatvori poslovnicu, klikom na 
3. botun, te smo do sada ovdje prosljeđivali samo ID poslovnice, iako sam to promijenila, sada želim proslijediti cijelu 
poslovnicu. Tu poslovnicu unutar ZatvoriPoslovnicu ekrana dobivam preko route.params.poslovnica. Text komponentu sam
zamijenila onom TekstNaslov, te dodala 2 BotunTekst komponente, klikom na koje korisnik nastavlja ili odustaje. Klikom na 
DA, korisnik govori kako želi zatvoriti poslovnicu. U tom slučaju koristimo funckiju DISPATCH, koju ćemo dobiti pomoću
useDispatch HOOK-a, i mi ovjde želimo unutar funkcije dispatch kreirati akciju, TIP akcije nam je POSLOVNICA_ACTION.
BANCRUPTCY_POSLOVNICA, te kao parametar proslijeđujemo samo ID poslovnice, odnosno poslovnica.id. Vidimo u reducer-u
poslovnice, da unutar funkcije FILTER ide provjera je li nam poslovnica.id!=action.payload, što znači da se podrazumijeva da
nam je payload ID te poslovnice. Zatim samo navigiramo na prethodni screen.Zatim kreiramo funkciju ponisti, koja nam samo sluzi
ukoliko korisnik klikne NE, za povtarak na prethodni screen. Dakle, idemo na Poslovnice, odaberemo npr. 1.poslovnicu-Zatvori
poslovnicu, DA, te povratkom na Poslovnice, naša poslovnica više ne postoji, što je u redu.  

## 06.04.2023.
Pocetak | Kraj
------- | ----
11:15   | 13:00
### Ispis statističkih podataka svih poslovnica make-up proizvoda(ukupan broj, zaradu, kolicinu artikala na stanju)
Na ekranu koji nam prikazuje statističke podatke svih poslovnica, trebali smo prikazati broj poslovnica, ukupnu zaradu, te 
ukupan broj artikala na skladištu. To implementiramo unutar PocetnaScreen ekrana. Broj poslovnica ćemo jednostavno dohvatiti
preko state objekta iz liste poslovnica. Zaradu računamo na način da samo prođemo kroz listu poslovnica i zbrojimo zaradu
svake poslovnice, koristila sam funckiju reduce, s tim da ne smijemo zaboraviti definirati POCETNO STANJE akumulatora. Količinu
također računam pomoću funckije reduce, s tim da imamo ugniježđeni reduce, najprije moramo proci kroz sve poslovnice,
zbrojiti kolicine, i onda sve te zbrojeve kolicina svake poslovnice zbrojiti u iducoj funkciji. Taj dio nam je sada u redu. 

## 06.04.2023.
Pocetak | Kraj
------- | ----
13:15   | 14:45
### Implementacija komponente PrikazPolja, kako bismo bolje strukturirali podatke na ekranu PocetnaScreen
Zatim sam dodala komponentu PrikazPolja, koja kao parametar prima polja, a ta polja sam definirala kao listu, array gdje
kao polja imamo ime i vrijednost. Komponenta je dosta slična TekstLabel komponenti, pa sam ju kopirala, samo ćemo
ju prilagoditi. Najprije, naša komponenta sada ne prima children, nego polja. Returnamo jedan View, gdje ćemo iskoristiti 
Text komponentu. Budući sa znamo da su nam polja array, mapiramo ih na način da nam svako polje return-a 1 View element, 
i tu imamo Text komponentu koja će nam prikazivati ime kao label, a iduća Text komponenta će nam prikazivati vrijednost.
Ne smijemo prilikom MAP-iranja zabpraviti key, a to nam u ovom slučaju može biti index, poziciju unutar array-a, gdje nam 
se to polje nalazi, počevši od 0(A znamo da nam MAP funckija vraća function(POLJE, INDEX, ARR), nama treba samo POLJE i INDEX,
pa ARR ne koristimo). Definirala sam stilove za naslov i vrijednost, čisto da nam malo bolje izgleda pocetni
ekran. 
 

## 06.04.2023.
Pocetak | Kraj
------- | ----
14:45   | 15:55
### Unutar ekrana Detalji poslovnice fino ispisani detalji pomoću komponente PrikazPolja
Zatim sam pokušala urediti ekran DetaljiPoslovniceScreen, gdje odmah možemo iskoristiti komponentu PrikazPolja. U 
DetaljiPoslovniceScreen ćemo najprije izvući poslovnicu, pomoću useSelector HOOK-a, koristeći find metodu, 
const poslovnica=useSelector(state=>state.poslovnica.poslovnice.find(x=>x.id===id_poslovnice)), te unutar komponente Okvir 
radimo render TekstNaslov komponente, unutar koje prikazujemo poslovnica.naziv. Za sada klikom na Detalji poslovnice
imamo prikaz naziva poslovnice i botun Uredi poslovnicu. Nedostaje nam prikaz podataka o toj poslovnici iznad botuna, 
te ćemo sada i to implementirati. Najprije sam pogledala u modelu poslovnice, koja polja imamo, kako bih iste ovdje mogla
i prikazati. To su mi polja: NAZIV, EMAIL, LOKACIJA, ARTIKLI, ZARADA. Zato sam unutar komponente prikaz polja, kao parametar 
koji prima, array polja, dodala ime i vrijednost za svako od navedenih polja. Sada nam kartica za prikaz detalja poslovnice 
izgleda dosta dobro.  

## 06.04.2023.
Pocetak | Kraj
------- | ----
16:25   | 20:00
### Učitani artikli poslovnice unutar skladišta (Poslovnice -> Poslovnica1 - Pregled skladišta) uz prikaz poslovnice
Mi želimo klikom na "PREGLED SKLADISTA" dobiti informacije koje su nam dostupne unutar aplikacije, a vezane su za prikaz polja
pojedinog artikla, pa ćemo i ovdje, ispod naslova, TekstNaslov komponente, unutar komponente ListaArtikala.js iskoristiti 
komponentu PrikazPolja, te kao polja imao array unutar kojeg navodimo elemente kao parove {ime:'',vrijednost:''}, dakle, 
prikazujemo nabavnu i prodajnu cijenu artikla te količinu. Tu primjećujem kako bi bilo dobro i ispisati iz koje poslovnice je
artikal, pa ćemo to odmah dodati. Kako znamo da će nam to trebati i kasnije, više nećemo proslijeđivati samo artikle i
 id_poslovnice nego ćemo tu napraviti neku grupu, dakle, svaki proizvod će imati artikal i poslovnicu. Najprije provjaravam
gdje mi se ListaArtikala kao komponenta prikazuje, u PregledSkladistaScreen komponenti, gdje imamo artikle kao listu
artikala. To ćemo sada malo promijeniti, jer kasnije, kada bude pretrazivali artikle, necemo imati samo 1 poslovnicu, 
nego ce nam tu biti sve poslovnice i svi artikli. Zato, to cemo malo modificirati, u PregledSkladistaScreen dodamo 
const poslovnica, i const artikli. Onda, varijabla proizvodi nam vraca novi niz objekata, koji se sastoje od poslovnice 
i artikla, za svaki artikal. Sada trebamo malo modificirati i ListuArtikala, jer nam sada prima proizvode, i ne prihvaća 
više id_poslovnice, kao do sada. PrikazPolja nam je komponenta koja omogućuje prikaz svih polja koje želimo ispisati u obliku 
ime, pa ispod vrijednost.