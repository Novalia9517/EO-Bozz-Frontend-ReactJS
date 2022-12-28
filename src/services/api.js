import axios from 'axios'

const apiRequest = async (url, method, body, content_type) => {
    var config = {
      method,
      url : `https://irisminty.my.id/${url}`,
      // url : `https://virtserver.swaggerhub.com/YUSNARSETIYADI150403_1/EO-Bozz/1.0.0/${url}`,
      headers: {
        "Content-Type": content_type ? content_type : "application/json",
      },
      data: body,
    };
  
    const response = await axios(config);
    return response.data;
  };

  const apiWithAuth = async (url, method, body, content_type, token) => {
    var config = {
      method,
      url : `https://irisminty.my.id/${url}`,
      // url : `https://virtserver.swaggerhub.com/YUSNARSETIYADI150403_1/EO-Bozz/1.0.0/${url}`,
      headers: {
        "Content-Type": content_type ? content_type : "application/json",
        Authorization : `Bearer ${token}`
      },
      data: body,
    };
  
    const response = await axios(config);
    return response.data;
  }
  
  export { apiRequest, apiWithAuth };