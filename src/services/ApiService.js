import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/"; // Update with your Flask server URL

class ApiService {
  static async generateWeather(year, month) {
    const response = await axios.post(`${BASE_URL}/`, {
      year: year,
      month: month,
    });
    return response.data;
  }

  static async predictYield(cropType, weatherData) {
    const response = await axios.post(`${BASE_URL}/predict`, {
      model_type: cropType,
      ...weatherData,
    });
    return response.data;
  }
}

export default ApiService;
