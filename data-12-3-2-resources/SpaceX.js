const url = "https://api.spacexdata.com/v2/launchpads";


d3.json("samples.json").then(function(data){
    console.log(data);
});


d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});


// sort the wfreq array in descending order

d3.json("samples.json").then(function(data){     wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => a - b);     console.log(wfreq); }); - no response given

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});


// delete null values from the sorted wfreq array.

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// Use Object.entries() to print each key-value pair inside an array.
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};

console.log(Object.entries(researcher1));


researcher1.forEach(([first, second]) => console.log(first
    + ": " + second));



    d3.json("samples.json").then(function(data){
        firstPerson = data.metadata[0];
        Object.entries(firstPerson).forEach(([key, value]) =>
          {console.log(key + ': ' + value);});
    });