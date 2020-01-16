import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid, Image, GridRow, GridColumn } from "semantic-ui-react";
import PostCard from "../components/PostCard";
function Home() {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  console.log(data);

  return (
    // <Grid columns={3}>
    //   <Grid.Row>
    //     <h1>Recent Posts</h1>
    //   </Grid.Row>
    //   <GridRow>
    //     {loading ? (
    //       <h1>Loading posts ...</h1>
    //     ) : (
    //       posts &&
    //       posts.map(post => (
    //         <GridColumn key={post.id}>
    //           <PostCard post={post} />
    //         </GridColumn>
    //       ))
    //     )}
    //   </GridRow>
    // </Grid>
    <div>
      <h1>Home</h1>
    </div>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
export default Home;
