var discount;
var itemcount = 6;
if (itemcount > 0 && itemcount <= 5) {
    discount = 5;
}
else if (itemcount > 5 && itemcount <= 10) {
    discount = 10;
}
else {
    discount = 15;
}
console.log("you got ".concat(discount, "%discount"));
