import { memo } from "react";
const TableCell = ({ value, t = "" }) => {
  if (t === "tw") {
    if (value > 2) {
      return (
        <div className="table-cell bg-red-400 text-yellow-300 p-1">{value}</div>
      );
    }
    if (value > 0) {
      return <div className="table-cell bg-red-400  p-1">{value}</div>;
    } else {
      return <div className="table-cell p-1">{value}</div>;
    }
  }
  if (t === "tr") {
    if (value > 0) {
      return <div className="table-cell bg-green-400 p-1">{value}</div>;
    } else {
      return <div className="table-cell p-1">{value}</div>;
    }
  }
  if (value > 1) {
    return <div className="table-cell text-red-500 p-1">{value}x</div>;
  }
  if (value < 1) {
    if (value === 0) {
      return <div className="table-cell p-1">Immune</div>;
    }
    return (
      <div className="table-cell text-green-500 p-1">
        {value == 0.5 ? "1/2" : "1/4"}
      </div>
    );
  }

  return <div className="table-cell p-1">{value}</div>;
};
export default memo(TableCell);
