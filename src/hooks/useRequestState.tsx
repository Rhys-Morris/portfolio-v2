import { useEffect, useState } from "react";
import { RequestState } from "../types/requestState";

export default function useRequestState<T>(
  asyncFn: () => Promise<T>
): [RequestState, T | null] {
  const [status, setStatus] = useState<RequestState>(RequestState.IDLE);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    setStatus(RequestState.PENDING);
    setData(null);

    asyncFn()
      .then((data: T) => {
        setData(data);
        setStatus(RequestState.SUCCESS);
      })
      .catch((_: unknown) => {
        setStatus(RequestState.ERROR);
      });
  }, [asyncFn]);

  return [status, data];
}
