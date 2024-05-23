const url = "https://cat-fact.herokuapp.com";

const getFacts  =  async () =>{
    let promise = await fetch(url)
    console.log(promise);
    let data =  await promise.json();
    console.log(data);
}

getFacts();