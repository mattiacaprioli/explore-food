import { getService } from "./http.service";
import { generateUrl, recipesUrl, recipesComplexSearchUrl, recipesInformationUrl } from "./url";

const getRecipesInformationService = async(id) => {
    const url = generateUrl(recipesInformationUrl(id))
    return await getService(url);
}

const getPopularService = async(n = 10, tags = 'vegetarian,dessert') => {
    const params = [
        {key : 'number', value : 10},
        {key : 'tags', value : tags},
    ];

    const url = generateUrl(recipesUrl,params)
    return await getService(url);
}

const getRecipiesComplexSearchService = async(n = 10, cuisine = "", query = "") => {
    const params = [
        {key : 'number' , value : n},
        {key : 'cuisine' , value : cuisine},
        {key : 'query' , value : query},
    ]

    const url = generateUrl(recipesComplexSearchUrl,params);
    return await getService(url);
}

export { 
    getPopularService, 
    getRecipiesComplexSearchService,
    getRecipesInformationService
}