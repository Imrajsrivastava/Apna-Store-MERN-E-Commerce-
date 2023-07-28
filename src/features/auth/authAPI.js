// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) =>{

  const response = await fetch(`http://localhost:8080/users`,{
    method:"post",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(userData)
  });

  const data = response.json();
  resolve({data});
  }
  )
}
