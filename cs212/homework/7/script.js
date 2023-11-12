function quiz(ans) {
    if (ans == 'yes')
    {
        message = 'correct'
    }
    else if (ans == 'no')
    {
        message = 'wrong'
    }

    document.getElementById('output').innerHTML = message;
}