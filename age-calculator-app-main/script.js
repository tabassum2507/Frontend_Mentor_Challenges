function calculateAge() {
    // Get input values
    const inputDay = parseInt(document.getElementById('inputDay').value);
    const inputMonth = parseInt(document.getElementById('inputMonth').value);
    const inputYear = parseInt(document.getElementById('inputYear').value);

    // Elements for displaying the error message and results
    const errorMessage = document.getElementById('error-message');
    const dayInput = document.getElementById('inputDay');
    const monthInput = document.getElementById('inputMonth');
    const yearInput = document.getElementById('inputYear');

    errorMessage.style.display = 'none';
    dayInput.classList.remove('error-input');
    monthInput.classList.remove('error-input');
    yearInput.classList.remove('error-input');


    if (isNaN(inputDay) || isNaN(inputMonth) || isNaN(inputYear) || inputDay < 1 || inputDay > 31 || inputMonth < 1 || inputMonth > 12 || inputYear < 1900 || inputYear > new Date().getFullYear()) {
      showError();
      return;
    }

    const inputDate = new Date(inputYear, inputMonth - 1, inputDay);
    if (inputDate.getDate() !== inputDay || inputDate.getMonth() + 1 !== inputMonth || inputDate.getFullYear() !== inputYear) {
      showError();
      return;
    }

    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; 
    const currentYear = today.getFullYear();

    let ageYears = currentYear - inputYear;
    let ageMonths = currentMonth - inputMonth;
    let ageDays = currentDay - inputDay;

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += new Date(currentYear, currentMonth - 1, 0).getDate(); 
    }
    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    // Display results
    document.getElementById('YY').textContent = ageYears;
    document.getElementById('MM').textContent = ageMonths;
    document.getElementById('DD').textContent = ageDays;
  }

  function showError() {
    const errorMessage = document.getElementById('error-message');
    const dayInput = document.getElementById('inputDay');
    const monthInput = document.getElementById('inputMonth');
    const yearInput = document.getElementById('inputYear');

    errorMessage.style.display = 'block';
    dayInput.classList.add('error-input');
    monthInput.classList.add('error-input');
    yearInput.classList.add('error-input');
  }