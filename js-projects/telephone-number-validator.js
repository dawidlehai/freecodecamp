/*
1 555-555-5555
555-555-5555
1 (555) 555-5555
1(555)555-5555
(555)555-5555
(555) 555-5555
1 555 555 5555
555 555 5555
5555555555
*/

function telephoneCheck(str) {
  const regex =
    /^(1 |)\d{3}-\d{3}-\d{4}$|^(1 (?=.* )|1(?!.* )|)\(\d{3}\) ?\d{3}-\d{4}$|^(1 |)\d{3} \d{3} \d{4}$|^\d{10}$/;

  if (regex.test(str)) return true;
  return false;
}

module.exports = telephoneCheck;
