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
