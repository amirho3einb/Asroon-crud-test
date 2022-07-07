import { Link } from "react-router-dom";
import UsersList from "../components/usersList";

const HomePage = () => {
  return (
    <div>
      <div className="titleBar">
        <div className="titleHead">داده ها</div>
        <div>
          <button className="btn">
            <Link to="/addUser">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="addIcon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span>ساخت اکانت جدید</span>
            </Link>
          </button>
        </div>
      </div>
      <div className="usersList">
        <UsersList />
      </div>
    </div>
  );
};

export default HomePage;
