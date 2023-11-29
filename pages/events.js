import { Footer, Navbar } from "@/components";
import React from "react";
import Events from "@/components/Events";

const Event = () => {
  return (
    <div className="h-full main_bg text-white overflow-hidden" id="top">
      <Navbar />
      <Events />
      <Footer />
    </div>
  );
};

export default Event;
