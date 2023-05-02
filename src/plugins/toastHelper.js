import { toast } from 'react-toastify';

const option = {
  position: 'bottom-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  progress: undefined,
};
const Error = (msg, opt=null) => {
  toast.error(msg, {...option, ...opt});
};
const Info = (msg, opt=null) => {
  toast.info(msg, {...option, ...opt});
};
const Success = (msg, opt=null) => {
  toast.success(msg, {...option, ...opt});
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Info,
  Error,
  Success,
};
