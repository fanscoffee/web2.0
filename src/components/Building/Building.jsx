import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="container-fluid mb-5 text-center">
      <h1 className="mx-auto ">Under Construction</h1>
      <p className="notFound__sentence">
      Our site is still under construction, knowing this you can contact us through our contact page and we will get back to you as soon as possible.
      </p>

      <div className="container">
        <Link to="/">
          <img
            className="notFound__img"
            src="https://i.imgur.com/qIufhof.png"
            alt="404"
          />
        </Link>
      </div>
      <Link className="button" to="/contact">
        Contact Page
      </Link>
    </div>
  );
}