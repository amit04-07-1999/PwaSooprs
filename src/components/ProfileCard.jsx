import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = ({ id, name, des, img, isSelected, onRadioChange }) => {
  return (
    <div
      className="card"
      style={{
        width: '390px',
        height: '72px',
        borderRadius: '5px',
        border: '1px solid #6B6B6B',
        borderColor: '#6B6B6B',
        color: 'white',
        position: 'relative',
        marginBottom: '1rem',
        boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.2)',
      }}
    >
      <img src={img} style={{ width: '69px', height: '64px' }} alt="Profile" />
      <div
        style={{
          position: 'absolute',
          top: '17px',
          left: '89px',
        }}
      >
        <h5
          style={{
            width: '190px',
            height: '19px',
            fontSize: '16px',
            lineHeight: '19.2px',
            color: '#000000',
            fontWeight: '700',
          }}
        >
          {name}
        </h5>
        <p
          style={{
            width: '132px',
            height: '14px',
            fontSize: '12px',
            lineHeight: '14.2px',
            color: '#6B6B6B',
          }}
        >
          {des}
        </p>
      </div>
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <input
          type="radio"
          checked={isSelected}
          onChange={onRadioChange}
          style={{ display: 'none' }}
          id={`radio-${id}`}
        />
        <label
          htmlFor={`radio-${id}`}
          style={{
            display: 'inline-block',
            width: '33px',
            height: '33px',
            borderRadius: '50%',
            border: '2px solid #6B6B6B',
            position: 'relative',
            cursor: 'pointer',
            backgroundColor: isSelected ? '#0077FF' : 'transparent',
          }}
        >
          {isSelected && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                color: 'white',
                fontSize: '20px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          )}
        </label>
      </div>
    </div>
  );
};

export default ProfileCard;
