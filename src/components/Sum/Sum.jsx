// export const Sum = () => ();
import React from 'react';

const Sum = ({ a = 0, b = 0 }) => {
  return (
    <div>
      <p>
        Sum of {a} and {b} is {a + b}
      </p>
    </div>
  );
};

export default Sum;
