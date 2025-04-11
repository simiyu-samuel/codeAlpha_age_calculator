function calculateAge() {
  const dayInput = document.getElementById("day").value.trim();
  const monthInput = document.getElementById("month").value.trim();
  const yearInput = document.getElementById("year").value.trim();
  const resultElement = document.getElementById("result");

  // Convert to integers
  const day = parseInt(dayInput, 10);
  const month = parseInt(monthInput, 10) - 1; // JS months start at 0
  const year = parseInt(yearInput, 10);

  try {
    // Validate input presence
    if (!dayInput || !monthInput || !yearInput) {
      throw new Error("All fields are required.");
    }

    // Validate numeric values
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      throw new Error("Please enter valid numeric values.");
    }

    // Construct birth date
    const birthDate = new Date(year, month, day);

    // Check if date is valid
    if (
      birthDate.getDate() !== day ||
      birthDate.getMonth() !== month ||
      birthDate.getFullYear() !== year
    ) {
      throw new Error("Invalid date. Please check your input.");
    }

    const today = new Date();

    // Check if date is in the future
    if (birthDate > today) {
      throw new Error("Birth date cannot be in the future.");
    }

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    // Display result
    resultElement.innerText = `🎉 You are ${age} years old!`;
    resultElement.classList.remove("text-danger");
    resultElement.classList.add("text-success");
  } catch (error) {
    resultElement.innerText = error.message;
    resultElement.classList.remove("text-success");
    resultElement.classList.add("text-danger");
  }
}
