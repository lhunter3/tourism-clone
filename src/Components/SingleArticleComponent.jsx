import React, { useState, useEffect } from 'react';
import { BannerComponent } from './BannerComponent';

export function SingleArticleComponent({ id }) {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        // Fetch the JSON data and search for the article with the given id
        fetch('articles/articles.json')
            .then(response => response.json())
            .then(data => {
                // console.log(data); // Log the fetched data
                // console.log(id.articleId.substring(1))
                const foundArticle = data.find(article => article.id === id.articleId.substring(1));
                console.log(foundArticle); // Log the found article
                setArticle(foundArticle);
            })
            .catch(error => {
                console.error('Error fetching JSON data:', error);
            });
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }


    const btn = {
        title: 'Read more',
        href: '#/articles',
        display: false
    }
    const paragraphs = article.content.split('\n');

    return (
        <>
            <BannerComponent article={article} button={btn} />

            <div className='text-center pl-10' style={{ fontSize: '18px', marginTop: '10vh',marginBottom: '10vh' }}>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            

        </>
    );
}
