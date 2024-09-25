import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Using react-icons for the search icon

type SearchBarProps = {
  placeholder: string;
  inputStyle?: React.CSSProperties; // Custom styles for the input box
  buttonStyle?: React.CSSProperties; // Custom styles for the button
  containerStyle?: React.CSSProperties; // Custom styles for positioning the entire search bar
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  inputStyle,
  buttonStyle,
  containerStyle,
}) => {
  return (
    <div
      className="flex items-center relative left-[67.5%] top-[1rem]"
      style={{
        width: '24rem', 
        ...containerStyle, // Apply custom container style here
      }}
    >
      {/* Input Box */}
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 flex-grow"
        style={{
          border: '1.5px solid',
          borderImageSource: 'linear-gradient(90deg, #E45D25 0%, #F58E1E 100%)',
          borderImageSlice: 1,
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
          width: '70%',
          outline: 'none',
          fontSize: '16px',
          color: '#000',
          backgroundColor: 'transparent', // Adjust to match the background of the input field
          ...inputStyle, // Spread the inputStyle prop here
        }}
      />
      {/* Search Button */}
      <button
        className="flex items-center justify-center px-4 py-2 text-white"
        style={{
          background: 'linear-gradient(90deg, #F58E1E 0%, #E45D25 100%)',
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '27.2px',
          textAlign: 'center',
          ...buttonStyle, // Spread the buttonStyle prop here
        }}
      >
        <FaSearch className="mr-2" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
