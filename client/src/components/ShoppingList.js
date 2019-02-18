import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Badge } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, selectItem } from '../actions/itemActions.js'
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
    this.setState({
      selected: this.props.selected
    })
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  onSelectClick = id => {
    this.props.selectItem(id);
  }

  render() {
    const { items } = this.props.item;
    const selected = this.state.selected;
    console.log(selected)
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name, price }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem 
                  color={selected.indexOf(_id) > -1 ? "success": "primery"}
                  onClick={this.onSelectClick.bind(this, _id)}
                  >
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  <h6 className="d-inline">
                    {name}
                    <Badge className="float-right" color="secondary">
                      Unit Price: {price}
                    </Badge>
                  </h6>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  selectItem: PropTypes.func,
  item: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired
};

ShoppingList.defaultProps = {
  selected: []
}

const mapStateToProps = state => ({
  item: state.item,
  selected: state.selected
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem, selectItem }
)(ShoppingList);
