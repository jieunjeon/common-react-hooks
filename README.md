# common-react-hooks
This is the collection of common React Hooks ready to install with NPM, and Yarn.

- [x] useTitle
- [x] useTabs
- [x] useInput
- [x] useClick
- [x] useConfirm
- [x] usePreventLeave
- [x] useBeforeLeave
- [x] useFadeIn
- [x] useNetwork
- [x] useNotification
- [x] useScroll
- [x] useFullScreen
- [x] useAxios

## useTitle
useTitle is a React Hook to update the document's title after a few seconds after the document loads.

#### Usage
```js
function App() {
  useTitle("Welcome");
  return <h1>Welcome</h1>;
}
```

#### Arguments
| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| title    | string | The title to put on the document | yes      |

## useConfirm
useConfirm is a React Hook to ask the user for a confirmation before executing a function that the user specified.

#### Usage
```js
function App() {
  const deleteWorld = () => console.log("Leaving the page...");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld);
  return <button onClick={confirmDelete}>Leave pagae</button>;
}
```

#### Arguments
| Argument  | Type     | Description                                         | Required |
| --------- | -------- | --------------------------------------------------- | -------- |
| message   | string   | Message to show the user on the confirmation propmt | yes      |
| onConfirm | function | Function to be executed when the user confirms      | yes      |
| onCancel  | function | Function to be executed when the user cancels       | no       |

#### Return
| Return value | Type     | Description                                    | Default value |
| ------------ | -------- | ---------------------------------------------- | ------------- |
| function     | function | Function wrapped around the confirmation logic | null          |

## usePreventLeave
usePreventLeave is a React Hook to prompt the user for confirmation before leaving the page. Useful when changes haven't been saved.

#### Usage
```js
function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const saveChanges = async () => {
    enablePrevent();
    await sendToApi();
    disablePrevent();
  };
  return <button onClick={saveChanges}>Save changes</button>;
}
```

#### Return
| Return value | Type   | Description                                                                                                                     |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Functions    | Object | A object containing functions `enablePrevent` and `disablePrevent`, use this functions to enable/disable the leaving prevention |

## useBeforeLeave
useBeforeLeave is a React Hook to execute a function when the mouse leaves the page. Useful to show a popup or for analytics.

#### Usage

```js
function App() {
  const beforeLeave = () => console.log("User is leaving...");
  useBeforeLeave(beforeLeave);
  return <h1>Hello Nooks</h1>;
}
```

#### Arguments

| Argument      | Type     | Description                                              | Required |
| ------------- | -------- | -------------------------------------------------------- | -------- |
| onBeforeLeave | function | Function to be called when the mouse leaves the document | yes      |

## useFadeIn
useFadIn is a React Hook to fade in any element.

#### Usage

```js
function App() {
  const fadeIn = useFadeIn(5, 10);
  return <h1 {...fadeIn}>This will fade in.</h1>;
}
```

#### Arguments

| Argument | Type   | Description                                     | Required | Default value |
| -------- | ------ | ----------------------------------------------- | -------- | ------------- |
| duration | number | Sets the duration of the transition. In seconds | no       | 1             |
| delay    | number | Delays of transition's start. In seconds        | no       | 0             |

#### Return

`useScroll` returns an object containing the following:

| Name  | Type      | Description                                                               |
| ----- | --------- | ------------------------------------------------------------------------- |
| ref   | React Ref | A ref created to fadeIn the element                                       |
| style | Object    | Style object containing `{opacity:0}` to give to the element as a default |

It's recommended to just spread the returned object on the element as shown in the Usage section above.

## useNotification
useNotification is a React Hook to send a browser default notification.

#### Usage
```js
function App() {
  const onNetworkChange = isOnline =>
    console.log(isOnline ? "We are back online" : "We just got offline");
  const isOnline = useNetwork(onNetworkChange);
  return <h1>{isOnline ? "We are online" : "We are offline"}</h1>;
}
```

#### Arguments

| Argument        | Type     | Description                                           | Arguments          | Required |
| --------------- | -------- | ----------------------------------------------------- | ------------------ | -------- |
| onNetworkChange | function | Function to be called when the network status changes | isOnline : Boolean | no       |

#### Return

| Return value | Type    | Description                                         | Default value |
| ------------ | ------- | --------------------------------------------------- | ------------- |
| isOnline     | Boolean | A boolean representing if the user is online or not | true          |

## useScroll
useScroll is a React Hook to get X/Y coordinates of current position of the scroll.

#### Usage

```js
function App() {
  const { x, y } = useScroll();
  return (
    <h1>
      We are in: {x} / {y}
    </h1>
  );
}
```

#### Return

| Return value | Type   | Description                                                             | Default value |
| ------------ | ------ | ----------------------------------------------------------------------- | ------------- |
| Coords       | Object | An object containing the x/y coordinates of the current scroll position | `{x:0, y:0}`  |

## useFullScreen
useFullScreen is a React Hook to make any element go Fullscreen

#### Usage

```js
function App() {
  const onChange = isFull =>
    console.log(isFull ? "We are in Fullscreen" : "We are not in Fullscreen");
  const { element, triggerFull, exitFull } = useFullscreen(onChange);
  return (
    <div ref={element}>
      <h1>Hello</h1>
      <button onClick={triggerFull}>Make this Fullscreen</button>
      <button onClick={exitFull}>Exit Fullscreen</button>
    </div>
  );
}
```

#### Arguments

| Argument | Type     | Description                                                       | Arguments        | Required |
| -------- | -------- | ----------------------------------------------------------------- | ---------------- | -------- |
| onChange | function | Function to be called when the screen goes Fullscreen or exits is | isFull : Boolean | no       |

#### Return

`useFullscreen` returns an object containing the following:

| Return value | Type      | Description                                                |
| ------------ | --------- | ---------------------------------------------------------- |
| element      | React Ref | Ref to add to the element that you want to make fullscreen |
| triggerFull  | Function  | Function to make the element enter fullscreen              |
| exitFull     | Function  | Function to make the document exit fullscreen              |



#
Followed Intro to React Hooks lecture by Nomadcoders.co

