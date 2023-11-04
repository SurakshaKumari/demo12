import Link from 'next/link';

const Header = () => {
  return (
    <header style={{textDecoration: 'none'}}>
      <div className='mobile-logo' >
      <div className="logo">
        <Link href="/">
          Logo
        </Link>
      </div>
      <div className="menu-icon ">
          <i className="fas fa-bars icon-side"></i>
        </div>
      </div>
      
      <div className="logo desktop-logo">
        <Link href="/">
          Logo
        </Link>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link href="/home">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/founder">
              Founder
            </Link>
          </li>
          <li>
            <Link href="/testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/faqs">
              Faqs
            </Link>
          </li>
          <li>
            <Link href="/app">
              Download App
            </Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
      <div className="user-actions">
      <button style={{border: '1px solid black',
                    marginRight: '5px',
                    borderRadius: '4px',
                    backgroundColor: 'white',
                    padding: '10px'}}>
        <Link href="/login">
          Login
        </Link>
        </button>
        <button style={{border: '1px solid black',
                marginRight: '5px',
                borderRadius: '4px',
                backgroundColor: 'white',
                padding: '10px'}}>
        <Link href="/register">
          Register
        </Link>
        </button>
      </div>
      
    </header>
  );
};

export default Header;
