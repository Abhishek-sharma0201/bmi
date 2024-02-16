let btn = document.getElementById('calculate');

btn.addEventListener('click', function () {
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if (height == '' || weight == '') {
        alert('Please fill out the input fields');
        return;
    }

    // Convert height to meters (as BMI formula requires height in meters)
    let heightInMeters = height / 100;

    // Calculate BMI using the formula: BMI = weight (kg) / (height (m) * height (m))
    let bmi = weight / (heightInMeters * heightInMeters);

    // Update the result display in your HTML
    document.getElementById('result').textContent = bmi.toFixed(2);

    // Determine the BMI category and update the comment
    let comment = '';
    if (bmi < 18.5) {
        comment = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        comment = 'normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        comment = 'overweight';
    } else {
        comment = 'obese';
    }

    document.getElementById('comment').textContent = comment;
});