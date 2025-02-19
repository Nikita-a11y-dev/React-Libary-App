import { useEffect } from "react";

import { clearError, selectErrorMessage } from "../../redux/slices/errorSlice";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";

export default function Error() {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage);
      dispatch(clearError());
    }
  }, [errorMessage, dispatch]);

  return <ToastContainer position="top-right" autoClose={2000} />;
}
