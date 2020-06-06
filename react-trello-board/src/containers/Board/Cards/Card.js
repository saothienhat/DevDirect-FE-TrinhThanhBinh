import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

const undoPng = require('../../../assets/images/undo-18.png');
const redoPng = require('../../../assets/images/redo-18.png');


const Card = (props) => {
  const { style, item } = props;

  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <div className="item-name">{item.title}</div>
      <div className="item-container">
        <div className="item-avatar-wrap">
          <img src={`https://randomuser.me/api/portraits/med/men/${item.id}.jpg`} alt="" />
        </div>
        <div className="item-content">
          <div className="item-author">{`${item.firstName} ${item.lastName}`}</div>
          <p>Description of peope</p>
          <input type="text" style={{marginTop: '6px'}} placeholder="Add something here" />
          <button style={{ height: '21px', width: 30 }}>Ok</button>
        </div>
      </div>
      <div className="item-perfomers">
        <div className="add-perfomers">
          <a href="#"><img src={undoPng} alt="Undo" /></a>
        </div>
        <div className="delete-perfomers">
          <a href="#"><img src={redoPng} alt="Redo" /></a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
