/* eslint import/no-unresolved: 0*/

export function fetchComponentsData({ dispatch, components, params, query, locale, route }) {
    const promises = components.map(current => {
        //console.log(current);
		if (!current)  return null;
        const component = current.WrappedComponent ? current.WrappedComponent : current;
        
        return component.fetchData
            ? component.fetchData({ dispatch, params, query, locale, route })
            : null;
    });

    return Promise.all(promises);
}

export function getMetaDataFromState({ route, state, params = {}, query = {}, lang, pathname }) {
    /* eslint more/no-duplicated-chains: 0 */
    if (route === 'aboutme' ) {
        return {
            type        : 'ABOUTME',
            title       : "About Me",
            siteName    : "Hope Shelter Design",
            image       : '/img/ASIALmemberjpeg_hires.jpg',
            description : `希望園地設計|Portfolio|作品集|平面設計|網頁設計|RWD|Responsive Web Design`,
			pathname: `https://hopeshelter.herokuapp.com${pathname}`
        };
    }
    return {
        type        : 'MAIN',
        title       : 'Home',
        siteName    : 'Hope Shelter Design',
        image       : '/img/banner1.png',
        description : `希望園地設計|Portfolio|作品集|平面設計|網頁設計|RWD|Responsive Web Design`,
		pathname: `https://hopeshelter.herokuapp.com${pathname}`
    };
}


