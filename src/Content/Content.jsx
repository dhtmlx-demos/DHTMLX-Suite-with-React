import LeftContent from "./LeftPanel/LeftContent";
import RightContent from "./RightPanel/RightContent";
import "./Content.css";

const Content = () => {
    return (
        <div className="container wrapper">
            <LeftContent />
            <RightContent />
        </div>
    );
};

export default Content;
// import React from "react";

// const LeftContent = () => {
//     return <div className="container">Left Content</div>;
// };

// export default LeftContent;

// // FILEPATH: /D:/IT/work/suite-react/src/Content/RightPanel/RightContent.jsx
// import React from "react";

// const RightContent = () => {
//     return <div className="container">Right Content</div>;
// };

// export default RightContent;