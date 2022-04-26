import { React } from "react";
import AdminPic from '../../images/admin3.png';
import '../Header/Header.css'
export const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="i-left">
        <img src={AdminPic} className='i-img' 
        alt="s"
        />
      </div>

      <div className="i-right">
        <div className="n-list2">
          <ul style={{listStyle:'none'}}>
            <li>main</li>
            <li>request</li>
            <li>about</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
