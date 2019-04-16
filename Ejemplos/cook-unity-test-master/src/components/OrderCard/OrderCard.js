import React, { PureComponent } from "react";
import "./OrderCard.css";
import addIcon from "./../../images/icons/add.svg";
import removeIcon from "./../../images/icons/remove.svg";

class OrderCard extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      plan: 0
    };
  }

  addPlan() {
    this.setState({ plan: this.state.plan + 1 });
  }

  removePlan() {
    this.setState({ plan: this.state.plan - 1 });
  }

  render() {
    return (
      <div className="order__card-container">
        <div className="order__card-text-container">
          <p className="order__card-product-type">TYPE PRODUCT</p>
          <p className="order__card-product-name">
            Grilled Pork Chop Asian Style
          </p>
          <p className="order__card-product-description">
            with Sauteed Vegetals and Steamed Vegetable Rice
          </p>
        </div>
        <div className="order__card-image">
          <div className="order__card-food-container">
            <img
              src={require(`./../../images/order/Grilled-Pork-Chop-Asian.svg`)}
              alt="Plate of food"
            />
          </div>
          <div className="order__card-chef-container">
            <img
              src={require(`./../../images/order/Chris-Ratel-profile.png`)}
              alt="Chef profile"
            />
          </div>
        </div>
        <p className="order__card-chef-name">
          By Chef <b>Chris Ratel</b>
        </p>
        <div>
          <button className="order__card-filter">760 cal</button>
          <button className="order__card-filter">Glutten free</button>
          <button className="order__card-filter">American</button>
        </div>
        <div className="order__card-plan-container">
          <h4>Included In Your Plan</h4>
          <p className="order__card-plan-stock-text">Only 2 Left</p>
          <div className="order__card-button-container">
            <button
              className="order__card-plan-button"
              onClick={this.removePlan.bind(this)}
            >
              <img src={removeIcon} alt="Remove icon" />
            </button>
            <div className="order__card-plan-count">
              <span className="order__card-plan-count-text">
                {this.state.plan}
              </span>
            </div>
            <button
              className="order__card-plan-button"
              onClick={this.addPlan.bind(this)}
            >
              <img src={addIcon} alt="Add icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default OrderCard;
