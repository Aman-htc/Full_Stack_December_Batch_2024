import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProducts = async () => {
  const response = await api.get("/products");
  return response;
};
// fetch categories
export const fetchCategories = async () => {
  const response = await api.get("/products/categories");
  return response;
};


// fetch products category
export const fetchProductCategories = async (param) => {
  const response = await api.get(`/products/category/${param.slug}`);
  return response.data.products; 
};




// mockapi
export const mockapi = axios.create({
  // baseURL: "https://696a5d5d3a2b2151f847e544.mockapi.io",
  baseURL: 'https://696a5d5d3a2b2151f847e544.mockapi.io'
});



export const registerUser = async (data) => {
  const response = await mockapi.post("/users", data);
  return response; 
};
export  const fetchUser = async(data)=>{
  const resopnse = await mockapi.get('/users?email=' + data.email)
  return resopnse;

}
export  const updateUser = async()=>{
  const resopnse = await mockapi.get('/users')

}
export  const deleteUser = async()=>{
  const resopnse = await mockapi.get('/users')

}

