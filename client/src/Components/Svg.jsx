import React from 'react';

class Svg extends React.Component {
  state = {
    svg: null,
    loading: true,
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.text())
      .then(text => this.setState({ svg: text,  loading: false }));
  }

  render() {
    const { loading, svg } = this.state;
    if (loading) {
      return <h1></h1>;
    }

    return <div className="qrcode" dangerouslySetInnerHTML={{ __html: this.state.svg}}/>;
  }
}

export default Svg;