let url = "https://cat-fact.herokuapp.com";

const getFacts  =  async () =>{
    let promise = await fetch(url)
    console.log(promise);
    console.log(promise.type);
}

getFacts()