import React, { useEffect, useState } from "react";

// đặt tên thì use+ tên mình thích
// quy tắc dùng hook
// hook là để shared login, còn về state, prop thì mỗi component dùng đều độc lập
function useCounter(forWard = true) {
  const [counter, setCounter] = useState(0);
  let interval = null;

  useEffect(() => {
    if (forWard) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    } else {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [forWard]);
  return counter;
}

export default useCounter;
