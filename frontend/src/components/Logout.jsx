export default props => {
  const [isLogout, setLogout] = useState(true);
 };
 const handleLogOut = e => {
   setLogout(localStorage.removeItem("token"));
    
  };

<div className="row">
<button 
  type="submit" 
  onClick={logOut()} 
  className="btn btn-danger"
  >
  Log out
</button>
</div>


<button>
          <span className="text-muted" onClick={() => setSignin(!isSignin)}>
            {!isSignin ? "Already account? Sign in" : "Register"}
          </span>
</button>
