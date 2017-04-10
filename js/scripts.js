// plik scripts.js

var podstawa = prompt('Podaj długość podstawy trójkąta');
	wysokosc = prompt('Podaj długość wysokości trójkąta');

function getTriangleArea(a,h) {
	if ((a > 0) && (h > 0)) {
	return a*h/2;
	} else {
	return ('Nieprawidłowe dane, długości odcinków muszą być liczbami dodatnimi');
	}
}

console.log(getTriangleArea(10,6))
var triangleArea = getTriangleArea (podstawa, wysokosc);
console.log('Pole trójkąta o podstawie ' + podstawa + ' i wysokości ' + wysokosc + ' wynosi: ' + triangleArea)
alert ('Pole trójkąta wynosi: ' + triangleArea)

var triangle1Area = getTriangleArea(0.2,4)
	triangle2Area = getTriangleArea(3,7)
	triangle3Area = getTriangleArea(0,10)