const Navbar = ({ setCategory }) => {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">Newsmag</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>
         <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
         <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("health")}>Health</div>
        </li>
         <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
         <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("science")}>Science</div>
        </li>
         <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
