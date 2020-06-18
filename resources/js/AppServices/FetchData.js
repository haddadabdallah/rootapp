import axios from "axios";

const FetchData = (Url) => {
  return new Promise((resolve, reject) => {
    axios.get(Url).then((res) => {
      resolve(res);
    });
  });
};

const FetchDataWhere = (Url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(Url + "/" + params).then((res) => {
      resolve(res);
    });
  });
};



const FetchDataWherePost = (Url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(Url,params).then((res) => {
      resolve(res);
    });
  });
};


export { FetchData, FetchDataWhere , FetchDataWherePost };
