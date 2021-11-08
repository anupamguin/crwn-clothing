import React from "react";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="SpinnerOverlay">
        <div className="SpinnerContainer"></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
};
export default WithSpinner;
