import axios from "axios";



export async function PostCatagoris() {
  try {
    let res = await axios.get('https://openapi.programming-hero.com/api/phero-tube/categories');

    if (res.status === 200 && res.data.status === true) {
      return res.data; 
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}



export async function GetVidieos() {
  try {
    let res = await axios.get('https://openapi.programming-hero.com/api/phero-tube/videos');

    if (res.status === 200 && res.data.status === true) {
      return res.data; 
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}


export async function GetcategoryId(categoryId) {
  try {
    let res = await axios.get(`https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`);

    if (res.status === 200 && res.data.status === true) {
      return res.data.category; 
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

