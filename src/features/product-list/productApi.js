// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async (resolve) =>{

  const response = await fetch(`http://localhost:8080/products`);

  const data = response.json();
  resolve({data});
  }
  )
}


export function fetchProductFilter(filter) {
  console.log(filter)
//filter = {catagory:"smartphone"}
//on server we will do for multiple filter ...at one time 
let quaryString = '';
for(let key in filter){

  quaryString+=`${key}=${filter[key]}&`

}



  return new Promise(async (resolve) =>{

  const response = await fetch(`http://localhost:8080/products?`+quaryString);

  const data = response.json();
  resolve({data});
  }
  )
}
