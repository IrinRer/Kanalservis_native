import React, { useEffect } from "react";
import Users from "../../component/Users";
import { useDispatch } from "react-redux";
import { fetchUsersAction } from "../../store/users/thunk";
import { fetchPostsAction } from "../../store/posts/thunk";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction());
    dispatch(fetchPostsAction());
  });
  return <Users />;
};

export default Home;
