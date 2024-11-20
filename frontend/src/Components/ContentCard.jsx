// Create a new component called ContentCard
const ContentCard = ({ title, content, className = "" }) => {
    return (
      <div className={`content-card frosted-glass ${className}`}>
        <h3 className="card-title">{title}</h3>
        <div className="card-content">{content}</div>
      </div>
    );
  };
  
export default ContentCard;