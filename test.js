function star(height){
  let result='';
  for (let i = 1;i<=height;i++){
    result+='*';
    console.log(result);
  }
}

star(3);

function star (height){
  for (let i =1; i<=height;i++){
    let result ='';
    for (let j=1;j<=i;j++){
      result +='*';
    }console.log(result);
  }
}

star(3);
