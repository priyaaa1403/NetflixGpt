export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_IMG ="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_medium.jpg";
export const GEMINIAPI_KEY=process.env.REACT_APP_GEMINIAPI_KEY;

export const API_OPTIONS = {
	method: 'GET',
	headers: {
	  accept: 'application/json',
	  Authorization: "Bearer "+ process.env.REACT_APP_TMDB_KEY
	}
  };    