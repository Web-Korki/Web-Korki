const Theme = (theme) => {
  console.log(theme);
  return {
    ...theme,
    borderRadius: '1rem',
    colors: {
      ...theme.colors,
      color: 'pink',
      primary: '#427e90',
      primary25: '#dff2fb',
      primary50: '#a3dff1',
      neutral20: '#ebeff1',
      neutral30: '#376c7c',
      neutral50: '#a9a9a9',
      neutral80: '#195669',
    },
  };
};

export default Theme;
