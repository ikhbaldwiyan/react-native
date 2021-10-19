import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';

const Tech = ({ navigation }) => {
  const [article, setArticle] = useState([]);
  const [featuredArticles, setFeaturedArticles] = useState([])

  useEffect(() => {
    async function featuredArticles() {
      try {
        const response = await axios.get('https://the-lazy-media-api.vercel.app/api/tech/news')
        const featured = response.data;
        setFeaturedArticles(featured);
      } catch (error) {
        console.log(error)
      }
    }
    featuredArticles();

    async function articles() {
      try {
        const response = await axios.get('https://the-lazy-media-api.vercel.app/api/tech')
        const data = response.data;
        setArticle(data);
      } catch (error) {
        console.log(error)
      }
    }
    articles();
  }, [article, featuredArticles]);

  return (
    <ArticleList navigation={navigation} article={article} featuredArticles={featuredArticles} name="Tech" />
  );
};

export default Tech;