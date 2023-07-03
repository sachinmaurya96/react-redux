import axios from "axios";
const inc = "increment";
const dec = "decrement";
const incbym = "incrbyamount";
const incbonus = "incbonus";
const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

//action creaters
function incrementbyamount(value) {
  return {
    type: incbym,
    payload: value,
  };
}

function increment(value) {
  return {
    type: inc,
  };
}

function decrement(value) {
  return {
    type: dec,
  };
}
function incrementBonus(value) {
  return {
    type: incbonus,
  };
}


//api calling
function getProducts(id){
  return async  (dispatch,getState)=>{
    try{
      dispatch(fetchDataRequest())
      const {data} = await axios.get(`http://localhost:3000/product/${id}`);
    dispatch(fetchDataSuccess(data.amount))
    console.log(data)
    }catch(error){
      dispatch(fetchDataFailure(error.message))
      console.log(error)
    }
  }
}

// action creators
const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataFailure = (value) => ({
  type: FETCH_DATA_FAILURE,
  error: value,
});




export {
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  inc,
  dec,
  incbym,
  incbonus,
  increment,
  decrement,
  incrementbyamount,
  incrementBonus,
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
  getProducts
};
