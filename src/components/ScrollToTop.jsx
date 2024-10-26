import { useEffect } from "react";
import { getUrlPathName } from "../utils/helpers";

const ScrollToTop = ({ containerRef }) => {
  const pathname = getUrlPathName();
  useEffect(() => {
    containerRef.current.scrollTo(0, 0);
  }, [pathname, containerRef]);
  return null;
};

export default ScrollToTop;
