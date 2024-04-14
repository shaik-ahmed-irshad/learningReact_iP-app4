
const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <div className="footer">
      © Copyright <span style={{ color: "#FF671F" }}>Code</span>
      <span style={{ color: "#FFF" }}>For</span>
      <span style={{ color: "#046A38" }}>India</span>
      .com | All Rights Reserved{" "}
      <span style={{ color: "rgb(252, 110, 174)" }}>{date}</span>
    </div>
  );
};
// made on 30th March 2024
export default Footer;
