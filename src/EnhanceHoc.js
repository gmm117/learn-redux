function withSomething(WrappedComponent) {
  //   return props => {
  //     return <WrappedComponent {...props} something="something" />;
  //   };

  //   return props => (
  //     <WrappedComponent {...props} something="something" />
  //   );

  return props => <WrappedComponent {...props} something="something" />;
}

const MyComponent = ({ something }) => <div>{something}</div>;

const EnhancedMyComponent = withSomething(MyComponent);

export default EnhancedMyComponent;
