import { useSelector } from "react-redux";
import { Container } from "./style";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";
function CommentForm() {

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [ inputValue, setInputValue ] = useState("")

  return(
    <Container>
      <ul>
        {user.comments.map((comment) => (
          <li>{comment}</li>
        ))}
      </ul>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          type={"text"}
          placeholder={"Insira um comentário"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => dispatch(addCommentThunk(inputValue))}>New Comment</button>
      </form>
    </Container>
  );
}

export default CommentForm;