// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async (resolve) =>{

  const response = await fetch(`http://localhost:8080/products`);

  const data = response.json();
  resolve({data});
  }
  )
}


export function fetchProductFilter(filter,sort) {
  console.log(filter)
//filter = {catagory:["smartphone","laptop"]}
//on server we will do for multiple filter ...at one time 
let quaryString = '';
for(let key in filter){

const categoryValues = filter[key];
    if(categoryValues.length>0){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      quaryString += `${key}=${lastCategoryValue}&`
    }

}

// sort 

for(let key in sort){
  quaryString+=`${key}=${sort[key]}&`
}



  return new Promise(async (resolve) =>{

  const response = await fetch(`http://localhost:8080/products?`+quaryString);

  const data = response.json();
  resolve({data});
  }
  )
}
