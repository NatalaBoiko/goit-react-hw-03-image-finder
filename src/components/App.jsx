import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    // data: '',
    images: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://pixabay.com/api/?key=27697316-9cc45c303ea5cb91afbaa3e72&q=yellow+flowers&image_type=photo'
    );
    this.setState({ images: response.data.hits });
  }

  formSubmit = data => {
    // this.setState({ data });
    console.log(data);
  };

  render() {
    // const { searchQuery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}
