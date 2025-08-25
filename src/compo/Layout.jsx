import { Link, Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div>
			<h2>목차</h2>
			<nav>
				<ul>
					<li>
						{/* <Link> is used to set the URL and keep track of browsing history. */}
						<Link to="Day040812">Day040812</Link>
					</li>
					
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="login">Login</Link>
					</li>
				</ul>
			</nav>
			<hr />
			{/* The <Outlet> renders the current route selected. */}
			<Outlet></Outlet>
		</div>
	);
}
export default Layout;