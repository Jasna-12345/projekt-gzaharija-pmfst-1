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
