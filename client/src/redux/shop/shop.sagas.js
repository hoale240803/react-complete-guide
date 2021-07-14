// import { takeLatest, call, put, all } from "redux-saga/effects";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";

// import {
//   fetchCollectionsSuccess,
//   fetchCollectionsFailure,
// } from "./shop.actions";

// import ShopActionTypes from "./shop.types";

// export function* fetchCollectionsAsync() {
//   try {
//     const collectionRef = firestore.collection("collections");
//     const snapshot = yield collectionRef.get();
//     //Nếu nó return về một promise, tạm dừng saga cho đến khi promise được giải quyết.
//     const collectionsMap = yield call(
//       convertCollectionsSnapshotToMap,
//       snapshot
//     );
//     console.log(collectionsMap);
//     // put một action mới vào store
//     yield put(fetchCollectionsSuccess(collectionsMap));
//   } catch (error) {
//     yield put(fetchCollectionsFailure(error.message));
//   }
// }

// export function* fetchCollectionsStart() {
//   // nhận actions mới nhất(cuối cùng ) khi thực thi nhiều actions
//   yield takeLatest(
//     ShopActionTypes.FETCH_COLLECTIONS_START,
//     fetchCollectionsAsync
//   );
// }

// export function* shopSagas() {
//   yield all([call(fetchCollectionsStart)]);
// }
