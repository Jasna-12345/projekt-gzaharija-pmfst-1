//Što ćemo mi sve izvoditi na tom poslovnica store-u, koje operacije: ADD(POSLOVNICA I ARTIKAL), DELETE, UPDATE, TRANSFER
export const POSLOVNICA_ACTION  = {
    ADD_POSLOVNICA: "poslovnica/add",
    BANKRUPTCY_POSLOVNICA: "poslovnica/delete",
    UPDATE_POSLOVNICA: "poslovnica/update",
    ADD_ARTIKAL: "artikal/add",
    TRANSFER_ARTIKAL: "artikal/transfer"
 };
{/*Type će nam označavati koji action je u pitanju, a payload su nam podaci koje mi prosljeđujemo u taj action, primjerice, */}
{/*za tip ADD_POSLOVNICA, podaci će nam biti nova poslovnica. Za bankruptcy, type će biti poslovnica/delete, a podaci će nam biti ID po kojem ćemo moći naći tu poslovnicu. */}
 export const poslovnicaAction = (tip, podaci) => {
    {/*vraća objekt u formi koju podržava/prihvaća reducer*/}
    return {
    type: tip,
    payload: podaci
    };
};
