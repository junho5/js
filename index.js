function star(height){
  for (let i =1 ; i<=height;i++){
    let message='';
    for (let star =1;star<=i;star++){
      message+='*';
    }console.log(message);
  }
}

star(3);
star(5);