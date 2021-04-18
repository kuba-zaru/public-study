const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this);

        window.setTimeout(function () {
            console.log(this);
        });
    }
}

obj.printFullName();