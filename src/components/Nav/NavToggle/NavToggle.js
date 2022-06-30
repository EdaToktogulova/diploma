import classes from "./NavToggle.module.css";
import { AiOutlineMenu } from "react-icons/ai";

function NavToggle({ callback }) {
   return (
      <button onClick={callback} className={classes.NavToggle}>
         <div><AiOutlineMenu size={25}  /></div>
      </button>
   );
}

export default NavToggle;