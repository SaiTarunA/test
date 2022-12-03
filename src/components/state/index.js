import { createGlobalState } from "react-hooks-global-state";
import { projects } from "../../config";

const { setGlobalState, useGlobalState } = createGlobalState({
  hasScrollBar: false,
  nextSection: 2,
  isReadingMore: false,
  readMoreButton: true,
  selectedTab: "All",
  startIndex: 0,
  isNavOpen: false,
  windowWidth: window.innerWidth
});

export { useGlobalState, setGlobalState };
