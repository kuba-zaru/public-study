const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log(this);
        const _that = this;
        
        window.setTimeout(function() {
            console.log(this);
        }.bind({first_name: 'Taro'}));  
    }
}

obj.printFullName();