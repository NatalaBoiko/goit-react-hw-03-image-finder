import React, { Component } from 'react';
import { fetchImages } from './services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.getImages(searchQuery, page);
    }
  }

  getImages = async (query, page) => {
    this.setState({ isLoading: true });
    if (!query) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchImages(query, page);
      // console.log(hits, totalHits);
      this.setState(prevState => ({ images: [...prevState.images, ...hits] }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  formSubmit = searchQuery => {
    this.setState({
      searchQuery,
      images: [],
      page: 1,
    });
    console.log(searchQuery);
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
      </>
    );
  }
}
