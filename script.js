function calculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value) - 1;
  const year = parseInt(document.getElementById("year").value);

  const birthDate = new Date(year, month, day);
  const today = new Date();

  if (birthDate > today || isNaN(day) || isNaN(month) || isNaN(year)) {
    document.getElementById("result").innerText =
      "Please enter a valid birth date.";
    document.getElementById("result").classList.remove("text-success");
    document.getElementById("result").classList.add("text-danger");
    return;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById("result").innerText = `🎂 You are ${age} years old!`;
  document.getElementById("result").classList.remove("text-danger");
  document.getElementById("result").classList.add("text-success");
}
