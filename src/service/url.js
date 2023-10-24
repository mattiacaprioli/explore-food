const SERVER_URL = "https://api.spoonacular.com";

const recipesUrl = "/recipes/random";
const recipesComplexSearchUrl = "/recipes/complexSearch";

const recipesInformationUrl = (id) => `/recipes/${id}/information`

const generateUrl = (url, params = []) => {
    const urlServerWithAuth = `${SERVER_URL}${url}?apiKey=${process.env.REACT_APP_APY_KEY}`;

    if(params && params.length > 0){
        let paramsUrl = new URLSearchParams();
        params.forEach(p => {
            paramsUrl.append(p.key,p.value)
        })

        return urlServerWithAuth + `&${paramsUrl.toString()}`
    }

    return urlServerWithAuth;
}

export {
    SERVER_URL, 
    recipesUrl, 
    generateUrl, 
    recipesComplexSearchUrl, 
    recipesInformationUrl
}