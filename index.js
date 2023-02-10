/*
. - будь який один символ
[] -  будь який один з перелвку
[^]-будь який один окрім з перелвку
{from, to}- з до
\d - одна будь яка цифра
\w - шукає букви, цифри, будь які символи слова
\s - будь який пробільний символ, спейс

\S - буль що крім пробільних символів
\W -все окрім симвала слова
\D - все окрім цифри

\d* - all digits
\ * - будь яку кількість разів {0,}тобто від нуля і до нескінченності

* {0, Infinity}
+{0,Infinity}
? 

^ - start of string
$ - end of sting
\b - a workd boundary
\B - non-word boundary
| - or

\b\w+(o{2}|d{2}|e){2}\w+\b

повне співпадіння тексту
(.|\s)
^[A-Y][- \w\.,'\/\\[\]?]*5$


^[A-Z].*\d виводить 
з - "Yesterday all my troubles seemed so far away. 5"
Now it looks as though they're here to stay.
Oh, I believe in yesterday.


*/

const pattern1 = /\b[A-Za-z-']\b/gi; // літерал

const pattern2 = new RegExp("\\b\\d+\\b","gi") // конструктор

const str = "Yesterday all my troubles seemed so far away. Now it looks as though they're here to stay.Oh, I believe in yesterday";

if (pattern1.test(str)) {
  console.log("found", ...str.matchAll(pattern1))
} else {
  console.log("not found")
}

if (pattern2.test(str)) {
  console.log("found", str.match(pattern2))
} else {
  console.log("not found")
}

if (pattern1.test(str)) {
  console.log("found",)
  const newStr = str.replace(pattern1, "@@@");
  console.log(newStr);
  console.log(str)
} else {
  console.log("not found")
}

if (pattern2.test(str)) {
  console.log("found",)
  const newStr = str.replace(pattern1, "$1***");  //$& це означає знайди мені все і заміни це на нове
  console.log(newStr);
  console.log(str)
} else {
  console.log("not found")
}