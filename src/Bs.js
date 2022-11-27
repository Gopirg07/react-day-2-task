
 function Bs({datas}) {
  return (
    
    <div className='boxx col-lg-4'>
      <div className="card">
        <div className="card-body">
          <h5 className='card-title type'>{datas.plan}</h5>
          <h3 className='card-text price'>
          {datas.price} <span className='month'>/month</span>
          </h3>
          <hr /> 


          <ul class="fa-ul">
            {datas.features.map(feature => {
             return (
              <li className={feature.condition ? "":"text-mute"}> 
                <i className={feature.condition ? "fa fa-check" : "fa fa-times"}></i>
                {feature.title} 
              </li>
              )
            })} 
          </ul>
          <div className='btn-div'>
            <button className='btn btn-primary text-uppercase'>BuTtOn</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bs