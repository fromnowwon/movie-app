import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<section className="navBar">
			<div className="navBar__inner flex-grid flex-grid--between flex-grid--align-center">
				<div className="logo">
					<Link to="/">NEMO MOVIE APP</Link>
				</div>
			</div>
		</section>
	);
};

export default NavBar;
