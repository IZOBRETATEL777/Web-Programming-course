const totalOut = document.getElementById("total");

function updateCost() {
  let totalCost = Number(document.getElementsByName("type")[0].value);
  if (document.querySelector('input[name="tip"]').checked)
    totalCost += Number(
      document.querySelector('input[name="tip"]:checked').value
    );

  document.querySelectorAll('input[type="checkbox"]:checked').forEach((cb) => {
    totalCost += Number(cb.value);
  });

  totalOut.innerHTML = totalCost;
}
