import { Link, useNavigate} from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

function Navbar({userInfo}) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear()
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };
 
  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 > <Link to={'/'} className="text-2xl font-medium text-black py-2 ">MY-NOTES</Link>  </h2>
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />

       {userInfo!= null? <ProfileInfo userInfo={userInfo} onLogout={onLogout} />:null}
      </div>
    </>
  );
}

export default Navbar;
