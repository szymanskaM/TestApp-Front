import { useParams } from 'react-router-dom';
function CreateTeams() {
    const {userId}=useParams();

    const containerStyle = {
      width: "100%",
      height: "100%",
      position: "relative",
      background: "#C4C4C4"
    };
  
    const innerContainerStyle = {
      width: "100%",
      height: "100%",
      position: "relative",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      display: "inline-flex"
    };
  
    const headerStyle = {
      width: "1440px",
      height: "82px",
      background: "#212353"
    };
    const subHeaderStyle = {
      width: "1440px",
      height: "82px",
      background: "#212353"
    };
  
    const titleStyle = {
      width: "191px",
      height: "71px",
      textAlign: "center",
      color: "white",
      fontSize: "50px",
      fontFamily: "Inter",
      fontWeight: "767",
      textTransform: "uppercase",
      wordWrap: "break-word"
    };
  
    const imageStyle = {
      width: "71px",
      height: "71px"
    };
    const formContainerStyle = {
      width: "576px",
      height: "648px",
      left: "432px",
      top: "232px",
      position: "absolute",
      background: "#9FAECE",
      borderRadius: "20px"
    };
  
    const inputContainerStyle = {
      width: "468px",
      height: "54px",
      left: "482px",
      top: "579px",
      position: "absolute",
      background: "#F6F5F5",
      borderRadius: "30px"
    };
  
    const buttonContainerStyle = {
      width: "386px",
      height: "80px",
      left: "523px",
      top: "656px",
      position: "absolute",
      background: "#D9D9D9",
      borderRadius: "30px"
    };

    const buttonTextStyle = {
      width: "210px",
      height: "61px",
      left: "615px",
      top: "667px",
      position: "absolute",
      textAlign: "center",
      color: "black",
      fontSize: "45px",
      fontFamily: "Sigmar One",
      fontWeight: "400",
      wordWrap: "break-word"
    };
  
    const labelStyle = {
      width: "412px",
      height: "46px",
      left: "514px",
      top: "510px",
      position: "absolute",
      color: "black",
      fontSize: "32px",
      fontFamily: "Inder",
      fontWeight: "400",
      wordWrap: "break-word"
    };
    const imageContainerStyle = {
      width: "123px",
      height: "104px",
      left: "659px",
      top: "318px",
      position: "absolute",
      background: "white"
    };
  
    const mainContainerStyle = {
      width: "1440px",
      left: "0px",
      top: "0px",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      display: "inline-flex"
    };
  
    const innerMainContainerStyle = {
      width: "1440px",
      height: "1024px",
      position: "relative",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      display: "flex"
    };
    
    return (
      <div style={containerStyle}>
        <div style={innerContainerStyle}>
          <div style={headerStyle}></div>
          <div style={subHeaderStyle}></div>
          <div style={titleStyle}>TEST IT</div>
          <img style={imageStyle} src="https://via.placeholder.com/71x71" />
        </div>
        <div style={inputContainerStyle}>
          <div style={buttonContainerStyle}>
            <div style={buttonTextStyle}>DODAJ</div>
          </div>
          <div style={labelStyle}>Jak chcesz nazwać zespół?</div>
          <div style={imageContainerStyle}></div>
        </div>
        <div style={mainContainerStyle}>
          <div style={innerMainContainerStyle}></div>
        </div>
      </div>
    );
  }
  
  export default CreateTeams;