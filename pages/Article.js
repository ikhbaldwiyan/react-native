import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import { baseUrl } from '../src/constant/baseUrl';

const Article = ({ navigation }) => {
  const [article, setArticle] = useState([]);
  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function featuredArticles() {
      try {
        const response = await axios.get(
          `${baseUrl}/search?search=gam`,
        );
        const featured = response.data;
        isMounted && setFeaturedArticles(featured);
      } catch (error) {
        console.log(error);
      }
    }
    featuredArticles();

    async function articles() {
      try {
        const response = await axios.get(
          'https://the-lazy-media-api.vercel.app/api/search',
        );
        const data = response.data;
        isMounted && setArticle(data);
      } catch (error) {
        console.log(error);
      }
    }
    articles();

    return () => {
      isMounted = false;
    };
  }, [article, featuredArticles]);

  return (
    <ArticleList
      navigation={navigation}
      article={article}
      featuredArticles={featuredArticles}
    />
  );
};

export default Article;
