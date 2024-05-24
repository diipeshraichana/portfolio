//-----------------------------------------------------------// External Imports // ------------------------------

import axios from "axios";

const url = window.location.origin,
  subdomain = url.split(".")[0];

const restOfDomain = url.substring(url.indexOf(".") + 1); // Get the rest of the domain

const dynamicUrl = subdomain.includes('localhost') && process.env.REACT_APP_IS_LOCAL ? 'http://localhost:3000' : `${subdomain}.app.${restOfDomain}`;

export default axios.create({
  baseURL: dynamicUrl/* ,
  withCredentials: true */
});
