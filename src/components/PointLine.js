import "../styels/PointLine.css";

function PointLine({y}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="274" height="2" transform={`translate(30, ${y})`} viewBox="0 0 274 2" fill="none">
      <path d="M0.5 1H180" stroke="#767676" stroke-dasharray="3 4"/>
    </svg>
  );
}

export default PointLine;

