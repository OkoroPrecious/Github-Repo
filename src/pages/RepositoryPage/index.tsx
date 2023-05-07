import React, {useEffect, useState} from 'react';
import Header from "../../components/header";
import TopNav from "../../components/TopNav";
import Content from "../../components/Content";
import {useNavigate, useParams} from "react-router-dom";
import isEmpty from "is-empty";
import axios from "axios";
import {useAppDispatch} from "../../redux/hooks";
import {userActions} from "../../redux/slices/userSlice";
import {repoActions} from "../../redux/slices/repoSlice";

type Props = {};
const RepositoryPage = (props: Props) => {
  const {username} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isEmpty(username)) {
      setLoading(true);
      axios.all([
        axios.get(`https://api.github.com/users/${username}`),
        axios.get(`https://api.github.com/users/${username}/repos`),
      ])
        .then(axios.spread((user, repos) => {
          setLoading(false);
          dispatch(userActions.setUser(user.data))
          dispatch(repoActions.setRepos(repos.data))
        }))
        .catch((err) => {
          console.log(err)
          alert(err.response?.data?.message ? err.response?.data?.message : "Unable to connect");
          navigate("/")
        });
    } else {
      navigate("/");
    }
  }, [dispatch, navigate, username]);

  return (
    <div>
      {
        loading ? (
          <h4 style={{textAlign: "center", marginTop: 50}}>Loading...</h4>
        ) : (
          <>
            <Header/>
            <TopNav/>
            <Content/>
          </>
        )
      }
    </div>
  );
};

export default RepositoryPage;