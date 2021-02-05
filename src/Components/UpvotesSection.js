import React from 'react'

const UpvotesSection =({articleName,upvotes,setArticleInfo}) => {
    const upvoteArticle = async()=> {
         const result= await fetch(`/api/articles/${articleName}/upvote`, {
                method: 'post',

            });
            const body = await result.json();
            //console.log(body);
            setArticleInfo(body);
    };

    return(
<div id="upvote">
    <button onClick={()=> upvoteArticle()}> Add upvote</button>
<p>This post has been upvoted {upvotes} times</p>
    
</div>
    );
    }

export default UpvotesSection;