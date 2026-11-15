
function Card({ title = "Card Title", children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children || "Card content placeholder"}</div>
    </div>
  );
}

export default Card;
