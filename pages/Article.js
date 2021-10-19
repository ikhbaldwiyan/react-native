import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';

const Article = ({ navigation }) => {
  const [article, setArticle] = useState([]);
  const [featuredArticles, setFeaturedArticles] = useState([])

  useEffect(() => {
    async function featuredArticles() {
      try {
        const response = await axios.get('https://the-lazy-media-api.vercel.app/api/search?search=gam');
        const featured = response.data;
        setFeaturedArticles(featured);
      } catch (error) {
        console.log(error)
      }
    }
    featuredArticles();

    async function articles() {
      try {
        const response = await axios.get('https://the-lazy-media-api.vercel.app/api/search');
        const data = response.data;
        setArticle(data);
      } catch (error) {
        console.log(error)
      }
    }
    articles();
  }, [article, featuredArticles]);

  return (
    <ArticleList navigation={navigation} article={article} featuredArticles={featuredArticles} />
  );
};

export default Article;
