function Card({data}) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {data.first}
          </h5>
          <h6 className="card-price text-center">
            {" "}
            {data.second}
            <span className="period">{data.third}</span>
          </h6>
          <hr></hr>
         <ul className="fa-ul">{
           data.features.map((list)=>{

            return <li className={list.able?"":"text-muted"}>
              {
                // list.able?<FontAwesomeIcon icon={["fa-ul-check"]} />:<FontAwesomeIcon icon={["fa-ul-times"]} />
              }
            {/* <span className="fa-li">
              <i className="fas fa-check"></i>
             
            </span> */}
         {list.title}
          
          </li>  
           })
          

         }
            {/* <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.five}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.six}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.seven}
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              {props.eight}
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              {props.nine}
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              {props.nine}
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              {props.ten}
            </li> */}
          </ul>
          <div className="d-grid">
            <a  className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
