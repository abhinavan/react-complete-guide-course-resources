const Tabs = ({ children, buttons, ButtonComponents }) => {
  return (
    <>
      <ButtonComponents>{buttons}</ButtonComponents>
      {children}
    </>
  );
};
export default Tabs;
