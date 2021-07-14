const person = {
    name: ['Himani', 'Neha','Anjali','Rohan'],
    age: [24,25,23],
    gender: ['male','female'],
    interests: ['music', 'skiing'],
    
  };
  document.getElementById("name1").innerText=person.name[0];
  document.getElementById("detail1").innerText= "I am "+person.name[0] +" and my age is "+person.age[0] +" and " +"I am " 
  +person.gender[1] +" and I love "+person.interests[0]+" and "+person.interests[1] ;

  document.getElementById("name2").innerText=person.name[1];
  document.getElementById("detail2").innerText= "I am "+person.name[1] +" and my age is "+person.age[1] +" and " +"I am " 
  +person.gender[1] +" and I love "+person.interests[0]+" and "+person.interests[1] ;

  document.getElementById("name3").innerText=person.name[2];
  document.getElementById("detail3").innerText= "I am "+person.name[2] +" and my age is "+person.age[1] +" and " +"I am " 
  +person.gender[1] +" and I love "+person.interests[0]+" and "+person.interests[1] ;

  document.getElementById("name4").innerText=person.name[3];
  document.getElementById("detail4").innerText= "I am "+person.name[3] +" and my age is "+person.age[2] +" and " +"I am " 
  +person.gender[0] +" and I love "+person.interests[0]+" and "+person.interests[1] ;