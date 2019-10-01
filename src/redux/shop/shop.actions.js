import { ShopActionTypes } from "./shop.types";
import {
  convertCollectionsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCESS,
    payload: collectionsMap
  };
};

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef.onSnapshot(
      async snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      },
      error => dispatch(fetchCollectionsFailure(error.message))
    );
  };
};
