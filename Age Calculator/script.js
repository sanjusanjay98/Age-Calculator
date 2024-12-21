function calculateAge() {
    const dobValue = document.getElementById("inputDob").value;

    if (!dobValue) {
        document.getElementById("currentAge").innerHTML = "Please enter your Date of Birth.";
        return;
    }

    const dob = new Date(dobValue);
    const today = new Date();

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    document.getElementById("currentAge").innerHTML =
        `Your current age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;

    const nextBirthdayYear = today.getMonth() > dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() > dob.getDate())
        ? today.getFullYear() + 1
        : today.getFullYear();

    const nextBirthday = new Date(nextBirthdayYear, dob.getMonth(), dob.getDate());
    let remainingMonths = nextBirthday.getMonth() - today.getMonth();
    let remainingDays = nextBirthday.getDate() - today.getDate();

    if (remainingDays < 0) {
        remainingMonths -= 1;
        remainingDays += new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    }
    if (remainingMonths < 0) {
        remainingMonths += 12;
    }

    document.getElementById("daysToBirthday").innerHTML =
        `Time until your next birthday: ${remainingMonths} months and ${remainingDays} days.`;
}
