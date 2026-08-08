import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <h1>Senior Success Planner</h1>

      <nav>
  <Link to="/todos">My Tasks</Link>
  <Link to="/contact">Contact</Link>
</nav>
    </header>
  );
}

export default Header;
