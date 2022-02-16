import React, { useEffect, useContext, useState } from "react";
import ArticleContext from "../../contexts/articleContext";
import PostCard from './PostCard';
import {Grid} from "@mui/material";

const Posts = ({ selected }) => {
  const { articles, loading, setFetchedData, filterByTopic } =
  useContext(ArticleContext);
  const [likedCount, setLikedCount] = useState();


  useEffect(() => {
    if (selected === "all") {
      setFetchedData();
    } else {
      filterByTopic(selected);
      console.log(selected, articles);
    }

  }, [selected, loading]);


  if (loading) return <h3>loading...</h3>;

  if (!loading)
    return (
      <Grid container justifyContent="center" alignItems="center">
        <PostCard articles={articles}/>
        
  
      </Grid>
    );
};

export default Posts;
