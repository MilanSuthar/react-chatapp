const Grid = ({
  display,
  height,
  width,
  flexDirection,
  sx,
  padding,
  paddingX,
  paddingLeft,
  paddingRight,
  children,
}: {
  display: any;
  height: any;
  width: any;
  flexDirection: any;
  sx: any;
  padding: any;
  paddingX: any;
  paddingLeft: any;
  paddingRight: any;
  children: any;
}) => {
  return (
    <div
      style={{
        display: display,
        height: height,
        width: width,
        flexDirection: flexDirection,
        ...sx,
        padding: padding,
        paddingLeft: paddingX || paddingLeft,
        paddingRight: paddingX || paddingRight,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
