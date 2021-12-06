let findPrimeNumber = document.getElementById("find");
let result = document.getElementById("result");
let primeNumberList = [];

function isPrimeNumber(n) {
  let flag = true;

  if (n < 2) {
    flag = false;
  } else {
    for (var i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }

  if (flag == true) {
    primeNumberList.push(n);
  }
}

findPrimeNumber.addEventListener("click", () => {
  let start = parseInt(document.getElementById("start").value);
  let end = parseInt(document.getElementById("end").value);

  for (let i = start; i <= end; i++) {
    isPrimeNumber(i);
  }

  result.innerHTML += `<p>Số nguyên tố trong khoảng (${start};${end}) là ${primeNumberList}</p>`;
});
