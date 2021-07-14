let cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function () {
        return 'hello,said'+" " +this.name+" "+'the'+" "+this.breed;
    }
};
let cat2 = {
    name: 'nehu',
    breed: 'videsi',
    color: 'black',
    greeting: function () {
        return 'hello,said'+" " +this.name+" "+'the'+" "+this.breed;
    }
}
let section = document.createElement('div');
document.body.appendChild(section);
let para1 = document.createElement('p');
let para2 = document.createElement('p');


para1.innerText = cat.greeting();
para2.innerText = cat2.greeting();
section.appendChild(para1);
section.appendChild(para2);



