//import axios from "axios";

const Card = ({cardData}) => {
    //const [redirect, setRedirect] = useState(false);
     const handleEdit = async () => {
         console.log(cardData.id);
         //http://localhost:5173/create
         //await axios.post('http://localhost:3000/auth/OneBlog', {id: cardData.id}, {withCredentials: true});

     };
  return (
      <>
          <div className="col">
              <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                       xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                       preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"/>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                  </svg>
                  <div className="card-body">
                      <p className="card-text">{cardData.content}</p>
                      <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">View
                              </button>
                              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleEdit}>Edit
                              </button>
                          </div>
                          <small className="text-body-secondary">9 mins</small>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Card;