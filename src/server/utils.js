/* eslint import/no-unresolved: 0*/
let worksDetailsAll = require('../shared/data/works.json').mywork.works;

export function fetchComponentsData({ dispatch, components, params, query, locale, route, device }) {
    const promises = components.map(current => {
        //console.log(current);
		if (!current)  return null;
        const component = current.WrappedComponent ? current.WrappedComponent : current;
        
        return component.fetchData
            ? component.fetchData({ dispatch, params, query, locale, route, device })
            : null;
    });

    return Promise.all(promises);
}

export function getMetaDataFromState({ route, state, params = {}, query = {}, lang, pathname }) {
    /* eslint more/no-duplicated-chains: 0 */
    if (route === 'home' ) {
        return {
            type        : 'HOME',
            title       : "Home",
            siteName    : "Hope Shelter Design - 希望園地設計",
            image       : '/images/logo.png',
            description : `[My Experience]
								(2006 - 2010) Software Engineer / 3.5 years
								(2010 - 2011) Take Care of My Father / 1.5 year
								(2012 - 2014) Software Engineer / 2 years
								(2014 - 2016) Learn Graphic Design and Web Design / 1.5 years
								(2016 - 2017) Front-end Developer / 1 years
							[My Favorite Skills]
							 	Modern Javascript:	React /	Redux /	Angular2 / NodeJs /	ES6
								Front-end Development: 	HTML5 / CSS3 / SASS / Compass / BootStrap / Webpack / NPM / RWD / jQuery
								Back-end Development: 	NodeJs / MongoDB
								General Skill: Git / Github / PhotoShop / Illustrator
							[My Creations]
								-  Home Site    
										*link  :  https://hopeshelter.herokuapp.com/  
										*source:  https://github.com/Grace951/grace951.github.io/
								-  Github page      
										*https://github.com/Grace951    
								-  React App  -  Hi-Tech  Digital  CCTV    
										*link  :  https://react-redux-demo-chingching.herokuapp.com/    
										*source:  https://github.com/Grace951/ReactAU
								-  Angular App  -  Hi-Tech  Digital  CCTV    
										*link  :  http://www.hitechdigitalcctv.com.au/#/home
										*source:  https://github.com/Grace951/angular1-demo
								-  jQuery App  -  經典名畫    
										*http://paints.byethost4.com/    
							希望園地設計|Portfolio|作品集|平面設計|網頁設計|RWD|F2E|Frontend Development|Github|Open Source MIT|Responsive Web Design|RWD|React|Redux|NodeJs`,
			pathname: `https://hopeshelter.herokuapp.com${pathname}`
        };
    }
    if (route === 'f2e' ) {
        return {
            type        : 'F2E',
            title       : "Frontend Development",
            siteName    : "Hope Shelter Design - 希望園地設計",
            image       : '/images/web/au/au_list.png',
            description : `[My Experience]
								(2006 - 2010) Software Engineer / 3.5 years
								(2010 - 2011) Take Care of My Father / 1.5 year
								(2012 - 2014) Software Engineer / 2 years
								(2014 - 2016) Learn Graphic Design and Web Design / 1.5 years
								(2016 - 2017) Front-end Developer / 1 years
							[My Favorite Skills]
							 	Modern Javascript:	React /	Redux /	Angular2 / NodeJs /	ES6
								Front-end Development: 	HTML5 / CSS3 / SASS / Compass / BootStrap / Webpack / NPM / RWD / jQuery
								Back-end Development: 	NodeJs / MongoDB
								General Skill: Git / Github / PhotoShop / Illustrator
							[My Creations]
								-  Home Site    
										*link  :  https://hopeshelter.herokuapp.com/  
										*source:  https://github.com/Grace951/grace951.github.io/
								-  Github page      
										*https://github.com/Grace951    
								-  React App  -  Hi-Tech  Digital  CCTV    
										*link  :  https://react-redux-demo-chingching.herokuapp.com/    
										*source:  https://github.com/Grace951/ReactAU
								-  Angular App  -  Hi-Tech  Digital  CCTV    
										*link  :  http://www.hitechdigitalcctv.com.au/#/home
										*source:  https://github.com/Grace951/angular1-demo
								-  jQuery App  -  經典名畫    
										*http://paints.byethost4.com/    
							希望園地設計|Portfolio|作品集|平面設計|網頁設計|RWD|F2E|Frontend Development|Github|Open Source MIT|Responsive Web Design|RWD|React|Redux|NodeJs`,
			pathname: `https://hopeshelter.herokuapp.com${pathname}`
        };
    }
    if (route === 'graphic' ) {
        return {
            type        : 'GRAPHICDESIGN',
            title       : "Graphic Design",
            siteName    : "Hope Shelter Design - 希望園地設計",
            image       : '/images/portfolio/small/portfolio01.jpg',
            description : `[My Experience]
								(2006 - 2010) Software Engineer / 3.5 years
								(2010 - 2011) Take Care of My Father / 1.5 year
								(2012 - 2014) Software Engineer / 2 years
								(2014 - 2016) Learn Graphic Design and Web Design / 1.5 years
								(2016 - 2017) Front-end Developer / 1 years
							[My Favorite Skills]
							 	Modern Javascript:	React /	Redux /	Angular2 / NodeJs /	ES6
								Front-end Development: 	HTML5 / CSS3 / SASS / Compass / BootStrap / Webpack / NPM / RWD / jQuery
								Back-end Development: 	NodeJs / MongoDB
								General Skill: Git / Github / PhotoShop / Illustrator
							[My Creations]
								-  Home Site    
										*link  :  https://hopeshelter.herokuapp.com/  
										*source:  https://github.com/Grace951/grace951.github.io/
								-  Github page      
										*https://github.com/Grace951    
								-  React App  -  Hi-Tech  Digital  CCTV    
										*link  :  https://react-redux-demo-chingching.herokuapp.com/    
										*source:  https://github.com/Grace951/ReactAU
								-  Angular App  -  Hi-Tech  Digital  CCTV    
										*link  :  http://www.hitechdigitalcctv.com.au/#/home
										*source:  https://github.com/Grace951/angular1-demo
								-  jQuery App  -  經典名畫    
										*http://paints.byethost4.com/    
							希望園地設計|Portfolio|作品集|平面設計|網頁設計|RWD|F2E|Frontend Development|Github|Open Source MIT|Responsive Web Design|RWD|React|Redux|NodeJs`,
			pathname: `https://hopeshelter.herokuapp.com${pathname}`
        };
    }
    if (route === 'editoral' ) {		
        return {
            type        : 'EDITORAL',
            title       : "Editoral Design",
            siteName    : "Hope Shelter Design - 希望園地設計",
            image       : '/images/portfolio/small/portfolio01.jpg',
            description : ` 作品集: 這是我的書面作品集，簡單的自我介紹加上單純大方的作品編排。
									link: https://issuu.com/grace_yeh/docs/portfilio_issuu
							公司產品型錄: 這是一本產品型錄的排版練習，以高對比大標題吸引讀者的目光，並以留白使版面舒適大方。
										link: https://issuu.com/grace_yeh/docs/______
							[My Experience]
								(2006 - 2010) Software Engineer / 3.5 years
								(2010 - 2011) Take Care of My Father / 1.5 year
								(2012 - 2014) Software Engineer / 2 years
								(2014 - 2016) Learn Graphic Design and Web Design / 1.5 years
								(2016 - 2017) Front-end Developer / 1 years
							[My Favorite Skills]
							 	Modern Javascript:	React /	Redux /	Angular2 / NodeJs /	ES6
								Front-end Development: 	HTML5 / CSS3 / SASS / Compass / BootStrap / Webpack / NPM / RWD / jQuery
								Back-end Development: 	NodeJs / MongoDB
								General Skill: Git / Github / PhotoShop / Illustrator
							[My Creations]
								-  Home Site    
										*link  :  https://hopeshelter.herokuapp.com/  
										*source:  https://github.com/Grace951/grace951.github.io/
								-  Github page      
										*https://github.com/Grace951    
								-  React App  -  Hi-Tech  Digital  CCTV    
										*link  :  https://react-redux-demo-chingching.herokuapp.com/    
										*source:  https://github.com/Grace951/ReactAU
								-  Angular App  -  Hi-Tech  Digital  CCTV    
										*link  :  http://www.hitechdigitalcctv.com.au/#/home
										*source:  https://github.com/Grace951/angular1-demo
								-  jQuery App  -  經典名畫    
										*http://paints.byethost4.com/    
							希望園地設計|Portfolio|作品集|平面設計|網頁設計|RWD|F2E|Frontend Development|Github|Open Source MIT|Responsive Web Design|RWD|React|Redux|NodeJs`,
			pathname: `https://hopeshelter.herokuapp.com${pathname}`
        };
    }
    if (route === ':id' ) {
		let item = worksDetailsAll[params.id];
        return {
            type        : 'DETAILS',
            title       : item.title,
            siteName    : "Hope Shelter Design - 希望園地設計",
            image       : item.img,
            description : `${item.desc},
							[My Experience]
								(2006 - 2010) Software Engineer / 3.5 years
								(2010 - 2011) Take Care of My Father / 1.5 year
								(2012 - 2014) Software Engineer / 2 years
								(2014 - 2016) Learn Graphic Design and Web Design / 1.5 years
								(2016 - 2017) Front-end Developer / 1 years
							[My Favorite Skills]
							 	Modern Javascript:	React /	Redux /	Angular2 / NodeJs /	ES6
								Front-end Development: 	HTML5 / CSS3 / SASS / Compass / BootStrap / Webpack / NPM / RWD / jQuery
								Back-end Development: 	NodeJs / MongoDB
								General Skill: Git / Github / PhotoShop / Illustrator
							[My Creations]
								-  Home Site    
										*link  :  https://hopeshelter.herokuapp.com/  
										*source:  https://github.com/Grace951/grace951.github.io/
								-  Github page      
										*https://github.com/Grace951    
								-  React App  -  Hi-Tech  Digital  CCTV    
										*link  :  https://react-redux-demo-chingching.herokuapp.com/    
										*source:  https://github.com/Grace951/ReactAU
								-  Angular App  -  Hi-Tech  Digital  CCTV    
										*link  :  http://www.hitechdigitalcctv.com.au/#/home
										*source:  https://github.com/Grace951/angular1-demo
								-  jQuery App  -  經典名畫    
										*http://paints.byethost4.com/    
							希望園地設計|Portfolio|作品集|平面設計|網頁設計|RWD|F2E|Frontend Development|Github|Open Source MIT|Responsive Web Design|RWD|React|Redux|NodeJs`,
			pathname: `https://hopeshelter.herokuapp.com${pathname}`
        };
    }
    if (route === 'aboutme' ) {
        return {
            type        : 'ABOUTME',
            title       : "About Me",
            siteName    : "Hope Shelter Design - 希望園地設計",
            image       : '/images/logo.png.png',
            description : `[My Experience]
								(2006 - 2010) Software Engineer / 3.5 years
								(2010 - 2011) Take Care of My Father / 1.5 year
								(2012 - 2014) Software Engineer / 2 years
								(2014 - 2016) Learn Graphic Design and Web Design / 1.5 years
								(2016 - 2017) Front-end Developer / 1 years
							[My Favorite Skills]
							 	Modern Javascript:	React /	Redux /	Angular2 / NodeJs /	ES6
								Front-end Development: 	HTML5 / CSS3 / SASS / Compass / BootStrap / Webpack / NPM / RWD / jQuery
								Back-end Development: 	NodeJs / MongoDB
								General Skill: Git / Github / PhotoShop / Illustrator
							[My Creations]
								-  Home Site    
										*link  :  https://hopeshelter.herokuapp.com/  
										*source:  https://github.com/Grace951/grace951.github.io/
								-  Github page      
										*https://github.com/Grace951    
								-  React App  -  Hi-Tech  Digital  CCTV    
										*link  :  https://react-redux-demo-chingching.herokuapp.com/    
										*source:  https://github.com/Grace951/ReactAU
								-  Angular App  -  Hi-Tech  Digital  CCTV    
										*link  :  http://www.hitechdigitalcctv.com.au/#/home
										*source:  https://github.com/Grace951/angular1-demo
								-  jQuery App  -  經典名畫    
										*http://paints.byethost4.com/    
							希望園地設計|Portfolio|作品集|平面設計|網頁設計|RWD|F2E|Frontend Development|Github|Open Source MIT|Responsive Web Design|RWD|React|Redux|NodeJs`,
			pathname: `https://hopeshelter.herokuapp.com${pathname}`
        };
    }
    return {
        type        : 'MAIN',
        title       : 'Home',
        siteName    : 'Hope Shelter Design - 希望園地設計',
        image       : '/images/logo.png',
            description : `[My Experience]
								(2006 - 2010) Software Engineer / 3.5 years
								(2010 - 2011) Take Care of My Father / 1.5 year
								(2012 - 2014) Software Engineer / 2 years
								(2014 - 2016) Learn Graphic Design and Web Design / 1.5 years
								(2016 - 2017) Front-end Developer / 1 years
							[My Favorite Skills]
							 	Modern Javascript:	React /	Redux /	Angular2 / NodeJs /	ES6
								Front-end Development: 	HTML5 / CSS3 / SASS / Compass / BootStrap / Webpack / NPM / RWD / jQuery
								Back-end Development: 	NodeJs / MongoDB
								General Skill: Git / Github / PhotoShop / Illustrator
							[My Creations]
								-  Home Site    
										*link  :  https://hopeshelter.herokuapp.com/  
										*source:  https://github.com/Grace951/grace951.github.io/
								-  Github page      
										*https://github.com/Grace951    
								-  React App  -  Hi-Tech  Digital  CCTV    
										*link  :  https://react-redux-demo-chingching.herokuapp.com/    
										*source:  https://github.com/Grace951/ReactAU
								-  Angular App  -  Hi-Tech  Digital  CCTV    
										*link  :  http://www.hitechdigitalcctv.com.au/#/home
										*source:  https://github.com/Grace951/angular1-demo
								-  jQuery App  -  經典名畫    
										*http://paints.byethost4.com/    
							希望園地設計|Portfolio|作品集|平面設計|網頁設計|RWD|F2E|Frontend Development|Github|Open Source MIT|Responsive Web Design|RWD|React|Redux|NodeJs`,
		pathname: `https://hopeshelter.herokuapp.com${pathname}`
    };
}


