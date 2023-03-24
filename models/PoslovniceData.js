
import Poslovnica from './Poslovnica.js'
import ARTIKLI_TEST from './ArtikliData.js'

//id, naziv, mail, lokacija, artikli, zarada
const POSLOVNICE_TEST = [new Poslovnica(0, "POSLOVNICA 1", "p1@tvrtka.com", "Split", ARTIKLI_TEST),
 new Poslovnica(1, "POSLOVNICA 2", "p2@tvrtka.com", "Zagreb", ARTIKLI_TEST),
 new Poslovnica(2, "POSLOVNICA 3", "p3@tvrtka.com", "Rijeka", ARTIKLI_TEST),
 new Poslovnica(3, "POSLOVNICA 4", "p4@tvrtka.com", "Varaždin", ARTIKLI_TEST),
 new Poslovnica(4, "POSLOVNICA 5", "p5@tvrtka.com", "Čakovec", ARTIKLI_TEST),
 new Poslovnica(5, "POSLOVNICA 6", "p6@tvrtka.com", "Umag", ARTIKLI_TEST),
 new Poslovnica(6, "POSLOVNICA 7", "p7@tvrtka.com", "Koprivnica", ARTIKLI_TEST),
 new Poslovnica(7, "POSLOVNICA 8", "p8@tvrtka.com", "Poreč", ARTIKLI_TEST)];

export default POSLOVNICE_TEST;
