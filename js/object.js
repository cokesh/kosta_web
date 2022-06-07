var customer = {
    id: 'id1',
    name: 'jason',
    age: 27,
    info: function() {
        console.log('id는 ' + this.id + ' 이름은 ' + this.name + ' 나이는 '+ this.age);
    }
};

customer.info();

var customerArr = [];

customerArr[0] = customer;

customerArr.push({
    id: 'id1',
    name: 'Jason',
    age: 27,
}, {
    id: 'id2',
    name: 'Qusiik',
    age: 27
}, {
    id: 'id3',
    name: 'Shimbo',
    age: 27
});


console.log(customerArr);