import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import logo from "../../imgs/logo.png";
import { APPLY_TITLE_FILTER } from "../../constants/actionTypes";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onTitleChanged: (title, pager, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, title, pager, payload }),
});

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let title = event.target.value;
    this.setState({ title: title });

    if (this.state.title.length > 2) {
      this.props.onTitleChanged(
        this.state.title,
        (page) => agent.Items.byTitle(this.state.title, page),
        agent.Items.byTitle(this.state.title)
      );
    }
  }

  render() {
    return (
      <div className="banner text-white">
        <div className="container p-4 text-center">
          <img src={logo} alt="banner" />
          <div>
            <span id="get-part">A place to get</span>
            <input
              id="search-box"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <span> the cool stuff.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
