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

## 07.04.2023.
Pocetak | Kraj
------- | ----
07:00   | 09:50
### Omogućena funkcionalnost PRODAJE ARTIKLA(UPDATE KOLICINE, UPDATE POSLOVNICE, DISPATCH NA STORE) i refresh stanja skladista. 
Do sada sam imala 2 ekrana namijenjena prodaji artikla, ProdajaArtiklaScreen i ProdajArtikalScreen, jer inicijalno,
kada sam definirala na koje ekrane idemo, mi PRODAJI ARTIKLA možemo pristupiti preko skladišta, botun Prodaj artikal, i 
preko pretraživanja artikla, vidimo da mi tu imamo listu artikala gdje klikom na PRODAJ ARTIKAL, dolazimo na isti screen, 
pa ćemo to malo modifirati, tako da imamo 1 ProdajArtikalScreen. Najprije ćemo prodaju omogućiti unutar Pregleda skladišta
jedne poslovnice, gdje korisnik klikom na Prodaj artikal ide na PregledArtiklaScreen.js. Tu najprije View komponentu
zamijenimo Screen komponentom, da nam pozadina ekrana bude ujednačena s ostatkom aplikacije. Zatim smo izvukli artikal i 
poslovnicu iz route.params, a to znamo jer mi do PRODAJA ARTIKLA botuna dolazimo preko PregledSkladistaScreen-a, odnosno
preko ListaArtikala komponente, gdje nam je i definiran ovaj botun: <BotunTekst onPress={()=>navigation.navigate('ProdajArtikal',
{artikal, poslovnica})}>Prodaj artikal</BotunTekst>, te ovdje vidimo rutu, a to nam je 'ProdajArtikal', tj. ekran na kojem
smo trenutno, a kao params smo poslali {artikal, poslovnica}. Zato artikal i poslovnicu možemo dohvatiti unutar 
ProdajArtikalScreen. Ovdje možemo iskoristiti cijeli dio return-a ListeArtikala, samo ćemo ukolniti botune, jer nam oni ne 
trebaju. Kada smo učitali sve podatke za artikal kojeg želimo prodati, vidimo da nam KOLICINA polje nije u redu, korisnik 
bi trebao imati mogucnost odabira količine. Za to nam treba novi library: npx expo install @react-native-community/slider. 
Sada ćemo samo dodati taj Slider unutar komponente ProdajArtikalScreen, s tim da nam treba jedan useState HOOK, kako bismo
mogli pratiti vrijednost slider-a, ovisno što korisnik odabere. Zatim, mi da bi prodali artikal, moramo, smanjiti mu količinu, 
i moramo izračunati koliko smo zaradili, i UPDATE-ati poslovnicu novim podacima. Novu zaradu poslovnice ćemo dobiti na način 
da uzimamo trenutnu zaradu poslovnice i dodamo joj RAZLIKU PRODAJNE I NABAVNE CIJENE POMNOŽENU S KOLIČINOM PRODANIH ARTIKALA. 
Nakon što smo definirali logiku za UPDATE liste artikala, unutar funkcije prodajArtikal, trebamo napraviti i UPDATE poslovnice.
To ćemo implementirati u drugom dijelu funkcije. Novu_kolicinu i novu_poslovnicu moramo pomocu DISPATCH funckije poslati na STORE, 
kako bi se izvrsila akcija UPDATE_POSLOVNICE, jer mi tu imamo Poslovnicu koju trebamo UPDATE-ati u globalnom store-u. Dakle,
klikom na PRODAJ ARTIKAL, treba se updte-ati poslovnica i artikli, a mi se samo još moramo putem navigacije vratiti na prethodni 
ekran, a to možemo putem navigation.goBack(). Odlaskom na Poslovnice->(POSL1.)Pregled skladišta->Kameni puder->Prodaj artikal, 
povratkom na Ekran pregled skladista, vidimo da nam se kolicina smanjila za broj prodanih proizvoda, a povratkom na pocetnu,
gdje imamo ukupni pregled skladišta, vidimo da smo zaradili 49.99999999. Kako nam cijena nebi tako ružno izgledala, unutar 
PocetnaScreen ekrana, koristimo Math.round(zarada), prilikom ispisa, te nam je sada cijena 50. Testiramo još i prodaju svih 
artikala. Odlaskom na Poslovnice-(P1)Pregled skladista->Prodaj artikal(Kameni puder)->odaberemo svih 200 proizvoda, povratkom
na pregled skladišta primjećujemo kako proizvoda NEMA na skladištu, izbacimo ga (u kodu funkcija FILTER). A odlaskom na Pocetna
ekran vidimo kako smo zaradili 2000, jer nam je rezlika prodajne i nabavne cijene 10, a prodali smo 200 proizvoda, te se 
ukupan broj proizvoda na skladištu smanjio za tih 200 proizvoda, te ih sada imamo 5240. 

## 07.04.2023.
Pocetak | Kraj
------- | ----
10:10   | 12:20
### Unutar tabPrikaziArtikle, izlistani artikli svih poslovnica
Kako smo prethodno implementirali Prodaju artikla, i imamo Pregled skladišta, to bi mogli iskoristiti za PretraziArtikle ekran, 
gdje ćemo isto imati Prodaju artikala. Dakle, idemo na Pocetna-> tab Prikaži artikle-> tu sada imam stack screen gdje imamo
mogućnost pretrage artikala te prodaju artikla, kao i na prethodn implementrianom ekranu. Najprije, mi bi ovjde trebali imati 
LISTU ARTIKALA, a vidjeli smo da nam ona prima nekakav array proizvoda, a svaki array item nam ima poslovnicu i artikal u sebi
(a to vidimo u PregledSkladistaScreen komponenti, jer od tu pozivamo Listu artikala).Kada smo učitali listu artikala u 
PretraziArtikle ekranu, primjecujemo kako imamo "Kameni puder" u 2 poslovnice, i oni nam imaju isti kexEktractor unutar
ListePoslovnica, što nikako nije dobro. Trebamo koristiti drugi KEY EXTRACTOR, a to ce nam biti: ID_POSLOVNICE-NAZIV ARTIKLA,
jer nam je do sada tu bio isključivo NAZIV ARTIKLA, i normalno ako imam 2 ista naziva artikla u 2 razlicite poslovnice, 
da nikako nije dobro, nemam jedinstveni KEY. Sada, odlaskom na Pocetna-tab PrikaziArtikle, imamo uredno prikazane artikle
koje ćemo moći pretraživati. Samo to još nismo omogućili.

## 07.04.2023.
Pocetak | Kraj
------- | ----
14:10   | 16:27
### Omogućena pretraga artikla unutar Pretrazi artikle ekrana, te otklonjena greška prilikom prodaje  
Zatim ćemo na listu artikala, na vrh unutar PretraziArtikle ekrana, na vrh dodati SEARCH element. Kada smo dodali TextInput
element, mi moramo omoguciti funkcionalnost pretrage, odnosno update-ati listu proizvoda koje ćemo prikazati nakon pretrage,
i tu ćemo iskoristiti stanje trazilica, definirano putem useState hook-a, kako bismo mogli pratiti vrijednosti unosa. Ako ono 
što je korisnik unio u TextInput element sadrzi barem jedno slovo iz trazilice, a to provjeravamo pomoću .includes funkcije, 
mi samo te artikle ostavljamo, pushamo ih u acumulator, u ovom slucaju u LISTU, koja je inicijalno prazna. Zatim, imamo problem
ukoliko unesemo "E", a prpoizvod sadrži u nazivu "e", nemamo prikazan nijedan artikal, te bi bilo dobro najprije sve pretvoriti
u mala slova, pomoću toLowerCase funkcije, kako bi provjera bila efikasnija. Sada odlaskom na Pocetna->Prikazi artikle, mozemo
pretraziti artikle, i to unoso "SET", imamo prikazan "Set kistova", za svaku od 8 poslovnica, te nam je taj dio sada u redu. 
Sada imamo grešku, ("The action 'NAVIGATE' with payload {"name":"ProdajArtikal","params":{"artikal":{"naziv":"Set kistova",
"nabavna_cijena":139.99,"prodajna_cijena":179.99,"kolicina":20},"poslovnica":...)was not handled by any navigator. 
Do you have a screen named 'ProdajArtikal'? Kaže kako ne može navigirati na "ProdajArtikal", jer on NE postoji, u trenutnoj 
navigaciji. Kako to znamo? Mi unutar App.js imamo 2 odvojene navigacije, u 1. Drawer-u smo imali DRAVWEPOSLOVNICESCREEN, 
gdje smo naveli sve STACK SCREEN-ove, jedan od njih je bio onaj s name='PregledSkladista', gdje smo imali isto listu artikala,
i kada kliknemo na PRODAJ ARTIKAL, mi idemo na PRODAJ ARTIKAL istog tog STACK-a, gdje je name="ProdajArtikal", a 
component=ProdajArtikalScreen. To je nama trenutno nebitno, ali dobro je za usporedbu da vidimo gdje bi mogao biti BUG. 
Dok, u potpuno drugom navigatoru, DRAWER POCETNA, mi imamo definirane tabove, 1 od njih je TabPretraziArtikle, na kojem 
smo mi danas radili, a sam TabPretraziArtikle ima svoj STACK NAVIGATOR, od kojih drugi kaže kako idemo na 
ProdajaArtiklaScreen. Kako bismo riješili problem, pokušat ćemo naziv ProdajaArtikla preimenovati u ProdajArtikal, 
i pozvati komponentu ProdajArtikalScreen, u TabPretraziArtikle. Spremanjem promjena, na TabPretraziArtikal, imamo listu artikala, 
pretrazimo set kistova, i PRODAJ ARTIKAL botun nam uredno funkcionira.

## 08.04.2023.
Pocetak | Kraj
09:40   | 15:55
### Početna verzija ekrana PrebaciArtikalScreen, (Poslovnice->Pregled skladista jedne->Prebaci artikal), bez funkcionalnosti 
Preostalo nam je još implementirati funkcionalnosti prebacivanja artikla. Do gumba PREBACI ARTIKAL, mi trenutno možemo doći 
na 2 mjesta, 1. najprije preko DRAVERPOCETNA, tab Prikazi artikle, gdje nakon pretrage željenog artikla imamo mogućnost klika
na botun Prebaci artikal, te 2. klikom na Poslovnice->Pregled skladista jedne poslvnice, za svaki od artikala također imamo
mogučnost odabira akcije PREBACI ARTIKAL. Možemo najprije vidjeti iz PREGLED SKLADISTA, kada kliknemo na botun PREBACI
ARTIKAL, za neki od proizvoda, te se nalazimo na PrebaciArtikalScreen. Najprije sam View komponentu, definiranu prethodno, 
zamijenila Screen komponentom. Idemo najprije pogledati kako dolazimo do PretraziArtikalScreen. Vidimo da ovdje dolazimo 
preko LISTE ARTIKALA, gdje mi klikom na Prebaci artikal botun navigiramo na PrebaciArtikalScreen, a parametri koje dobivamo
du {artikal, poslovnica}, što znači da ovdje artikal i poslovnica dobivamo iz route.params. Ovdje će nam trebati stanje 
kojim pratimo vrijednost količine, te ćemo koristiti dispatch funkciju, znači ponovno koristimo useDispatch() HOOK, a
možemo ikoristiti i ostatak ProdajArtikalScreen-a, odnosno dijela kojeg vraćamo, prikazujemo korisniku, dakle, sve ono unutar
Okvir komponente možemo iskoristiti i ovdje, samo ćemo malo modificirati. Ne smijemo zaboraviti import svih komponenti koje
koristimo. Osim toga, ovdje ću definirati funkciju prebaciArtikal, unutar koje ćemo definirati funkcionalnost koju je 
potrebno odraditi kao onPress svojstvo botuna, odnosno ukoliko korisnik odabere botun PREBACI. Vidimo da nam treba još 
jedan TekstInput element, gdje korisnik bira u koju poslovnicu želi prebaciti artikal. To sam prije par dana radila unutar
NaruciArtikal ekran-a, odnosno FormaArtikal komponente, koristeći Picker komponentu bilioteke react-native, što ovdje možemo 
iskoristiti. Treba nam još jedno stanje kako bismo pratili id poslovnice, a to ponovno implementiramo koristeći useState HOOK. 
I dalje nemamo sve poslovnice, koje ćemo prikazati unutar Picker komponente, pa ćemo to sada dodati. A kako svaki put dohvaćamo 
poslovnice? Koristeći STORE, global state management. U redu, kada smo dobili sve poslovnice, vidimo kako nama trebaju sve 
poslovnice osim one u kojoj se trenutno nalazimo, što ćemo odraditi koristeći FILTER funkciju, a filtriramo po id-u, na način
da prnalazimo podlovnicu s id-em u kojoj smo trenutno. To nam je array poslovniceZaTransfer. Ukoliko smo unutar skladista
Poslovnice 1, poslovniceZaTransfer nam je array čiji objekti su poslovnice iz STORE-a, P2-P8. Kada postavljamo 1. put 
idPoslovnice, trebamo dobro pripaziti da najprije provjerimo postoje li poslovniceZaTransfer. Ukoliko postoje, postavimo
ID prve u nizu za idPoslovnice, u protivnom, idPoslovnice nam je ''. 

## 08.04.2023.
Pocetak | Kraj
17:00   | 18:52
### Omogućeno prebacivanje proizvoda iz jedne poslovnice u drugu pdlaskom na Pregled skladišta->Prebaci artikal 
Sada trebamo implementirati prebaciArtikal funkciju. Ovdje koristim FROM-TO sintaksu, zbog jednostavnijeg razumijevanja. FROM
mi označava od kuda se artikli prebcuju, dok TO označava gdje artikli idu, gdje se artikli prebacuju.Najprije, varijabla 
from_količina nam označava koju količinu artikala prebacujemo, odnosno KOLIKO KOMADA OSTAJE NA STANJU,tj. od vrijednosti 
artikala na stanju, sa STORE-a, oduzimamo količinu koju korisnik odabere na SLIDER-u. Zatim, moramo modificirati artikle 
iz 1.POSLOVNICE(FROM POSLOVNICE), a kako to radimo, najprije provjerimo ima li uopće više tog artikla, ako ga nema, varijabla
from_kolicina ima vrijendost 0, IZBACUJEMO ga iz liste artikala. A ako još imamo par komada tog artikla na stanju, pronađemo
taj artikal u listi artikala poslovnice iz koje prebacujemo, i vratimo NOVI ARTIKAL koji ima sve vrijednosti atributa jednake 
onima od prije(naziv, prodajna i nabavna cijena), samo mu AŽURIRAMO vrijednost količine. Kada smo ažurirali vrijednosti 
artikala(samo ovog čijih par komada(stanje kolicina) želimo prebaciti), trebamo ažurirato poslovnicu, na isti način, pomoću
konstruktora definiranog u modelima poslovnice, tako da nam svi atributi ostaju isti, osim LISTE ARTIKALA, prethodno ažurirane.
Zatim trebamo kolicinu nekog artikla koju je korisnik odabrao DODATI iatom artiklu POSLOVNICE U KOJU PROEBACUJEMO ARTIKAL,
u mom slučaju označene kao to_poslovnica. Najprije ćemo pronać tu poslovnicu, koristeći FIND metodu, preko ID-a. Ako u listi
artikala ODREDIŠNE poslovnice imamo artikal čijih par komada prebacujemo, osvježiti ćemo artikle tako da sve one čiji naziv ne 
odgovara mom artikllu return-amo nepromijenjene, a ako smo pronašli artikal s istim nazivom čijih par komada mi prebacujemo, 
raturn-amo novi artikal koji će nam imati istu vrijednost atributa kao i prehtodno(naziv, prodajna i nabavna cijena), samo 
njegovoj količini u toj poslovnici, mi dodajemo količinu koju je korisnik odabrao putem slider-a. Ako kojim slučajem artikal 
u odredišnoj poslovnici ne postoji, destrukturiramo niz dosadašnjih artikala, na način da ima na kraj dodamo novi artikal sa
svim atributima sa STORE-a, s tim da mu je vrijednost količine ona koju je korisnik odabrao putem slider-a. Sada samo još moramo
pomoću DISPATCH funkcije obaviti UPDATE poslovnice, tako da na STORE šaljemo poslovnicu iz koje prebacujemo artikle, sa 
ažuriranom listom artikala, a moramo napraviti i UPDATE pomoću dispatch funkcije, tako da pošaljemo na STORE poslovnicu
kojoj smo poslali određenu količinu nekog artikla, upravo s tom ažuriranom LISTOM ARTIKALA. Testiramo odlaskom na Poslovnice->
Pregled skladišta->Odabremo neki artikal, dodirom gumba Prebaci, imamo Okvir komponentu, unutar koje imamo detalje o artiklu,
atribute poput naziva, prodajne i nabavne cijene te kolicine, i imamo mogucnost prebacivanja određene količine odabirom pute 
SLIDER komponente. Ja sam prebacila 1 Kameni puder iz P1 u P2, i vidimo kako nam to uredno radi. U P2, pregledom skladišta 
primjećujemo kako imamo 201 Kameni puder, a inicijalno smo ih imal 200, te nam je ovaj dio za sada u redu.

## 17.04.2023.
Pocetak | Kraj
13:10   | 14:55
### Implementirala InputSpinner komponenta kao dodatak Slider-u unutar PrebaciArtikal ekrana 
Zadnjim commit-om sam prije par dana uočila bug, naime, kada sam iz poslovnice "POSLOVNICA 1" prebacila 1 artikal primjerice pod nazivom "Kameni
 puder" u poslovnicu "Poslovnica 2", prebacivanje je bilo u redu, unutar liste poslovnica, poslovniceZaTransfer, id poslovnice kojeg smo dohvaćali unutar metode find kod pronalaska to_poslovnica je bio tipa number(onaj x.id), i stanje idPoslovnice, koji nam je inače useState je također bio tipa number. No međutim, kada sam prebacila taj 1 "viška" artikal(onaj kojeg smo iz "POSLOVNICA 1" prebacili u "POSLOVNICA 2") pod nazivom "Kameni puder" iz poslovnice "POSLOVNICA 2" u "POSLOVNICA 3", imala sam grešku koja kaže kako se prebacivanje ne može izvršiti, "Uncauhgt typeError: Cannot read properties of undefined (reading artikli) at prebaciArtikal.". Kako bih ustanovila u čemu je problem, najprije sam krenula s ispisom poslovnice iz koje prebacujem određeni broj artikala, varijabla "from_poslovnica", i poslovnice u koju artikle prebacujemo, varijabla "to_poslovnica". Ponovnim testiranjem primjećujem kako je prilikom drugog prebacivanja varijabla "to_poslovnica" undefined, iako je prethodno ta varijabla bila normalno definirana, odnosno postojala je. Ponovno sam krenula s ispisivanjem tipova
 ovih varijabli "x.id" i "idPoslovnice", te primjetila kako je kod 2. prebacivanja tip od "x.id" number, ali je "idPoslovnice" tipa string, te jedina komponenta unutar koje je najprije mogao nastati problem bila je Picker komponenta, jer nam upravo ona vraća idPoslovnice, budući da 
 korisnik na PrebaciArtikalScreen komponenti putem Picker-a odabire u koju konkretno poslovnicu želi prebaciti određenu količinu odabranih
 artikala. I ta poslovnica, koju korisnik odabere na Picker komponenti nam određuje koji će se id nalaziti unutar idPoslovnice. Zato sam najprije 
 ovdje taj isti id unutar Picker komponente convert-ala u number, te više nemamo ovaj problem, "to_poslovnica" nam u nijednom trenutku nije undefined. Zapravo, navedeni problem smo mogli riješiti i na drugi način, primjerice unutar to_poslovnica, kod usporedbe x.id i idPoslovnice ne koristimo operator "===" nego samo "==", gdje provjeravamo samo vrijednost podataka, ali ne i tip, dok smo upotrebom operatora "===" provjeravali i tip ali i vrijednost operanada, s lijeve i desne strane jednakosti. Osim toga, dodala sam sada i InputSpinner element, koji je povezan sa Slider komponentom, a služi kako bi korisniku bila očitije prikazana količina proizvoda kojeg je odlučio prebaciti, u odnosu na količinu proizvoda na stanju trenutno. Dok sam imala sam Slider, bilo je dosta čudno budući da korisnik može isključivo odokativno povući i odabrati neku količinu, dok mi ovdje imam mogućnost povećavati/smanjivati količinu 1 po 1 artikal, što mi osobno izgleda dosta praktičnije.