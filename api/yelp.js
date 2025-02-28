import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer cXdU5qh9eaAUpMr-dFwTehvqPtkv_gBjQViZ7Hm9ujx_TCtiRG2ZbFUSsmWTJWw2LG9MbfaELSXTF8dywoGLJaQnYNlZ2M4pDwa-aiJ_wJvLy0GrQ5WjqOS7iO7AZ3Yx",
  },
});
