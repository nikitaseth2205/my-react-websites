import image from '../assets/images.png'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card-container bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{ maxWidth: "345px", margin: "10px" }}>
      <img src={src?src:image} style={{height:"200px", width:"332px"}}className="card-img-top" alt="News thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
  {description ? description.slice(0, 90) : "No current description available"}
</p>

        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
