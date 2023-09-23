import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      
      <Typography.Link href="tel:+123456789">+123456789</Typography.Link>
      © Copyright All India council of Technical Education 2020. Designed and Developed by AICTE
    
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Help
      </Typography.Link>
    </div>
  );
}
export default AppFooter;