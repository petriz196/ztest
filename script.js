let objekt = [];

$.getJSON('./listing.json', function (data){
    objekt = [...data];
    setData();
})
function setData(){
    let counter = 0;
let arrr = [];
console.log(objekt[0]);
function mapArr(x){
    Object.entries(x).map(([key,value]) => {
        if(key=='name'){
            console.log(counter +' '+ value);
            arrr.push(value);
            arrr.push(counter);
        }
        if(key=='contents'){
            counter++;
            console.log(value);
            for(let i = 0; i<value.length;i++){
                mapArr(value[i]);
            }
                counter--;
        }
        if(!('contents' in x)){
        }

    });
}
mapArr(objekt[0]);
console.log(arrr);
let currentNum = 0;
let nextNum = 0;
let counterList = 0;
let prevList = 0;
for(let i = 0; i<arrr.length;i++){
    if(typeof(arrr[i]) == 'number'){
        currentNum = nextNum;
        nextNum = arrr[i];
        if(currentNum<arrr[i]){
            prevList = arrr[i]-1;
            console.log(document.getElementById('list'+prevList));
            let node = document.createElement('ul');
            node.setAttribute('id','list'+arrr[i]);
            var queryS = document.querySelectorAll('#list'+prevList);
            console.log(queryS);
            queryS[queryS.length-1].appendChild(node);
        }else if(currentNum>arrr[i]){
        }
        let node1 = document.createElement('li');
        node1.setAttribute('id','item'+arrr[i]);
        let textnode1 = document.createTextNode(arrr[i-1]);
        node1.appendChild(textnode1);
        var querys2 = document.querySelectorAll('#list'+arrr[i]);
        console.log(querys2);
        querys2[querys2.length-1].appendChild(node1)
    }
}
}