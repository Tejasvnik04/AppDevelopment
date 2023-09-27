import http from "./https.js";

class TutorialDataService {
  

  get(id) {
    return http.get(`\getloginpg`);
  }

  create(data) {
    return http.post("\postlogindetails", data);
  }

//   update(id, data) {
//     return http.put(`\updatelogindetails`,id,data);
//   }

  delete(id) {
    return http.delete(`\deletelogin`);
  }

}

export default new TutorialDataService();
