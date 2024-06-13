import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useLocation } from "react-router-dom";

const Price = () => {
    const location = useLocation();
    const [prevLocation,setPrevLocation] = useState("");

    useEffect(() => {
        if(location.state) {
            setPrevLocation(location.state.data)
        } else {
            setPrevLocation("Deflaut value or handle error");
        }
    },[location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="สอบถามราคา" />
      <form>
        
      </form>
    </div>
  );
};

export default Price;
