const Tabs = ({ children, buttons, ButtonComponents = "menu" }) => {
  return (
    <>
      <ButtonComponents>{buttons}</ButtonComponents>
      {children}
    </>
  );
};
export default Tabs;
