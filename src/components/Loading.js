import loading from "../images/Loading.gif";

export default function Loading() {
  return (
    <center>
      <img
        src={loading}
        alt="Loading.. "
        style={{ margin: "10px", borderRadius: "20px" }}
      />
    </center>
  );
}
