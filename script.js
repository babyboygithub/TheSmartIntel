function showBenefits(accountId) {
    const benefitsList = document.getElementById(accountId);
    if (benefitsList.classList.contains('hidden')) {
        benefitsList.classList.remove('hidden');
    } else {
        benefitsList.classList.add('hidden');
    }
}
