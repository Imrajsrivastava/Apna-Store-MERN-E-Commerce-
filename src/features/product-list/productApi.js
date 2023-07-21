// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async (resolve) =>{

  const response = await fetch(`http://localhost:8080/products`);

  const data = response.json();
  resolve({data});
  }
  )
}


export function fetchProductFilter(filter,sort,pagination) {
  console.log(filter)
//filter = {catagory:["smartphone","laptop"]}
//on server we will do for multiple filter ...at one time 
// pagination = {page:1,limit:10}

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


console.log(pagination)
for(let key in pagination){
  quaryString+=`${key}=${pagination[key]}&`
}



  return new Promise(async (resolve) =>{

  const response = await fetch(`http://localhost:8080/products?`+quaryString);

  const data =await response.json();
  const totalitems = await response.headers.get('X-Total-Count');
  resolve({data:{products:data,totalitems:+totalitems}});
  }
  )
}



export function fetchCategories() {
  return new Promise(async (resolve) =>{

  const response = await fetch(`http://localhost:8080/categories`);

  const data = response.json();
  resolve({data});
  }
  )
}


export function fetchBrands() {
  return new Promise(async (resolve) =>{

  const response = await fetch(`http://localhost:8080/brands`);

  const data = response.json();
  resolve({data});
  }
  )
}
