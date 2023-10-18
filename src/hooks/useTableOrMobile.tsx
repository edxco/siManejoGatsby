import { useMediaQuery } from 'react-responsive';

export default () => {
  return [
    useMediaQuery({ query: '(max-width: 510px)' }),
    useMediaQuery({ query: '(min-width: 511px) and (max-width: 1280px)' }),
  ];
};
