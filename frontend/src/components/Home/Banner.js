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
    this.state = { title: "", searchbar_visible: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let title = event.target.value;
    this.setState({ title: title });

    if (title.length > 2) {
      this.props.onTitleChanged(
        title,
        (page) => agent.Items.byTitle(title, page),
        agent.Items.byTitle(title)
      );
    }
  }

  handleOnClick(event) {
    event.preventDefault();
    this.setState({ searchbar_visible: "bla" });
  }

  render() {
    return (
      <div className="banner text-white">
        <div className="container p-4 text-center">
          <img src={logo} alt="banner" />
          <div>
            <span id="get-part" onClick={this.handleOnClick}>
              A place to get
            </span>
            {this.state.searchbar_visible ? (
              <input
                id="search-box"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
              />
            ) : null}
            <span> the cool stuff.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
