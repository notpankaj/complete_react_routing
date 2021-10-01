import { useEffect } from "react"
import { useLocation, useParams } from "react-router"


//get data from url
const Post = ({match}) => {
  
  useEffect(() => {
   window.scroll(0,0);
  }, [])
  
  
  // ---> FIRST WAY
  // console.log(match,"match"); // { params : {id: killa}, path: "/post/:id", url: "/post/killa" }
  
  
  // ---> SECOND WAY
  const data = useParams();  
  // console.log(useParams(),"useParams"); //{id : "abc"}
  
  // ---> THIRD WAY
  const data2 = useLocation();  //USED FOR  CATCH [GET] METHOD DATA eg. "?name=%22ABC%22&age=%2218%22"
  const query = new URLSearchParams(useLocation().search);  
  const ageFromURL  = query.get('age');


  

  // console.log(match,"MATCH")
  // console.log(data,"USEPARAMS")
  // console.log(data2,"USELOCATION")



    return (
        <>
          <h4>POST ID = "{match.params.id}" from  {"{match}"}!!</h4>  
          <h4>POST ID = "{data.id}" from {"useParam()"}!!</h4>  
          <h4>Age from url = "{ageFromURL}" from {"useLocation()"}!!</h4>  
        </>
    )
}

export default Post
