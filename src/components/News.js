import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {
  const { country, category, pageSize, setProgress } = props;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title = `SmartNews - ${capitalizeFirstLetter(category)}`;
    fetchNews();
  },// eslint-disable-next-line
   [country, category, pageSize]);

  const fetchNews = async () => {
    try {
      setProgress(10);
      const apiKey = '91aac70044dd48c3a648d0f8bd45106a'; // Replace with your News API key
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

      const response = await fetch(url);
      setProgress(30);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setProgress(70);
      setArticles((prevArticles) => [...prevArticles, ...data.articles]);
      setTotalResults(data.totalResults);
      setLoading(false);
      setPage((prevPage) => prevPage + 1);
      setProgress(100);
    } catch (error) {
      console.error('Error fetching news data:', error);
      setLoading(false);
    }
  };

  // Function to load more data when the user scrolls to the bottom
  const fetchMoreData = () => {
    fetchNews();
  };

  return (
    <div>
      <h2 className="text-center" style={{ margin: '37px 0px', marginTop: '90px' }}>
      SmartNews - Top {capitalizeFirstLetter(category)} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={element.title || ''}
                  description={element.description || ''}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author || 'Unknown'}
                  date={element.publishedAt || ''}
                  source={element.source.name || 'Unknown'}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
};

export default News;







 // Code classbased component
// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component {
//   static defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//     setProgress: PropTypes.func, // Ensure that this prop is passed correctly
//   };

//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`;
//   }

//   componentDidMount() {
//     this.fetchNews();
//   }

//   async fetchNews() {
//     const { country, category, pageSize } = this.props;
//     const { page } = this.state;

//     try {
//       this.props.setProgress(10);
//       const apiKey = '91aac70044dd48c3a648d0f8bd45106a'; // Replace with your News API key
//       const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

//       const response = await fetch(url);
//       this.props.setProgress(30);
//       if (!response.ok) {
//         throw new Error(`API request failed with status ${response.status}`);
//       }
//       const data = await response.json();
//       this.props.setProgress(70);
//       this.setState((prevState) => ({
//         articles: [...prevState.articles, ...data.articles],
//         totalResults: data.totalResults,
//         loading: false,
//         page: prevState.page + 1, // Increment page number
//       }));
//       this.props.setProgress(100);
//     } catch (error) {
//       console.error('Error fetching news data:', error);
//       this.setState({ loading: false });
//     }
//   }

//   // Function to load more data when the user scrolls to the bottom
//   fetchMoreData = () => {
//     this.fetchNews();
//   };

//   render() {
//     const { articles, loading, totalResults } = this.state;

//     return (
//       <div>
//         <h2 className="text-center" style={{ margin: '40px 0px' }}>
//           NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
//         </h2>
//         {loading && <Spinner />}
//         <InfiniteScroll
//           dataLength={articles.length}
//           next={this.fetchMoreData}
//           hasMore={articles.length < totalResults} // Check if there are more articles to load
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {articles.map((element, index) => {
//                 return (
//                   <div className="col-md-4" key={index}>
//                     <NewsItem
//                       title={element.title || ''}
//                       description={element.description || ''}
//                       imageUrl={element.urlToImage}
//                       newsUrl={element.url}
//                       author={element.author || 'Unknown'}
//                       date={element.publishedAt || ''}
//                       source={element.source.name || 'Unknown'}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>
//       </div>
//     );
//   }
// }

// export default News;





 