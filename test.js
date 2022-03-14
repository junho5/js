function login(id,password,callback){
    setTimeout(() => {
       console.log('사용자정보얻음');
       callback({userId : id}) 
    }, 3000);
}
const user = login('oh',123,user =>{
    console.log(`${user.userId}`)
})