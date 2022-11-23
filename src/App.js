 
import './App.css';

function App() {
  return (
    <div className="main">
       
      <div class="container"> 
        <div class="row">
        <Bs/>
        <Bs/>
        <Bs/>
        </div> 
      </div> 

    </div>
  );
}
function Bs(){
  return(
        <div className='boxx col-lg-4'> 
          <div className="card">
            <div className="card-body">  
              <h5 className='card-title type' >FREE</h5> 
              <h3 className='card-text price'>
                $0 <span className='month'>/month</span>
              </h3> 
              <hr/>
              <ul>
                <li>
                  <span class="fa-li"><i class="fa fa-check"></i></span>
                  Single User
    
                </li>
                
                <li>
                  <span class="fa-li"><i class="fa fa-check"></i></span>
                  5GB Storage
    
                </li>
                
                <li>
                  <span class="fa-li"><i class="fa fa-check"></i></span>
                  Unlimited Public Projects
    
                </li>
                
                <li>
                  <span class="fa-li"><i class="fa fa-check"></i></span>
                  Community Access
    
                </li>
                
                <li>
                  <span class="fa-li"><i class="fa   fa-times"></i></span>
                  Unlimited Private Projects
    
                </li>
                
                <li>
                  <span class="fa-li"><i class="fa fa-times"></i></span>
                  Dedicated Phone Support
    
                </li>
                
                <li>
                  <span class="fa-li"><i class="fa fa-times"></i></span>
                  Free Subdomain
    
                </li>
                
                <li>
                  <span class="fa-li"><i class="fa fa-times"></i></span>
                  Monthly Status Reports
                </li>
              </ul>
              <div className='btn-div'>
              <a href="" className='btn btn-primary text-uppercase'>BuTtOn</a>
              </div>
            </div>
          </div>
        </div>
  );
}

export default App;
