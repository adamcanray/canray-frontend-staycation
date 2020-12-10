import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function errorResponseHandler(error){
  if(error){
    let message;
    if(error.response){
      
      if(error.response.status ===  500) message = "Something went wrong";
      else message = error.response.message;
      
      console.log(message);

      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      return Promise.reject(error);
    }
  }
}
export default errorResponseHandler