import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class NewListButton extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="Button">
				<span className="Button-placeholder">
					<FontAwesomeIcon className="Button-icon-add" icon={faPlus} />
					Adicionar outra lista
				</span>
      </div>
    )
  }
}

export default NewListButton;