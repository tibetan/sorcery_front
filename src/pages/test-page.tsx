import React from 'react';

const GetImg = ({src}: {src: string}) => {
  return (
    <img
      src={src}
      alt="Katherine Johnson"
    />
  );
}

const TestPage = () => {
  const src = 'https://i.imgur.com/MK3eW3As.jpg';
  return (
    <div>
      <GetImg src={src}/>
    </div>
  );
}

export default TestPage;
