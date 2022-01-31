let dohod = 172550;
let deduction = 12550;

if (dohod > deduction) {
    sumTax = dohod - deduction;
}
else if (dohod >= deduction) {
    sumTax == 0;
}

let TaxPercent = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];

if (sumTax <= 9950) {
    Tax = TaxPercent[0] * sumTax;
}
if (sumTax >= 9951 || sumTax <= 40525) {
    Tax = (9950 * TaxPercent[0]) + ((sumTax - 9950) * TaxPercent[1]);
}
if (sumTax >= 40526 || sumTax <= 86375) {
    Tax = (9950 * TaxPercent[0]) + ((40525 - 9950) * TaxPercent[1]) + ((sumTax - 40525) * TaxPercent[2]);
}
if (sumTax >= 86376 || sumTax <= 164925) {
    Tax = (9950 * TaxPercent[0]) + ((40525 - 9950) * TaxPercent[1]) + ((86375 - 40525) * TaxPercent[2]) + ((sumTax - 86375) * TaxPercent[3]);
}
if (sumTax >= 164926 || sumTax <= 209425) {
    Tax = (9950 * TaxPercent[0]) + ((40525 - 9950) * TaxPercent[1]) + ((86375 - 40525) * TaxPercent[2]) + ((164925 - 86375) * TaxPercent[3]) + ((sumTax - 164925) * TaxPercent[4]);
}
if (sumTax >= 209426 || sumTax <= 523600) {
    Tax = (9950 * TaxPercent[0]) + ((40525 - 9950) * TaxPercent[1]) + ((86375 - 40525) * TaxPercent[2]) + ((164925 - 86375) * TaxPercent[3]) + ((209425 - 164925) * TaxPercent[4]) + ((sumTax - 209425) * TaxPercent[5]);
}
if (sumTax >= 523601) {
    Tax = (9950 * TaxPercent[0]) + ((40525 - 9950) * TaxPercent[1]) + ((86375 - 40525) * TaxPercent[2]) + ((164925 - 86375) * TaxPercent[3]) + ((209425 - 164925) * TaxPercent[4]) + ((523600 - 209425) * TaxPercent[5]) + ((sumTax - 523600) * TaxPercent[6]);
}

console.log (Tax);
