function checkPalindrome() {
    const inputValue = document.getElementById('inputValue').value;
    const result = document.getElementById('result');
    if (isPalindrome(inputValue)) {
        result.textContent = `"${inputValue}" is a palindrome!`;
        result.style.color = 'green';
    } else {
        result.textContent = `"${inputValue}" is not a palindrome.`;
        result.style.color = 'red';
    }
}

function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
