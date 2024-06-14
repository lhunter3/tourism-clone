import React, { useState, useEffect } from 'react';


export function fetchFeatured(setWellnessArticles, setCultureArticles, setNatureArticles) {
    useEffect(() => {
        fetch('articles/articles.json')
            .then(response => response.json())
            .then(data => {
                const wellnessArticles = data.filter(article => article.feature === 'wellness');
                const cultureArticles = data.filter(article => article.feature === 'culture');
                const natureArticles = data.filter(article => article.feature === 'nature');

                setWellnessArticles(wellnessArticles);
                setCultureArticles(cultureArticles);
                setNatureArticles(natureArticles);
            })
            .catch(error => console.error('Error:', error));
    }, []);
}