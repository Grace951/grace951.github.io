if (process.env.BROWSER) {
	require ('./edit.sass');
}
import React from 'react';

const EditoralPage = (props) => (
	<section id="editorial">
       <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-lg-2">
                    
                </div>
                <div id="bookshelf" className=" col-lg-10 col-md-10 col-sm-10 bookshelf">
                    <div className="row" >
                         <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
                            <div className="row">
                                <div className=" col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                                     <h3 className="book-title">作品集</h3>
                                     <p>這是我的書面作品集，簡單的自我介紹加上單純大方的作品編排。
                                     </p>
                                </div>
                                 <div className="right col-xs-12 col-sm-12 col-md-8 col-lg-8 ">
                                    <a href="https://issuu.com/grace_yeh/docs/portfilio_issuu" target="_blank">
                                        <img className="book img-responsive" src="/images/portfolio/full/portfolio01.jpg" 
												alt="作品集 - 這是我的書面作品集，簡單的自我介紹加上單純大方的作品編排。"
												title="作品集 - 這是我的書面作品集，簡單的自我介紹加上單純大方的作品編排。"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="row">
                                <div className=" col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                                     <h3 className="book-title">公司產品型錄</h3>
                                     <p>這是一本產品型錄的排版練習，以高對比大標題吸引讀者的目光，並以留白使版面舒適大方。
                                     </p>
                                </div>
                                 <div className="right col-xs-12 col-sm-12 col-md-8 col-lg-8 ">
                                    <a href="https://issuu.com/grace_yeh/docs/______?e=11793034/12474947" target="_blank">
                                        <img className="book img-responsive" src="/images/book1/front.jpg"
												 alt="公司產品型錄 - 這是一本產品型錄的排版練習，以高對比大標題吸引讀者的目光，並以留白使版面舒適大方。"
												 title="公司產品型錄 - 這是一本產品型錄的排版練習，以高對比大標題吸引讀者的目光，並以留白使版面舒適大方。"/>
                                    </a>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

EditoralPage.propTypes = {
};

export default EditoralPage;
