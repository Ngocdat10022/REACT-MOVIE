import { useEffect, useState } from "react";

export default function useDebounced(timer, query) {
  const [valueDebounced, setValueDebounced] = useState("");
  useEffect(() => {
    const timerId = setTimeout(() => {
      setValueDebounced(query);
    }, [timer]);
    return () => {
      clearTimeout(timerId);
    };
  }, [timer, query]);
  return valueDebounced;
}
