import firebase from "../firebase";

const db = firebase.collection("/clips");

class ClipsDataService {
  getAll() {
    return db;
  }

  create(clip) {
    return db.add(clip);
  }
}

const clipsDataServiceInstance = new ClipsDataService();

export default clipsDataServiceInstance;