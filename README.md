# ReactJs-Projects
# Reactjs Portals : React portals come up with a way to render children into a DOM node that occurs outside the DOM hierarchy of the parent component.
# Reactjs Refs : Refs are a function provided by React to access the DOM element and the React element that you might have created on your own. They are used in cases where we want to change the value of a child component, without making use of props and all.
# Controlled Components :  is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
# UnControlled Components : is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML
# useEffect Hook : When we want to perform something after each render of component then we can use the useEffect() hook.By default, the useEffect hook runs after the first render and after every update. React updates the DOM by the time it runs the effects.
Don't use in Dependency(useEffect): DON'T need to add state updating functions,DON'T need to add "built-in" APIs or functions,DON'T need to add variables or functions you might've defined OUTSIDE of your components
Structure:
useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });