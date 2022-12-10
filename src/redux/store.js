import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from "./counterSlice";
import langReducer from "./langSlice";
import TagReducer from "./TagSlice";
import { postReducer } from "./asyncFetch";

export default configureStore({
  reducer: {
    lang: langReducer,
    //counter: counterReducer,
    tag: TagReducer,
    posts: postReducer
  }
});
