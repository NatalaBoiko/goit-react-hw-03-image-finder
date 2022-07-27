import React, { Component } from 'react';
import axios from 'axios';
// import fetchImagesQuery from './services/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    per_page: 12,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.getImages(searchQuery, page);
    }
  }

  getImages = async query => {
    if (!query) {
      return;
    }

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=27697316-9cc45c303ea5cb91afbaa3e72&q=${query}&image_type=photo&per_page=12`
      );
      this.setState({ images: response.data.hits });

      console.log(response.data.hits);
      console.log(response.data.totalHits);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  formSubmit = searchQuery => {
    this.setState({ searchQuery });
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
