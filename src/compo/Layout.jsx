import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h2>홈 페이지</h2>
      <nav>
        <ul>
          <li>
            <Link to="/react-site/">Home</Link>
          </li>
          <li>
            <Link to="/react-site/Day04_0812ex_usestate">day04_0812ex_usestate</Link>
          </li>
          <li>
            <Link to="/react-site/work1">Work1</Link>
          </li>
          
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;